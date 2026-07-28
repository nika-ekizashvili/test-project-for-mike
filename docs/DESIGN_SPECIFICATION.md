# Landing Page Design Specification

## Document Overview
This specification document maps the landing page sections to React components, defines content requirements, and outlines implementation constraints. It serves as the bridge between wireframes and development.

---

## Landing Page Structure Map

### URL Route
- **Path**: `src/app/[locale]/page.tsx`
- **Locale Support**: `/en`, `/ka` (via next-intl)
- **Base Route**: `/`

### Main Page Layout
```tsx
src/app/[locale]/page.tsx
├── Hero (Hero.tsx)
├── Features (Features.tsx)
├── HowItWorks (HowItWorks.tsx) - NEW
├── GoogleSheetsIntegration (GoogleSheetsIntegration.tsx) - NEW
├── PrivacySecurity (PrivacySecurity.tsx) - NEW
├── CTA (CTA.tsx) - Repurposed for Install section
├── Footer (Footer.tsx)
└── Analytics wrapper
```

---

## Section-by-Section Specifications

### 1. HERO SECTION

**Component**: `src/components/landing/Hero.tsx`  
**Styles**: `src/components/landing/Hero.module.css`  
**Status**: Already implemented (may need responsive updates)

#### Content Requirements

**English (en.json)**
```json
{
  "hero": {
    "headline": "Your main value proposition headline",
    "subheadline": "Compelling sub-message explaining the key benefit",
    "ctaButton": "Install on Chrome",
    "ctaUrl": "https://chromewebstore.google.com/detail/[extension-id]"
  }
}
```

**Georgian (ka.json)**
```json
{
  "hero": {
    "headline": "[Georgian translation]",
    "subheadline": "[Georgian translation]",
    "ctaButton": "[Georgian translation]",
    "ctaUrl": "https://chromewebstore.google.com/detail/[extension-id]"
  }
}
```

#### Component Props Interface
```typescript
interface HeroProps {
  locale: string;
  heroImage?: {
    src: string;
    alt: string;
  };
}
```

#### CSS Variables Used
```css
--spacing-lg: 80px;     /* Section padding */
--spacing-md: 40px;     /* Content gap */
--color-primary: ...;   /* CTA button */
--color-text: ...;      /* Headline */
--font-heading: ...;    /* Display font */
--font-body: ...;       /* Body text */
```

#### Responsive Breakpoints
- **Desktop (1024px+)**: 60/40 text-image split
- **Tablet (768px-1023px)**: Stacked, image below text
- **Mobile (320px-767px)**: Full-width stack, responsive image height

#### CTA Target
- **Primary Button**: Chrome Web Store URL (dynamically set)
- **Analytics Event**: `hero_install_click`

---

### 2. FEATURES SECTION

**Component**: `src/components/landing/Features.tsx`  
**Styles**: `src/components/landing/Features.module.css`  
**Status**: Already implemented (may need responsive updates)

#### Content Requirements

**English (en.json)**
```json
{
  "features": {
    "sectionTitle": "Why Choose Us?",
    "sectionSubtitle": "Optional subtitle describing features",
    "items": [
      {
        "id": "feature-1",
        "icon": "icon-name-1",
        "title": "Feature Title 1",
        "description": "Description of feature and its benefit"
      },
      {
        "id": "feature-2",
        "icon": "icon-name-2",
        "title": "Feature Title 2",
        "description": "Description of feature and its benefit"
      },
      {
        "id": "feature-3",
        "icon": "icon-name-3",
        "title": "Feature Title 3",
        "description": "Description of feature and its benefit"
      }
    ]
  }
}
```

#### Component Props Interface
```typescript
interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  locale: string;
  features?: FeatureItem[];
}
```

#### CSS Variables Used
```css
--spacing-lg: 80px;     /* Section padding */
--spacing-md: 40px;     /* Gap between items */
--spacing-sm: 20px;     /* Mobile gaps */
--color-text: ...;      /* Title text */
--color-text-muted: ...; /* Description text */
```

#### Responsive Breakpoints
- **Desktop (1024px+)**: 3-column grid
- **Tablet (768px-1023px)**: 2-column grid
- **Mobile (320px-767px)**: 1-column stack

