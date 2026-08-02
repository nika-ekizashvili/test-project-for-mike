# HomeGrab Landing Page - Developer Implementation Guide

## Quick Start Reference for Front-End Development

This guide provides developers with quick reference information needed to implement the HomeGrab landing page based on the approved wireframes and design system.

---

## PROJECT STRUCTURE (RECOMMENDED)

```
src/
├── app/
│   ├── layout.tsx              # Root layout with header/footer wrapper
│   ├── page.tsx                # Landing page container
│   ├── globals.css             # Global styles (already exists)
│   ├── sections/               # Section components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── GoogleSheets.tsx
│   │   ├── PrivacySecurity.tsx
│   │   ├── InstallCTA.tsx
│   │   └── Footer.tsx
│   └── sections/styles/        # Section-specific CSS modules
│       ├── Hero.module.css
│       ├── Features.module.css
│       ├── HowItWorks.module.css
│       ├── GoogleSheets.module.css
│       ├── PrivacySecurity.module.css
│       ├── InstallCTA.module.css
│       └── Footer.module.css
├── components/                 # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Icon.tsx
│   ├── Navigation.tsx
│   ├── Testimonial.tsx
│   └── components/styles/
│       └── [component-specific CSS modules]
├── hooks/                      # Custom React hooks
│   ├── useScrollSection.ts    # Scroll tracking hook
│   ├── useViewport.ts         # Responsive design hook
│   └── useAnalytics.ts        # Analytics tracking hook
├── utils/
│   ├── constants.ts           # Design system constants
│   ├── tracking.ts            # Analytics event tracking
│   └── helpers.ts             # Utility functions
├── styles/
│   ├── colors.ts              # Design system colors as constants
│   ├── typography.ts          # Font scales and families
│   ├── spacing.ts             # Spacing constants
│   └── breakpoints.ts         # Media query breakpoints
└── public/
    ├── images/                # Hero visuals, screenshots
    │   ├── hero-visual.gif
    │   ├── google-sheets-demo.png
    │   └── simulator-screenshot.png
    ├── icons/                 # SVG icons
    │   ├── feature-1.svg
    │   ├── feature-2.svg
    │   ├── feature-3.svg
    │   ├── feature-4.svg
    │   ├── step-1.svg
    │   ├── step-2.svg
    │   ├── step-3.svg
    │   ├── security-1.svg
    │   ├── security-2.svg
    │   ├── security-3.svg
    │   └── security-4.svg
    └── logo/
        ├── logo.svg
        ├── logo-white.svg
        └── favicon.ico
```

---

## DESIGN SYSTEM CONSTANTS

### Colors (`src/styles/colors.ts`)

```typescript
export const COLORS = {
  // Primary
  primary: '#0066FF',
  primaryDark: '#0052CC',
  primaryLight: '#E6F2FF',
  
  // Secondary
  secondary: '#10B981',
  secondaryDark: '#059669',
  secondaryLight: '#D1FAE5',
  
  // Accent
  accent: '#F59E0B',
  accentDark: '#D97706',
  accentLight: '#FEF3C7',
  
  // Neutrals
  black: '#000000',
  charcoal: '#1F2937',
  darkGray: '#374151',
  gray: '#6B7280',
  lightGray: '#D1D5DB',
  offWhite: '#F9FAFB',
  white: '#FFFFFF',
  
  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#0066FF',
  
  // Backgrounds
  bgLight: '#F9FAFB',
  bgWhite: '#FFFFFF',
  bgHero: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
  bgFooter: '#1F2937',
}
```

### Typography (`src/styles/typography.ts`)

```typescript
export const FONT_FAMILY = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
  mono: "'Monaco', 'Courier New', monospace",
}

export const FONT_SIZES = {
  h1: { desktop: '48px', mobile: '28px' },
  h2: { desktop: '40px', mobile: '24px' },
  h3: { desktop: '32px', mobile: '20px' },
  h4: { desktop: '24px', mobile: '18px' },
  h5: { desktop: '20px', mobile: '16px' },
  h6: { desktop: '18px', mobile: '14px' },
  body: '16px',
  small: { desktop: '14px', mobile: '13px' },
  xs: '12px',
}

export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
}

export const LINE_HEIGHTS = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.6,
}
```

### Spacing (`src/styles/spacing.ts`)

```typescript
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '56px',
  '7xl': '60px',
}

export const SECTION_PADDING = {
  horizontal: { desktop: '40px', mobile: '20px' },
  vertical: { desktop: '60px', mobile: '40px' },
}

export const BORDER_RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '999px',
}
```

### Breakpoints (`src/styles/breakpoints.ts`)

