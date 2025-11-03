import { z } from 'zod';

// Shared schema for email content validation
export const emailContentSchema = z.object({
  subject: z.string()
    .trim()
    .min(1, 'Subject is required')
    .max(500, 'Subject must be less than 500 characters'),
  body: z.string()
    .trim()
    .min(1, 'Body is required')
    .max(50000, 'Body must be less than 50,000 characters'),
  notes: z.string()
    .max(5000, 'Notes must be less than 5,000 characters')
    .nullable()
    .optional(),
  contact_name: z.string()
    .trim()
    .min(1, 'Contact name is required')
    .max(200, 'Contact name must be less than 200 characters'),
  contact_email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
});

// Schema for updating email content (includes contact info)
export const emailUpdateSchema = emailContentSchema.pick({
  subject: true,
  body: true,
  notes: true,
  contact_name: true,
  contact_email: true
});
