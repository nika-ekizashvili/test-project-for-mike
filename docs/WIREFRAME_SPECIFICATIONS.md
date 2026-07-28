# Landing Page Wireframe Specifications

## Document Purpose
This document defines the layout, hierarchy, and component structure for landing page wireframes across desktop and mobile breakpoints. These wireframes serve as the blueprint for design and implementation phases.

---

## 1. HERO SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│                          [NAVBAR]                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Headline (H1)                              Hero Image/Visual    │
│  Display: Extra Large                       (50% width)          │
│  Subheadline (P)                                                 │
│  Body font                                                       │
│                                                                   │
│  [Primary CTA Button]                                            │
│  "Install on Chrome"                                             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 60/40 split: Text on left, image on right
- Hero image height: 400-500px
- Headline: 48-56px, bold
- Subheadline: 20-24px, regular
- Button: 16px font, 48px height, primary color
- Section padding: 80px top/bottom
- Content max-width: 1200px

### Tablet Layout (768px - 1023px)
```
┌──────────────────────────────┐
│      [NAVBAR - Hamburger]     │
├──────────────────────────────┤
│  Headline (H1)               │
│  Display: Large              │
│  Subheadline (P)             │
│                              │
│  [Primary CTA Button]        │
│                              │
│  Hero Image                  │
│  (Full width)                │
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- Single column stack
- Headline: 36-40px
- Hero image: 100% width, max-height: 350px
- Section padding: 60px top/bottom

### Mobile Layout (320px - 767px)
```
┌──────────────────┐
│  [Hamburger Nav] │
├──────────────────┤
│  Headline (H1)   │
│  Display: XL     │
│  Subheadline (P) │
│                  │
│  [CTA Button]    │
│                  │
│  Hero Image      │
│  (Full width)    │
│                  │
└──────────────────┘
```

**Layout Details:**
- Full-width stack, single column
- Headline: 28-32px
- Section padding: 40px top/bottom, 20px sides
- Button: Full width or touch-optimized width

---

## 2. FEATURES SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  Features Section Headline (H2)                                  │
│  Optional subtitle text                                          │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │ [Icon]       │  │ [Icon]       │  │ [Icon]       │           │
│  │              │  │              │  │              │           │
│  │ Feature 1    │  │ Feature 2    │  │ Feature 3    │           │
│  │ Description  │  │ Description  │  │ Description  │           │
│  │              │  │              │  │              │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │ [Icon]       │  │ [Icon]       │  │ [Icon]       │           │
│  │              │  │              │  │              │           │
│  │ Feature 4    │  │ Feature 5    │  │ Feature 6    │           │
│  │ Description  │  │ Description  │  │ Description  │           │
│  │              │  │              │  │              │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 3-column grid
- Feature card dimensions: 300-350px width
- Icon size: 64x64px
- Feature title: 20px, bold
- Description: 14-16px, regular
- Gap between cards: 40px
- Section padding: 80px top/bottom

### Tablet Layout (768px - 1023px)
```
┌──────────────────────────────┐
│  Features Section Headline    │
│  Optional subtitle            │
│                              │
│  ┌──────────────┐            │
│  │   Feature 1  │            │
│  │              │            │
│  └──────────────┘            │
│  ┌──────────────┐            │
│  │   Feature 2  │            │
│  │              │            │
│  └──────────────┘            │
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- 2-column grid
- Feature card width: 100% (responsive)
- Gap: 30px
- Section padding: 60px top/bottom

### Mobile Layout (320px - 767px)
```
┌──────────────────┐
│  Headline (H2)   │
│  Optional text   │
│                  │
│  ┌──────────────┐│
│  │   Feature 1  ││
│  │   [Icon]     ││
│  │   Desc       ││
│  └──────────────┘│
│  ┌──────────────┐│
│  │   Feature 2  ││
│  │   [Icon]     ││
│  │   Desc       ││
│  └──────────────┘│
│  ┌──────────────┐│
│  │   Feature 3  ││
│  │   [Icon]     ││
│  │   Desc       ││
│  └──────────────┘│
│                  │
└──────────────────┘
```

