import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { EmailTemplateLibrary } from "@/components/EmailTemplateLibrary";
import { FileText, Plus } from "lucide-react";

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

type CampaignStatus = 
  | 'Draft'
  | 'Scheduled'
  | 'Active'
  | 'Paused'
  | 'Completed'
  | 'Responded'
  | 'Converted';

interface EmailCampaign {
  id: string;
  name: string;
  clientId: number;
  clientName: string;
  opportunityName?: string;
  contactName: string;
  contactEmail: string;
  primaryPrinciple: InfluencePrinciple;
  status: CampaignStatus;
  createdDate: string;
  totalEmails: number;
  emailsSent: number;
  openRate: number;
  responseRate: number;
  lastSentDate?: string;
}

// Sample Campaign Data
const campaignData: EmailCampaign[] = [
  {
    id: "camp-001",
    name: "Gaston County - AI Strategy Outreach",
    clientId: 4,
    clientName: "Gaston County Government",
    opportunityName: "AI Strategy Workshop Series",
    contactName: "John Davidson",
    contactEmail: "jdavidson@gastongov.com",
    primaryPrinciple: "Reciprocation",
    status: "Active",
    createdDate: "2024-10-15",
    totalEmails: 5,
    emailsSent: 3,
    openRate: 66,
    responseRate: 0,
    lastSentDate: "2024-11-01"
  },
  {
    id: "camp-002",
    name: "Maplewood - HIPAA Upsell",
    clientId: 2,
    clientName: "Maplewood Senior Living",
    opportunityName: "HIPAA Compliance Program",
    contactName: "Sarah Mitchell",
    contactEmail: "smitchell@maplewoodsenior.com",
    primaryPrinciple: "Social Proof",
    status: "Responded",
    createdDate: "2024-10-20",
    totalEmails: 4,
    emailsSent: 2,
    openRate: 100,
    responseRate: 100,
    lastSentDate: "2024-10-27"
  },
  {
    id: "camp-003",
    name: "Mecklenburg County - Enterprise SOC",
    clientId: 1,
    clientName: "Mecklenburg County",
    opportunityName: "County-wide SOC",
    contactName: "Robert Chen",
    contactEmail: "rchen@mecklenburgcounty.gov",
    primaryPrinciple: "Authority",
    status: "Active",
    createdDate: "2024-10-28",
    totalEmails: 6,
    emailsSent: 1,
    openRate: 100,
    responseRate: 0,
    lastSentDate: "2024-10-28"
  },
  {
    id: "camp-004",
    name: "Morgan Creek - Multi-touch Sequence",
    clientId: 6,
    clientName: "Morgan Creek Capital Management",
    opportunityName: "Financial Services SOC",
    contactName: "David Thompson",
    contactEmail: "dthompson@morgancreek.com",
    primaryPrinciple: "Instant Influence",
    status: "Paused",
    createdDate: "2024-10-10",
    totalEmails: 8,
    emailsSent: 4,
    openRate: 75,
    responseRate: 0,
    lastSentDate: "2024-10-25"
  },
  {
    id: "camp-005",
    name: "Churchill County - Reactivation",
    clientId: 7,
    clientName: "Churchill County Government",
    opportunityName: "vCISO Services",
    contactName: "Linda Martinez",
    contactEmail: "lmartinez@churchillcounty.gov",
    primaryPrinciple: "Scarcity",
    status: "Completed",
    createdDate: "2024-09-15",
    totalEmails: 5,
    emailsSent: 5,
    openRate: 40,
    responseRate: 0,
    lastSentDate: "2024-10-20"
  },
  {
    id: "camp-006",
    name: "Wake County - CJIS Compliance Intro",
    clientId: 3,
    clientName: "Wake County",
    opportunityName: "CJIS Compliance",
    contactName: "Michael Brooks",
    contactEmail: "mbrooks@wakegov.com",
    primaryPrinciple: "Liking",
    status: "Active",
    createdDate: "2024-10-25",
    totalEmails: 4,
    emailsSent: 2,
    openRate: 50,
    responseRate: 0,
    lastSentDate: "2024-10-30"
  },
  {
    id: "camp-007",
    name: "Catholic Charities - Mission Alignment",
    clientId: 10,
    clientName: "Catholic Charities Maine",
    opportunityName: "HIPAA Compliance Program",
    contactName: "Father James O'Brien",
    contactEmail: "jobrien@ccmaine.org",
    primaryPrinciple: "Unity",
    status: "Active",
    createdDate: "2024-10-22",
    totalEmails: 6,
    emailsSent: 3,
    openRate: 100,
    responseRate: 0,
    lastSentDate: "2024-10-29"
  },
  {
    id: "camp-008",
    name: "La Costa Dental - Healthcare Partnership",
    clientId: 8,
    clientName: "La Costa Dental Group",
    opportunityName: "Enhanced HIPAA Services",
    contactName: "Dr. Rachel Kim",
    contactEmail: "rkim@lacostadental.com",
    primaryPrinciple: "Commitment/Consistency",
    status: "Draft",
    createdDate: "2024-11-01",
    totalEmails: 5,
    emailsSent: 0,
    openRate: 0,
    responseRate: 0
  },
  {
    id: "camp-009",
    name: "INSURLYNX - Retention Campaign",
    clientId: 9,
    clientName: "INSURLYNX",
    opportunityName: "vCISO for Small Business",
    contactName: "Tom Patterson",
    contactEmail: "tpatterson@insurlynx.com",
    primaryPrinciple: "Reciprocation",
    status: "Converted",
    createdDate: "2024-09-20",
    totalEmails: 3,
    emailsSent: 3,
    openRate: 100,
    responseRate: 66,
    lastSentDate: "2024-10-05"
  },
  {
    id: "camp-010",
    name: "Cleveland Courts - Compliance Upgrade",
    clientId: 5,
    clientName: "City of Cleveland (Court System)",
    opportunityName: "Enhanced CJIS Compliance",
    contactName: "Judge Patricia Williams",
    contactEmail: "pwilliams@clevelandcourts.gov",
    primaryPrinciple: "Authority",
    status: "Scheduled",
    createdDate: "2024-11-02",
    totalEmails: 4,
    emailsSent: 0,
    openRate: 0,
    responseRate: 0
  },
  {
    id: "camp-011",
    name: "Gaston County - CJIS Compliance Outreach",
    clientId: 4,
    clientName: "Gaston County Government",
    opportunityName: "CJIS Compliance-as-a-Service",
    contactName: "John Davidson",
    contactEmail: "jdavidson@gastongov.com",
    primaryPrinciple: "Authority",
    status: "Draft",
    createdDate: "2024-11-02",
    totalEmails: 4,
    emailsSent: 0,
    openRate: 0,
    responseRate: 0
  },
  {
    id: "camp-012",
    name: "Gaston County - Managed Firewall Proposal",
    clientId: 4,
    clientName: "Gaston County Government",
    opportunityName: "Managed Firewall for CJIS Systems",
    contactName: "John Davidson",
    contactEmail: "jdavidson@gastongov.com",
    primaryPrinciple: "Scarcity",
    status: "Draft",
    createdDate: "2024-11-02",
    totalEmails: 3,
    emailsSent: 0,
    openRate: 0,
    responseRate: 0
  }
];