---

### 3. HOW IT WORKS / SIMULATOR SECTION

**Component**: `src/components/landing/HowItWorks.tsx` (NEW)  
**Styles**: `src/components/landing/HowItWorks.module.css` (NEW)  
**Status**: To be implemented

#### Content Requirements

**English (en.json)**
```json
{
  "howItWorks": {
    "sectionTitle": "How It Works",
    "sectionSubtitle": "Get started in three simple steps",
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Install the Extension",
        "description": "Add the extension to Chrome in just one click"
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Configure Your Settings",
        "description": "Customize tracking preferences and integrations"
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Start Tracking",
        "description": "Begin tracking data and see insights in real-time"
      }
    ],
    "simulatorAlt": "Interactive demo showing the extension in action",
    "ctaButton": "View Full Tutorial",
    "ctaUrl": "/docs/getting-started"
  }
}
```

#### Component Props Interface
```typescript
interface HowItWorksStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  locale: string;
  steps?: HowItWorksStep[];
  simulatorImage?: {
    src: string;
    alt: string;
  };
  onCtaClick?: () => void;
}
```

#### CSS Variables Used
```css
--spacing-lg: 80px;     /* Section padding */
--spacing-md: 40px;     /* 50/50 split gap */
--spacing-sm: 20px;     /* Mobile gaps */
--color-primary: ...;   /* Step numbers/highlights */
--color-text: ...;      /* Step titles */
```

#### Responsive Breakpoints
- **Desktop (1024px+)**: 50/50 split (steps on left, simulator on right)
- **Tablet (768px-1023px)**: Stacked layout, simulator below steps
- **Mobile (320px-767px)**: Full-width stack, single-column steps

#### Interactive Elements
- Optional: Animated step indicator
- Optional: Carousel for simulator if multiple views available
- CTA button links to docs/tutorial

---

### 4. GOOGLE SHEETS INTEGRATION SECTION

**Component**: `src/components/landing/GoogleSheetsIntegration.tsx` (NEW)  
**Styles**: `src/components/landing/GoogleSheetsIntegration.module.css` (NEW)  
**Status**: To be implemented

#### Content Requirements

**English (en.json)**
```json
{
  "googleSheetsIntegration": {
    "sectionTitle": "Powerful Google Sheets Integration",
    "sectionSubtitle": "Seamlessly sync your data with Google Sheets",
    "benefits": [
      {
        "id": "benefit-1",
        "title": "Automatic Sync",
        "description": "Data updates automatically in real-time"
      },
      {
        "id": "benefit-2",
        "title": "Easy Export",
        "description": "Download reports with a single click"
      },
      {
        "id": "benefit-3",
        "title": "Custom Reporting",
        "description": "Create custom reports tailored to your needs"
      },
      {
        "id": "benefit-4",
        "title": "Collaborative",
        "description": "Share sheets with your team instantly"
      }
    ],
    "mockupAlt": "Screenshot showing Google Sheets integration",
    "ctaButton": "View Integration Guide",
    "ctaUrl": "/docs/integrations/google-sheets"
  }
}
```

#### Component Props Interface
```typescript
interface IntegrationBenefit {
  id: string;
  title: string;
  description: string;
}

interface GoogleSheetsIntegrationProps {
  locale: string;
  benefits?: IntegrationBenefit[];
  mockupImage?: {
    src: string;
    alt: string;
  };
}
```

#### CSS Variables Used
```css
--spacing-lg: 80px;     /* Section padding */
--spacing-md: 40px;     /* 50/50 split gap */
--color-text: ...;      /* Benefit titles */
--color-text-muted: ...; /* Benefit descriptions */
```

#### Responsive Breakpoints
- **Desktop (1024px+)**: 50/50 split (benefits on left, mockup on right)
- **Tablet & Mobile**: Stacked layout

#### Visual Assets Needed
- Google Sheets integration screenshot/mockup
- Alternative: Animated preview showing data sync

---

### 5. PRIVACY & SECURITY SECTION

**Component**: `src/components/landing/PrivacySecurity.tsx` (NEW)  
**Styles**: `src/components/landing/PrivacySecurity.module.css` (NEW)  
**Status**: To be implemented

