# AltorLab Pre-Launch Checklist

## Environment Variables (set in Vercel dashboard)
- [ ] REPLICATE_API_TOKEN — from replicate.com/account/api-tokens
- [ ] RAZORPAY_KEY_ID — from razorpay.com dashboard
- [ ] RAZORPAY_KEY_SECRET — from razorpay.com dashboard
- [ ] NEXT_PUBLIC_RAZORPAY_KEY_ID — same as RAZORPAY_KEY_ID
- [ ] NEXT_PUBLIC_GA_ID — from Google Analytics
- [ ] BLOB_READ_WRITE_TOKEN — from Vercel Blob (optional)
- [ ] INDEXNOW_KEY — altorlab2026indexnow

## DNS (Porkbun)
- [ ] A records: altorlab.org → 185.199.108-111.153
- [ ] CNAME: www → altorlab.org
- [ ] CNAME: app → cname.vercel-dns.com

## Razorpay
- [ ] Switch test → live keys
- [ ] Test ₹1 transaction

## Post-Deploy
- [ ] curl https://app.altorlab.org/api/health → {"status":"ok"}
- [ ] curl https://app.altorlab.org/robots.txt → valid
- [ ] curl https://app.altorlab.org/sitemap.xml → 29+ URLs
- [ ] Test full flow: upload → style → pay → result → download
- [ ] Run npm run submit (IndexNow/Bing)
- [ ] Submit sitemap to Google Search Console

## Launch Channels
- [ ] IndieHackers post
- [ ] Reddit: r/InteriorDesign, r/HomeImprovement, r/SideProject
- [ ] Product Hunt
- [ ] Twitter/X thread
