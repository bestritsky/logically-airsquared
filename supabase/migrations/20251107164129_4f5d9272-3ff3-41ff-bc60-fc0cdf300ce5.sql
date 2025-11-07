-- Add assigned_to column to clients table
ALTER TABLE public.clients 
ADD COLUMN assigned_to uuid REFERENCES auth.users(id) ON DELETE SET NULL;

-- Create index for better query performance
CREATE INDEX idx_clients_assigned_to ON public.clients(assigned_to);

-- Update RLS policy to allow users to see clients assigned to them
-- (This is already covered by the existing client_access table, so no changes needed)