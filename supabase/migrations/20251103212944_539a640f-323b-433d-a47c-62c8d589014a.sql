-- Allow admins to view all generated emails
CREATE POLICY "Admins can view all generated emails" 
ON public.generated_emails 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));