import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useOpportunities } from "@/hooks/useOpportunities";
import { useClients } from "@/hooks/useClients";
import { Loader2 } from "lucide-react";

interface Opportunity {
  id: string;
  clientId: number;
  clientName: string;
  name: string;
  description: string;
  serviceType: "Compliance" | "Managed Security" | "Cloud Services" | "Infrastructure" | "Strategic" | "Training";
  year1: number;
  year2: number;
  year3: number;
  winRate: number;
  timeline: string;
  drivers: string[];
}

const opportunityData: Opportunity[] = [
  // Mecklenburg County (id: 1)
  {
    id: "meck-1",
    clientId: 1,
    clientName: "Mecklenburg County",
    name: "Enterprise CJIS Compliance Program",
    description: "County-wide CJIS compliance for law enforcement",
    serviceType: "Compliance",
    year1: 150000,
    year2: 160000,
    year3: 170000,
    winRate: 75,
    timeline: "12-15 months",
    drivers: [
      "Mandatory FBI requirement",
      "Police department expansion",
      "Audit deadline pressure",
      "Multi-agency coordination"
    ]
  },
  {
    id: "meck-2",
    clientId: 1,
    clientName: "Mecklenburg County",
    name: "County-wide Managed SOC",
    description: "24/7 security operations center for all county systems",
    serviceType: "Managed Security",
    year1: 200000,
    year2: 220000,
    year3: 240000,
    winRate: 60,
    timeline: "15-18 months",
    drivers: [
      "Critical infrastructure protection",
      "Rising ransomware threats",
      "24/7 monitoring gap",
      "Executive visibility needs"
    ]
  },
  {
    id: "meck-3",
    clientId: 1,
    clientName: "Mecklenburg County",
    name: "HIPAA for Health & Human Services",
    description: "HIPAA compliance for county health departments",
    serviceType: "Compliance",
    year1: 80000,
    year2: 85000,
    year3: 90000,
    winRate: 70,
    timeline: "10-12 months",
    drivers: [
      "Public health PHI protection",
      "OCR audit exposure",
      "Social services systems",
      "Natural follow-on to CJIS"
    ]
  },
  {
    id: "meck-4",
    clientId: 1,
    clientName: "Mecklenburg County",
    name: "Cloud Migration to Azure Government",
    description: "Migrate critical systems to secure cloud",
    serviceType: "Cloud Services",
    year1: 120000,
    year2: 100000,
    year3: 100000,
    winRate: 55,
    timeline: "18-24 months",
    drivers: [
      "Aging infrastructure",
      "FedRAMP compliance needs",
      "Cost optimization",
      "Disaster recovery improvements"
    ]
  },

  // Maplewood Senior Living (id: 2)
  {
    id: "maple-1",
    clientId: 2,
    clientName: "Maplewood Senior Living",
    name: "HIPAA Compliance Program (16 locations)",
    description: "Multi-location HIPAA compliance framework",
    serviceType: "Compliance",
    year1: 120000,
    year2: 130000,
    year3: 140000,
    winRate: 95,
    timeline: "3-6 months",
    drivers: [
      "Existing relationship strength",
      "Multi-location scaling opportunity",
      "OCR audit risk mitigation",
      "PHI protection mandate"
    ]
  },
  {
    id: "maple-2",
    clientId: 2,
    clientName: "Maplewood Senior Living",
    name: "Healthcare Security Services (SOC)",
    description: "24/7 managed security for healthcare operations",
    serviceType: "Managed Security",
    year1: 150000,
    year2: 165000,
    year3: 180000,
    winRate: 90,
    timeline: "6-9 months",
    drivers: [
      "PHI protection requirements",
      "24/7 monitoring needed",
      "Ransomware defense",
      "Healthcare threat landscape"
    ]
  },
  {
    id: "maple-3",
    clientId: 2,
    clientName: "Maplewood Senior Living",
    name: "Medical IoT Security",
    description: "Secure nurse call systems and medical devices",
    serviceType: "Infrastructure",
    year1: 60000,
    year2: 70000,
    year3: 80000,
    winRate: 85,
    timeline: "9-12 months",
    drivers: [
      "Vulnerable medical devices",
      "Nurse call system security",
      "Resident tracking protection",
      "IoT attack surface"
    ]
  },
  {
    id: "maple-4",
    clientId: 2,
    clientName: "Maplewood Senior Living",
    name: "Ransomware Protection & DR",
    description: "Backup, disaster recovery, and ransomware defense",
    serviceType: "Cloud Services",
    year1: 80000,
    year2: 90000,
    year3: 100000,
    winRate: 80,
    timeline: "12 months",
    drivers: [
      "Healthcare ransomware epidemic",
      "Backup infrastructure gaps",
      "Business continuity needs",
      "Recovery time objectives"
    ]
  },

  // Wake County (id: 3)
  {
    id: "wake-1",
    clientId: 3,
    clientName: "Wake County",
    name: "CJIS Compliance for Law Enforcement",
    description: "Enterprise CJIS program for sheriff and police",
    serviceType: "Compliance",
    year1: 120000,
    year2: 130000,
    year3: 140000,
    winRate: 65,
    timeline: "12-18 months",
    drivers: [
      "FBI compliance mandate",
      "Multi-agency coordination",
      "County growth trajectory",
      "Criminal justice modernization"
    ]
  },
  {
    id: "wake-2",
    clientId: 3,
    clientName: "Wake County",
    name: "HIPAA for Public Health & EMS",
    description: "HIPAA compliance for health and emergency services",
    serviceType: "Compliance",
    year1: 90000,
    year2: 95000,
    year3: 100000,
    winRate: 60,
    timeline: "15-18 months",
    drivers: [
      "Public health PHI systems",
      "EMS patient data protection",
      "OCR enforcement actions",
      "COVID response lessons"
    ]
  },
  {
    id: "wake-3",
    clientId: 3,
    clientName: "Wake County",
    name: "Managed XDR Deployment",
    description: "Extended detection and response across county",
    serviceType: "Managed Security",
    year1: 180000,
    year2: 195000,
    year3: 210000,
    winRate: 55,
    timeline: "18-24 months",
    drivers: [
      "Advanced threat detection",
      "Unified security platform",
      "Automated response needs",
      "SOC efficiency gains"
    ]
  },
  {
    id: "wake-4",
    clientId: 3,
    clientName: "Wake County",
    name: "vCISO Strategic Services",
    description: "Virtual CISO and strategic IT leadership",
    serviceType: "Strategic",
    year1: 80000,
    year2: 85000,
    year3: 90000,
    winRate: 50,
    timeline: "12-15 months",
    drivers: [
      "Leadership gap in security",
      "Board-level reporting needs",
      "Strategic planning support",
      "Risk management framework"
    ]
  },

  // Gaston County Government (id: 4)
  {
    id: "gaston-1",
    clientId: 4,
    clientName: "Gaston County Government",
    name: "AI Strategy Workshop Series",
    description: "Executive AI adoption and strategy workshops",
    serviceType: "Strategic",
    year1: 75000,
    year2: 150000,
    year3: 225000,
    winRate: 90,
    timeline: "6 months",
    drivers: [
      "Executive visibility with Henry",
      "Natural expansion opportunity",
      "Proven ROI track record",
      "AI hype momentum"
    ]
  },
  {
    id: "gaston-2",
    clientId: 4,
    clientName: "Gaston County Government",
    name: "CJIS Compliance-as-a-Service",
    description: "Managed CJIS compliance for sheriff's office",
    serviceType: "Compliance",
    year1: 60000,
    year2: 65000,
    year3: 70000,
    winRate: 80,
    timeline: "10 months",
    drivers: [
      "FBI mandate compliance",
      "Sheriff audit deadlines",
      "Police department pain",
      "Budget approval secured"
    ]
  },
  {
    id: "gaston-3",
    clientId: 4,
    clientName: "Gaston County Government",
    name: "Managed Firewall for CJIS Systems",
    description: "Managed firewall and network security",
    serviceType: "Infrastructure",
    year1: 50000,
    year2: 55000,
    year3: 60000,
    winRate: 75,
    timeline: "12 months (post-CJIS)",
    drivers: [
      "Natural follow-on service",
      "Lower sales friction",
      "Established trust",
      "Network security gap"
    ]
  },

  // Cleveland Court System (id: 5)
  {
    id: "cleve-1",
    clientId: 5,
    clientName: "City of Cleveland (Court System)",
    name: "Enhanced CJIS for Court Systems",
    description: "Expanded CJIS compliance for criminal courts",
    serviceType: "Compliance",
    year1: 75000,
    year2: 80000,
    year3: 85000,
    winRate: 85,
    timeline: "6-9 months",
    drivers: [
      "Existing client upsell",
      "Court expansion project",
      "FBI audit requirements",
      "Case management integration"
    ]
  },
  {
    id: "cleve-2",
    clientId: 5,
    clientName: "City of Cleveland (Court System)",
    name: "Case Management Security Platform",
    description: "Secure case management and document systems",
    serviceType: "Infrastructure",
    year1: 40000,
    year2: 42000,
    year3: 44000,
    winRate: 80,
    timeline: "9-12 months",
    drivers: [
      "Sensitive court records",
      "E-filing security needs",
      "Public access systems",
      "Compliance requirements"
    ]
  },
  {
    id: "cleve-3",
    clientId: 5,
    clientName: "City of Cleveland (Court System)",
    name: "24/7 Managed SOC for Criminal Data",
    description: "Security operations center for court systems",
    serviceType: "Managed Security",
    year1: 120000,
    year2: 130000,
    year3: 140000,
    winRate: 75,
    timeline: "12-15 months",
    drivers: [
      "24/7 monitoring requirement",
      "Criminal data protection",
      "Incident response needs",
      "Threat intelligence"
    ]
  },

  // Morgan Creek Capital (id: 6)
  {
    id: "morgan-1",
    clientId: 6,
    clientName: "Morgan Creek Capital Management",
    name: "SOC 2 Type II Audit Support",
    description: "SOC 2 compliance and audit preparation",
    serviceType: "Compliance",
    year1: 60000,
    year2: 65000,
    year3: 70000,
    winRate: 90,
    timeline: "4-6 months",
    drivers: [
      "Client requirement mandate",
      "Institutional investor demands",
      "Competitive differentiation",
      "Existing relationship"
    ]
  },
  {
    id: "morgan-2",
    clientId: 6,
    clientName: "Morgan Creek Capital Management",
    name: "Financial Services Managed SOC",
    description: "24/7 SOC tailored for financial services",
    serviceType: "Managed Security",
    year1: 90000,
    year2: 100000,
    year3: 110000,
    winRate: 85,
    timeline: "6-9 months",
    drivers: [
      "Financial threat landscape",
      "Portfolio protection",
      "SEC cybersecurity rules",
      "24/7 coverage gap"
    ]
  },
  {
    id: "morgan-3",
    clientId: 6,
    clientName: "Morgan Creek Capital Management",
    name: "Advanced Threat Intelligence",
    description: "Financial sector threat intelligence feeds",
    serviceType: "Managed Security",
    year1: 40000,
    year2: 45000,
    year3: 50000,
    winRate: 80,
    timeline: "9-12 months",
    drivers: [
      "Sophisticated threat actors",
      "Investment protection",
      "Dark web monitoring",
      "Executive reporting"
    ]
  },

  // Churchill County (id: 7)
  {
    id: "church-1",
    clientId: 7,
    clientName: "Churchill County Government",
    name: "CJIS Compliance Program Expansion",
    description: "Enhanced CJIS for sheriff's office",
    serviceType: "Compliance",
    year1: 35000,
    year2: 38000,
    year3: 40000,
    winRate: 95,
    timeline: "3-6 months",
    drivers: [
      "Existing client upsell",
      "Strong relationship",
      "FBI requirement expansion",
      "Budget already approved"
    ]
  },
  {
    id: "church-2",
    clientId: 7,
    clientName: "Churchill County Government",
    name: "SentryXDR Deployment",
    description: "Extended detection and response platform",
    serviceType: "Managed Security",
    year1: 30000,
    year2: 33000,
    year3: 36000,
    winRate: 85,
    timeline: "6-9 months",
    drivers: [
      "Advanced threat protection",
      "Unified security platform",
      "Automated response",
      "Small county efficiency needs"
    ]
  },
  {
    id: "church-3",
    clientId: 7,
    clientName: "Churchill County Government",
    name: "vCISO Advisory Services",
    description: "Part-time virtual CISO support",
    serviceType: "Strategic",
    year1: 40000,
    year2: 42000,
    year3: 44000,
    winRate: 80,
    timeline: "9-12 months",
    drivers: [
      "No in-house security leadership",
      "Strategic guidance needed",
      "Cost-effective solution",
      "Board reporting requirements"
    ]
  },

  // La Costa Dental (id: 8)
  {
    id: "dental-1",
    clientId: 8,
    clientName: "La Costa Dental Group",
    name: "Enhanced HIPAA Services",
    description: "Expanded HIPAA compliance program",
    serviceType: "Compliance",
    year1: 20000,
    year2: 22000,
    year3: 24000,
    winRate: 95,
    timeline: "2-4 months",
    drivers: [
      "Existing client retention",
      "Low-friction upsell",
      "OCR audit protection",
      "Practice expansion support"
    ]
  },
  {
    id: "dental-2",
    clientId: 8,
    clientName: "La Costa Dental Group",
    name: "Dental Practice Cloud Migration",
    description: "Cloud migration for practice management",
    serviceType: "Cloud Services",
    year1: 30000,
    year2: 15000,
    year3: 15000,
    winRate: 85,
    timeline: "6-9 months",
    drivers: [
      "Aging server infrastructure",
      "Practice management upgrade",
      "Backup and DR improvement",
      "Remote work enablement"
    ]
  },
  {
    id: "dental-3",
    clientId: 8,
    clientName: "La Costa Dental Group",
    name: "Advanced Threat Protection",
    description: "Email security and endpoint protection",
    serviceType: "Managed Security",
    year1: 15000,
    year2: 16000,
    year3: 17000,
    winRate: 80,
    timeline: "9-12 months",
    drivers: [
      "Phishing attack increase",
      "Ransomware protection",
      "Patient data security",
      "Small practice vulnerability"
    ]
  },

  // INSURLYNX (id: 9)
  {
    id: "insur-1",
    clientId: 9,
    clientName: "INSURLYNX",
    name: "Insurance Regulatory Compliance",
    description: "Insurance industry compliance framework",
    serviceType: "Compliance",
    year1: 20000,
    year2: 22000,
    year3: 24000,
    winRate: 90,
    timeline: "4-6 months",
    drivers: [
      "State insurance regulations",
      "NAIC model law compliance",
      "Customer data protection",
      "Existing relationship"
    ]
  },
  {
    id: "insur-2",
    clientId: 9,
    clientName: "INSURLYNX",
    name: "Enhanced Backup & DR",
    description: "Business continuity and disaster recovery",
    serviceType: "Cloud Services",
    year1: 15000,
    year2: 16000,
    year3: 17000,
    winRate: 85,
    timeline: "6-9 months",
    drivers: [
      "Ransomware protection",
      "Business continuity planning",
      "Backup gaps identified",
      "Regulatory requirements"
    ]
  },
  {
    id: "insur-3",
    clientId: 9,
    clientName: "INSURLYNX",
    name: "vCISO for Small Business",
    description: "Part-time virtual CISO guidance",
    serviceType: "Strategic",
    year1: 25000,
    year2: 27000,
    year3: 29000,
    winRate: 75,
    timeline: "9-12 months",
    drivers: [
      "No security leadership",
      "Strategic planning needs",
      "Cost-effective solution",
      "Insurance industry expertise"
    ]
  },

  // Catholic Charities Maine (id: 10)
  {
    id: "catholic-1",
    clientId: 10,
    clientName: "Catholic Charities Maine",
    name: "HIPAA Compliance Program",
    description: "HIPAA for social services and healthcare",
    serviceType: "Compliance",
    year1: 50000,
    year2: 55000,
    year3: 60000,
    winRate: 85,
    timeline: "6-9 months",
    drivers: [
      "Social services PHI protection",
      "Grant compliance requirements",
      "OCR audit exposure",
      "Multi-program coverage"
    ]
  },
  {
    id: "catholic-2",
    clientId: 10,
    clientName: "Catholic Charities Maine",
    name: "Grant Security Requirements",
    description: "Federal grant cybersecurity compliance",
    serviceType: "Compliance",
    year1: 30000,
    year2: 32000,
    year3: 34000,
    winRate: 80,
    timeline: "9-12 months",
    drivers: [
      "Federal grant mandates",
      "FEMA funding requirements",
      "HHS grant compliance",
      "Audit protection"
    ]
  },
  {
    id: "catholic-3",
    clientId: 10,
    clientName: "Catholic Charities Maine",
    name: "Nonprofit IT Strategy & vCISO",
    description: "Strategic IT planning and security leadership",
    serviceType: "Strategic",
    year1: 40000,
    year2: 43000,
    year3: 46000,
    winRate: 75,
    timeline: "12 months",
    drivers: [
      "Limited IT resources",
      "Strategic planning gap",
      "Diocese coordination",
      "Mission-critical systems"
    ]
  },
];

