import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MoreVertical, Loader2, Mail, FileText, Target, Download, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useClients } from "@/hooks/useClients";
import { useOpportunities } from "@/hooks/useOpportunities";
import mecklenburgPdf from "@/assets/mecklenburg-county.pdf";
import gastonPdf from "@/assets/gaston-county-government.pdf";
import maplewoodPdf from "@/assets/maplewood-senior-living-inspir.pdf";

const Clients = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [selectedClientForEmail, setSelectedClientForEmail] = useState<any>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<any>(null);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: clients, isLoading, error } = useClients();
  const { data: opportunities } = useOpportunities();

  const handleGenerateEmail = (client: any) => {
    setSelectedClientForEmail(client);
    setContactDialogOpen(true);
  };

  const handleConfirmContact = () => {
    if (!selectedClientForEmail) return;
    
    navigate(
      `/emails?generateFor=client&clientId=${selectedClientForEmail.id}&clientName=${encodeURIComponent(selectedClientForEmail.name)}&contactName=${encodeURIComponent(contactName)}&contactEmail=${encodeURIComponent(contactEmail)}`
    );
    
    setContactDialogOpen(false);
    setContactName("");
    setContactEmail("");
  };

  const handleDownload = (clientId: number, clientName: string) => {
    const pdfMap: { [key: number]: string } = {
      1: mecklenburgPdf,
      4: gastonPdf,
      2: maplewoodPdf,
    };

    const url = pdfMap[clientId];
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${clientName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast?.({
        variant: 'destructive',
        title: 'File not available',
        description: 'No PDF is configured for this client.',
      });
    }
  };

  const deleteMutation = useMutation({
    mutationFn: async (clientId: number) => {
      const { error } = await supabase
        .from("clients")
        .delete()
        .eq("id", clientId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast({
        title: "Client deleted",
        description: "The client has been successfully deleted.",
      });
      setDeleteDialogOpen(false);
      setClientToDelete(null);
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to delete client: ${error.message}`,
      });
    },
  });

  const handleDeleteClick = (client: any, e: any) => {
    e.stopPropagation();
    setClientToDelete(client);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (clientToDelete) {
      deleteMutation.mutate(clientToDelete.id);
    }
  };

  const handleExportCSV = () => {
    if (!clients || clients.length === 0) {
      toast({
        variant: "destructive",
        title: "No data to export",
        description: "There are no clients to export.",
      });
      return;
    }

    // CSV headers
    const headers = ["Client Name", "Tier", "Sector", "Deal Size", "Status", "Timeline", "Location", "Win Rate"];
    
    // CSV rows
    const rows = filteredClients.map(client => [
      client.name,
      `Tier ${client.tier}`,
      client.sector,
      client.deal_size || "N/A",
      client.status,
      client.timeline,
      client.location,
      client.status === "Existing" ? "N/A" : `${client.win_rate || 0}%`
    ]);

    // Create CSV content
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `clients_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export successful",
      description: `Exported ${filteredClients.length} clients to CSV.`,
    });
  };

  const sectors = ["all", "Government", "Healthcare", "Financial", "Other"];
  
  const filteredClients = selectedSector === "all" 
    ? (clients || [])
    : (clients || []).filter(client => client.sector === selectedSector);

  const getTierBadgeClass = (tier: 1 | 2 | 3) => {
    switch (tier) {
      case 1:
        return "bg-primary text-white";
      case 2:
        return "bg-coral-dark text-white";
      case 3:
        return "bg-muted text-white";
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-destructive">Error loading clients: {error.message}</p>
        </div>
      </Layout>
    );
  }

  const totalPipeline = "$4.2M";
  const existingClients = (clients || []).filter(c => c.status === "Existing").length;
  const avgDealSize = "$168K";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="bg-gradient-to-br from-primary to-coral-dark rounded-lg p-8 mb-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-heading font-bold text-white mb-2">
                CLIENTS
              </h1>
              <p className="text-white/90 text-lg font-mono">
                Strategic Account Management Dashboard
              </p>
            </div>
            <Button
              onClick={handleExportCSV}
              variant="secondary"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <Download className="w-4 h-4 mr-2" />
              Export to CSV
            </Button>
          </div>

          {/* Meta Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Total Clients</div>
              <div className="text-3xl font-heading font-bold text-white">{clients?.length || 0}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Pipeline Value</div>
              <div className="text-3xl font-heading font-bold text-white">{totalPipeline}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Existing Clients</div>
              <div className="text-3xl font-heading font-bold text-white">{existingClients}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Avg Deal Size</div>
              <div className="text-3xl font-heading font-bold text-white">{avgDealSize}</div>
            </div>
          </div>
        </header>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={cn(
                "px-4 py-2 rounded-lg font-heading font-medium transition-all",
                selectedSector === sector
                  ? "bg-primary text-white shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              )}
            >
              {sector === "all" ? `All (${clients?.length || 0})` : sector}
            </button>
          ))}
        </div>

        {/* Client Table */}
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">#</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Client Name</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Tier</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Sector</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Deal Size</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Status</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Timeline</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Key Opportunities</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground w-12"></th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, index) => {
                const clientOpportunities = opportunities?.filter(opp => opp.client_id === client.id) || [];
                
                return (
                  <tr 
                    key={client.id}
                    onClick={() => navigate(`/clients/${client.id}`)}
                    className="border-b border-border hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-heading font-bold text-primary text-sm">{index + 1}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-heading font-semibold text-foreground">{client.name}</div>
                      <div className="text-sm font-mono text-muted-foreground">📍 {client.location}</div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className={cn("font-mono text-xs", getTierBadgeClass(client.tier))}>
                        Tier {client.tier}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <Badge variant="outline" className="font-mono text-xs bg-primary/10 text-primary border-primary/20">
                        {client.sector}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-mono text-sm font-semibold text-foreground">{client.deal_size || "N/A"}</div>
                    </td>
                    <td className="px-4 py-4">
                      {client.status === "Existing" ? (
                        <Badge className="bg-status-green/10 text-status-green border-0 font-mono text-xs">
                          ✓ EXISTING
                        </Badge>
                      ) : (
                        <div className="space-y-1">
                          <div className="text-xs font-mono text-muted-foreground">Win Rate</div>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-muted/30 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full transition-all"
                                style={{ width: `${client.win_rate || 0}%` }}
                              />
                            </div>
                            <span className="text-xs font-mono font-semibold text-primary">{client.win_rate || 0}%</span>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-mono text-sm text-foreground">{client.timeline}</div>
                    </td>
                    <td className="px-4 py-4">
                      <ul className="space-y-1">
                        {clientOpportunities.slice(0, 3).map((opp, idx) => (
                          <li key={idx} className="text-xs font-mono text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{opp.name}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full border-2 border-black dark:border-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="h-6 w-6 font-bold" strokeWidth={3} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="font-bold" onClick={() => window.open(`/clients/${client.id}`, '_blank')}>
                            <FileText className="mr-2 h-4 w-4" />
                            Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-bold" onClick={() => window.open(`/opportunities?client=${client.id}`, '_blank')}>
                            <Target className="mr-2 h-4 w-4" />
                            Opportunities
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-bold" onClick={(e) => {
                            e.stopPropagation();
                            handleGenerateEmail(client);
                          }}>
                            <Mail className="mr-2 h-4 w-4" />
                            Generate Email
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-bold" onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(client.id, client.name);
                          }}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="font-bold text-destructive focus:text-destructive" 
                            onClick={(e) => handleDeleteClick(client, e)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Summary Footer */}
        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="font-mono text-sm text-muted-foreground">
              Showing {filteredClients.length} of {clients?.length || 0} clients
            </div>
            <div className="font-mono text-sm text-foreground">
              Total Pipeline: <span className="font-semibold text-primary">{totalPipeline}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Who are you emailing?</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Contact Name</Label>
              <Input 
                value={contactName} 
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g., John Smith"
              />
            </div>
            <div>
              <Label>Contact Email</Label>
              <Input 
                value={contactEmail} 
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="e.g., john.smith@company.com"
                type="email"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setContactDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleConfirmContact}
              disabled={!contactName || !contactEmail}
            >
              Continue to Templates
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete <strong>{clientToDelete?.name}</strong> and cannot be undone. 
              This action will remove all client data from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Client
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default Clients;
