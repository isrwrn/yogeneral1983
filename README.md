# Y.O. General Supply (1983) — Website V2

Static multi-page website prepared for Cloudflare Workers Static Assets.

## Main routes
- /
- /shop/
- /our-service/
- /about-yogeneral/
- /contact/
- /ร่วมงานกับเรา/
- /privacy-policy-2/
- /product-category/all-product/
- 7 primary product-category pages

## SEO / AEO / GEO foundation
- Per-page titles and meta descriptions
- Canonical URLs
- Organization / WebSite / WebPage structured data
- BreadcrumbList, FAQPage, Service and ItemList where relevant
- Internal linking
- robots.txt
- sitemap.xml
- llms.txt (supplementary only; not required by Google)

## Important
1. The Workers staging URL should use the STAGING package (noindex) until www.yogeneral1983.com is pointed to this site.
2. The Production package should be used only when the real domain is cut over.
3. Individual legacy product pages (the full 139-product catalog) have NOT yet been migrated in this package.
4. Privacy content is a web structure draft and should be reviewed by the company's PDPA/legal owner before production.
5. The static quote form opens the user's email client; it does not submit to a server.

## Deploy
Extract the ZIP into the repository root and commit to main.
Cloudflare's existing Git integration should deploy automatically.