const Opportunities = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const clientParam = searchParams.get("client");
  const [selectedClientId, setSelectedClientId] = useState<string>("all");
  const { data: opportunities, isLoading, error } = useOpportunities();
  const { data: clients } = useClients();

  useEffect(() => {
    if (clientParam) {
      setSelectedClientId(clientParam);
    }
  }, [clientParam]);

  const filteredOpportunities = useMemo(() => {
    if (!opportunities) return [];
    
    if (selectedClientId === "all") {
      // Show top 10 opportunities by win rate
      return [...opportunities]
        .sort((a, b) => (b.win_rate || 0) - (a.win_rate || 0))
        .slice(0, 10);
    }
    return opportunities
      .filter((opp) => opp.client_id === parseInt(selectedClientId))
      .sort((a, b) => (b.win_rate || 0) - (a.win_rate || 0));
  }, [selectedClientId, opportunities]);

  const stats = useMemo(() => {
    if (!opportunities) return { totalOpps: 0, totalPipeline: "$0K", avgWinRate: 0, expectedRevenue: "$0K" };
    
    const opps = selectedClientId === "all" 
      ? opportunities 
      : opportunities.filter((opp) => opp.client_id === parseInt(selectedClientId));
    
    const totalOpps = opps.length;
    const totalPipeline = opps.reduce((sum, opp) => sum + (opp.year1_revenue || 0), 0);
    const avgWinRate = opps.reduce((sum, opp) => sum + (opp.win_rate || 0), 0) / (opps.length || 1);
    const expectedRevenue = totalPipeline * (avgWinRate / 100);

    return {
      totalOpps,
      totalPipeline: `$${(totalPipeline / 1000).toFixed(1)}K`,
      avgWinRate: Math.round(avgWinRate),
      expectedRevenue: `$${(expectedRevenue / 1000).toFixed(1)}K`,
    };
  }, [selectedClientId, opportunities]);

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
          <p className="text-destructive">Error loading opportunities: {error.message}</p>
        </div>
      </Layout>
    );
  }

  const getServiceTypeBadgeClass = (type: string) => {
    switch (type) {
      case "Compliance":
        return "bg-primary/10 text-primary border-primary/20";
      case "Managed Security":
        return "bg-coral-dark/10 text-coral-dark border-coral-dark/20";
      case "Cloud Services":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Infrastructure":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Strategic":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Training":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="bg-gradient-to-br from-primary to-coral-dark rounded-lg p-8 mb-8 shadow-sm">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">
            OPPORTUNITIES
          </h1>
          <p className="text-white/90 text-lg font-mono mb-6">
            Strategic MSP Service Opportunities
          </p>

          {/* Meta Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">
                Total Opportunities
              </div>
              <div className="text-3xl font-heading font-bold text-white">
                {stats.totalOpps}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">
                Pipeline Value
              </div>
              <div className="text-3xl font-heading font-bold text-white">
                {stats.totalPipeline}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">
                Avg Win Rate
              </div>
              <div className="text-3xl font-heading font-bold text-white">
                {stats.avgWinRate}%
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-white/80 text-sm font-mono mb-1">
                Expected (Yr 1)
              </div>
              <div className="text-3xl font-heading font-bold text-white">
                {stats.expectedRevenue}
              </div>
            </div>
          </div>
        </header>

        {/* Client Selector */}
        <div className="mb-6 bg-card rounded-lg p-6 shadow-sm border border-border">
          <label className="block text-sm font-heading font-semibold text-foreground mb-2">
            Filter by Client
          </label>
          <Select value={selectedClientId} onValueChange={setSelectedClientId}>
            <SelectTrigger className="w-full md:w-96 bg-background">
              <SelectValue placeholder="Select a client" />
            </SelectTrigger>
            <SelectContent className="bg-background z-50">
              <SelectItem value="all" className="font-heading">
                <span className="font-semibold">All Clients</span>
                <span className="text-muted-foreground ml-2">
                  (Top 10 Opportunities)
                </span>
              </SelectItem>
              {clients.map((client) => (
                <SelectItem
                  key={client.id}
                  value={client.id.toString()}
                  className="font-heading"
                >
                  {client.name}
                  <Badge
                    className={cn(
                      "ml-2 text-xs",
                      client.tier === 1
                        ? "bg-primary text-white"
                        : client.tier === 2
                        ? "bg-coral-dark text-white"
                        : "bg-muted text-white"
                    )}
                  >
                    Tier {client.tier}
                  </Badge>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Opportunities Table */}
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  #
                </th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  Opportunity Name
                </th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  Service Type
                </th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  Year 1 → Year 2 → Year 3
                </th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  Win Rate
                </th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  Timeline
                </th>
                <th className="px-4 py-3 text-left font-heading font-semibold text-sm text-foreground">
                  Key Drivers
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOpportunities.map((opp, index) => {
                const clientName = opp.clients?.name || clients?.find(c => c.id === opp.client_id)?.name || "Unknown Client";
                
                return (
                  <tr
                    key={opp.id}
                    onClick={() => navigate(`/emails?client=${opp.client_id}`)}
                    className="border-b border-border hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-heading font-bold text-primary text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-heading font-semibold text-foreground">
                        {opp.name}
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {opp.description}
                      </div>
                      {selectedClientId === "all" && (
                        <div className="text-xs font-mono text-primary mt-1">
                          📍 {clientName}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        variant="outline"
                        className={cn(
                          "font-mono text-xs whitespace-nowrap",
                          getServiceTypeBadgeClass(opp.service_type)
                        )}
                      >
                        {opp.service_type}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-mono text-sm font-semibold text-foreground whitespace-nowrap">
                        {formatCurrency(opp.year1_revenue || 0)} → {formatCurrency(opp.year2_revenue || 0)}{" "}
                        → {formatCurrency(opp.year3_revenue || 0)}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${opp.win_rate || 0}%` }}
                          />
                        </div>
                        <span className="text-sm font-mono font-semibold text-primary whitespace-nowrap">
                          {opp.win_rate || 0}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-mono text-sm text-foreground whitespace-nowrap">
                        {opp.timeline}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <ul className="space-y-1">
                        {(opp.drivers || []).slice(0, 4).map((driver, idx) => (
                          <li
                            key={idx}
                            className="text-xs font-mono text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            <span>{driver}</span>
                          </li>
                        ))}
                      </ul>
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
              Showing {filteredOpportunities.length} opportunities
              {selectedClientId !== "all" && ` for selected client`}
            </div>
            <div className="font-mono text-sm text-foreground">
              Total Pipeline:{" "}
              <span className="font-semibold text-primary">
                {stats.totalPipeline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Opportunities;
