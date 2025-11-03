-- ========================================
-- COMPREHENSIVE SECURITY FIX
-- Implements RBAC and proper RLS policies
-- ========================================

-- 1. Create app_role enum for role-based access control
CREATE TYPE public.app_role AS ENUM ('admin', 'manager', 'sales', 'viewer');

-- 2. Create user_roles table to manage user permissions
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- 3. Create security definer function to check user roles
-- This prevents RLS recursion issues
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 4. Create client_access table to track user-client assignments
CREATE TABLE public.client_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  client_id INTEGER REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, client_id)
);

-- Enable RLS on client_access
ALTER TABLE public.client_access ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own client access
CREATE POLICY "Users can view their own client access"
ON public.client_access
FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Admins can manage all client access
CREATE POLICY "Admins can manage client access"
ON public.client_access
FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. DROP insecure policies on clients table
DROP POLICY IF EXISTS "Authenticated users can view clients" ON public.clients;
DROP POLICY IF EXISTS "Authenticated users can delete clients" ON public.clients;

-- 6. Create secure RLS policies for clients table
-- Users can only view clients they're assigned to OR if they're admin
CREATE POLICY "Users can view assigned clients"
ON public.clients
FOR SELECT
USING (
  auth.uid() IN (
    SELECT user_id FROM public.client_access WHERE client_id = clients.id
  )
  OR public.has_role(auth.uid(), 'admin')
);

-- Only admins can insert clients
CREATE POLICY "Admins can insert clients"
ON public.clients
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Users can update clients they're assigned to OR admins can update all
CREATE POLICY "Users can update assigned clients"
ON public.clients
FOR UPDATE
USING (
  auth.uid() IN (
    SELECT user_id FROM public.client_access WHERE client_id = clients.id
  )
  OR public.has_role(auth.uid(), 'admin')
);

-- Only admins can delete clients
CREATE POLICY "Only admins can delete clients"
ON public.clients
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- 7. DROP insecure policy on opportunities table
DROP POLICY IF EXISTS "Authenticated users can view opportunities" ON public.opportunities;

-- 8. Create secure RLS policies for opportunities table
-- Users can only view opportunities for clients they have access to
CREATE POLICY "Users can view opportunities for assigned clients"
ON public.opportunities
FOR SELECT
USING (
  client_id IN (
    SELECT client_id FROM public.client_access WHERE user_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
);

-- Admins can insert opportunities
CREATE POLICY "Admins can insert opportunities"
ON public.opportunities
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Users can update opportunities for their assigned clients
CREATE POLICY "Users can update opportunities for assigned clients"
ON public.opportunities
FOR UPDATE
USING (
  client_id IN (
    SELECT client_id FROM public.client_access WHERE user_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
);

-- Admins can delete opportunities
CREATE POLICY "Admins can delete opportunities"
ON public.opportunities
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));