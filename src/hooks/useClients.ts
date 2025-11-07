import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Client {
  id: number;
  name: string;
  domain: string | null;
  linkedin_url: string | null;
  industry: string | null;
  location: string | null;
  tier: 1 | 2 | 3;
  sector: "Government" | "Healthcare" | "Financial" | "Manufacturing" | "Other";
  deal_size: string | null;
  status: "Existing" | "Prospect";
  win_rate: number | null;
  timeline: string | null;
  assigned_to: string | null;
  created_at: string;
  updated_at: string;
}

export const useClients = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("name");

      if (error) throw error;
      return data as Client[];
    },
  });
};
