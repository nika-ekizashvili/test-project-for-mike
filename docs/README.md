# Landing Page Documentation

This directory contains comprehensive documentation for the landing page information architecture, wireframes, and design specifications.

## Quick Navigation

### 📐 Information Architecture
**File**: `LANDING_PAGE_ARCHITECTURE.md`

Start here to understand the overall structure of the landing page. Defines:
- Section order (Hero → Features → How It Works → Google Sheets → Privacy & Security → Install CTA → Footer)
- Responsive breakpoints (Desktop 1024px+, Tablet 768px-1023px, Mobile 320px-767px)
- Primary conversion goal (Chrome Web Store installation)
- Secondary conversion goals (Docs, GitHub, Email signup)
- Design system integration with CSS modules and next-intl

**Best for**: Architecture review, stakeholder alignment, project planning

---

### 🎨 Wireframe Specifications
**File**: `WIREFRAME_SPECIFICATIONS.md`

Detailed low-fidelity wireframe specifications for all 7 landing page sections. Includes:
- ASCII-based visual representations for each section
- Layout specifications for Desktop, Tablet, and Mobile
- Typography hierarchy and spacing guidelines
- Color usage guidelines
- Conversion tracking annotations
- Accessibility checkpoints
- Implementation checklist

**Best for**: Design team, wireframe creation, visual reference

**Key Sections**:
- Hero: Full-width hero with headline, CTA, and image
- Features: 3-column grid with feature cards
- How It Works: 50/50 split with steps and simulator
- Google Sheets: Integration showcase with benefits list
- Privacy & Security: 3-column badge grid with trust messaging
- Install CTA: Centered conversion section with multiple CTAs
- Footer: 4-column link structure with social media

---

### 🎯 Design Specification
**File**: `DESIGN_SPECIFICATION.md`

Comprehensive specification for implementation. Includes:
- Component-to-section mapping (React components, CSS modules)
- Content requirements (localization strings for en.json and ka.json)
- Component props interfaces with TypeScript
- Design token usage (colors, spacing, typography)
- CSS module naming conventions (BEM-style)
- Button and link specifications
- Analytics and conversion tracking events
- Performance optimization targets
- WCAG 2.1 Level AA accessibility requirements
- Testing checklist (unit, integration, E2E, accessibility)
- Deployment and monitoring guide

**Components Overview**:
- **Hero.tsx** (existing) - Main headline and CTA
- **Features.tsx** (existing) - Feature cards grid
- **HowItWorks.tsx** (new) - Interactive steps and simulator
- **GoogleSheetsIntegration.tsx** (new) - Integration showcase
- **PrivacySecurity.tsx** (new) - Trust and security messaging
- **CTA.tsx** (existing, repurposed) - Install CTA section
- **Footer.tsx** (existing) - Navigation and legal links

**Best for**: Development team, implementation guidance, component specs

---

### 🖼️ Figma Wireframe Guide
**File**: `FIGMA_WIREFRAME_GUIDE.md`

Step-by-step guide for creating wireframes in Figma. Includes:
- Figma file structure and organization
- Canvas setup (artboard sizes, grids, margins)
- Detailed frame specifications for each section (Desktop 1440px, Tablet 768px, Mobile 375px)
- Layer naming conventions
- Annotation standards (typography, spacing, interactive elements)
- Component library setup
- Color palette and spacing system
- Design system integration references
- Stakeholder approval checkpoints
- Design handoff process and deliverables

**Best for**: Design team, Figma file creation, stakeholder presentations

**Canvas Specs**:
- **Desktop**: 1440px width, 1200px content area, 12-column grid
- **Tablet**: 768px width, 688px content area
- **Mobile**: 375px width, 335px content area

---

## Project Structure Map

```
Landing Page
├── Hero Section
│   ├── Component: Hero.tsx
│   ├── Styles: Hero.module.css
│   └── Content: hero.headline, hero.subheadline (i18n)
│
├── Features Section
│   ├── Component: Features.tsx
│   ├── Styles: Features.module.css
│   └── Content: features.items[] (6 features)
│
├── How It Works Section
│   ├── Component: HowItWorks.tsx (NEW)
│   ├── Styles: HowItWorks.module.css (NEW)
│   └── Content: howItWorks.steps[] (3 steps)
│
├── Google Sheets Integration
│   ├── Component: GoogleSheetsIntegration.tsx (NEW)
│   ├── Styles: GoogleSheetsIntegration.module.css (NEW)
│   └── Content: googleSheetsIntegration.benefits[]
│
├── Privacy & Security Section
│   ├── Component: PrivacySecurity.tsx (NEW)
│   ├── Styles: PrivacySecurity.module.css (NEW)
│   └── Content: privacySecurity.badges[] (3 badges)
│
├── Install CTA Section
│   ├── Component: CTA.tsx (repurposed)
│   ├── Styles: CTA.module.css
│   └── Content: installCta.headline, primaryButton
│
└── Footer Section
    ├── Component: Footer.tsx
    ├── Styles: Footer.module.css
    └── Content: footer.columns{}, social[]
```

---

## Responsive Breakpoints

### Mobile First Approach
- **Mobile**: 320px - 767px
  - Single-column stacked layout
  - Full-width images and CTAs
  - Touch-optimized buttons (48px minimum)
  - Simplified navigation

- **Tablet**: 768px - 1023px
  - 2-column layouts for grids
  - Side-by-side content + image layouts
  - Adjusted spacing and fonts

- **Desktop**: 1024px+
  - Multi-column layouts (3-col feature grids)
  - 50/50 content splits
  - Full-width features
  - Maximum content width: 1200px

