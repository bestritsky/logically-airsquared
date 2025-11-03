-- Create clients table
CREATE TABLE public.clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT,
  linkedin_url TEXT,
  industry TEXT,
  location TEXT,
  tier INTEGER CHECK (tier IN (1, 2, 3)),
  sector TEXT CHECK (sector IN ('Government', 'Healthcare', 'Financial', 'Manufacturing', 'Other')),
  deal_size TEXT,
  status TEXT CHECK (status IN ('Existing', 'Prospect')),
  win_rate INTEGER CHECK (win_rate >= 0 AND win_rate <= 100),
  timeline TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create opportunities table
CREATE TABLE public.opportunities (
  id TEXT PRIMARY KEY,
  client_id INTEGER NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  service_type TEXT NOT NULL CHECK (service_type IN ('Compliance', 'Managed Security', 'Cloud Services', 'Infrastructure', 'Strategic', 'Training')),
  year1_revenue INTEGER,
  year2_revenue INTEGER,
  year3_revenue INTEGER,
  win_rate INTEGER CHECK (win_rate >= 0 AND win_rate <= 100),
  timeline TEXT,
  drivers TEXT[],
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;

-- RLS Policies - authenticated users can view all clients and opportunities
CREATE POLICY "Authenticated users can view clients"
  ON public.clients FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view opportunities"
  ON public.opportunities FOR SELECT
  TO authenticated
  USING (true);

-- Triggers for updated_at
CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_opportunities_updated_at
  BEFORE UPDATE ON public.opportunities
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for performance
CREATE INDEX idx_opportunities_client_id ON public.opportunities(client_id);
CREATE INDEX idx_clients_sector ON public.clients(sector);
CREATE INDEX idx_clients_status ON public.clients(status);

-- Update generated_emails table to add foreign keys and fix security issue
ALTER TABLE public.generated_emails
  ADD CONSTRAINT fk_client
  FOREIGN KEY (client_id)
  REFERENCES public.clients(id)
  ON DELETE CASCADE;

ALTER TABLE public.generated_emails
  ADD CONSTRAINT fk_opportunity
  FOREIGN KEY (opportunity_id)
  REFERENCES public.opportunities(id)
  ON DELETE SET NULL;

-- Add indexes on generated_emails for performance
CREATE INDEX idx_generated_emails_client_id ON public.generated_emails(client_id);
CREATE INDEX idx_generated_emails_opportunity_id ON public.generated_emails(opportunity_id);
CREATE INDEX idx_generated_emails_status ON public.generated_emails(status);

-- Fix security issue: Add trigger to auto-set created_by to prevent forgery
CREATE OR REPLACE FUNCTION public.set_created_by()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.created_by = auth.uid();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_generated_emails_created_by
  BEFORE INSERT ON public.generated_emails
  FOR EACH ROW
  EXECUTE FUNCTION public.set_created_by();

-- Seed clients data
INSERT INTO public.clients (id, name, domain, linkedin_url, industry, location, tier, sector, deal_size, status, win_rate, timeline) VALUES
  (1, 'Mecklenburg County', 'mecklenburgcountync.gov', 'https://linkedin.com/company/mecklenburg-county', 'Government', 'Charlotte, NC', 1, 'Government', '$300K-$500K', 'Prospect', 60, '12-18 months'),
  (2, 'Maplewood Senior Living', 'maplewoods.com', 'https://linkedin.com/company/maplewood-senior-living', 'Healthcare', 'Westport, CT', 1, 'Healthcare', '$250K-$400K', 'Existing', NULL, 'Upsell - 6 months'),
  (3, 'Wake County', 'wakegov.com', 'https://linkedin.com/company/wake-county', 'Government', 'Raleigh, NC', 1, 'Government', '$250K-$450K', 'Prospect', 55, '12-18 months'),
  (4, 'Gaston County Government', 'gastongov.com', 'https://linkedin.com/company/gaston-county', 'Government', 'Gastonia, NC', 2, 'Government', '$60K-$215K', 'Prospect', 80, '10 months'),
  (5, 'City of Cleveland (Court System)', 'clevelandtn.gov', NULL, 'Government', 'Cleveland, OH', 2, 'Government', '$100K-$180K', 'Existing', NULL, 'Expansion - 6 months'),
  (6, 'Morgan Creek Capital Management', 'morgancreekcap.com', 'https://linkedin.com/company/morgan-creek-capital-management', 'Financial Services', 'Chapel Hill, NC', 2, 'Financial', '$100K-$180K', 'Existing', NULL, 'Upsell - 4 months'),
  (7, 'Churchill County Government', 'churchillcounty.org', NULL, 'Government', 'Fallon, NV', 3, 'Government', '$40K-$80K', 'Existing', NULL, 'Upsell - 4-6 months'),
  (8, 'La Costa Dental Group', 'lacostadental.com', NULL, 'Healthcare', 'California', 3, 'Healthcare', '$40K-$75K', 'Existing', NULL, 'Retention + Upsell'),
  (9, 'INSURLYNX', 'insurlynx.com', NULL, 'Insurance', 'Trumbull, CT', 3, 'Financial', '$30K-$60K', 'Existing', NULL, 'Retention'),
  (10, 'Catholic Charities Maine', 'ccmaine.org', NULL, 'Nonprofit', 'Portland, ME', 2, 'Other', '$80K-$150K', 'Existing', NULL, 'Expansion - 6 months');

-- Seed opportunities data
INSERT INTO public.opportunities (id, client_id, name, description, service_type, year1_revenue, year2_revenue, year3_revenue, win_rate, timeline, drivers) VALUES
  ('meck-1', 1, 'Enterprise CJIS Compliance Program', 'County-wide CJIS compliance for law enforcement', 'Compliance', 150000, 160000, 170000, 75, '12-15 months', ARRAY['Mandatory FBI requirement', 'Police department expansion', 'Audit deadline pressure', 'Multi-agency coordination']),
  ('meck-2', 1, 'County-wide Managed SOC', '24/7 security operations center for all county systems', 'Managed Security', 200000, 220000, 240000, 60, '15-18 months', ARRAY['Critical infrastructure protection', 'Rising ransomware threats', '24/7 monitoring gap', 'Executive visibility needs']),
  ('meck-3', 1, 'HIPAA for Health & Human Services', 'HIPAA compliance for county health departments', 'Compliance', 80000, 85000, 90000, 70, '10-12 months', ARRAY['Public health PHI protection', 'OCR audit exposure', 'Social services systems', 'Natural follow-on to CJIS']),
  ('meck-4', 1, 'Cloud Migration to Azure Government', 'Migrate critical systems to secure cloud', 'Cloud Services', 120000, 100000, 100000, 55, '18-24 months', ARRAY['Aging infrastructure', 'FedRAMP compliance needs', 'Cost optimization', 'Disaster recovery improvements']),
  ('maple-1', 2, 'HIPAA Compliance Program (16 locations)', 'Multi-location HIPAA compliance framework', 'Compliance', 120000, 130000, 140000, 95, '3-6 months', ARRAY['Existing relationship strength', 'Multi-location scaling opportunity', 'OCR audit risk mitigation', 'PHI protection mandate']),
  ('maple-2', 2, 'Healthcare Security Services (SOC)', '24/7 managed security for healthcare operations', 'Managed Security', 150000, 165000, 180000, 90, '6-9 months', ARRAY['PHI protection requirements', '24/7 monitoring needed', 'Ransomware defense', 'Healthcare threat landscape']),
  ('maple-3', 2, 'Medical IoT Security', 'Secure nurse call systems and medical devices', 'Infrastructure', 60000, 70000, 80000, 85, '9-12 months', ARRAY['Vulnerable medical devices', 'Nurse call system security', 'Resident tracking protection', 'IoT attack surface']),
  ('maple-4', 2, 'Ransomware Protection & DR', 'Backup, disaster recovery, and ransomware defense', 'Cloud Services', 80000, 90000, 100000, 80, '12 months', ARRAY['Healthcare ransomware epidemic', 'Backup infrastructure gaps', 'Business continuity needs', 'Recovery time objectives']),
  ('wake-1', 3, 'CJIS Compliance for Law Enforcement', 'Enterprise CJIS program for sheriff and police', 'Compliance', 120000, 130000, 140000, 65, '12-18 months', ARRAY['FBI compliance mandate', 'Multi-agency coordination', 'County growth trajectory', 'Criminal justice modernization']),
  ('wake-2', 3, 'HIPAA for Public Health & EMS', 'HIPAA compliance for health and emergency services', 'Compliance', 90000, 95000, 100000, 60, '15-18 months', ARRAY['Public health PHI systems', 'EMS patient data protection', 'OCR enforcement actions', 'COVID response lessons']),
  ('wake-3', 3, 'Managed XDR Deployment', 'Extended detection and response across county', 'Managed Security', 180000, 195000, 210000, 55, '18-24 months', ARRAY['Advanced threat detection', 'Unified security platform', 'Automated response needs', 'SOC efficiency gains']),
  ('wake-4', 3, 'vCISO Strategic Services', 'Virtual CISO and strategic IT leadership', 'Strategic', 80000, 85000, 90000, 50, '12-15 months', ARRAY['Leadership gap in security', 'Board-level reporting needs', 'Strategic planning support', 'Risk management framework']),
  ('gaston-1', 4, 'AI Strategy Workshop Series', 'Executive AI adoption and strategy workshops', 'Strategic', 75000, 150000, 225000, 90, '6 months', ARRAY['Executive visibility with Henry', 'Natural expansion opportunity', 'Proven ROI track record', 'AI hype momentum']),
  ('gaston-2', 4, 'CJIS Compliance-as-a-Service', 'Managed CJIS compliance for sheriff''s office', 'Compliance', 60000, 65000, 70000, 80, '10 months', ARRAY['FBI mandate compliance', 'Sheriff audit deadlines', 'Police department pain', 'Budget approval secured']),
  ('gaston-3', 4, 'Managed Firewall for CJIS Systems', 'Managed firewall and network security', 'Infrastructure', 50000, 55000, 60000, 75, '12 months (post-CJIS)', ARRAY['Natural follow-on service', 'Lower sales friction', 'Established trust', 'Network security gap']),
  ('cleve-1', 5, 'Enhanced CJIS for Court Systems', 'Expanded CJIS compliance for criminal courts', 'Compliance', 75000, 80000, 85000, 85, '6-9 months', ARRAY['Existing client upsell', 'Court expansion project', 'FBI audit requirements', 'Case management integration']),
  ('cleve-2', 5, 'Case Management Security Platform', 'Secure case management and document systems', 'Infrastructure', 40000, 42000, 44000, 80, '9-12 months', ARRAY['Sensitive court records', 'E-filing security needs', 'Public access systems', 'Compliance requirements']),
  ('cleve-3', 5, '24/7 Managed SOC for Criminal Data', 'Security operations center for court systems', 'Managed Security', 120000, 130000, 140000, 75, '12-15 months', ARRAY['24/7 monitoring requirement', 'Criminal data protection', 'Incident response needs', 'Threat intelligence']),
  ('morgan-1', 6, 'SOC 2 Type II Audit Support', 'SOC 2 compliance and audit preparation', 'Compliance', 60000, 65000, 70000, 90, '4-6 months', ARRAY['Client requirement mandate', 'Institutional investor demands', 'Competitive differentiation', 'Existing relationship']),
  ('morgan-2', 6, 'Financial Services Managed SOC', '24/7 SOC tailored for financial services', 'Managed Security', 90000, 100000, 110000, 85, '6-9 months', ARRAY['Financial threat landscape', 'Portfolio protection', 'SEC cybersecurity rules', '24/7 coverage gap']),
  ('morgan-3', 6, 'Advanced Threat Intelligence', 'Financial sector threat intelligence feeds', 'Managed Security', 40000, 45000, 50000, 80, '9-12 months', ARRAY['Sophisticated threat actors', 'Investment protection', 'Dark web monitoring', 'Executive reporting']),
  ('church-1', 7, 'CJIS Compliance Program Expansion', 'Enhanced CJIS for sheriff''s office', 'Compliance', 35000, 38000, 40000, 95, '3-6 months', ARRAY['Existing client upsell', 'Strong relationship', 'FBI requirement expansion', 'Budget already approved']),
  ('church-2', 7, 'SentryXDR Deployment', 'Extended detection and response platform', 'Managed Security', 30000, 33000, 36000, 85, '6-9 months', ARRAY['Advanced threat protection', 'Unified security platform', 'Automated response', 'Small county efficiency needs']),
  ('church-3', 7, 'vCISO Advisory Services', 'Part-time virtual CISO support', 'Strategic', 40000, 42000, 44000, 80, '9-12 months', ARRAY['No in-house security leadership', 'Strategic guidance needed', 'Cost-effective solution', 'Board reporting requirements']),
  ('dental-1', 8, 'Enhanced HIPAA Services', 'Expanded HIPAA compliance program', 'Compliance', 20000, 22000, 24000, 95, '2-4 months', ARRAY['Existing client retention', 'Low-friction upsell', 'OCR audit protection', 'Practice expansion support']),
  ('dental-2', 8, 'Dental Practice Cloud Migration', 'Cloud migration for practice management', 'Cloud Services', 30000, 15000, 15000, 85, '6-9 months', ARRAY['Aging server infrastructure', 'Practice management upgrade', 'Backup and DR improvement', 'Remote work enablement']),
  ('dental-3', 8, 'Advanced Threat Protection', 'Email security and endpoint protection', 'Managed Security', 15000, 16000, 17000, 80, '9-12 months', ARRAY['Phishing attack increase', 'Ransomware protection', 'Patient data security', 'Small practice vulnerability']),
  ('insur-1', 9, 'Insurance Regulatory Compliance', 'Insurance industry compliance framework', 'Compliance', 20000, 22000, 24000, 90, '4-6 months', ARRAY['State insurance regulations', 'NAIC model law compliance', 'Customer data protection', 'Existing relationship']),
  ('insur-2', 9, 'Enhanced Backup & DR', 'Business continuity and disaster recovery', 'Cloud Services', 15000, 16000, 17000, 85, '6-9 months', ARRAY['Ransomware protection', 'Business continuity planning', 'Backup gaps identified', 'Regulatory requirements']),
  ('insur-3', 9, 'vCISO for Small Business', 'Part-time virtual CISO guidance', 'Strategic', 25000, 27000, 29000, 75, '9-12 months', ARRAY['No security leadership', 'Strategic planning needs', 'Cost-effective solution', 'Insurance industry expertise']),
  ('catholic-1', 10, 'HIPAA Compliance Program', 'HIPAA for social services and healthcare', 'Compliance', 50000, 55000, 60000, 85, '6-9 months', ARRAY['Social services PHI protection', 'Grant compliance requirements', 'OCR audit exposure', 'Multi-program coverage']),
  ('catholic-2', 10, 'Grant Security Requirements', 'Federal grant cybersecurity compliance', 'Compliance', 30000, 32000, 34000, 80, '9-12 months', ARRAY['Federal grant mandates', 'FEMA funding requirements', 'HHS grant compliance', 'Audit protection']),
  ('catholic-3', 10, 'Nonprofit IT Strategy & vCISO', 'Strategic IT planning and security leadership', 'Strategic', 40000, 43000, 46000, 75, '12 months', ARRAY['Limited IT resources', 'Strategic planning gap', 'Diocese coordination', 'Mission-critical systems']);