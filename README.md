<h1 align="center">IISPL Bangladesh — Corporate Website</h1>

<p align="center">
  <img src="./src/assets/IISPL_logo.png" alt="IISPL Bangladesh logo" width="220" />
</p>

<p align="center">
  <strong>Inspection · Calibration · Testing · Training</strong>
</p>

<p align="center">
  <a href="https://www.iisplbd.com/"><strong>Visit the live website →</strong></a>
</p>

---

## Overview

**IISPL Bangladesh (IIS Testing BD Pvt. Ltd.)** provides third-party inspection, calibration, testing, and technical training services to industrial projects and businesses.

This repository contains the React frontend for the company's public website and content-management interface. It presents the company's services, shares articles and company information, and provides contact and inquiry forms.

## Features

- Company, service, and contact pages.
- Inspection, calibration, QA/QC, NDT/NDE, equipment safety, and training service information.
- Specialized testing pages for environmental, stack-air, oil, and water testing.
- Blog listing, featured articles, and article detail pages.
- Client and organization/certification showcases.
- Contact and service inquiry forms connected to the backend.
- Protected administration pages for managing website content and reviewing messages.
- Responsive layouts for desktop, tablet, and mobile screens.

## Technology

- **Application:** React 18, React Router 6
- **Styling and UI:** Bootstrap 5, React-Bootstrap, Tailwind CSS 3
- **Other libraries:** Axios, React Helmet, React Icons, Splide, and React Image Gallery
- **Development and production builds:** Create React App (`react-scripts` 5)

## Getting Started

### Prerequisites

- Node.js and npm
- Availability of the separate Laravel backend for dynamic content and form submissions

### Install and run

```bash
npm ci
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000) and reloads when source files change.

### Available scripts

| Command | Description |
|---|---|
| `npm start` | Start the local development server. |
| `npm test` | Run the Create React App test runner in watch mode. |
| `npm run build` | Create an optimized production build in `build/`. |

## Backend

Dynamic content and form submissions are provided by a separate project built with Laravel. That backend is not included in this repository.

## Main Routes

### Public site

- `/` — Home
- `/about-us` — Company information
- `/services` — Service overview
- `/services/...` — Inspection, testing, calibration, training, and specialized service pages
- `/contacts` — Contact details and inquiry form
- `/blog` and `/blog/:slug` — Articles

### Administration

- `/admin/login` — Administration sign-in
- `/admin/...` — Protected content-management pages

Administrative access requires valid credentials; credentials and the separate backend project are not included in this repository.

## Project Background

This company project was developed as part of the project team at **TRODAD International Ltd.** The live website is available at [iisplbd.com](https://www.iisplbd.com/).

All company names, trademarks, and website content belong to their respective owners.

---

<p align="center">
  <strong>IISPL Bangladesh</strong><br />
  Inspection · Calibration · Testing · Training
</p>