---

## Conversion Goals

### Primary Goal ⭐
**Install Extension from Chrome Web Store**
- Button text: "Install on Chrome"
- Placement: Hero section, Install CTA section
- Target URL: `https://chromewebstore.google.com/detail/[extension-id]`
- Tracking: `hero_install_click`, `install_cta_click` events

### Secondary Goals
1. **View Documentation**
   - Link: `/docs`
   - Tracking: `docs_link_click`

2. **Explore GitHub**
   - Link: External GitHub URL
   - Tracking: `github_link_click`

3. **Email Newsletter** (if applicable)
   - Form submission tracking

---

## Design System Integration

### CSS Design Tokens
All styling uses CSS variables from `src/styles/design-tokens.css`:

**Spacing**: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`, `--spacing-2xl`

**Colors**: `--color-primary`, `--color-text`, `--color-text-muted`, `--color-bg`, `--color-bg-alt`, `--color-border`

**Typography**: `--font-heading`, `--font-body`, `--font-size-*`, `--line-height-*`

### Localization
- **Library**: next-intl
- **Locale files**: `src/messages/en.json`, `src/messages/ka.json`
- **Hook**: `useTranslations()` in components
- **Usage**: `t('sectionName.key')`

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance
- ✅ Color contrast ≥ 4.5:1 for normal text
- ✅ Color contrast ≥ 3:1 for large text
- ✅ Heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images
- ✅ Keyboard navigation for interactive elements
- ✅ Focus indicators (minimum 2px)
- ✅ Form labels associated with inputs
- ✅ Motion respects `prefers-reduced-motion`

---

## Performance Targets

- **Lighthouse Score**: 90+ Performance, 95+ Accessibility
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Image Optimization**: WebP with fallbacks
- **Code Splitting**: Lazy load below-fold sections

---

## Development Timeline

### Phase 1: Design (Wireframe Approval)
- Create Figma wireframes
- Collect stakeholder feedback
- Finalize approved designs

### Phase 2: Component Development
- Update existing components
- Build 3 new components
- Implement responsive layouts

### Phase 3: Content & Localization
- Populate content strings (en.json, ka.json)
- Configure next-intl translations
- Test with both languages

### Phase 4: Testing & Optimization
- Unit/integration/E2E tests
- Accessibility audit
- Performance optimization
- Cross-browser testing

### Phase 5: Deployment
- Pre-launch checklist
- Analytics setup
- Monitoring configuration

---

## Key Files Reference

| File | Purpose | Status |
|------|---------|--------|
| LANDING_PAGE_ARCHITECTURE.md | IA & structure | ✅ Complete |
| WIREFRAME_SPECIFICATIONS.md | Detailed wireframes | ✅ Complete |
| DESIGN_SPECIFICATION.md | Implementation guide | ✅ Complete |
| FIGMA_WIREFRAME_GUIDE.md | Figma creation guide | ✅ Complete |
| README.md | This guide | ✅ You are here |

---

## Content Requirements Summary

### English Localization (en.json)
```json
{
  "hero": { "headline", "subheadline", "ctaButton" },
  "features": { "sectionTitle", "items[]" },
  "howItWorks": { "sectionTitle", "steps[]" },
  "googleSheetsIntegration": { "sectionTitle", "benefits[]" },
  "privacySecurity": { "sectionTitle", "badges[]" },
  "installCta": { "headline", "primaryButton" },
  "footer": { "logo", "columns{}", "social[]" }
}
```

### Georgian Localization (ka.json)
Same structure with Georgian translations.

---

## Getting Started Checklist

### For Design Team
- [ ] Review `LANDING_PAGE_ARCHITECTURE.md` for overview
- [ ] Read `FIGMA_WIREFRAME_GUIDE.md` for canvas setup
- [ ] Create Figma file with structure from guide
- [ ] Build wireframes for Desktop, Tablet, Mobile
- [ ] Add annotations and component library
- [ ] Present to stakeholders for approval

### For Development Team
- [ ] Review `DESIGN_SPECIFICATION.md` for component specs
- [ ] Review `WIREFRAME_SPECIFICATIONS.md` for layout details
- [ ] Set up component files (HowItWorks, GoogleSheets, PrivacySecurity)
- [ ] Implement responsive CSS with breakpoints
- [ ] Add content to message files (en.json, ka.json)
- [ ] Test responsive behavior at all breakpoints

### For Product/Stakeholders
- [ ] Review `LANDING_PAGE_ARCHITECTURE.md` for IA alignment
- [ ] Review Figma wireframes (from design team)
- [ ] Approve conversion goals and CTA placement
- [ ] Review content in message files
- [ ] Provide feedback on design/layout

---

## Questions & Support

Refer to the specific documentation file for detailed information:
- **"What sections are on the page?"** → LANDING_PAGE_ARCHITECTURE.md
- **"How should the hero section look?"** → WIREFRAME_SPECIFICATIONS.md (Hero Section)
- **"What are the component props?"** → DESIGN_SPECIFICATION.md (Section Specs)
- **"How do I create the Figma wireframe?"** → FIGMA_WIREFRAME_GUIDE.md
- **"What content strings do I need?"** → DESIGN_SPECIFICATION.md (Content Requirements)
- **"What CSS classes should I use?"** → DESIGN_SPECIFICATION.md (CSS Module Naming)

---

**Last Updated**: July 29, 2024
**Status**: Architecture & Wireframes Complete - Ready for Design & Implementation
**Next Phase**: Figma Design & Component Development
