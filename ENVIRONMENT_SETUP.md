# Environment Variables Setup

This document explains how to set up environment variables for the MWMTECH Next.js application to secure sensitive credentials.

## Required Environment Variables

Create a `.env.local` file in the root directory of your project with the following variables:

```bash
# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@mwmofficiel.com
SMTP_PASS=your_smtp_password_here

# Email Configuration
FROM_EMAIL=contact@mwmofficiel.com
FROM_NAME=MWMTECH
TEAM_EMAIL=your_team_email@example.com

# Application URLs
WEBSITE_URL=https://mwmofficiel.com
CALENDAR_URL=https://calendar.app.google/jaYqRDByx9pUrK1X8
```

## Environment Variables Explained

### SMTP Configuration
- `SMTP_HOST`: Your SMTP server hostname
- `SMTP_PORT`: SMTP server port (usually 465 for SSL)
- `SMTP_USER`: Your SMTP username/email
- `SMTP_PASS`: Your SMTP password

### Email Configuration
- `FROM_EMAIL`: The email address that will appear as the sender
- `FROM_NAME`: The name that will appear as the sender
- `TEAM_EMAIL`: Email address where form submissions will be sent

### Application URLs
- `WEBSITE_URL`: Your website URL (used in email templates)
- `CALENDAR_URL`: Your calendar booking URL (used in email templates)

## Setup Instructions

1. **Create the environment file:**
   ```bash
   cp config/env.example .env.local
   ```

2. **Edit the `.env.local` file:**
   - Replace `your_smtp_password_here` with your actual SMTP password
   - Replace `your_team_email@example.com` with your actual team email
   - Update other values as needed

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

## Security Notes

- **Never commit `.env.local` to version control**
- The `.env.local` file is already included in `.gitignore`
- Use different credentials for development and production
- Consider using a service like Vercel's environment variables for production deployments

## API Routes Updated

The following API routes now use environment variables:

- `app/api/cold_email/route.ts` - Cold email functionality
- `app/api/submitForm/route.ts` - Contact form submissions

Both routes will fall back to default values if environment variables are not set, but it's recommended to set them properly for security.
