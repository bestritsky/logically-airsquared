-- Add RLS policy to allow authenticated users to delete clients
CREATE POLICY "Authenticated users can delete clients"
ON public.clients
FOR DELETE
USING (true);