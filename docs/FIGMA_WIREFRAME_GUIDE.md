# Figma Wireframe Design Guide

## Overview
This guide provides instructions for creating low-fidelity wireframes in Figma based on the landing page information architecture. These wireframes document the prescribed flow and responsive behavior for desktop and mobile breakpoints.

---

## Figma File Structure

### File Organization
```
Landing Page Wireframes (Main File)
├── Cover Page
│   ├── Project Overview
│   ├── Design Handoff Notes
│   └── Navigation Guide
├── Desktop Wireframes
│   ├── 01 - Hero
│   ├── 02 - Features
│   ├── 03 - How It Works
│   ├── 04 - Google Sheets
│   ├── 05 - Privacy & Security
│   ├── 06 - Install CTA
│   ├── 07 - Footer
│   └── Full Page Mockup
├── Mobile Wireframes (375px)
│   ├── 01 - Hero
│   ├── 02 - Features
│   ├── 03 - How It Works
│   ├── 04 - Google Sheets
│   ├── 05 - Privacy & Security
│   ├── 06 - Install CTA
│   ├── 07 - Footer
│   └── Full Page Scroll
├── Tablet Wireframes (768px)
│   └── [Same section structure]
├── Components Library
│   ├── Buttons
│   ├── Cards
│   ├── Icons
│   ├── Forms
│   └── Typography
├── Color Palette
├── Spacing System
├── Annotations & Notes
└── Design System Reference
```

---

## Desktop Wireframe Specifications (1440px)

### Canvas Setup
- **Artboard Size**: 1440px width × Auto height
- **Columns**: 12-column grid system
- **Gutter**: 20px (adjustable)
- **Margin**: 60px left/right
- **Content Width**: 1200px max

### Section Template
Each section wireframe should include:

#### 1. Hero Section (1440px × 600px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│ HERO SECTION                                  │
├──────────────────────────────┬───────────────┤
│  [H1] Headline               │               │
│  [P] Subheadline             │  [Hero Image] │
│  [P] Brief description       │  (600×400px)  │
│  [Button] Install CTA        │               │
└──────────────────────────────┴───────────────┘
```

**Key Layers:**
- Hero__Container (1440px width)
- Hero__Content (Column 1-6)
  - Headline text placeholder
  - Subheadline text placeholder
  - Description text placeholder
  - CTA Button (annotated)
- Hero__Image (Column 7-12)
  - Image placeholder (labeled)

**Annotations:**
- [H1] - Display XL (48-56px)
- [P] - Body (16px)
- [Button] - Primary CTA (48px height)
- Layout shift point: 1024px breakpoint

#### 2. Features Section (1440px × 500px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│ FEATURES SECTION                              │
│ [H2] Section Title                            │
│                                               │
│  ┌────────────┐  ┌────────────┐ ┌──────────┐│
│  │ [Icon]     │  │ [Icon]     │ │ [Icon]   ││
│  │ Feature 1  │  │ Feature 2  │ │Feature 3 ││
│  │ Description│  │ Description│ │Description
│  └────────────┘  └────────────┘ └──────────┘│
│                                               │
│  ┌────────────┐  ┌────────────┐ ┌──────────┐│
│  │ [Icon]     │  │ [Icon]     │ │ [Icon]   ││
│  │ Feature 4  │  │ Feature 5  │ │Feature 6 ││
│  │ Description│  │ Description│ │Description
│  └────────────┘  └────────────┘ └──────────┘│
│                                               │
└──────────────────────────────────────────────┘
```

**Key Layers:**
- Features__Container
- Features__Title (H2 placeholder)
- Features__Grid (6-column, 2-row)
  - Feature__Card (×6)
    - Feature__Icon (64×64px rectangle)
    - Feature__Title (text)
    - Feature__Description (text)

**Annotations:**
- Icon size: 64×64px
- Card gap: 40px
- Responsive breakpoint: 768px (2-col), 320px (1-col)

#### 3. How It Works Section (1440px × 500px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│ HOW IT WORKS                                  │
│ [H2] Section Title                            │
│                                               │
│ ┌──────────────────────┐  ┌────────────────┐│
│ │ Step 1 [Icon]        │  │  Simulator/    ││
│ │ Title & Description  │  │  Demo Image    ││
│ │                      │  │  (Visual)      ││
│ │ Step 2 [Icon]        │  │  (400×500px)   ││
│ │ Title & Description  │  │                ││
│ │                      │  │                ││
│ │ Step 3 [Icon]        │  │                ││
│ │ Title & Description  │  │                ││
│ │ [Button] CTA         │  │                ││
│ └──────────────────────┘  └────────────────┘│
│                                               │
└──────────────────────────────────────────────┘
```

**Key Layers:**
- HowItWorks__Container
- HowItWorks__Content (Column 1-6)
  - HowItWorks__StepsList
    - Step__Item (×3)
      - Step__Number/Icon (40×40px)
      - Step__Title (text)
      - Step__Description (text)
  - HowItWorks__CTA (Button)
- HowItWorks__Simulator (Column 7-12)
  - Simulator__Image (placeholder, 400×500px)

**Annotations:**
- Step icon size: 40×40px
- Simulator height: 400-500px
- Responsive: Stacked on 768px and below

#### 4. Google Sheets Integration (1440px × 500px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│ GOOGLE SHEETS INTEGRATION                     │
│ [H2] Title | [P] Subtitle                     │
│                                               │
│ ┌──────────────────────────┐  ┌────────────┐│
│ │ Benefits:                │  │  Google    ││
│ │ • Automatic Sync         │  │  Sheets    ││
│ │ • Easy Export            │  │  Screenshot││
│ │ • Custom Reporting       │  │  Mockup    ││
│ │ • Collaborative          │  │  (400×500) ││
│ │                          │  │            ││
│ │ [Button] View Guide      │  │            ││
│ └──────────────────────────┘  └────────────┘│
│                                               │
└──────────────────────────────────────────────┘
```