**Layout Details:**
- Single column stack
- Full-width cards with side padding (20px)
- Gap: 20px
- Section padding: 40px top/bottom

---

## 3. HOW IT WORKS / SIMULATOR SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  How It Works Headline (H2)                                      │
│                                                                   │
│  ┌──────────────────────────────┐  ┌──────────────────────────┐ │
│  │  Steps:                       │  │   Interactive Simulator  │ │
│  │  1. Install Extension         │  │   Or Animated Demo       │ │
│  │     Description text          │  │   (Example visualization)│ │
│  │                               │  │                          │ │
│  │  2. Configure Settings        │  │   [Screenshot/Animation]│ │
│  │     Description text          │  │                          │ │
│  │                               │  │   Shows product in use   │ │
│  │  3. Start Tracking            │  │                          │ │
│  │     Description text          │  │                          │ │
│  │                               │  │                          │ │
│  │  [Secondary CTA]              │  │                          │ │
│  └──────────────────────────────┘  └──────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 50/50 split layout
- Left: Steps list (numbered or icon-based)
- Right: Visual simulator/demo/screenshot
- Step item height: 80-100px each
- Icon size: 40x40px
- Step number/icon: 24-32px font
- Simulator image height: 400-500px
- Section padding: 80px top/bottom

### Tablet Layout (768px - 1023px)
```
┌──────────────────────────────┐
│  How It Works Headline (H2)   │
│                              │
│  ┌──────────────────────────┐│
│  │  Steps:                  ││
│  │  1. Install Extension    ││
│  │  2. Configure Settings   ││
│  │  3. Start Tracking       ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Simulator/Demo Image    ││
│  │  (Full width stacked)    ││
│  └──────────────────────────┘│
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- Stacked layout: content, then simulator
- Full-width components
- Gap: 40px between sections

### Mobile Layout (320px - 767px)
```
┌──────────────────┐
│  Headline (H2)   │
│                  │
│  Step 1 [Icon]   │
│  Description     │
│                  │
│  Step 2 [Icon]   │
│  Description     │
│                  │
│  Step 3 [Icon]   │
│  Description     │
│                  │
│  Simulator Image │
│  (Full width)    │
│                  │
│  [CTA Button]    │
│                  │
└──────────────────┘
```

**Layout Details:**
- Single column, full-width stack
- Steps: Each step is a vertical unit
- Icon: 32x32px
- Text gap: 16px
- Simulator image height: 250-300px
- Section padding: 40px top/bottom

---

## 4. GOOGLE SHEETS INTEGRATION SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  Integration Headline (H2)                                       │
│  Subheadline                                                     │
│                                                                   │
│  ┌──────────────────────────────┐  ┌──────────────────────────┐ │
│  │  Benefits List:               │  │   Google Sheets Mockup   │ │
│  │  • Automatic sync             │  │   Or Screenshot          │ │
│  │  • Real-time updates          │  │                          │ │
│  │  • Easy data export           │  │   [Screenshot showing    │ │
│  │  • Custom reporting           │  │    integration in action]│ │
│  │                               │  │                          │ │
│  │  [Secondary CTA]              │  │                          │ │
│  │  "View Integration Docs"      │  │                          │ │
│  │                               │  │                          │ │
│  └──────────────────────────────┘  └──────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 50/50 split layout
- Left: Benefits text, CTA button
- Right: Integration screenshot/mockup
- Benefits list: Bullet items, 16px font
- Image height: 350-400px
- Section padding: 80px top/bottom

### Tablet & Mobile Layout
```
┌──────────────────────────────┐
│  Headline (H2)               │
│  Subheadline                 │
│                              │
│  ┌──────────────────────────┐│
│  │  Benefits List:          ││
│  │  • Automatic sync        ││
│  │  • Real-time updates     ││
│  │  • Easy data export      ││
│  │  • Custom reporting      ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │ Google Sheets Mockup     ││
│  │ (Full width)             ││
│  └──────────────────────────┘│
│                              │
│  [CTA Button]                │
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- Stacked layout
- Full-width image, height: 250-300px
- Centered CTA

