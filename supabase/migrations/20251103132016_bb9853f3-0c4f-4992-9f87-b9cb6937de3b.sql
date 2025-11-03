-- Create enum for influence principles
CREATE TYPE public.influence_principle AS ENUM (
  'Reciprocation',
  'Liking',
  'Social Proof',
  'Authority',
  'Scarcity',
  'Commitment/Consistency',
  'Unity',
  'Instant Influence'
);

-- Create enum for email status
CREATE TYPE public.email_status AS ENUM (
  'Draft',
  'Ready',
  'Exported',
  'Archived'
);

-- Create email_templates table
CREATE TABLE public.email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  influence_principle public.influence_principle NOT NULL,
  use_case TEXT NOT NULL,
  subject_template TEXT NOT NULL,
  body_template TEXT NOT NULL,
  variables_schema JSONB NOT NULL DEFAULT '[]'::jsonb,
  psychology_explanation TEXT NOT NULL,
  when_to_use TEXT,
  success_rate INTEGER,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create generated_emails table
CREATE TABLE public.generated_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id INTEGER NOT NULL,
  opportunity_id TEXT,
  template_id UUID REFERENCES public.email_templates(id),
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  influence_principle public.influence_principle NOT NULL,
  template_variables JSONB NOT NULL DEFAULT '{}'::jsonb,
  status public.email_status NOT NULL DEFAULT 'Draft',
  notes TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  exported_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generated_emails ENABLE ROW LEVEL SECURITY;

-- RLS Policies for email_templates (public read)
CREATE POLICY "Anyone can view active templates"
ON public.email_templates
FOR SELECT
USING (is_active = true);

-- RLS Policies for generated_emails (user-specific)
CREATE POLICY "Users can view their own generated emails"
ON public.generated_emails
FOR SELECT
USING (auth.uid() = created_by);

CREATE POLICY "Users can insert their own generated emails"
ON public.generated_emails
FOR INSERT
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own generated emails"
ON public.generated_emails
FOR UPDATE
USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own generated emails"
ON public.generated_emails
FOR DELETE
USING (auth.uid() = created_by);

-- Create trigger for updating updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_email_templates_updated_at
BEFORE UPDATE ON public.email_templates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_generated_emails_updated_at
BEFORE UPDATE ON public.generated_emails
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();