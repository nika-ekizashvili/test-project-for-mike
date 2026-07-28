# Landing Page Information Architecture

## Overview
This document defines the information architecture (IA) for the landing page, establishing the section order, content hierarchy, and responsive design strategy for desktop and mobile breakpoints.

## Primary Conversion Goal
**Install extension from Chrome Web Store** - The primary goal of the landing page is to drive users to install the extension via the Chrome Web Store.

## Secondary Conversion Goals
1. View documentation (docs link)
2. Explore GitHub repository
3. Email newsletter signup
4. View pricing/features

## Section Order (Top to Bottom)

### 1. Hero Section
- **Purpose**: Immediate value proposition and primary CTA
- **Content**: Main headline, subheadline, hero image/visual, primary CTA button (Install on Chrome)
- **Component**: `Hero.tsx`
- **Responsive**: Full-width hero with text/image stacking on mobile

### 2. Features Section
- **Purpose**: Highlight key features and differentiators
- **Content**: Feature cards (3-4 features) with icons, titles, and descriptions
- **Component**: `Features.tsx`
- **Responsive**: Grid layout (3 cols desktop → 2 cols tablet → 1 col mobile)

### 3. How It Works / Simulator Section
- **Purpose**: Demonstrate product functionality interactively
- **Content**: Step-by-step walkthrough with visual simulator, interactive elements
- **Component**: `HowItWorks.tsx` (new)
- **Responsive**: Two-column layout (content + simulator) → stacked on mobile

### 4. Google Sheets Tracking Section
- **Purpose**: Showcase integration capabilities
- **Content**: Integration benefits, visual mockup/screenshot of Google Sheets integration
- **Component**: `GoogleSheetsIntegration.tsx` (new)
- **Responsive**: Image on left, text on right → stacked on mobile

### 5. Privacy & Security Section
- **Purpose**: Build trust and address privacy concerns
- **Content**: Trust badges, security certifications, privacy policy overview, data handling practices
- **Component**: `PrivacySecurity.tsx` (new)
- **Responsive**: Icon grid or three-column layout → single column on mobile

### 6. Install CTA Section
- **Purpose**: Final conversion push before footer
- **Content**: Secondary headline, descriptive text, prominent install button, alternative CTAs (docs, GitHub)
- **Component**: `CTA.tsx` (already exists, may be repurposed)
- **Responsive**: Centered content with stacked buttons on mobile

### 7. Footer Section
- **Purpose**: Navigation, legal, and additional links
- **Content**: Logo, link groups (Product, Company, Legal), social media links, copyright
- **Component**: `Footer.tsx`
- **Responsive**: Multi-column → single column on mobile

## Responsive Breakpoints

### Desktop (≥1024px)
- Full-width sections with contained content area (max-width: 1200px)
- Multi-column layouts for features and stats
- Side-by-side content + media layouts

### Tablet (768px - 1023px)
- 2-column feature grids
- Adjusted font sizes
- Contained padding

### Mobile (320px - 767px)
- Single-column stack layout
- Touch-friendly CTAs (larger tap targets)
- Full-width with side padding (16-20px)
- Optimized hero section with stacked headline and image

## Design System Integration

### CSS Variables Used (from design-tokens.css)
- **Spacing**: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`, `--spacing-2xl`
- **Colors**: `--color-primary`, `--color-secondary`, `--color-text`, `--color-text-muted`, `--color-bg`, `--color-bg-alt`
- **Typography**: `--font-heading`, `--font-body`

### CSS Module Naming Convention
- `SectionName.module.css` for each component
- BEM-style class naming within modules
- Shared variables imported from `design-tokens.css`

## Localization Strategy
- Content strings defined in:
  - `src/messages/en.json` (English)
  - `src/messages/ka.json` (Georgian)
- Use `next-intl` library for translation management
- All UI text must support RTL-ready class names

## Implementation Notes

### Components to Create
1. **HowItWorks.tsx** - Interactive simulator section
2. **GoogleSheetsIntegration.tsx** - Integration showcase
3. **PrivacySecurity.tsx** - Trust and security messaging
4. Update **CTA.tsx** - Repurpose for install section
5. Create corresponding `.module.css` files for each

### Button Actions
- Install CTA → Link to Chrome Web Store URL (to be provided)
- Docs link → `/docs` or external URL
- GitHub link → External GitHub URL
- Newsletter signup → Form submission to email service

### Content Requirements
Each section requires localized content in both en.json and ka.json:
- Headings and subheadings
- Body copy and descriptions
- Button labels
- Alt text for images

## Accessibility Considerations
- Semantic HTML (h1, h2, h3 hierarchy)
- ARIA labels for interactive elements
- Color contrast compliance (WCAG AA minimum)
- Keyboard navigation support for all CTAs
- Form inputs with proper labels and validation

## Performance Targets
- Lazy-load images for below-the-fold sections
- Optimize hero image (WebP with fallback)
- Code-split sections for faster initial load
- Lighthouse score target: 90+ on mobile
