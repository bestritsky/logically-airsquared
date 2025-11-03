import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Opportunity {
  id: string;
  client_id: number;
  name: string;
  description: string | null;
  service_type: "Compliance" | "Managed Security" | "Cloud Services" | "Infrastructure" | "Strategic" | "Training";
  year1_revenue: number | null;
  year2_revenue: number | null;
  year3_revenue: number | null;
  win_rate: number | null;
  timeline: string | null;
  drivers: string[] | null;
  created_at: string;
  updated_at: string;
  clients?: {
    name: string;
    tier: number;
  };
}

export const useOpportunities = () => {
  return useQuery({
    queryKey: ["opportunities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("opportunities")
        .select(`
          *,
          clients:client_id (
            name,
            tier
          )
        `)
        .order("win_rate", { ascending: false });

      if (error) throw error;
      return data as Opportunity[];
    },
  });
};