**Key Layers:**
- GoogleSheets__Container
- GoogleSheets__Content (Column 1-6)
  - GoogleSheets__Benefits (Bullet list)
  - GoogleSheets__CTA (Button)
- GoogleSheets__Mockup (Column 7-12)
  - Mockup__Image (placeholder)

**Annotations:**
- Benefits list: Bullet points, 16px font
- Image height: 350-400px

#### 5. Privacy & Security (1440px × 400px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│ PRIVACY & SECURITY                            │
│ [H2] Title | [P] Subtitle                     │
│                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ [Badge]  │  │ [Badge]  │  │ [Badge]  │   │
│  │ GDPR     │  │ ISO 27001│  │ Privacy  │   │
│  │Compliant │  │Certified │  │ First    │   │
│  └──────────┘  └──────────┘  └──────────┘   │
│                                               │
│  Privacy Overview Text [Link] [Link]         │
│                                               │
└──────────────────────────────────────────────┘
```

**Key Layers:**
- Privacy__Container
- Privacy__Title (H2)
- Privacy__BadgesGrid (3-column)
  - Badge__Item (×3)
    - Badge__Icon (48×48px)
    - Badge__Title (text)
    - Badge__Description (text)
- Privacy__Overview (text + links)

**Annotations:**
- Badge size: 120×150px
- Icon size: 48×48px
- Responsive: 2-col at 768px, 1-col at 320px

#### 6. Install CTA (1440px × 300px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│                                               │
│           [H2] Ready to Get Started?          │
│           [P] Subheadline                     │
│                                               │
│           [Button] Install on Chrome          │
│                                               │
│      [Link] View Documentation [Link] GitHub  │
│                                               │
└──────────────────────────────────────────────┘
```

**Key Layers:**
- CTA__Container
- CTA__Content
  - CTA__Headline (H2, centered)
  - CTA__Subheadline (P, centered)
  - CTA__PrimaryButton (48px height)
  - CTA__SecondaryLinks (horizontal row)

**Annotations:**
- All content centered
- Button full-width on mobile

#### 7. Footer (1440px × 300px)
**Frame Structure:**
```
┌──────────────────────────────────────────────┐
│ [Logo]    Product      Company      Legal    │
│           • Link 1     • Link 1      • Privacy│
│ Social    • Link 2     • Link 2      • Terms  │
│ [Icon]    • Link 3     • Link 3      • Cookies
│ [Icon]                                       │
│                                               │
│           © 2024 Company. All rights reserved│
│                                               │
└──────────────────────────────────────────────┘
```

**Key Layers:**
- Footer__Container
- Footer__Logo (placeholder)
- Footer__Columns (4-column grid)
- Footer__Links (list items)
- Footer__Social (icon row)
- Footer__Copyright (text, centered)

---

## Mobile Wireframe Specifications (375px)

### Canvas Setup
- **Artboard Size**: 375px width (iPhone SE/8 standard)
- **Margin**: 20px left/right
- **Content Width**: 335px

### Mobile Section Heights (Approximate)
- Hero: 500px
- Features: 800px (3 single-column cards)
- How It Works: 700px (stacked)
- Google Sheets: 600px (stacked)
- Privacy: 600px (stacked badges)
- Install CTA: 300px (centered, stacked)
- Footer: 500px (stacked)

### Key Mobile Adjustments
- **Full-width stacking**: All sections stack vertically
- **Button width**: 90% width, centered
- **Font sizes**: Scaled down appropriately
- **Image heights**: Reduced to fit mobile viewport
- **Touch targets**: Minimum 48×48px maintained

### Mobile Wireframe - Hero
```
┌─────────────────┐
│ HERO            │
│ [Headline]      │
│ [Subheadline]   │
│                 │
│ [CTA Button]    │
│ Full width      │
│                 │
│ [Hero Image]    │
│ Full width      │
│ 300px height    │
│                 │
└─────────────────┘
```

---

## Tablet Wireframe Specifications (768px)

### Canvas Setup
- **Artboard Size**: 768px width
- **Margin**: 40px left/right
- **Content Width**: 688px

