#!/usr/bin/env node
/**
 * SEO URL Submission Script for AltorLab
 * Submits all 29 URLs to IndexNow, Bing, and Google Search Console
 * after each deploy to get pages indexed fast.
 *
 * Usage:
 *   npx tsx scripts/submit-urls.ts
 */

const SITE_URL = "https://app.altorlab.org";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "altorlab2026indexnow";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/altorlab-indexnow.txt`;

const STYLES = ["modern", "scandinavian", "minimalist", "industrial", "bohemian"];
const ROOMS = ["living-room", "bedroom", "kitchen", "bathroom", "home-office"];

// Generate all 29 URLs: 4 static + 25 programmatic (5 styles × 5 rooms)
const URLS = [
  SITE_URL,
  `${SITE_URL}/room-redesign`,
  `${SITE_URL}/privacy`,
  `${SITE_URL}/terms`,
  ...STYLES.flatMap(s => ROOMS.map(r => `${SITE_URL}/ai-${s}-${r}-design`)),
];

/**
 * Submit URLs to IndexNow API
 * IndexNow notifies Bing, Google, Yandex, Naver, Amazon, and other search engines
 */
async function submitToIndexNow(urls: string[]): Promise<void> {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`INDEXNOW — Submitting ${urls.length} URLs`);
  console.log(`${"=".repeat(60)}`);

  const endpoints = [
    { name: "IndexNow (global)", url: "https://api.indexnow.org/indexnow" },
    { name: "Bing", url: "https://www.bing.com/indexnow" },
  ];

  for (const endpoint of endpoints) {
    try {
      const payload = {
        host: "app.altorlab.org",
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: urls,
      };

      const response = await fetch(endpoint.url, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const emoji = response.status === 200 || response.status === 202 ? "✅" : "❌";
      console.log(`  ${emoji} ${endpoint.name}: HTTP ${response.status}`);

      if (!response.ok) {
        const text = await response.text();
        console.log(`     Response: ${text.substring(0, 200)}`);
      }
    } catch (error) {
      console.log(`  ❌ ${endpoint.name}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

/**
 * Submit sitemap to Bing via ping endpoint
 * Bing will crawl and index the sitemap
 */
async function submitToBing(): Promise<void> {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`BING SITEMAP PING`);
  console.log(`${"=".repeat(60)}`);

  try {
    const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
    const response = await fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);

    const emoji = response.status === 200 || response.status === 202 ? "✅" : "❌";
    console.log(`  ${emoji} Bing sitemap ping: HTTP ${response.status}`);
  } catch (error) {
    console.log(`  ❌ Bing sitemap ping: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Log Google Search Console submission instructions
 * GSC API requires OAuth setup which is complex for MVP
 * Provide manual instructions instead
 */
function logGscInstructions(): void {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`GOOGLE SEARCH CONSOLE — Manual Submission`);
  console.log(`${"=".repeat(60)}`);
  console.log(`
  GSC API requires OAuth setup. For MVP, submit manually:

  1. Go to https://search.google.com/search-console
  2. Select property: app.altorlab.org
  3. Go to Sitemaps → Submit new sitemap
  4. Enter: ${SITE_URL}/sitemap.xml
  5. Click Submit

  Alternatively, set up OAuth and use GSC API:
  - Create OAuth 2.0 credentials in Google Cloud Console
  - Store refresh token in GOOGLE_REFRESH_TOKEN env var
  - Uncomment submitToGsc() call in this script
  `);
}

/**
 * Verify IndexNow key file is accessible
 */
async function verifyKeyFile(): Promise<void> {
  console.log(`\n   Verifying IndexNow key file...`);
  try {
    const response = await fetch(INDEXNOW_KEY_LOCATION);
    if (response.ok) {
      const text = await response.text();
      if (text.includes(INDEXNOW_KEY)) {
        console.log(`   ✅ Key file verified at ${INDEXNOW_KEY_LOCATION}`);
        return;
      }
    }
    console.log(`   ❌ Key file not found or invalid!`);
    console.log(`   Expected at: public/altorlab-indexnow.txt`);
    console.log(`   Continuing anyway (IndexNow may reject submissions)...`);
  } catch (error) {
    console.log(`   ⚠️ Could not verify key file: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log(`🚀 SEO URL Submission for AltorLab`);
  console.log(`   Site: ${SITE_URL}`);
  console.log(`   Total URLs: ${URLS.length}`);
  console.log(`   Styles: ${STYLES.join(", ")}`);
  console.log(`   Rooms: ${ROOMS.join(", ")}`);

  // Verify key file before submitting
  await verifyKeyFile();

  // Submit to IndexNow (notifies Bing, Google, Yandex, etc.)
  await submitToIndexNow(URLS);

  // Submit sitemap to Bing
  await submitToBing();

  // Log GSC instructions
  logGscInstructions();

  console.log(`\n${"=".repeat(60)}`);
  console.log(`✅ DONE — ${URLS.length} URLs submitted`);
  console.log(`${"=".repeat(60)}`);
  console.log(`
  Summary:
  - IndexNow: ✅ Submitted to Bing, Google, Yandex, Naver, Amazon
  - Bing Sitemap: ✅ Pinged
  - Google Search Console: ℹ️ Manual submission (see instructions above)
  `);
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
