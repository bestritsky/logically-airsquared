import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface SaveEmailParams {
  clientId: number;
  opportunityId?: string;
  templateId: string;
  contactName: string;
  contactEmail: string;
  subject: string;
  body: string;
  influencePrinciple: string;
  templateVariables: Record<string, string>;
}

export const useSaveGeneratedEmail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SaveEmailParams) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("You must be logged in to save emails");
      }

      const { data, error } = await supabase
        .from("generated_emails")
        .insert({
          client_id: params.clientId,
          opportunity_id: params.opportunityId,
          template_id: params.templateId,
          contact_name: params.contactName,
          contact_email: params.contactEmail,
          subject: params.subject,
          body: params.body,
          influence_principle: params.influencePrinciple as any,
          template_variables: params.templateVariables,
          status: "Draft",
          created_by: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generatedEmails"] });
      toast.success("Email saved successfully!");
    },
    onError: (error: Error) => {
      toast.error(`Failed to save email: ${error.message}`);
    },
  });
};