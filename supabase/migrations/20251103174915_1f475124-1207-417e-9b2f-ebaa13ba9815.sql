-- Bootstrap first admin user (will use the first user in the system)
DO $$
DECLARE
  first_user_id uuid;
BEGIN
  -- Get the first user ID from auth.users
  SELECT id INTO first_user_id FROM auth.users ORDER BY created_at LIMIT 1;
  
  -- Only insert if a user exists and doesn't already have admin role
  IF first_user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (first_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END $$;

-- Make created_by NOT NULL with default
ALTER TABLE public.generated_emails 
ALTER COLUMN created_by SET DEFAULT auth.uid();

-- Update any existing NULL values to a placeholder (shouldn't exist but just in case)
UPDATE public.generated_emails 
SET created_by = (SELECT id FROM auth.users ORDER BY created_at LIMIT 1)
WHERE created_by IS NULL;

-- Now make it NOT NULL
ALTER TABLE public.generated_emails 
ALTER COLUMN created_by SET NOT NULL;

-- Add validation constraints for email content (drop first if they exist)
DO $$ 
BEGIN
  ALTER TABLE public.generated_emails DROP CONSTRAINT IF EXISTS subject_max_length;
  ALTER TABLE public.generated_emails DROP CONSTRAINT IF EXISTS body_max_length;
  ALTER TABLE public.generated_emails DROP CONSTRAINT IF EXISTS notes_max_length;
  ALTER TABLE public.generated_emails DROP CONSTRAINT IF EXISTS contact_name_max_length;
  ALTER TABLE public.generated_emails DROP CONSTRAINT IF EXISTS contact_email_max_length;
END $$;

ALTER TABLE public.generated_emails
ADD CONSTRAINT subject_max_length CHECK (length(subject) <= 500),
ADD CONSTRAINT body_max_length CHECK (length(body) <= 50000),
ADD CONSTRAINT notes_max_length CHECK (length(notes) <= 5000),
ADD CONSTRAINT contact_name_max_length CHECK (length(contact_name) <= 200),
ADD CONSTRAINT contact_email_max_length CHECK (length(contact_email) <= 255);