#### Content Requirements

**English (en.json)**
```json
{
  "privacySecurity": {
    "sectionTitle": "Your Privacy & Security Matter",
    "sectionSubtitle": "We take data protection seriously",
    "badges": [
      {
        "id": "badge-gdpr",
        "icon": "gdpr-badge",
        "title": "GDPR Compliant",
        "description": "Full compliance with EU data protection regulations"
      },
      {
        "id": "badge-iso",
        "icon": "iso-badge",
        "title": "ISO 27001 Certified",
        "description": "Industry-standard information security management"
      },
      {
        "id": "badge-privacy",
        "icon": "privacy-badge",
        "title": "Privacy First",
        "description": "No data sharing or third-party tracking"
      }
    ],
    "overview": "We encrypt all data in transit and at rest. Your information is never sold or shared with third parties.",
    "privacyLink": "/privacy",
    "privacyLinkText": "Read Our Privacy Policy",
    "securityLink": "/docs/security",
    "securityLinkText": "View Security Documentation"
  }
}
```

#### Component Props Interface
```typescript
interface SecurityBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface PrivacySecurityProps {
  locale: string;
  badges?: SecurityBadge[];
  overview?: string;
}
```

#### CSS Variables Used
```css
--spacing-lg: 80px;     /* Section padding */
--spacing-md: 40px;     /* Gap between badges */
--spacing-sm: 20px;     /* Mobile gaps */
--color-primary: ...;   /* Badge accents */
--color-text: ...;      /* Badge titles */
```

#### Responsive Breakpoints
- **Desktop (1024px+)**: 3-column badge layout
- **Tablet (768px-1023px)**: 2-column layout
- **Mobile (320px-767px)**: 1-column stack

#### Visual Assets Needed
- GDPR badge/icon
- ISO 27001 badge/icon
- Privacy badge/icon

---

### 6. INSTALL CTA SECTION

**Component**: `src/components/landing/CTA.tsx` (Repurposed)  
**Styles**: `src/components/landing/CTA.module.css`  
**Status**: Existing component, needs repurposing for install-focused CTA

#### Content Requirements

**English (en.json)**
```json
{
  "installCta": {
    "headline": "Ready to Get Started?",
    "subheadline": "Join thousands of users tracking data with ease",
    "primaryButton": "Install on Chrome",
    "primaryUrl": "https://chromewebstore.google.com/detail/[extension-id]",
    "secondaryLink": "View Documentation",
    "secondaryUrl": "/docs",
    "tertiaryLink": "View on GitHub",
    "tertiaryUrl": "https://github.com/[repo]"
  }
}
```

#### Component Props Interface
```typescript
interface CTAProps {
  locale: string;
  variant?: 'primary' | 'secondary';
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}
```

#### CSS Variables Used
```css
--spacing-lg: 80px;     /* Section padding */
--spacing-md: 40px;     /* Button gap */
--color-primary: ...;   /* Primary button */
--color-text: ...;      /* Headline */
```

#### Responsive Breakpoints
- **Desktop (1024px+)**: Centered layout with horizontal button arrangement
- **Tablet (768px-1023px)**: Centered with vertical button stack
- **Mobile (320px-767px)**: Full-width centered stack

#### CTA Targets
- **Primary**: Chrome Web Store URL
- **Secondary**: `/docs` route
- **Tertiary**: External GitHub URL

---

### 7. FOOTER SECTION

**Component**: `src/components/landing/Footer.tsx`  
**Styles**: `src/components/landing/Footer.module.css`  
**Status**: Already implemented (may need updates)

#### Content Requirements

**English (en.json)**
```json
{
  "footer": {
    "logo": "Company Logo",
    "year": 2024,
    "columns": {
      "product": {
        "title": "Product",
        "links": [
          { "text": "Features", "href": "/#features" },
          { "text": "Pricing", "href": "/#pricing" },
          { "text": "Download", "href": "#install-cta" }
        ]
      },
      "company": {
        "title": "Company",
        "links": [
          { "text": "About", "href": "/about" },
          { "text": "Blog", "href": "/blog" },
          { "text": "Careers", "href": "/careers" }
        ]
      },
      "legal": {
        "title": "Legal",
        "links": [
          { "text": "Privacy", "href": "/privacy" },
          { "text": "Terms", "href": "/terms" },
          { "text": "Cookies", "href": "/cookies" }
        ]
      }
    },
    "social": [
      { "platform": "twitter", "url": "https://twitter.com/[handle]" },
      { "platform": "github", "url": "https://github.com/[repo]" },
      { "platform": "linkedin", "url": "https://linkedin.com/company/[company]" }
    ]
  }
}
```