const Emails = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [templateLibraryOpen, setTemplateLibraryOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<EmailCampaign | null>(null);

  // Get unique clients for filter
  const clients = useMemo(() => {
    const uniqueClients = Array.from(new Set(campaignData.map(c => c.clientName)))
      .sort()
      .map(name => {
        const campaign = campaignData.find(c => c.clientName === name);
        return { id: campaign?.clientId || 0, name };
      });
    return [{ id: 0, name: "All Clients" }, ...uniqueClients];
  }, []);

  // Filter campaigns
  const filteredCampaigns = useMemo(() => {
    let filtered = campaignData;
    
    if (selectedClient !== "all") {
      filtered = filtered.filter(c => c.clientName === selectedClient);
    }
    
    if (selectedFilter !== "all") {
      filtered = filtered.filter(c => c.status === selectedFilter);
    }
    
    return filtered;
  }, [selectedFilter, selectedClient]);

  // Calculate stats
  const stats = useMemo(() => {
    const activeCampaigns = campaignData.filter(c => c.status === "Active").length;
    const totalEmailsSent = campaignData.reduce((sum, c) => sum + c.emailsSent, 0);
    const avgOpenRate = Math.round(
      campaignData.filter(c => c.emailsSent > 0).reduce((sum, c) => sum + c.openRate, 0) / 
      campaignData.filter(c => c.emailsSent > 0).length
    );
    const avgResponseRate = Math.round(
      campaignData.filter(c => c.emailsSent > 0).reduce((sum, c) => sum + c.responseRate, 0) / 
      campaignData.filter(c => c.emailsSent > 0).length
    );
    
    return {
      totalCampaigns: campaignData.length,
      activeCampaigns,
      totalEmailsSent,
      avgOpenRate,
      avgResponseRate
    };
  }, []);

  // Get badge color for influence principle
  const getPrincipleBadgeClass = (principle: InfluencePrinciple) => {
    const colorMap: Record<InfluencePrinciple, string> = {
      'Reciprocation': 'hsl(120, 100%, 40%)',
      'Liking': 'hsl(210, 100%, 56%)',
      'Social Proof': 'hsl(270, 70%, 60%)',
      'Authority': 'hsl(240, 60%, 60%)',
      'Scarcity': 'hsl(0, 85%, 60%)',
      'Commitment/Consistency': 'hsl(30, 95%, 55%)',
      'Unity': 'hsl(330, 70%, 60%)',
      'Instant Influence': 'hsl(45, 90%, 50%)'
    };
    return colorMap[principle];
  };

  // Get status badge styling
  const getStatusBadgeClass = (status: CampaignStatus) => {
    const statusStyles: Record<CampaignStatus, string> = {
      'Draft': 'bg-muted text-white',
      'Scheduled': 'bg-primary/70 text-white',
      'Active': 'bg-primary text-white',
      'Paused': 'bg-status-yellow/80 text-white',
      'Completed': 'bg-muted-foreground text-white',
      'Responded': 'bg-status-green text-white',
      'Converted': 'bg-status-green text-white'
    };
    return statusStyles[status];
  };

  const statusOptions: CampaignStatus[] = ['Active', 'Paused', 'Draft', 'Scheduled', 'Completed', 'Responded', 'Converted'];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with Actions */}
        <div className="flex items-center justify-between mb-4">
          <div></div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setTemplateLibraryOpen(true)}>
              <FileText className="w-4 h-4 mr-2" />
              Browse Templates
            </Button>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Button disabled onClick={() => setTemplateLibraryOpen(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Campaign
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming Soon. Use Copy Email button and integrate into your own email.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Header */}
        <header className="bg-gradient-to-br from-primary to-coral-dark rounded-lg p-8 mb-8 shadow-sm">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">
            EMAIL CAMPAIGNS
          </h1>
          <p className="text-white/90 text-lg font-mono mb-6">
            Cialdini's 8 Principles of Influence Applied
          </p>

          {/* Meta Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Total Campaigns</div>
              <div className="text-3xl font-heading font-bold text-white">{stats.totalCampaigns}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Active</div>
              <div className="text-3xl font-heading font-bold text-white">{stats.activeCampaigns}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Emails Sent</div>
              <div className="text-3xl font-heading font-bold text-white">{stats.totalEmailsSent}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Avg Open Rate</div>
              <div className="text-3xl font-heading font-bold text-white">{stats.avgOpenRate}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Avg Response</div>
              <div className="text-3xl font-heading font-bold text-white">{stats.avgResponseRate}%</div>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Client Filter */}
          <div className="flex-1">
            <label className="block text-sm font-mono text-foreground mb-2">Filter by Client</label>
            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="All Clients" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clients ({campaignData.length})</SelectItem>
                {clients.slice(1).map((client) => (
                  <SelectItem key={client.id} value={client.name}>
                    {client.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status Filter */}
          <div className="flex-1">
            <label className="block text-sm font-mono text-foreground mb-2">Filter by Status</label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedFilter("all")}
                className={cn(
                  "px-4 py-2 rounded-lg font-heading font-medium transition-all text-sm",
                  selectedFilter === "all"
                    ? "bg-primary text-white shadow-md"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border"
                )}
              >
                All
              </button>
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedFilter(status)}
                  className={cn(
                    "px-4 py-2 rounded-lg font-heading font-medium transition-all text-sm",
                    selectedFilter === status
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-foreground hover:bg-primary/10 border border-border"
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Campaign Table */}
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">#</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Email</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Client</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Influence Principle</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Status</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Progress</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Performance</th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">Last Sent</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign, index) => (
                <tr 
                  key={campaign.id}
                  className="border-b border-border hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedCampaign(campaign);
                    setTemplateLibraryOpen(true);
                  }}
                >
                  <td className="px-4 py-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary text-sm">{index + 1}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-heading font-semibold text-foreground">{campaign.name}</div>
                    <div className="text-sm font-mono text-muted-foreground">
                      {campaign.opportunityName}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-mono text-sm text-foreground">{campaign.clientName}</div>
                    <div className="text-xs font-mono text-muted-foreground">{campaign.contactName}</div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge 
                      className="font-mono text-xs text-white border-0"
                      style={{ backgroundColor: getPrincipleBadgeClass(campaign.primaryPrinciple) }}
                    >
                      {campaign.primaryPrinciple}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge className={cn("font-mono text-xs", getStatusBadgeClass(campaign.status))}>
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-muted-foreground">
                        {campaign.emailsSent} of {campaign.totalEmails} sent
                      </div>
                      <div className="w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${(campaign.emailsSent / campaign.totalEmails) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {campaign.emailsSent > 0 ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-muted-foreground">Open:</span>
                          <span className="text-xs font-mono font-semibold text-primary">{campaign.openRate}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-muted-foreground">Reply:</span>
                          <span className="text-xs font-mono font-semibold text-primary">{campaign.responseRate}%</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs font-mono text-muted-foreground">Not sent yet</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-mono text-xs text-foreground">
                      {campaign.lastSentDate 
                        ? new Date(campaign.lastSentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                        : '—'
                      }
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Footer */}
        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="font-mono text-sm text-muted-foreground">
              Showing {filteredCampaigns.length} of {campaignData.length} campaigns
            </div>
            <div className="font-mono text-sm text-foreground">
              Active Campaigns: <span className="font-semibold text-primary">{stats.activeCampaigns}</span>
            </div>
          </div>
        </div>
      </div>

      <EmailTemplateLibrary
        open={templateLibraryOpen}
        onOpenChange={setTemplateLibraryOpen}
        preSelectedClient={selectedCampaign ? { id: selectedCampaign.clientId, name: selectedCampaign.clientName } : undefined}
        preSelectedOpportunity={selectedCampaign ? { id: selectedCampaign.id, name: selectedCampaign.opportunityName || '' } : undefined}
        campaignData={selectedCampaign || undefined}
      />
    </Layout>
  );
};

export default Emails;