### Key Tablet Adjustments
- **Features**: 2-column grid
- **Privacy/Security**: 2-column badge layout
- **How It Works**: Stacked (steps above image)
- **Other sections**: Similar to mobile, wider content area

---

## Annotation Standards

### Font & Typography Annotations
```
[H1] Display XL - 48-56px, Bold
[H2] Section Title - 36-40px, Bold
[H3] Subsection - 24-28px, Bold
[P] Body - 16px, Regular
[Small] Meta text - 12-14px, Regular
```

### Spacing Annotations
```
Padding: 80px (desktop), 60px (tablet), 40px (mobile)
Gap between items: 40px (desktop), 30px (tablet), 20px (mobile)
Margin: 0 auto (centered content)
```

### Interactive Element Annotations
```
[Button] Primary CTA
- Size: 48px height, min 200px width
- Color: Primary color
- State: Default, Hover (darker), Active (pressed), Focus (ring)

[Link] Secondary link
- Color: Primary or text color
- Hover: Underline
- Focus: Ring outline
```

### Responsive Behavior Annotations
```
🔄 Responsive: Stacks to single column below 768px
🖼️ Image: Lazy load below fold
♿ Accessible: See accessibility notes layer
```

### Conversion Goal Annotations
```
🎯 Primary Goal: Install Chrome Web Store
↪️ Secondary Goals: Docs, GitHub, Newsletter
📊 Track: Event on button click
```

---

## Component Library Setup

### Buttons Component
Create reusable button components:
- **Primary Button**: Full-width variant, wide variant, default
- **Secondary Link**: Default, hover state
- **States**: Default, hover, active, focus, disabled

### Cards Component
- **Feature Card**: Icon, title, description
- **Badge Card**: Icon, title, subtitle

### Typography Component
- Headline H1, H2, H3
- Body text
- Meta text

### Icons
- Feature icons (64×64px)
- Step indicators (40×40px)
- Security badges (48×48px)
- Social media (24×24px)

---

## Design System Integration

### Color Palette Setup
Create a colors page with:
- Primary color
- Text colors (main, muted, light)
- Background colors
- Border colors
- Status colors (if applicable)

### Spacing System
Document the spacing scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 32px
- xl: 48px
- 2xl: 64px

### Breakpoints Reference
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large: 1440px+

---

## Conversion Goal Callouts

### Primary Goal
**Chrome Web Store Installation**
- Location: Hero CTA, Install CTA section
- Button text: "Install on Chrome"
- Target: Chrome Web Store URL
- Measurement: Button click event

### Secondary Goals

**1. Documentation**
- Link: "/docs"
- Placement: Footer, Install CTA, How It Works CTA
- Measurement: Link click event

**2. GitHub Repository**
- Link: External GitHub URL
- Placement: Footer, Install CTA
- Measurement: External link click event

**3. Email Newsletter** (if applicable)
- Form location: TBD
- Submission tracking: Form submit event

---

## Stakeholder Approval Checkpoints

### Review Stages
- [ ] **Stage 1**: Desktop wireframe structure approved
- [ ] **Stage 2**: Mobile wireframe responsiveness approved
- [ ] **Stage 3**: Tablet breakpoint transitions approved
- [ ] **Stage 4**: Conversion goals and CTAs placed correctly
- [ ] **Stage 5**: Content hierarchy and typography hierarchy approved
- [ ] **Stage 6**: Accessibility annotations reviewed
- [ ] **Stage 7**: Final handoff to design/development team

### Feedback Collection Template
```
Section: [Hero / Features / etc.]
Breakpoint: [Desktop / Tablet / Mobile]
Feedback: [Specific comments]
Required Changes: [Yes / No]
Sign-off: [Approved / Needs Revision]
```

---

## Handoff Process

### Figma File Sharing
1. Create Figma file in shared team workspace
2. Share link with all stakeholders
3. Set permissions: View for stakeholders, Edit for design team
4. Add comments for feedback collection

### Design Handoff Documentation
Include in Figma:
- Component usage guide
- Color and spacing references
- Typography scale
- Responsive breakpoint behavior
- Interactive element states
- Accessibility requirements

### Deliverables
- [ ] Figma wireframe file (shared link)
- [ ] PNG exports of all sections (desktop, tablet, mobile)
- [ ] Figma prototype with clickable navigation
- [ ] Design specification (this document)
- [ ] Content requirements document
- [ ] Accessibility checklist

---

## Tools & Resources

### Figma Plugins Recommended
- **Responsively** - Test responsive designs
- **Figma-Measure** - Easy measurement tool
- **Stark** - Accessibility contrast checker
- **Wireframer** - Template library for wireframing

### External Resources
- Design tokens library (Figma file)
- Next.js component documentation
- WCAG 2.1 accessibility guidelines
- Mobile-first design best practices

### Related Documentation
- `LANDING_PAGE_ARCHITECTURE.md` - Information architecture
- `WIREFRAME_SPECIFICATIONS.md` - Detailed wireframe specs
- `DESIGN_SPECIFICATION.md` - Implementation guide
