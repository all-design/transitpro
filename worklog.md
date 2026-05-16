---
Task ID: 1
Agent: Main Agent
Task: Complete SEO/AEO/GEO optimization of Transit Pro website in all 7 languages + OG sharing image

Work Log:
- Generated OG sharing image using AI image generation (1344x768, plates on white background with Transit Pro branding)
- Updated layout.tsx with comprehensive SEO metadata:
  - Full meta tags (title template, description, keywords in all 7 languages, authors, creator, publisher)
  - Open Graph tags (title, description, image with dimensions/alt, locale with alternates, site name)
  - Twitter Card tags (summary_large_image, title, description, image, creator)
  - hreflang alternates for all 7 languages + x-default
  - Canonical URL
  - Robots directives with googleBot specifics (max-video-preview, max-image-preview, max-snippet)
  - Theme color, Apple mobile web app meta, business contact data
  - DNS prefetch/preconnect for Google Fonts
  - Sitemap link
- Added 5 SEO translation keys to i18n.ts for all 7 languages (seoMetaTitle, seoMetaDescription, seoOgTitle, seoOgDescription, seoOgImageAlt)
- Added JSON-LD structured data to page.tsx:
  - LocalBusiness schema (with address, geo, opening hours, area served for 10 countries, price range)
  - Service schema (with provider, service type, area served, offer catalog)
  - FAQPage schema (9 questions with accepted answers)
  - HowTo schema (5 steps with positions)
  - BreadcrumbList schema (2 levels)
  - WebSite schema (with publisher reference and inLanguage)
- Implemented dynamic head management via useSeoHead hook:
  - Updates document.title, meta description, OG tags, Twitter tags, html lang, canonical URL, hreflang links on language change
- Added AEO (Answer Engine Optimization):
  - FAQPage schema for Google featured snippets
  - HowTo schema for step-by-step process
  - Direct Q&A format in FAQ content
- Added GEO (Generative Engine Optimization):
  - Entity markers (Organization, LocalBusiness, Service, WebPage)
  - E-E-A-T signals (author, publisher, business address, opening hours, geo coordinates)
  - Authoritative content signals (structured data with detailed business info)
- Improved semantic HTML:
  - Added role attributes (banner, main, contentinfo, navigation, list, listitem, alert)
  - Added aria-label, aria-labelledby, aria-pressed, aria-expanded, aria-hidden
  - Added article, address, ol/ul with role="list"
  - Added itemScope/itemType/itemProp for microdata
  - Added autoComplete attributes to form fields
  - Added sr-only for screen reader content
  - Changed div to nav/ol/ul/article/address where semantically appropriate
- Updated robots.txt with comprehensive crawl directives, social media bot rules, and sitemap reference
- Created sitemap.xml with hreflang alternates, image extensions, and proper priority/changefreq
- Added clickable phone/email links in contact section (tel: and mailto: hrefs)

Stage Summary:
- All 7 languages have dedicated SEO meta translations
- 6 JSON-LD schemas embedded (LocalBusiness, Service, FAQPage, HowTo, BreadcrumbList, WebSite)
- Dynamic head management updates all meta tags on language switch
- OG image generated at /og-image.png (1344x768)
- Full accessibility improvements with ARIA attributes
- Sitemap and robots.txt properly configured
- Lint passes with zero errors
- Dev server compiles and renders successfully