---

## 5. PRIVACY & SECURITY SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  Privacy & Security Headline (H2)                                │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │ [Badge Icon] │  │ [Badge Icon] │  │ [Badge Icon] │           │
│  │              │  │              │  │              │           │
│  │ GDPR         │  │ ISO 27001    │  │ Data Privacy │           │
│  │ Compliant    │  │ Certified    │  │ Policy       │           │
│  │ Description  │  │ Description  │  │ Description  │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                   │
│  Privacy Overview Text (Paragraph)                               │
│  [Link to Privacy Policy]  [Link to Security Docs]               │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 3-column badge layout
- Badge size: 120x150px
- Badge icon: 48x48px
- Text below badge: 14px
- Overview text: 16px, centered
- Section padding: 80px top/bottom

### Tablet Layout (768px - 1023px)
```
┌──────────────────────────────┐
│  Headline (H2)               │
│                              │
│  ┌──────────────┐            │
│  │ [Badge Icon] │            │
│  │ GDPR         │            │
│  └──────────────┘            │
│  ┌──────────────┐            │
│  │ [Badge Icon] │            │
│  │ ISO 27001    │            │
│  └──────────────┘            │
│  ┌──────────────┐            │
│  │ [Badge Icon] │            │
│  │ Privacy      │            │
│  └──────────────┘            │
│                              │
│  Privacy Overview Text       │
│  [Links]                     │
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- 2-column or stacked badges
- Adjusted spacing

### Mobile Layout (320px - 767px)
```
┌──────────────────┐
│  Headline (H2)   │
│                  │
│  [Badge 1]       │
│  GDPR            │
│                  │
│  [Badge 2]       │
│  ISO 27001       │
│                  │
│  [Badge 3]       │
│  Privacy Policy  │
│                  │
│  Overview Text   │
│  [Links]         │
│                  │
└──────────────────┘
```

**Layout Details:**
- Single column stack
- Full-width badges, centered
- Badge size: 100x130px

---

## 6. INSTALL CTA SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                  Ready to Get Started? (H2)                      │
│                  Subheadline text (P)                            │
│                                                                   │
│                  ┌────────────────────────────┐                  │
│                  │  [Primary CTA Button]      │                  │
│                  │  Install on Chrome         │                  │
│                  └────────────────────────────┘                  │
│                                                                   │
│            [Secondary CTA Link]  [Tertiary CTA Link]             │
│            View Documentation       View GitHub                  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Centered content
- Headline: 40-48px
- Primary button: 200px+ width, 48-56px height
- Secondary links: Inline, 16px font, spaced horizontally
- Section padding: 80px top/bottom

### Tablet & Mobile Layout
```
┌──────────────────────────────┐
│  Ready to Get Started? (H2)   │
│  Subheadline text             │
│                              │
│  [Primary CTA Button]         │
│  (Full width or wide)         │
│                              │
│  [Secondary Link]             │
│  View Documentation           │
│                              │
│  [Tertiary Link]              │
│  View GitHub                  │
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- Centered, full-width stack
- Button: Full width with side padding
- Links: Stacked vertically on mobile, horizontal on tablet
- Section padding: 60px top/bottom

---

## 7. FOOTER SECTION

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]            Product           Company           Legal     │
│                    • Link 1           • Link 1          • Privacy │
│  Social Media       • Link 2           • Link 2          • Terms   │
│  [Icon] [Icon]      • Link 3           • Link 3          • Cookies │
│  [Icon] [Icon]                                                    │
│                                                                   │
│                                                                   │
│                   © 2024 Company. All rights reserved.            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 4-column layout
- Logo/Social on left, links in center/right columns
- Link font: 14px
- Copyright text: 12px
- Column gap: 60px
- Section padding: 60px top/bottom, 40px sides

