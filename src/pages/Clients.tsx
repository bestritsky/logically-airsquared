import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MoreVertical, Loader2, FileText, Target, Download, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useClients } from "@/hooks/useClients";
import { useOpportunities } from "@/hooks/useOpportunities";
import { useUsers } from "@/hooks/useUsers";
import { getClientIntelligence } from "@/data/clientIntelligenceLoader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import mecklenburgPdf from "@/assets/mecklenburg-county.pdf";
import gastonPdf from "@/assets/gaston-county-government.pdf";
import maplewoodPdf from "@/assets/maplewood-senior-living-inspir.pdf";

const Clients = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: clients, isLoading, error } = useClients();
  const { data: opportunities } = useOpportunities();
  const { data: users } = useUsers();

  const handleDownload = (clientId: number, clientName: string) => {
    const pdfMap: { [key: number]: string } = {
      1: mecklenburgPdf,
      4: gastonPdf,
      2: maplewoodPdf,
      11: "/abba-technologies-intelligence.pdf",
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

  const updateAssignedUser = useMutation({
    mutationFn: async ({ clientId, userId }: { clientId: number; userId: string | null }) => {
      const { error } = await supabase
        .from("clients")
        .update({ assigned_to: userId })
        .eq("id", clientId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast({
        title: "Assignment updated",
        description: "User has been assigned to the client.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to update assignment: ${error.message}`,
      });
    },
  });

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
    const headers = ["Client Name", "Tier", "Sector", "Deal Size", "Status", "Timeline", "Location", "Win Rate", "Assigned To"];
    
    // CSV rows
    const rows = filteredClients.map(client => {
      const assignedUser = users?.find(u => u.id === client.assigned_to);
      return [
        client.name,
        `Tier ${client.tier}`,
        client.sector,
        client.deal_size || "N/A",
        client.status,
        client.timeline,
        client.location,
        client.status === "Existing" ? "N/A" : `${client.win_rate || 0}%`,
        assignedUser?.email || "Unassigned"
      ];
    });

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

        {/* Client Table - Desktop View */}
        <div className="hidden md:block bg-card rounded-lg shadow-sm border border-border overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <Table>
              <TableHeader className="bg-muted/20">
        <TableRow>
          <TableHead className="w-12"></TableHead>
          <TableHead className="min-w-[180px]">Client Name</TableHead>
                  <TableHead className="w-20">Tier</TableHead>
                  <TableHead className="w-28">Sector</TableHead>
                  <TableHead className="w-24 hidden lg:table-cell">Deal Size</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead className="w-28 hidden lg:table-cell">Timeline</TableHead>
                  <TableHead className="w-28 hidden xl:table-cell">Assigned</TableHead>
                  <TableHead className="hidden xl:table-cell">Key Opportunities</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody>
              {filteredClients.map((client, index) => {
                const clientOpportunities = opportunities?.filter(opp => opp.client_id === client.id) || [];
                const hasDetailedData = getClientIntelligence(client.id) !== null;
                
                return (
                  <TableRow 
                    key={client.id}
                    onClick={() => navigate(`/clients/${client.id}`)}
                    className={cn(
                      "cursor-pointer",
                      hasDetailedData && "border-l-4 border-l-green-500"
                    )}
                  >
                    <TableCell className="w-12">
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
                    </TableCell>
                    <TableCell className="min-w-[180px]">
                      <div className="font-heading font-semibold text-foreground">{client.name}</div>
                      <div className="text-sm font-mono text-muted-foreground">📍 {client.location}</div>
                    </TableCell>
                    <TableCell className="w-20">
                      <Badge className={cn("font-mono text-xs", getTierBadgeClass(client.tier))}>
                        Tier {client.tier}
                      </Badge>
                    </TableCell>
                    <TableCell className="w-28">
                      <Badge variant="outline" className="font-mono text-xs bg-primary/10 text-primary border-primary/20">
                        {client.sector}
                      </Badge>
                    </TableCell>
                    <TableCell className="w-24 hidden lg:table-cell">
                      <div className="font-mono text-sm font-semibold text-foreground">{client.deal_size || "N/A"}</div>
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell className="w-28 hidden lg:table-cell">
                      <div className="font-mono text-sm text-foreground">{client.timeline}</div>
                    </TableCell>
                    <TableCell className="w-28 hidden xl:table-cell" onClick={(e) => e.stopPropagation()}>
                      <Select
                        value={client.assigned_to || "unassigned"}
                        onValueChange={(value) => {
                          const userId = value === "unassigned" ? null : value;
                          updateAssignedUser.mutate({ clientId: client.id, userId });
                        }}
                      >
                        <SelectTrigger className="w-28 bg-background">
                          <SelectValue placeholder="Unassigned" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          <SelectItem value="unassigned">Unassigned</SelectItem>
                          {users?.map((user) => (
                            <SelectItem key={user.id} value={user.id}>
                              {user.email}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <ul className="space-y-1">
                        {clientOpportunities.slice(0, 3).map((opp, idx) => (
                          <li key={idx} className="text-xs font-mono text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{opp.name}</span>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </div>
        </div>

        {/* Client Cards - Mobile View */}
        <div className="md:hidden space-y-4">
          {filteredClients.map((client, index) => {
            const clientOpportunities = opportunities?.filter(opp => opp.client_id === client.id) || [];
            const hasDetailedData = getClientIntelligence(client.id) !== null;
            const assignedUser = users?.find(u => u.id === client.assigned_to);
            
            return (
              <Card 
                key={client.id}
                onClick={() => navigate(`/clients/${client.id}`)}
                className={cn(
                  "cursor-pointer hover:shadow-md transition-shadow",
                  hasDetailedData && "border-l-4 border-l-green-500"
                )}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-heading font-bold text-primary text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-foreground">{client.name}</div>
                        <div className="text-sm font-mono text-muted-foreground">📍 {client.location}</div>
                      </div>
                    </div>
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
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className={cn("font-mono text-xs", getTierBadgeClass(client.tier))}>
                      Tier {client.tier}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-xs bg-primary/10 text-primary border-primary/20">
                      {client.sector}
                    </Badge>
                    {client.status === "Existing" ? (
                      <Badge className="bg-status-green/10 text-status-green border-0 font-mono text-xs">
                        ✓ EXISTING
                      </Badge>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">Deal Size</div>
                      <div className="font-mono font-semibold text-foreground">{client.deal_size || "N/A"}</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">Timeline</div>
                      <div className="font-mono text-foreground">{client.timeline}</div>
                    </div>
                  </div>

                  {client.status !== "Existing" && (
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">Win Rate</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${client.win_rate || 0}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono font-semibold text-primary">{client.win_rate || 0}%</span>
                      </div>
                    </div>
                  )}

                  <div onClick={(e) => e.stopPropagation()}>
                    <div className="text-xs font-mono text-muted-foreground mb-1">Assigned To</div>
                    <Select
                      value={client.assigned_to || "unassigned"}
                      onValueChange={(value) => {
                        const userId = value === "unassigned" ? null : value;
                        updateAssignedUser.mutate({ clientId: client.id, userId });
                      }}
                    >
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Unassigned" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="unassigned">Unassigned</SelectItem>
                        {users?.map((user) => (
                          <SelectItem key={user.id} value={user.id}>
                            {user.email}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {clientOpportunities.length > 0 && (
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">Key Opportunities</div>
                      <ul className="space-y-1">
                        {clientOpportunities.slice(0, 3).map((opp, idx) => (
                          <li key={idx} className="text-xs font-mono text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{opp.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
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