#### Component Props Interface
```typescript
interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  locale: string;
  columns?: Record<string, FooterColumn>;
}
```

---

## Design Token Specifications

### CSS Module: `src/styles/design-tokens.css`

#### Color Variables
```css
/* Primary Colors */
--color-primary: #[primary-color];
--color-primary-light: #[lighter-variant];
--color-primary-dark: #[darker-variant];

/* Neutral/Text Colors */
--color-text: #[main-text-color];
--color-text-muted: #[secondary-text-color];
--color-text-light: #[light-text-color];

/* Backgrounds */
--color-bg: #ffffff;
--color-bg-alt: #[alternate-bg-color];
--color-bg-accent: #[accent-bg-color];

/* Borders & Dividers */
--color-border: #[border-color];
--color-border-light: #[light-border-color];

/* Status Colors (if applicable) */
--color-success: #[success-color];
--color-error: #[error-color];
--color-warning: #[warning-color];
--color-info: #[info-color];
```

#### Spacing Variables
```css
--spacing-xs: 4px;      /* Micro spacing */
--spacing-sm: 8px;      /* Small gaps */
--spacing-md: 16px;     /* Default spacing */
--spacing-lg: 32px;     /* Large spacing */
--spacing-xl: 48px;     /* Extra large */
--spacing-2xl: 64px;    /* Double extra large */

/* Section spacing (semantic) */
--spacing-section: 80px; /* Desktop section padding */
--spacing-section-tablet: 60px;
--spacing-section-mobile: 40px;
```

#### Typography Variables
```css
--font-heading: 'Font Name', sans-serif;
--font-body: 'Font Name', sans-serif;
--font-mono: 'Font Name', monospace;

/* Font Sizes */
--font-size-display: 56px;  /* Hero headline */
--font-size-h1: 48px;       /* Page title */
--font-size-h2: 36px;       /* Section title */
--font-size-h3: 24px;       /* Subsection */
--font-size-body: 16px;     /* Body text */
--font-size-small: 14px;    /* Small text */
--font-size-tiny: 12px;     /* Meta text */

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-loose: 1.8;
```

#### Breakpoints (Mobile-First)
```css
/* Mobile First Approach */
@media (min-width: 768px) {
  /* Tablet breakpoint */
}

@media (min-width: 1024px) {
  /* Desktop breakpoint */
}

@media (min-width: 1440px) {
  /* Large desktop breakpoint */
}
```

#### Shadows & Effects
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

---

## CSS Module Naming Conventions

### Pattern
```
ComponentName.module.css
```

### Class Names (BEM-inspired)
```css
.hero { }
.hero__content { }
.hero__headline { }
.hero__subheadline { }
.hero__ctaButton { }
.hero__ctaButton--loading { }
.hero__ctaButton:hover { }

.features { }
.features__grid { }
.features__item { }
.features__icon { }
.features__title { }

/* State modifiers */
.button--active { }
.button--disabled { }
.section--dark { }
```

---

## Localization Configuration

### File Locations
- **English**: `src/messages/en.json`
- **Georgian**: `src/messages/ka.json`

### next-intl Setup
```typescript
// In app/[locale]/layout.tsx
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export default async function LocaleLayout({ children, params: { locale } }) {
  setRequestLocale(locale);
  const messages = await getMessages();
  
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

### Component Usage
```typescript
'use client';