### Tablet Layout (768px - 1023px)
```
┌──────────────────────────────┐
│  [Logo]                       │
│  Social Media Links           │
│                              │
│  Product        Company      │
│  • Link 1       • Link 1      │
│  • Link 2       • Link 2      │
│  • Link 3       • Link 3      │
│                              │
│  Legal                        │
│  • Privacy      • Terms       │
│  • Cookies                    │
│                              │
│  © 2024 Company.             │
│  All rights reserved.         │
│                              │
└──────────────────────────────┘
```

**Layout Details:**
- 2-column layout, multi-row
- Links reorganized for mobile space

### Mobile Layout (320px - 767px)
```
┌──────────────────┐
│  [Logo]          │
│  Social Links    │
│  [Icon][Icon]    │
│  [Icon][Icon]    │
│                  │
│  Product         │
│  • Link 1        │
│  • Link 2        │
│  • Link 3        │
│                  │
│  Company         │
│  • Link 1        │
│  • Link 2        │
│  • Link 3        │
│                  │
│  Legal           │
│  • Privacy       │
│  • Terms         │
│  • Cookies       │
│                  │
│  © 2024 Company. │
│  All rights      │
│  reserved.       │
│                  │
└──────────────────┘
```

**Layout Details:**
- Single column stack
- All link groups stacked vertically
- Icon size: 24x24px
- Font sizes reduced
- Section padding: 40px top/bottom, 20px sides

---

## Content Hierarchy Summary

### Typography Scale (Recommended)
- **Display/Hero**: 48-56px (desktop) → 36-40px (tablet) → 28-32px (mobile)
- **H2 (Section)**: 36-40px → 28-32px → 24-28px
- **H3 (Subsection)**: 24-28px → 20-24px → 18-20px
- **Body**: 16px → 14px → 14px
- **Small/Meta**: 12-14px → 12px → 12px

### Color Usage
- **Primary CTA**: Prominent brand color (high contrast)
- **Text**: --color-text (high contrast on background)
- **Muted Text**: --color-text-muted (secondary information)
- **Backgrounds**: White/--color-bg (main), --color-bg-alt (accent sections)
- **Borders**: Subtle (--color-text-muted @ 10-20% opacity)

### Spacing Guidelines
- **Horizontal spacing**: 20px (mobile), 40px (tablet), 60px+ (desktop)
- **Vertical spacing between sections**: 60px (tablet/mobile), 80px (desktop)
- **Internal section padding**: Matches horizontal spacing
- **Gap between items**: 20-30px (mobile), 30-40px (tablet), 40-60px (desktop)

---

## Conversion Tracking Elements

### Primary Goal: Chrome Web Store Install
- **Button text**: "Install on Chrome Web Store"
- **Button placement**: Hero section (above-fold), Install CTA section
- **Button style**: Primary color, 48px+ height for touch
- **Target**: `https://chromewebstore.google.com/detail/[extension-id]`

### Secondary Goals
- **Docs**: "/docs" or external URL
- **GitHub**: External repository URL
- **Newsletter**: Email form submission (TBD)

### Analytics Tracking
- Page load event
- CTA click tracking (each button)
- Section impression tracking (intersection observer)
- Form submission tracking

---

## Accessibility Checkpoints

- [ ] All headings follow proper hierarchy (H1 → H2 → H3)
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] CTA buttons are ≥48px minimum touch target
- [ ] Images have descriptive alt text
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators visible on all buttons/links
- [ ] Forms have associated labels
- [ ] Video content has captions (if included)
- [ ] Motion/animation respects prefers-reduced-motion

---

## Implementation Checklist

- [ ] Desktop wireframes created and approved
- [ ] Tablet wireframes created and approved
- [ ] Mobile wireframes created and approved
- [ ] Conversion goals defined and documented
- [ ] Content mapping completed (sections → components)
- [ ] Localization strings identified (en.json, ka.json)
- [ ] Design tokens reviewed and confirmed
- [ ] CSS breakpoints defined in media queries
- [ ] Responsive behavior tested at all breakpoints
- [ ] Accessibility audit completed
- [ ] Performance budget confirmed
