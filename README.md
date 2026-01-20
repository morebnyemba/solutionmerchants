# Solutions Merchants Website

A modern, professional Next.js website for Solutions Merchants - your trusted business partner for innovative solutions and services.

## Features

- ✅ Built with Next.js 14 (App Router)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Modern UI/UX

## Pages

- **Home** - Hero section, services overview, and contact form
- **About** - Company mission, vision, values, and team
- **Services** - Detailed service offerings
- **Contact** - Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deployment on Namecheap cPanel

For detailed step-by-step instructions on deploying this website to Namecheap cPanel hosting, see the **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**.

### Quick Deployment Steps:
1. Run `npm run build` to generate static files in the `out` folder
2. Upload contents of `out` folder to your cPanel `public_html` directory
3. Configure SSL and verify your site is working

## Project Structure

```
solutionmerchants/
├── app/
│   ├── about/
│   ├── services/
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

Copyright © 2026 Solutions Merchants. All rights reserved.