import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  
  return (
    <h1>{t('headline')}</h1>
  );
}
```

---

## Button & Link Specifications

### Primary CTA Button
- **Element**: `<a>` (external link) or `<Link>` (internal)
- **Size**: 48px height, 16px font
- **Color**: Primary color with sufficient contrast
- **Hover State**: Darker shade, scale 1.02
- **Active State**: Press effect
- **Focus State**: Visible ring outline
- **Touch Target**: Minimum 48x48px

### Secondary Link
- **Element**: `<a>` with underline on hover
- **Size**: 16px font
- **Color**: Primary color or --color-text
- **Hover State**: Underline, optional color change
- **Focus State**: Visible outline

### Form Inputs (if applicable)
- **Border**: 1px solid --color-border
- **Padding**: 12px horizontal, 8px vertical
- **Focus**: Ring outline, border color change
- **Label**: Associated with `for` attribute
- **Error State**: --color-error border and message

---

## Analytics & Tracking Points

### Events to Track
```typescript
// Hero Section
trackEvent('hero_view', { section: 'hero' });
trackEvent('hero_install_click', { button: 'hero_cta' });

// Features Section
trackEvent('features_view', { section: 'features' });

// How It Works Section
trackEvent('how_it_works_view', { section: 'how_it_works' });

// Google Sheets Section
trackEvent('google_sheets_view', { section: 'integration' });
trackEvent('google_sheets_cta_click', { link: 'integration_docs' });

// Privacy Section
trackEvent('privacy_view', { section: 'privacy' });
trackEvent('privacy_link_click', { link: 'privacy_policy' });

// Install CTA Section
trackEvent('install_cta_view', { section: 'install_cta' });
trackEvent('install_cta_click', { button: 'primary' });

// Footer
trackEvent('footer_link_click', { link: 'footer_' + linkName });
```

### Conversion Tracking
- **Primary**: Install button clicks (Chrome Web Store)
- **Secondary**: Docs, GitHub, and form submissions
- **Attribution**: UTM parameters on external links

---

## Performance Optimization

### Image Optimization
- **Format**: WebP with PNG fallback
- **Sizes**: Responsive image sizes for different breakpoints
- **Loading**: `lazy` for below-fold images
- **Optimization**: Next.js `Image` component with automatic optimization

### Code Splitting
- **Lazy Loading**: Import components dynamically if not critical
- **Bundle Size**: Monitor CSS/JS per section
- **Caching**: Optimize cache headers for static content

### Lighthouse Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

---

## Accessibility Compliance

### WCAG 2.1 Level AA Requirements
- [ ] Color contrast ≥ 4.5:1 for normal text
- [ ] Color contrast ≥ 3:1 for large text
- [ ] Heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Keyboard navigation for all interactive elements
- [ ] Focus indicators visible (min 2px outline)
- [ ] Form labels associated with inputs
- [ ] Error messages descriptive and linked to inputs
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Language attribute set (e.g., `lang="en"`)

---

## Testing Checklist

### Unit Tests
- [ ] Component renders without errors
- [ ] Props are correctly passed and used
- [ ] Localization strings render correctly
- [ ] Event handlers trigger on interaction

### Integration Tests
- [ ] Sections render in correct order
- [ ] Navigation links work correctly
- [ ] External links have correct href attributes
- [ ] Responsive classes apply correctly

### E2E Tests
- [ ] Full page loads without errors
- [ ] CTA buttons navigate to correct URLs
- [ ] Mobile layout displays correctly on small screens
- [ ] All sections visible on long scroll

### Responsive Testing
- [ ] Desktop layout (1440px, 1024px)
- [ ] Tablet layout (768px)
- [ ] Mobile layout (375px, 320px)
- [ ] Orientation changes (landscape/portrait)

### Accessibility Testing
- [ ] Screen reader testing (NVDA, JAWS)
- [ ] Keyboard-only navigation
- [ ] Color contrast verification
- [ ] Focus indicator visibility

---

## Deployment & Monitoring

### Pre-Launch Checklist
- [ ] All content reviewed and approved
- [ ] Localization strings complete for both languages
- [ ] Images optimized and in CDN
- [ ] Analytics code implemented
- [ ] A/B testing configured (if applicable)
- [ ] Redirects configured
- [ ] 404 pages handled
- [ ] SSL certificate verified

### Post-Launch Monitoring
- [ ] Error tracking active
- [ ] Performance metrics baseline established
- [ ] Analytics funnels verified
- [ ] User feedback channels open
- [ ] Weekly conversion rate reviews