```typescript
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '1024px',
  desktop: '1280px',
  large: '1920px',
}

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile})`,
  tablet: `(min-width: 641px) and (max-width: ${BREAKPOINTS.tablet})`,
  desktop: `(min-width: ${BREAKPOINTS.desktop})`,
  large: `(min-width: ${BREAKPOINTS.large})`,
}
```

---

## COMPONENT EXAMPLES

### Button Component (`src/components/Button.tsx`)

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
  children: React.ReactNode
  href?: string
  disabled?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  onClick,
  children,
  href,
  disabled = false,
  className,
}) => {
  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} ${className || ''}`}
    >
      {children}
    </Component>
  )
}
```

### Card Component (`src/components/Card.tsx`)

```typescript
interface CardProps {
  children: React.ReactNode
  icon?: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={`card ${className || ''}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  )
}
```

### Icon Component (`src/components/Icon.tsx`)

```typescript
interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={`icon icon-${name} ${className || ''}`}
      viewBox="0 0 24 24"
    >
      {/* SVG paths would be imported from icon files */}
    </svg>
  )
}
```

---

## SECTION COMPONENT TEMPLATES

### Hero Section (`src/app/sections/Hero.tsx`)

```typescript
export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          Sync Your Georgian Real Estate Listings Instantly
        </h1>
        <p className="hero-subheading">
          Connect SS.ge & MyHome.ge in seconds. Work smarter, not harder.
        </p>
        <div className="hero-ctas">
          <Button 
            variant="primary" 
            size="lg"
            href="https://chrome.google.com/webstore/..."
          >
            Install Now
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => scrollToSection('how-it-works')}
          >
            See How It Works
          </Button>
        </div>
      </div>
      <div className="hero-visual">
        <img src="/images/hero-visual.gif" alt="HomeGrab sync animation" />
      </div>
    </section>
  )
}
```

### Features Section (`src/app/sections/Features.tsx`)

```typescript
export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: 'sync',
      title: 'One-Click Sync',
      description: 'Sync listings between SS.ge and MyHome.ge instantly',
    },
    {
      id: 2,
      icon: 'time',
      title: 'Time-Saving',
      description: 'Save hours every week on manual updates',
    },
    {
      id: 3,
      icon: 'config',
      title: 'Zero Configuration',
      description: 'Works out of the box, no setup required',
    },
    {
      id: 4,
      icon: 'update',
      title: 'Real-Time Updates',
      description: 'Stay in sync across both platforms',
    },
  ]

  return (
    <section className="features">
      <h2>Everything You Need, Nothing You Don't</h2>
      <div className="features-grid">
        {features.map(feature => (
          <Card key={feature.id} title={feature.title} description={feature.description}>
            <Icon name={feature.icon} size={64} />
          </Card>
        ))}
      </div>
    </section>
  )
}
```

---

## CSS ARCHITECTURE GUIDELINES

### Naming Convention (BEM)

```css
/* Block */
.hero { }

/* Element */
.hero__headline { }
.hero__subheading { }

/* Modifier */
.hero--dark { }
.button--primary { }

/* Avoid nesting beyond 3 levels */
```

### Mobile-First Responsive Approach

```css
/* Base (Mobile) */
.hero {
  padding: 20px;
  font-size: 28px;
}

/* Tablet and up */
@media (min-width: 641px) {
  .hero {
    padding: 40px;
  }
}

/* Desktop and up */
@media (min-width: 1025px) {
  .hero {
    padding: 60px 40px;
    font-size: 48px;
  }
}
```

### Shadow & Elevation

```css
/* Level 1 - Subtle */
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* Level 2 - Light (on hover) */
.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

---

## ANIMATIONS & TRANSITIONS

### Standard Transition

```css
.button {
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  background-color: #0052CC;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Fade In Animation

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
```

### Scroll Reveal (JavaScript)

```typescript
// On scroll, add 'in-view' class to elements
// CSS then applies fade-in and slide-up animations
```

---

## RESPONSIVE DESIGN CHECKLIST

- [ ] Mobile viewport (375px) tested and approved
- [ ] Tablet viewport (768px) tested and approved
- [ ] Desktop viewport (1280px) tested and approved
- [ ] Large desktop (1920px) tested and approved
- [ ] Touch targets minimum 48px
- [ ] Font sizes minimum 14px (body), 16px (inputs)
- [ ] No horizontal scroll on any viewport
- [ ] Images responsive and properly sized
- [ ] Navigation hamburger menu on mobile
- [ ] Full-width buttons on mobile

---

## ACCESSIBILITY CHECKLIST

- [ ] Color contrast > 4.5:1 for all text
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all elements
- [ ] Form labels associated with inputs
- [ ] Alt text on all images
- [ ] Semantic HTML (proper heading hierarchy)
- [ ] ARIA labels where necessary
- [ ] Page language defined (lang="en")
- [ ] Meta viewport tag present
- [ ] Form validation messages clear

---

## PERFORMANCE OPTIMIZATION

### Image Optimization
- Use WebP format with PNG fallback
- Provide responsive images (srcset)
- Implement lazy loading for below-fold images
- Compress images before deployment
- Target sizes: Hero (600px), Feature cards (300px)

### CSS/JavaScript
- Minimize CSS bundles
- Remove unused CSS with Next.js
- Lazy load non-critical JavaScript
- Use CSS modules for scoped styling
- Defer non-critical animations

### Metrics to Monitor
- First Contentful Paint (FCP) - Target: < 1.8s
- Largest Contentful Paint (LCP) - Target: < 2.5s
- Cumulative Layout Shift (CLS) - Target: < 0.1
- Time to Interactive (TTI) - Target: < 3.8s

---

## FORM HANDLING (Newsletter Signup - Optional)

```typescript
// Use React Hook Form + Zod (already in dependencies)

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address'),
})

export const NewsletterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // Handle form submission
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="your@email.com" />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Subscribe</button>
    </form>
  )
}
```

---

## ANALYTICS TRACKING

### Events to Track

```typescript
// Page views
pageView(location.pathname)

