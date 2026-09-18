# Prestige Growth Pathways

Marketing website for Prestige Tutelage, built with Vite, React, Tailwind CSS and Framer Motion. Light blue/green design with Poppins typography.

## Production target

https://prestigegrowthpathways.co.za/

This is a separate website. Do not extract its build into the existing Prestige Tutelage or Zanokuhle document roots.

## Build and preview

```bash
npm ci
npm run build
npm run preview
```

The production files are generated in `dist/`. Upload the contents, not the containing folder. HostAfrica needs the included hidden `.htaccess` file for direct links and refreshes.

## HostAfrica deployment

1. Use the separate HostAfrica domain `prestigegrowthpathways.co.za`.
2. In File Manager, open `domains/prestigegrowthpathways.co.za/public_html`, as shown in the hosting account. Keep this domain root separate from other websites.
3. Confirm the domain's document root before uploading.
4. Back up any files already in that exact document root.
5. Extract the deployment ZIP there. `index.html`, `.htaccess`, `assets/`, `images/` and `videos/` must be directly inside that root.
6. Enable SSL and HTTPS in the HostAfrica control panel after DNS resolves to this hosting account.
7. Test the homepage, a direct link such as `/about`, refreshes, video, mobile navigation and email enquiry links.
8. Move the uploaded ZIP outside the public document root after extraction.

The package does not change DNS, create the subdomain or install SSL. Those remain hosting-account steps. The local preview server does not execute Apache's `.htaccess`; direct-route behaviour must also be checked after upload.

## Pages

Home, About, Platform, Training Solutions, Industries, Contact, Book a Consultation and Request a Proposal. Unknown routes display a not-found page.

## Enquiries

All three forms prepare an email draft to `info@prestigetutelage.co.za`. Visitors must review and send that email in their email application. This is not a server-side submission or an automatic booking. Consultation times are preferences until Prestige confirms availability.

Phone and email links provide contact alternatives. To accept submissions directly in the browser, configure and test a server-side form service separately; no credentials or backend have been added.

## Content and SEO

- Contact information: `src/data/site.js`
- Shared copy: `src/data/content.js`
- Industries, timeline and FAQs: `src/data/pages.js`
- Platform modules: `src/data/modules.js`
- Page titles and descriptions: `src/components/layout/RouteMeta.jsx`
- Production canonical URL and structured data: `index.html`
- Search indexing: `public/robots.txt` and `public/sitemap.xml`

Social links are hidden until real URLs are configured. There is no Resources page or invented privacy/terms link. Privacy enquiries go to the company email.

Google Fonts and the embedded Google Map make third-party requests. The marketing claims, contact mailbox, video rights and data-handling requirements should be confirmed by the site owner before launch.

The existing GitHub Pages workflow remains a preview deployment. HostAfrica builds use the default root base path.
