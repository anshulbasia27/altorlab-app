# AltorLab Deployment Guide

This guide covers deploying `consumer/altorlab-app/` to Vercel and `consumer/altorlab-landing/` to GitHub Pages with custom domains via Porkbun DNS.

## Prerequisites

Before starting, ensure you have:

1. **Vercel Account** — Sign up at https://vercel.com
2. **GitHub Account** — With push access to the repository
3. **Porkbun Account** — Domain registrar (https://porkbun.com)
4. **API Keys & Credentials**:
   - Replicate API token (https://replicate.com/account/api-tokens)
   - Razorpay Key ID & Secret (https://dashboard.razorpay.com/app/keys)
   - Google Analytics 4 Measurement ID (https://analytics.google.com)
   - Vercel Blob token (for image storage)
   - IndexNow key (for SEO submission)

---

## Part 1: Vercel Setup (app.altorlab.org)

### Step 1.1: Import Repository to Vercel

1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Paste your GitHub repository URL
4. Select `consumer/altorlab-app` as the root directory
5. Click "Import"

### Step 1.2: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```
REPLICATE_API_TOKEN=<your-replicate-token>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-secret>
NEXT_PUBLIC_RAZORPAY_KEY_ID=<your-public-razorpay-key>
NEXT_PUBLIC_GA_ID=<your-ga4-measurement-id>
BLOB_READ_WRITE_TOKEN=<your-vercel-blob-token>
INDEXNOW_KEY=altorlab2026indexnow
```

**Important**: 
- `NEXT_PUBLIC_*` variables are exposed to the browser (safe for public keys)
- All other variables are server-only (secrets)
- Do NOT commit `.env.local` to git

### Step 1.3: Connect Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Click "Add Domain"
3. Enter `app.altorlab.org`
4. Vercel will show DNS configuration instructions
5. **Do NOT configure DNS yet** — we'll do this in Porkbun (Step 3)

---

## Part 2: GitHub Pages Setup (altorlab.org)

### Step 2.1: Enable GitHub Pages

1. Go to your GitHub repository → Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Select branch: `main`
4. Select folder: `/consumer/altorlab-landing`
5. Click "Save"

### Step 2.2: Configure CNAME File

The landing page should have a `CNAME` file at `consumer/altorlab-landing/CNAME`:

```
altorlab.org
```

This file tells GitHub Pages which domain to serve the landing page on.

### Step 2.3: Verify GitHub Pages Deployment

1. Go to Settings → Pages
2. You should see: "Your site is live at https://altorlab.org"
3. Note: It may take 5-10 minutes for the first deployment

---

## Part 3: Porkbun DNS Configuration

### Step 3.1: Access Porkbun DNS Settings

1. Log in to https://porkbun.com
2. Go to "Domain Management" → Select `altorlab.org`
3. Click "DNS" tab
4. You'll see existing DNS records

### Step 3.2: Configure DNS Records for GitHub Pages (altorlab.org)

Add these **A records** for the root domain:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

Add this **CNAME record** for www subdomain:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | altorlab.org | 3600 |

### Step 3.3: Configure DNS Records for Vercel (app.altorlab.org)

Add this **CNAME record**:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | app | cname.vercel-dns.com | 3600 |

### Step 3.4: Verify DNS Propagation

DNS changes can take 5-30 minutes to propagate globally. Verify with:

```bash
# Check GitHub Pages A records
nslookup altorlab.org

# Check Vercel CNAME
nslookup app.altorlab.org

# Verify HTTPS works
curl -I https://altorlab.org
curl -I https://app.altorlab.org
```

---

## Part 4: GitHub Actions Deployment Automation

### Step 4.1: Vercel Deployment Workflow

The file `.github/workflows/deploy.yml` in `consumer/altorlab-app/` automatically deploys to Vercel on every push to `main`.

**Required GitHub Secrets**:
1. Go to Repository → Settings → Secrets and variables → Actions
2. Add these secrets:
   - `VERCEL_TOKEN` — Get from https://vercel.com/account/tokens
   - `REPLICATE_API_TOKEN`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
   - `NEXT_PUBLIC_GA_ID`
   - `BLOB_READ_WRITE_TOKEN`
   - `INDEXNOW_KEY`

### Step 4.2: GitHub Pages Deployment Workflow

The file `.github/workflows/deploy.yml` in `consumer/altorlab-landing/` automatically deploys to GitHub Pages on every push to `main`.

**No additional secrets needed** — GitHub Pages uses the default `GITHUB_TOKEN`.

---

## Part 5: Post-Deployment Verification

### Step 5.1: Health Checks

```bash
# Check app.altorlab.org API
curl -s https://app.altorlab.org/api/health | jq '.status'
# Expected: "ok"

# Check landing page
curl -s https://altorlab.org | grep -q "AltorLab" && echo "Landing page live"

# Check robots.txt
curl -s https://app.altorlab.org/robots.txt | head -5

# Check sitemap
curl -s https://app.altorlab.org/sitemap.xml | grep -c "<url>"
# Expected: ≥50 URLs
```

### Step 5.2: SSL Certificate Verification

Both domains should have valid HTTPS certificates:

```bash
curl -I https://altorlab.org | grep -i "ssl"
curl -I https://app.altorlab.org | grep -i "ssl"
```

### Step 5.3: Lighthouse Audit

```bash
npx lighthouse https://app.altorlab.org --output json --chrome-flags="--headless"
```

Target scores:
- Performance: ≥ 90
- SEO: ≥ 95
- Accessibility: ≥ 90

---

## Part 6: SEO Submission (IndexNow + Google Search Console)

### Step 6.1: Submit URLs to IndexNow

After deployment, run the submission script:

```bash
cd consumer/altorlab-app
npm run submit
```

This script:
- Submits all 50 programmatic pages to IndexNow
- Submits sitemap to Google Search Console
- Submits sitemap to Bing Webmaster Tools

### Step 6.2: Verify in Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://app.altorlab.org`
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://app.altorlab.org/sitemap.xml`
5. Monitor "Coverage" report for indexing status

### Step 6.3: Verify in Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site: `https://app.altorlab.org`
3. Verify ownership
4. Submit sitemap

---

## Part 7: Environment Variables Checklist

Ensure all these variables are configured in Vercel:

| Variable | Type | Source | Required |
|----------|------|--------|----------|
| `REPLICATE_API_TOKEN` | Secret | https://replicate.com/account/api-tokens | ✅ |
| `RAZORPAY_KEY_ID` | Secret | https://dashboard.razorpay.com/app/keys | ✅ |
| `RAZORPAY_KEY_SECRET` | Secret | https://dashboard.razorpay.com/app/keys | ✅ |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Public | https://dashboard.razorpay.com/app/keys | ✅ |
| `NEXT_PUBLIC_GA_ID` | Public | https://analytics.google.com | ✅ |
| `BLOB_READ_WRITE_TOKEN` | Secret | https://vercel.com/account/storage/blob | ✅ |
| `INDEXNOW_KEY` | Secret | Generated (altorlab2026indexnow) | ✅ |

---

## Part 8: Troubleshooting

### Domain Not Resolving

**Problem**: `curl https://app.altorlab.org` returns connection error

**Solution**:
1. Verify DNS records in Porkbun (Step 3.2-3.3)
2. Wait 30 minutes for DNS propagation
3. Clear local DNS cache: `sudo dscacheutil -flushcache` (macOS)
4. Check DNS with: `nslookup app.altorlab.org`

### Vercel Deployment Fails

**Problem**: GitHub Actions workflow fails

**Solution**:
1. Check GitHub Actions logs: Repository → Actions → Latest workflow
2. Verify `VERCEL_TOKEN` is set in GitHub Secrets
3. Ensure `consumer/altorlab-app/` directory exists
4. Run locally: `npm run build` to verify build succeeds

### GitHub Pages Not Updating

**Problem**: Landing page changes don't appear

**Solution**:
1. Verify `CNAME` file exists in `consumer/altorlab-landing/`
2. Check GitHub Pages deployment: Settings → Pages → "Deployments"
3. Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete on macOS)
4. Wait 5 minutes for GitHub Pages to rebuild

### SSL Certificate Issues

**Problem**: Browser shows "Not Secure" warning

**Solution**:
1. Wait 24 hours for certificate issuance (first-time setup)
2. Verify domain is correctly configured in Vercel/GitHub Pages
3. Check certificate status: https://www.sslshopper.com/ssl-checker.html

---

## Part 9: Ongoing Maintenance

### Weekly Tasks

- Monitor Vercel deployment logs for errors
- Check Google Search Console for indexing issues
- Review GA4 analytics for traffic patterns

### Monthly Tasks

- Run Lighthouse audit to track performance
- Check for broken links using a tool like Screaming Frog
- Review Razorpay payment logs for transaction issues

### Quarterly Tasks

- Update dependencies: `npm update`
- Review and update programmatic SEO pages
- Analyze competitor content for new opportunities

---

## Quick Reference

| Service | URL | Purpose |
|---------|-----|---------|
| Vercel Dashboard | https://vercel.com | Deploy & monitor app |
| GitHub Pages | https://github.com/settings/pages | Deploy landing page |
| Porkbun DNS | https://porkbun.com | Manage DNS records |
| Google Search Console | https://search.google.com/search-console | Monitor indexing |
| Bing Webmaster | https://www.bing.com/webmasters | Monitor Bing indexing |
| Razorpay Dashboard | https://dashboard.razorpay.com | Monitor payments |
| Replicate API | https://replicate.com | Monitor AI generation |
| Google Analytics | https://analytics.google.com | Monitor traffic |

---

## Support

For issues:
1. Check the Troubleshooting section (Part 8)
2. Review GitHub Actions logs for deployment errors
3. Check Vercel deployment logs: Dashboard → Deployments
4. Verify environment variables are set correctly
5. Test locally: `npm run dev` and `npm run build`
