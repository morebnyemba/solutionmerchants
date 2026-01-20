# Namecheap cPanel Deployment Guide for Solutions Merchants Website

This guide provides step-by-step instructions to deploy your Next.js website on Namecheap cPanel hosting.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Prepare Your Next.js App for Static Export](#step-1-prepare-your-nextjs-app-for-static-export)
3. [Step 2: Build the Static Export](#step-2-build-the-static-export)
4. [Step 3: Access Your Namecheap cPanel](#step-3-access-your-namecheap-cpanel)
5. [Step 4: Upload Files to cPanel](#step-4-upload-files-to-cpanel)
6. [Step 5: Configure .htaccess](#step-5-configure-htaccess)
7. [Step 6: Set Up SSL (HTTPS)](#step-6-set-up-ssl-https)
8. [Step 7: Test Your Deployment](#step-7-test-your-deployment)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- ✅ A Namecheap hosting plan with cPanel access
- ✅ Node.js 18+ installed on your local machine
- ✅ Access to your domain's DNS settings
- ✅ FTP client (FileZilla recommended) OR cPanel File Manager access
- ✅ Your domain pointed to Namecheap nameservers

---

## Step 1: Prepare Your Next.js App for Static Export

Since cPanel doesn't support Node.js runtime, we use Next.js static export feature to generate HTML/CSS/JS files.

### Configuration Already Updated

The `next.config.js` has been updated with:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

**What these options do:**
- `output: 'export'` - Generates a static HTML export
- `images: { unoptimized: true }` - Disables Next.js Image Optimization (not available in static export)
- `trailingSlash: true` - Adds trailing slashes to URLs for better cPanel compatibility

---

## Step 2: Build the Static Export

### On Your Local Machine:

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build the static export**:
   ```bash
   npm run build
   ```

3. **Locate the output folder**:
   After building, you'll find an `out` folder in your project root. This contains all the static files needed for deployment.

   ```
   solutionmerchants/
   └── out/
       ├── index.html
       ├── about/
       │   └── index.html
       ├── services/
       │   └── index.html
       ├── contact/
       │   └── index.html
       ├── _next/
       │   ├── static/
       │   └── ...
       └── ...
   ```

---

## Step 3: Access Your Namecheap cPanel

1. **Log in to Namecheap**:
   - Go to [namecheap.com](https://www.namecheap.com/)
   - Click "Sign In" and enter your credentials

2. **Access cPanel**:
   - Go to Dashboard → Domain List
   - Find your domain and click "Manage"
   - Scroll down to "cPanel" section
   - Click "Go to cPanel" button
   
   **Alternative direct URL**: `https://yourdomain.com:2083` or `https://yourdomain.com/cpanel`

---

## Step 4: Upload Files to cPanel

### Option A: Using cPanel File Manager (Recommended for smaller sites)

1. **Open File Manager**:
   - In cPanel, find "File Manager" under "Files" section
   - Click to open

2. **Navigate to public_html**:
   - Click on `public_html` folder (this is your website's root directory)
   - **Important**: If deploying to a subdomain, navigate to the appropriate subdomain folder

3. **Clear existing files** (if updating):
   - Select all existing files (except `.htaccess` if you have custom rules)
   - Delete them to ensure a clean deployment

4. **Upload the `out` folder contents**:
   - Click "Upload" button in the toolbar
   - Drag and drop ALL contents from your local `out` folder
   - Wait for upload to complete
   
   **Note**: Upload the CONTENTS of the `out` folder, not the folder itself!

5. **Verify file structure**:
   After upload, your `public_html` should look like:
   ```
   public_html/
   ├── index.html
   ├── about/
   ├── services/
   ├── contact/
   ├── _next/
   ├── favicon.ico
   └── ...
   ```

### Option B: Using FTP (FileZilla)

1. **Get FTP credentials from cPanel**:
   - In cPanel, go to "FTP Accounts"
   - Note down: Host, Username, Password, Port (usually 21)

2. **Connect with FileZilla**:
   ```
   Host: ftp.yourdomain.com (or your server IP)
   Username: your_ftp_username
   Password: your_ftp_password
   Port: 21
   ```

3. **Navigate and Upload**:
   - Left panel: Navigate to your local `out` folder
   - Right panel: Navigate to `public_html`
   - Select all files from `out` folder and drag to `public_html`

### Option C: Using ZIP Upload (Fastest for large sites)

1. **Compress locally**:
   - Navigate to your `out` folder
   - Select all files and create a ZIP file (e.g., `site.zip`)

2. **Upload ZIP to cPanel**:
   - Use File Manager to upload `site.zip` to `public_html`

3. **Extract in cPanel**:
   - Right-click on `site.zip`
   - Select "Extract"
   - Choose `public_html` as destination
   - Delete the ZIP file after extraction

---

## Step 5: Configure .htaccess

Create or update the `.htaccess` file in `public_html` for proper routing and security:

1. **In File Manager**, click "New File"
2. **Name it** `.htaccess` (with the dot at the beginning)
3. **Add the following content**:

```apache
# Enable Rewrite Engine
RewriteEngine On

# Force HTTPS (uncomment after SSL is set up)
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ /$1/ [L,R=301]

# Serve static files directly
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]

# Serve directory index
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Handle SPA routing (for any remaining routes)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Enable GZIP Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css application/json
    AddOutputFilterByType DEFLATE application/javascript text/javascript application/x-javascript
    AddOutputFilterByType DEFLATE text/xml application/xml application/xhtml+xml
    AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>

# Prevent access to sensitive files
<FilesMatch "^\.">
    Require all denied
</FilesMatch>
```

---

## Step 6: Set Up SSL (HTTPS)

### Option A: Free SSL via cPanel (AutoSSL)

1. **In cPanel**, find "SSL/TLS Status" or "AutoSSL"
2. **Run AutoSSL**: Click "Run AutoSSL" button
3. **Wait**: Certificate generation takes 5-15 minutes
4. **Verify**: Check that your domain shows "AutoSSL Domain Validated"

### Option B: Let's Encrypt (if available)

1. **In cPanel**, find "Let's Encrypt SSL"
2. **Issue Certificate**: Select your domain and click "Issue"
3. **Wait for confirmation**

### After SSL is Active:

1. **Update .htaccess** to force HTTPS:
   - Uncomment the HTTPS redirect lines in `.htaccess`
   
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

2. **Verify**: Visit `https://yourdomain.com` to confirm

---

## Step 7: Test Your Deployment

### Checklist:

- [ ] **Homepage loads**: Visit `https://yourdomain.com`
- [ ] **All pages work**: 
  - `/about/`
  - `/services/`
  - `/contact/`
  - `/privacy-policy/`
  - `/terms-and-conditions/`
- [ ] **Images load correctly**
- [ ] **CSS styles are applied**
- [ ] **JavaScript functionality works**
- [ ] **Mobile responsiveness works**
- [ ] **SSL/HTTPS is active** (padlock icon in browser)
- [ ] **Links work correctly** (no 404 errors)

### Browser Testing:
- Test on Chrome, Firefox, Safari, and Edge
- Test on mobile devices

---

## Troubleshooting

### Issue: 404 Error on Pages

**Solution**: Ensure `.htaccess` is properly configured and `trailingSlash: true` is set in `next.config.js`.

### Issue: CSS/JS Not Loading

**Solution**: 
1. Check browser console for errors
2. Ensure `_next` folder was uploaded correctly
3. Verify file permissions (644 for files, 755 for folders)

### Issue: Images Not Displaying

**Solution**: 
1. Ensure all image files from `public` folder are in the root of `public_html`
2. Check image paths in your code

### Issue: Mixed Content Warning

**Solution**: Ensure all resources use HTTPS. Update any hardcoded HTTP links.

### Issue: 500 Internal Server Error

**Solution**: 
1. Check `.htaccess` syntax
2. Temporarily rename `.htaccess` to test if it's the cause
3. Check cPanel Error Logs

### Issue: Slow Loading

**Solution**: 
1. Enable GZIP compression (in `.htaccess`)
2. Enable browser caching
3. Consider using Cloudflare CDN

### Setting File Permissions

If you encounter permission issues:

```
Files: 644
Folders: 755
```

In File Manager:
1. Right-click on file/folder
2. Select "Change Permissions"
3. Set appropriate values

---

## Updating Your Website

When you need to update your website:

1. **Make changes locally**
2. **Rebuild**: `npm run build`
3. **Upload new `out` folder contents** to `public_html`
4. **Clear browser cache** to see changes

### For Minor Updates:
Only upload the changed files to save time.

### For Major Updates:
Replace all files in `public_html` with new `out` folder contents.

---

## Performance Optimization Tips

1. **Enable Cloudflare** (Free CDN):
   - Sign up at cloudflare.com
   - Add your domain
   - Update nameservers

2. **Optimize Images**:
   - Use WebP format where possible
   - Compress images before deployment

3. **Enable cPanel Caching** (if available):
   - Look for "LiteSpeed Cache" or similar in cPanel

---

## Need Help?

- **Namecheap Support**: [support.namecheap.com](https://support.namecheap.com)
- **Next.js Static Export Docs**: [nextjs.org/docs/app/building-your-application/deploying/static-exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production (creates 'out' folder)
npm run build

# Lint check
npm run lint
```

---

*Last updated: January 2026*
