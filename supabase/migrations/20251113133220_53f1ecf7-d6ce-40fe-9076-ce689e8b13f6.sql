-- Drop generated_emails table
DROP TABLE IF EXISTS public.generated_emails CASCADE;

-- Drop email_templates table
DROP TABLE IF EXISTS public.email_templates CASCADE;

-- Drop custom types
DROP TYPE IF EXISTS public.email_status CASCADE;
DROP TYPE IF EXISTS public.influence_principle CASCADE;