// CTA clicks
trackEvent('cta_click', { 
  section: 'hero',
  button: 'install_now'
})

// Scroll depth
trackEvent('scroll_section', {
  section: 'features',
  depth_percentage: 25
})

// Install link clicks
trackEvent('install_link_click', {
  source: 'install_cta_section',
  platform: 'chrome_web_store'
})
```

---

## DEPLOYMENT CHECKLIST

- [ ] All meta tags set (title, description, OG, Twitter)
- [ ] Favicon configured
- [ ] Robots.txt configured for SEO
- [ ] Sitemap generated
- [ ] 404 page created
- [ ] Analytics configured (GA4, etc.)
- [ ] Performance optimized (Lighthouse score > 90)
- [ ] SEO validated (Core Web Vitals passing)
- [ ] Mobile responsive tested
- [ ] Accessibility audit passed
- [ ] Cross-browser testing completed
- [ ] Production build tested locally
- [ ] Environment variables configured
- [ ] Error monitoring configured (Sentry, etc.)
- [ ] CDN configured for static assets

---

## USEFUL RESOURCES

### Existing Project Setup
- **Framework**: Next.js 14.2 ✓
- **Language**: TypeScript ✓
- **Styling**: CSS Modules ✓
- **Forms**: React Hook Form + Zod ✓
- **API**: Axios (ready) ✓
- **Testing**: Vitest + Jest ✓

### Design Files
- Wireframes: `WIREFRAMES_DESKTOP.md`, `WIREFRAMES_MOBILE.md`
- Design System: `DESIGN_SYSTEM.md`
- Project Brief: `LANDING_PAGE_BRIEF.md`

### Development Commands
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run all tests
npm run test:unit    # Run unit tests
npm run test:watch   # Watch mode for tests
npm run test:coverage # Generate coverage report
```

---

## COMMON GOTCHAS & SOLUTIONS

### 1. Image Loading
- Ensure images are in `public/` folder
- Use Next.js Image component for optimization
- Provide alt text for accessibility

### 2. Responsive Typography
- Use rem units for font sizes
- Base font size: 16px
- Calculate: desired px / 16 = rem value

### 3. CSS Specificity
- Avoid !important declarations
- Use BEM naming to manage specificity
- Leverage CSS modules for scope

### 4. Performance
- Minimize animations on initial load
- Lazy load below-fold images
- Tree shake unused dependencies

### 5. Accessibility
- Test with keyboard navigation (Tab key)
- Check focus indicators visible
- Run accessibility audit with Axe DevTools

---

## QUESTIONS? RESOURCES

**Design System**: Refer to `DESIGN_SYSTEM.md`  
**Layout Specs**: Refer to `WIREFRAMES_DESKTOP.md` and `WIREFRAMES_MOBILE.md`  
**Project Goals**: Refer to `LANDING_PAGE_BRIEF.md`  
**Architecture**: Refer to `LANDING_PAGE_IA.md`  

---

**Document Version**: 1.0  
**Created**: 2024-08-02  
**Status**: Ready for Development  
**Next**: Begin Phase 3 - Front-End Implementation
