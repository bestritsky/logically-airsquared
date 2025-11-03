export interface ClientIntelligence {
  id: number;
  name: string;
  summary: string;
  psychologicalProfile: string;
  valuesHierarchy: string[];
  currentState: string;
  engagementStrategy: string;
  suggestedContactTitle?: string;
  industry: string;
  keyPainPoints: string[];
  decisionMakers: string[];
}

export const getClientIntelligence = (clientId: number): ClientIntelligence | null => {
  switch (clientId) {
    case 1: // Mecklenburg County
      return {
        id: 1,
        name: "Mecklenburg County",
        summary: "Data-driven government organization navigating leadership transition",
        psychologicalProfile: "High Conscientiousness (85%), Below Average Openness (40%)",
        valuesHierarchy: ["Clinical Care Quality (30%)", "Employee Safety (25%)", "Reputation Protection (20%)"],
        currentState: "Post-founder transition, preservation mode",
        engagementStrategy: "Lead with data, emphasize ROI, acknowledge Board priorities",
        suggestedContactTitle: "IT Director",
        industry: "Government",
        keyPainPoints: ["CJIS Compliance", "Data Security", "Budget Constraints"],
        decisionMakers: ["County IT Director", "County Manager", "Board of Commissioners"]
      };
    
    case 2: // Maplewood Senior Living
      return {
        id: 2,
        name: "Maplewood Senior Living",
        summary: "Luxury senior living operator in post-founder transition",
        psychologicalProfile: "Clinical excellence focus, hospitality-driven identity",
        valuesHierarchy: ["Clinical Care (30%)", "Safety (25%)", "Brand Protection (20%)"],
        currentState: "Founder's Ghost Syndrome, financial constraints",
        engagementStrategy: "Emphasize operational excellence, highlight ROI",
        suggestedContactTitle: "VP Operations",
        industry: "Healthcare",
        keyPainPoints: ["HIPAA Compliance", "Multi-location Management", "Regulatory Oversight"],
        decisionMakers: ["VP Operations", "CFO", "Compliance Director"]
      };
    
    case 4: // Gaston County
      return {
        id: 4,
        name: "Gaston County Government",
        summary: "Conservative government focused on fiscal discipline and innovation",
        psychologicalProfile: "High fiscal conservatism, innovation marketing",
        valuesHierarchy: ["Lowest Tax Rate (35%)", "Economic Development (25%)", "Public Safety (20%)"],
        currentState: "Balancing growth with fiscal constraints",
        engagementStrategy: "Lead with fiscal responsibility, proven best practices",
        suggestedContactTitle: "County Manager",
        industry: "Government",
        keyPainPoints: ["Budget Constraints", "Infrastructure Needs", "CJIS Compliance"],
        decisionMakers: ["County Manager", "Board Chairman", "IT Director"]
      };
    
    default:
      return null;
  }
};

export const getOpportunityIntelligence = (opportunityId: string) => {
  const opportunityMap: Record<string, any> = {
    "meck-1": {
      id: "meck-1",
      name: "Enterprise CJIS Compliance Program",
      serviceType: "Compliance",
      keyDrivers: ["FBI audit findings", "New regulations", "Risk mitigation"],
      timeline: "Q2 2024",
      estimatedValue: "$250,000",
      decisionTimeline: "60-90 days"
    },
    "meck-2": {
      id: "meck-2",
      name: "County-wide Managed SOC",
      serviceType: "Managed Security",
      keyDrivers: ["24/7 monitoring gap", "Rising ransomware threats", "Executive visibility"],
      timeline: "Q3 2024",
      estimatedValue: "$220,000",
      decisionTimeline: "90-120 days"
    },
    "meck-3": {
      id: "meck-3",
      name: "HIPAA for Health & Human Services",
      serviceType: "Compliance",
      keyDrivers: ["OCR audit exposure", "Public health PHI protection"],
      timeline: "Q2 2024",
      estimatedValue: "$85,000",
      decisionTimeline: "45-60 days"
    },
    "maple-1": {
      id: "maple-1",
      name: "HIPAA Compliance Program (16 locations)",
      serviceType: "Compliance",
      keyDrivers: ["Multi-location coordination", "Regulatory pressure", "Risk reduction"],
      timeline: "Q1 2024",
      estimatedValue: "$180,000",
      decisionTimeline: "45-60 days"
    },
    "maple-2": {
      id: "maple-2",
      name: "Healthcare Security Services (SOC)",
      serviceType: "Managed Security",
      keyDrivers: ["PHI protection", "24/7 monitoring", "Ransomware defense"],
      timeline: "Q2 2024",
      estimatedValue: "$165,000",
      decisionTimeline: "60-90 days"
    },
    "gaston-1": {
      id: "gaston-1",
      name: "AI Strategy Workshop Series",
      serviceType: "Strategic",
      keyDrivers: ["Executive visibility", "AI adoption", "ROI demonstration"],
      timeline: "Q1 2024",
      estimatedValue: "$150,000",
      decisionTimeline: "30-45 days"
    },
    "gaston-2": {
      id: "gaston-2",
      name: "CJIS Compliance-as-a-Service",
      serviceType: "Compliance",
      keyDrivers: ["FBI mandate", "Sheriff audit deadlines"],
      timeline: "Q2 2024",
      estimatedValue: "$65,000",
      decisionTimeline: "60-90 days"
    }
  };
  
  return opportunityMap[opportunityId] || null;
};
