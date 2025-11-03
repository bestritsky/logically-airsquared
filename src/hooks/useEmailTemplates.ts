import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { EmailTemplate } from "@/data/emailTemplates";

export const useEmailTemplates = () => {
  return useQuery({
    queryKey: ["emailTemplates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("email_templates")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: true });

      if (error) throw error;

      // Transform database templates to frontend format
      return data.map((template): EmailTemplate => ({
        id: template.id,
        name: template.name,
        influencePrinciple: template.influence_principle as any,
        useCase: template.use_case,
        subject: template.subject_template,
        body: template.body_template,
        variables: template.variables_schema as any,
        psychologyExplanation: template.psychology_explanation,
        whenToUse: template.when_to_use || "",
        successRate: template.success_rate || undefined,
        examplePreview: {
          subject: template.subject_template.substring(0, 50),
          bodySnippet: template.body_template.substring(0, 100),
        },
      }));
    },
  });
};