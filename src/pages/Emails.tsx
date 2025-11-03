import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
import { cn } from "@/lib/utils";
import { EmailTemplateLibrary } from "@/components/EmailTemplateLibrary";
import { FileText, Plus, Copy, Trash2, Pencil, Mail } from "lucide-react";
import { GeneratedEmailViewer } from "@/components/GeneratedEmailViewer";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { format } from "date-fns";

// TypeScript Interfaces
type InfluencePrinciple = 
  | 'Reciprocation'
  | 'Liking'
  | 'Social Proof'
  | 'Authority'
  | 'Scarcity'
  | 'Commitment/Consistency'
  | 'Unity'
  | 'Instant Influence';

type EmailStatus = 'Draft' | 'Ready' | 'Exported' | 'Archived';

interface GeneratedEmail {
  id: string;
  client_id: number;
  opportunity_id: string | null;
  contact_name: string;
  contact_email: string;
  subject: string;
  body: string;
  influence_principle: InfluencePrinciple;
  template_variables: Record<string, string>;
  status: EmailStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
  exported_at: string | null;
  clients?: {
    id: number;
    name: string;
    sector: string;
  };
  opportunities?: {
    id: string;
    name: string;
  } | null;
}

const Emails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState<EmailStatus | "All">("All");
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>("all");
  const [templateLibraryOpen, setTemplateLibraryOpen] = useState(false);
  const [showTemplateLibrary, setShowTemplateLibrary] = useState(false);
  const [preSelectedClient, setPreSelectedClient] = useState<{ id: number; name: string } | undefined>();
  const [preSelectedOpportunity, setPreSelectedOpportunity] = useState<{ id: string; name: string } | undefined>();
  const [campaignData, setCampaignData] = useState<any>(null);
  const [selectedEmail, setSelectedEmail] = useState<GeneratedEmail | null>(null);
  const [viewerEmail, setViewerEmail] = useState<GeneratedEmail | null>(null);
  const [emailToDelete, setEmailToDelete] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const preSelectedClientId = searchParams.get("client");

  // Fetch generated emails
  const { data: generatedEmails = [], isLoading } = useQuery({
    queryKey: ["generated-emails"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("generated_emails")
        .select(`
          *,
          clients:client_id (
            id,
            name,
            sector
          ),
          opportunities:opportunity_id (
            id,
            name
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as GeneratedEmail[];
    },
  });

  // Delete email mutation
  const deleteMutation = useMutation({
    mutationFn: async (emailId: string) => {
      const { error } = await supabase
        .from("generated_emails")
        .delete()
        .eq("id", emailId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generated-emails"] });
      toast.success("Email deleted successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete email");
    },
  });

  // Update email status mutation
  const updateStatusMutation = useMutation({
    mutationFn: async ({ emailId, status }: { emailId: string; status: EmailStatus }) => {
      const { error } = await supabase
        .from("generated_emails")
        .update({ status })
        .eq("id", emailId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generated-emails"] });
      toast.success("Status updated");
    },
  });

  // Auto-open template library from URL params
  useEffect(() => {
    const generateFor = searchParams.get("generateFor");
    const clientId = searchParams.get("clientId");
    const clientName = searchParams.get("clientName");
    const opportunityId = searchParams.get("opportunityId");
    const opportunityName = searchParams.get("opportunityName");
    const contactName = searchParams.get("contactName");
    const contactEmail = searchParams.get("contactEmail");

    if (generateFor && clientId && clientName) {
      setPreSelectedClient({ id: parseInt(clientId), name: decodeURIComponent(clientName) });
      
      if (opportunityId && opportunityName) {
        setPreSelectedOpportunity({ id: opportunityId, name: decodeURIComponent(opportunityName) });
      }
      
      // Pass contact data to campaign data
      if (contactName && contactEmail) {
        setCampaignData({
          clientName: decodeURIComponent(clientName),
          opportunityName: opportunityName ? decodeURIComponent(opportunityName) : undefined,
          contactName: decodeURIComponent(contactName),
          contactEmail: decodeURIComponent(contactEmail)
        });
      }
      
      setShowTemplateLibrary(true);
      
      // Clear URL params after opening
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  // Legacy support for old URL format
  useEffect(() => {
    if (preSelectedClientId) {
      setSelectedClient(preSelectedClientId);
      setTemplateLibraryOpen(true);
    }
  }, [preSelectedClientId]);

  // Get unique clients for filter
  const clients = useMemo(() => {
    const clientMap = new Map<number, { id: number; name: string }>();
    generatedEmails.forEach(email => {
      if (email.clients && !clientMap.has(email.client_id)) {
        clientMap.set(email.client_id, {
          id: email.client_id,
          name: email.clients.name
        });
      }
    });
    return Array.from(clientMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [generatedEmails]);

  // Get unique opportunities for filter
  const opportunities = useMemo(() => {
    const oppMap = new Map<string, { id: string; name: string; clientName: string }>();
    generatedEmails.forEach(email => {
      if (email.opportunities && email.opportunity_id && !oppMap.has(email.opportunity_id)) {
        oppMap.set(email.opportunity_id, {
          id: email.opportunity_id,
          name: email.opportunities.name,
          clientName: email.clients?.name || 'Unknown Client'
        });
      }
    });
    return Array.from(oppMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [generatedEmails]);

  // Filter emails
  const filteredEmails = useMemo(() => {
    return generatedEmails.filter(email => {
      const matchesStatus = selectedFilter === "All" || email.status === selectedFilter;
      const matchesClient = selectedClient === "all" || email.client_id.toString() === selectedClient;
      const matchesOpportunity = selectedOpportunity === "all" || email.opportunity_id === selectedOpportunity;
      return matchesStatus && matchesClient && matchesOpportunity;
    });
  }, [generatedEmails, selectedFilter, selectedClient, selectedOpportunity]);

  // Calculate stats
  const stats = useMemo(() => {
    return {
      total: generatedEmails.length,
      ready: generatedEmails.filter(e => e.status === "Ready").length,
      draft: generatedEmails.filter(e => e.status === "Draft").length,
      exported: generatedEmails.filter(e => e.status === "Exported").length,
    };
  }, [generatedEmails]);

  const getPrincipleBadgeClass = (principle: InfluencePrinciple) => {
    const classes: Record<InfluencePrinciple, string> = {
      "Reciprocation": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
      "Liking": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      "Social Proof": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      "Authority": "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
      "Scarcity": "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
      "Commitment/Consistency": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
      "Unity": "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20",
      "Instant Influence": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    };
    return classes[principle];
  };

  const getStatusBadgeClass = (status: EmailStatus) => {
    const classes: Record<EmailStatus, string> = {
      "Draft": "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
      "Ready": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
      "Exported": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      "Archived": "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
    };
    return classes[status];
  };

  const handleCopyEmail = (email: GeneratedEmail) => {
    const fullEmail = `Subject: ${email.subject}\n\n${email.body}`;
    navigator.clipboard.writeText(fullEmail);
    toast.success("Email copied to clipboard!");
  };

  const handleDelete = (emailId: string) => {
    setEmailToDelete(emailId);
  };

  const confirmDelete = () => {
    if (emailToDelete) {
      deleteMutation.mutate(emailToDelete);
      setEmailToDelete(null);
    }
  };

  const handleMarkReady = (emailId: string) => {
    updateStatusMutation.mutate({ emailId, status: "Ready" });
  };

  const handleMarkExported = (emailId: string) => {
    updateStatusMutation.mutate({ emailId, status: "Exported" });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Loading emails...</p>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground">
                Generated Emails
              </h1>
              <p className="text-lg text-muted-foreground mt-1">
                Create persuasive emails using psychological principles
              </p>
            </div>
            <Button onClick={() => setShowTemplateLibrary(true)} size="lg">
              <Mail className="w-4 h-4 mr-2" />
              New Email
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Total Generated</div>
            <div className="text-3xl font-bold text-foreground">{stats.total}</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Ready to Export</div>
            <div className="text-3xl font-bold text-green-600">{stats.ready}</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Drafts</div>
            <div className="text-3xl font-bold text-gray-600">{stats.draft}</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Exported</div>
            <div className="text-3xl font-bold text-blue-600">{stats.exported}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <Select value={selectedClient} onValueChange={setSelectedClient}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Clients" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clients</SelectItem>
              {clients.map(client => (
                <SelectItem key={client.id} value={client.id.toString()}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedOpportunity} onValueChange={setSelectedOpportunity}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="All Opportunities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Opportunities</SelectItem>
              {opportunities.map(opp => (
                <SelectItem key={opp.id} value={opp.id}>
                  {opp.name} ({opp.clientName})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant={selectedFilter === "All" ? "default" : "outline"}
              onClick={() => setSelectedFilter("All")}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={selectedFilter === "Draft" ? "default" : "outline"}
              onClick={() => setSelectedFilter("Draft")}
              size="sm"
            >
              Drafts
            </Button>
            <Button
              variant={selectedFilter === "Ready" ? "default" : "outline"}
              onClick={() => setSelectedFilter("Ready")}
              size="sm"
            >
              Ready
            </Button>
            <Button
              variant={selectedFilter === "Exported" ? "default" : "outline"}
              onClick={() => setSelectedFilter("Exported")}
              size="sm"
            >
              Exported
            </Button>
            <Button
              variant={selectedFilter === "Archived" ? "default" : "outline"}
              onClick={() => setSelectedFilter("Archived")}
              size="sm"
            >
              Archived
            </Button>
          </div>
        </div>

        {/* Emails Table */}
        <div className="border rounded-lg overflow-hidden bg-card">
          <table className="w-full">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Subject</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Principle</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Created</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredEmails.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                    No generated emails yet. Click "Browse Templates" to create your first email.
                  </td>
                </tr>
              ) : (
                filteredEmails.map((email) => (
                  <tr key={email.id} className="hover:bg-muted/30 transition-colors">
                   <td className="px-4 py-4">
                     <div className="font-semibold text-foreground">{email.contact_name}</div>
                     <div className="text-sm text-muted-foreground">{email.contact_email}</div>
                     {email.clients && (
                       <div className="text-xs text-muted-foreground mt-0.5">
                         {email.clients.name}
                       </div>
                     )}
                     {email.opportunities && (
                       <div className="text-xs text-purple-600 dark:text-purple-400 mt-0.5 font-medium">
                         📋 {email.opportunities.name}
                       </div>
                     )}
                   </td>
                    <td className="px-4 py-4">
                      <div className="max-w-md truncate text-foreground">{email.subject}</div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className={getPrincipleBadgeClass(email.influence_principle)}>
                        {email.influence_principle}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <Select
                        value={email.status}
                        onValueChange={(value: EmailStatus) => updateStatusMutation.mutate({ emailId: email.id, status: value })}
                      >
                        <SelectTrigger className={`w-[130px] ${getStatusBadgeClass(email.status)}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Ready">Ready</SelectItem>
                          <SelectItem value="Exported">Exported</SelectItem>
                          <SelectItem value="Archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      {format(new Date(email.created_at), "MMM d, yyyy")}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-end gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setViewerEmail(email)}
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>View & Edit Email</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopyEmail(email)}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Copy Email</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>


                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(email.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Delete Email</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Summary Footer */}
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div>
            Showing {filteredEmails.length} of {generatedEmails.length} generated emails
          </div>
          <div>
            {stats.ready} ready to export
          </div>
        </div>
      </Layout>

      <EmailTemplateLibrary
        open={templateLibraryOpen}
        onOpenChange={setTemplateLibraryOpen}
      />

      <EmailTemplateLibrary
        open={showTemplateLibrary}
        onOpenChange={(open) => {
          setShowTemplateLibrary(open);
          if (!open) {
            setPreSelectedClient(undefined);
            setPreSelectedOpportunity(undefined);
            setCampaignData(null);
          }
        }}
        preSelectedClient={preSelectedClient}
        campaignData={campaignData}
        preSelectedOpportunity={preSelectedOpportunity}
      />

      <GeneratedEmailViewer
        email={viewerEmail}
        open={!!viewerEmail}
        onOpenChange={(open) => !open && setViewerEmail(null)}
      />

      <AlertDialog open={!!emailToDelete} onOpenChange={(open) => !open && setEmailToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-destructive" />
              Delete Email
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Are you sure you want to delete this email? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Email
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Emails;