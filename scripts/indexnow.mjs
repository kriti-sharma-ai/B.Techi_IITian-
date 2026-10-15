// Sends every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam and others share it).
// The key file public/<KEY>.txt must be live on the site first. Run: npm run indexnow
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.btechi.in";
const KEY = "2f2604c3ce6d40a0a6407d5f548a6222";

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (!urls.length) throw new Error("No URLs found in sitemap");

const keyRes = await fetch(`${SITE}/${KEY}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) throw new Error(`Key file ${SITE}/${KEY}.txt is not live yet. Deploy first.`);

// IndexNow takes up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls.slice(i, i + 10000),
    }),
  });
  console.log(`Sent ${urls.slice(i, i + 10000).length} URLs: ${res.status} ${res.statusText}`);
}
