import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { emailContentSchema } from "@/lib/emailValidation";

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

      // Validate input
      const validation = emailContentSchema.safeParse({
        subject: params.subject,
        body: params.body,
        notes: null,
        contact_name: params.contactName,
        contact_email: params.contactEmail
      });
      
      if (!validation.success) {
        throw new Error(validation.error.errors[0].message);
      }

      const { data, error } = await supabase
        .from("generated_emails")
        .insert({
          client_id: params.clientId,
          opportunity_id: params.opportunityId,
          template_id: params.templateId,
          contact_name: validation.data.contact_name,
          contact_email: validation.data.contact_email,
          subject: validation.data.subject,
          body: validation.data.body,
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
      queryClient.invalidateQueries({ queryKey: ["generated-emails"] });
      toast.success("Email saved successfully!");
    },
    onError: (error: Error) => {
      toast.error(`Failed to save email: ${error.message}`);
    },
  });
};