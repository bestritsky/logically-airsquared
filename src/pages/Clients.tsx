import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Client {
  id: number;
  name: string;
  location: string;
  tier: 1 | 2 | 3;
  sector: "Government" | "Healthcare" | "Financial" | "Manufacturing" | "Other";
  dealSize: string;
  status: "Existing" | "Prospect";
  winRate?: number;
  timeline: string;
  opportunities: string[];
}

const clientData: Client[] = [
  {
    id: 1,
    name: "Mecklenburg County",
    location: "Charlotte, NC",
    tier: 1,
    sector: "Government",
    dealSize: "$300K-$500K",
    status: "Prospect",
    winRate: 60,
    timeline: "12-18 months",
    opportunities: [
      "Enterprise CJIS Compliance ($150K annually)",
      "HIPAA for Health & Human Services ($80K annually)",
      "County-wide SOC ($200K annually)",
    ],
  },
  {
    id: 2,
    name: "Maplewood Senior Living",
    location: "Westport, CT",
    tier: 1,
    sector: "Healthcare",
    dealSize: "$250K-$400K",
    status: "Existing",
    timeline: "Upsell - 6 months",
    opportunities: [
      "HIPAA Compliance Program ($120K annually)",
      "Healthcare Security Services ($150K annually)",
      "Medical IoT Security ($60K annually)",
    ],
  },
  {
    id: 3,
    name: "Wake County",
    location: "Raleigh, NC",
    tier: 1,
    sector: "Government",
    dealSize: "$250K-$450K",
    status: "Prospect",
    winRate: 55,
    timeline: "12-18 months",
    opportunities: [
      "CJIS Compliance ($120K annually)",
      "HIPAA for Public Health & EMS ($90K annually)",
      "Managed XDR ($180K annually)",
    ],
  },
  {
    id: 4,
    name: "Gaston County Government",
    location: "Gastonia, NC",
    tier: 2,
    sector: "Government",
    dealSize: "$60K-$215K",
    status: "Prospect",
    winRate: 80,
    timeline: "10 months",
    opportunities: [
      "CJIS Compliance-as-a-Service ($60K annually)",
      "Managed Firewall for CJIS ($50K annually)",
      "HIPAA for Health Dept ($60K annually)",
    ],
  },
  {
    id: 5,
    name: "City of Cleveland (Court System)",
    location: "Cleveland, OH",
    tier: 2,
    sector: "Government",
    dealSize: "$100K-$180K",
    status: "Existing",
    timeline: "Expansion - 6 months",
    opportunities: [
      "Enhanced CJIS Compliance ($75K annually)",
      "Case Management Security ($40K)",
      "Managed Security Services ($120K annually)",
    ],
  },
  {
    id: 6,
    name: "Morgan Creek Capital Management",
    location: "Chapel Hill, NC",
    tier: 2,
    sector: "Financial",
    dealSize: "$100K-$180K",
    status: "Existing",
    timeline: "Upsell - 4 months",
    opportunities: [
      "SEC Compliance Services ($60K annually)",
      "Financial Services SOC ($90K annually)",
      "Advanced Threat Intelligence ($40K annually)",
    ],
  },
  {
    id: 7,
    name: "Churchill County Government",
    location: "Fallon, NV",
    tier: 3,
    sector: "Government",
    dealSize: "$40K-$80K",
    status: "Existing",
    timeline: "Upsell - 4-6 months",
    opportunities: [
      "CJIS Compliance Program ($35K annually)",
      "Advanced Security Services ($30K annually)",
      "vCISO Services ($40K annually)",
    ],
  },
  {
    id: 8,
    name: "La Costa Dental Group",
    location: "California",
    tier: 3,
    sector: "Healthcare",
    dealSize: "$40K-$75K",
    status: "Existing",
    timeline: "Retention + Upsell",
    opportunities: [
      "Enhanced HIPAA Services ($20K annually)",
      "Cloud Migration ($30K project)",
      "Advanced Threat Protection ($15K annually)",
    ],
  },
  {
    id: 9,
    name: "INSURLYNX",
    location: "Trumbull, CT",
    tier: 3,
    sector: "Financial",
    dealSize: "$30K-$60K",
    status: "Existing",
    timeline: "Retention",
    opportunities: [
      "Insurance Compliance ($20K annually)",
      "Enhanced Backup/DR ($15K annually)",
      "vCISO for Small Business ($25K annually)",
    ],
  },
  {
    id: 10,
    name: "Catholic Charities Maine",
    location: "Portland, ME",
    tier: 2,
    sector: "Other",
    dealSize: "$80K-$150K",
    status: "Existing",
    timeline: "Expansion - 6 months",
    opportunities: [
      "HIPAA Compliance Program ($50K annually)",
      "Grant Security Requirements ($30K annually)",
      "Nonprofit IT Strategy ($40K annually)",
    ],
  },
];

const Clients = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const sectors = ["all", "Government", "Healthcare", "Financial", "Other"];
  
  const filteredClients = selectedSector === "all" 
    ? clientData 
    : clientData.filter(client => client.sector === selectedSector);

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

  const totalPipeline = "$4.2M";
  const existingClients = clientData.filter(c => c.status === "Existing").length;
  const avgDealSize = "$168K";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="bg-gradient-to-br from-primary to-coral-dark rounded-lg p-8 mb-8 shadow-sm">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">
            CLIENT PORTFOLIO
          </h1>
          <p className="text-white/90 text-lg font-mono mb-6">
            Strategic Account Management Dashboard
          </p>

          {/* Meta Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">Total Clients</div>
              <div className="text-3xl font-heading font-bold text-white">{clientData.length}</div>
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
              {sector === "all" ? `All (${clientData.length})` : sector}
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
              {filteredClients.map((client, index) => (
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
                    <div className="font-mono text-sm font-semibold text-foreground">{client.dealSize}</div>
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
                              style={{ width: `${client.winRate}%` }}
                            />
                          </div>
                          <span className="text-xs font-mono font-semibold text-primary">{client.winRate}%</span>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-mono text-sm text-foreground">{client.timeline}</div>
                  </td>
                  <td className="px-4 py-4">
                    <ul className="space-y-1">
                      {client.opportunities.slice(0, 3).map((opp, idx) => (
                        <li key={idx} className="text-xs font-mono text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{opp}</span>
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
                          className="h-8 w-8"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => window.open(`/clients/${client.id}`, '_blank')}>
                          Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/opportunities?client=${client.id}`, '_blank')}>
                          Opportunities
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/emails?client=${client.id}`, '_blank')}>
                          Emails
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
              Showing {filteredClients.length} of {clientData.length} clients
            </div>
            <div className="font-mono text-sm text-foreground">
              Total Pipeline: <span className="font-semibold text-primary">{totalPipeline}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
