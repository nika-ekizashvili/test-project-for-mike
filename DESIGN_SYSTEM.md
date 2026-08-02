# HomeGrab Landing Page - Design System Specifications

## Document Purpose

This document establishes the design system guidelines for the HomeGrab landing page, including color palette, typography, spacing, components, and visual hierarchy standards.

---

## 1. COLOR PALETTE

### Brand Colors

#### Primary Color Palette
- **Primary Blue**: `#0066FF` (Confidence, trust, action)
  - Lighter: `#E6F2FF`
  - Darker: `#0052CC`
  - Usage: CTAs, links, primary buttons, highlights

- **Brand Green**: `#10B981` (Success, privacy, security)
  - Lighter: `#D1FAE5`
  - Darker: `#059669`
  - Usage: Trust messaging, success indicators, security badges

- **Accent Orange**: `#F59E0B` (Energy, attention)
  - Lighter: `#FEF3C7`
  - Darker: `#D97706`
  - Usage: Highlights, emphasis, calls-to-action alternatives

### Neutral Colors

- **Black**: `#000000` (Headlines, primary text)
- **Charcoal**: `#1F2937` (Body text, secondary headlines)
- **Dark Gray**: `#374151` (Tertiary text, labels)
- **Medium Gray**: `#6B7280` (Placeholder text, disabled states)
- **Light Gray**: `#D1D5DB` (Borders, dividers)
- **Off-White**: `#F9FAFB` (Backgrounds, cards)
- **White**: `#FFFFFF` (Surface, cards, modals)

### Semantic Colors

- **Success Green**: `#10B981` (Confirmations, security)
- **Warning Orange**: `#F59E0B` (Alerts, important notices)
- **Error Red**: `#EF4444` (Errors, critical warnings)
- **Info Blue**: `#0066FF` (Information, help text)

### Background Colors

- **Hero Background**: Linear gradient: `#F0F9FF` to `#E0F2FE`
- **Section Background**: `#F9FAFB`
- **Card Background**: `#FFFFFF` with subtle shadow
- **Footer Background**: `#1F2937` (Charcoal)
- **Dark Mode Background** (Future): `#1A1A1A`

### Usage Examples

```
Button Styles:
- Primary CTA: Background #0066FF, Text #FFFFFF
- Secondary CTA: Border #0066FF, Text #0066FF, Background transparent
- Outline CTA: Border #D1D5DB, Text #1F2937, Background transparent
- Danger/Error: Background #EF4444, Text #FFFFFF

Text Styles:
- Headlines: #000000 or #1F2937
- Body Text: #374151
- Secondary Text: #6B7280
- Links: #0066FF
- Links (hover): #0052CC
- Disabled: #9CA3AF
```

---

## 2. TYPOGRAPHY

### Font Families

**Primary Font Stack** (Headlines & UI):
```
'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif
```

**Secondary Font Stack** (Body & Longer Text):
```
'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif
```

**Monospace Font** (Code, technical info):
```
'Monaco', 'Courier New', 'Courier', monospace
```

### Font Weights

- **Light**: 300 (Rarely used, secondary info)
- **Regular**: 400 (Body text, default)
- **Medium**: 500 (Emphasis within body)
- **Semibold**: 600 (Subheadings, strong emphasis)
- **Bold**: 700 (Headlines, section titles)
- **Extra Bold**: 800 (Rare, only for emphasis)

### Typography Scale

#### Headings

| Size | Desktop | Mobile | Weight | Line Height | Letter Spacing | Usage |
|------|---------|--------|--------|-------------|----------------|-------|
| H1 | 48px | 28px | 700 (Bold) | 1.2 | -0.02em | Page headlines, hero |
| H2 | 40px | 24px | 700 (Bold) | 1.25 | -0.01em | Section titles |
| H3 | 32px | 20px | 600 (Semibold) | 1.3 | 0 | Subsection titles |
| H4 | 24px | 18px | 600 (Semibold) | 1.35 | 0 | Card titles, feature titles |
| H5 | 20px | 16px | 600 (Semibold) | 1.4 | 0 | Step titles |
| H6 | 18px | 14px | 500 (Medium) | 1.4 | 0 | Labels, badges |

#### Body Text

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Large | 18px | 400 (Regular) | 1.5 | 0 | Feature descriptions |
| Body | 16px | 400 (Regular) | 1.5 | 0 | Primary body text |
| Small | 14px | 400 (Regular) | 1.6 | 0.02em | Secondary text, captions |
| Extra Small | 12px | 400 (Regular) | 1.5 | 0 | Footer, metadata |

#### Special Text

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Button Text | 16px | 600 (Semibold) | 1.5 | CTA buttons |
| Link Text | 16px | 400 (Regular) | 1.5 | Hyperlinks |
| Input Label | 14px | 500 (Medium) | 1.4 | Form labels |
| Input Placeholder | 14px | 400 (Regular) | 1.4 | Placeholder text |
| Uppercase Label | 12px | 600 (Semibold) | 1.2 | Section labels, badges |

### Responsive Typography

Desktop to mobile font scaling uses this multiplier:
- `H1`: 48px → 28px (1.71x reduction)
- `H2`: 40px → 24px (1.67x reduction)
- `H3`: 32px → 20px (1.6x reduction)
- `Body`: 16px → 16px (no change)
- `Small`: 14px → 13px (slightly reduced)

### Text Alignment

- **Headlines**: Center or left-aligned depending on section
- **Body**: Left-aligned for readability
- **Centered sections**: Headlines center, body left
- **Feature cards**: Centered text for balanced appearance
- **Footer links**: Left-aligned in columns, center for social

---

## 3. SPACING SYSTEM

### Base Unit

The spacing system is based on 4px base unit:

| Unit | Value | Usage |
|------|-------|-------|
| xs | 4px | Minimal spacing, micro interactions |
| sm | 8px | Tight spacing, within components |
| md | 12px | Standard spacing, button gaps |
| lg | 16px | Regular spacing, component gaps |
| xl | 20px | Section spacing |
| 2xl | 24px | Large spacing |
| 3xl | 32px | Extra large spacing |
| 4xl | 40px | Section padding |
| 5xl | 48px | Large section gaps |
| 6xl | 56px | Hero spacing |
| 7xl | 60px | Section vertical padding |

### Specific Spacing

#### Padding

- **Desktop horizontal**: 40px (sides)
- **Desktop vertical**: 60px (sections)
- **Mobile horizontal**: 20px (sides)
- **Mobile vertical**: 40px (sections)
- **Cards**: 24px internal padding
- **Buttons**: 12px horizontal, 16px vertical (minimum)
- **Inputs**: 12px horizontal, 14px vertical

#### Margins

- **Section gaps**: 60px (desktop) / 40px (mobile)
- **Component gaps**: 20px (desktop) / 12px (mobile)
- **Text spacing**: 12px (between headings and body)
- **Button spacing**: 12px (between buttons)

#### Border Radius

- **Small**: 4px (minor elements)
- **Medium**: 8px (cards, inputs)
- **Large**: 12px (larger elements)
- **Extra Large**: 16px (feature cards, prominent cards)
- **Full**: 999px (circular elements, full-width rounded)

---

## 4. SHADOW & ELEVATION SYSTEM

### Shadow Styles

```css
/* Level 1 - Subtle (Cards at rest) */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

/* Level 2 - Light (Cards on hover) */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Level 3 - Medium (Modals, dropdowns) */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Level 4 - Heavy (Major overlays) */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

### Elevation Usage

- **Ground Level** (No shadow): Background sections
- **Level 1**: Card components (feature cards, message cards)
- **Level 2**: Cards on hover, lifted states
- **Level 3**: Modals, floating menus, sticky elements
- **Level 4**: Priority modals, critical overlays

---

## 5. COMPONENT SPECIFICATIONS

### Buttons

#### Button Sizes

| Size | Height | Padding | Font Size | Usage |
|------|--------|---------|-----------|-------|
| Small | 36px | 8px 16px | 14px | Secondary actions |
| Medium | 40px | 10px 20px | 14px | Default buttons |
| Large | 48px | 12px 24px | 16px | Primary CTAs (desktop) |
| Extra Large | 56px | 16px 32px | 18px | Primary CTAs (mobile) |

#### Button Variants

**Primary Button**
- Background: `#0066FF`
- Text: `#FFFFFF`
- Border: None
- Hover: Background `#0052CC`
- Active: Background `#003D99`
- Disabled: Background `#D1D5DB`, Text `#9CA3AF`

**Secondary Button**
- Background: Transparent
- Text: `#0066FF`
- Border: 2px solid `#0066FF`
- Hover: Background `#E6F2FF`
- Active: Background `#CCE5FF`
- Disabled: Border `#D1D5DB`, Text `#9CA3AF`

**Outline Button**
- Background: Transparent
- Text: `#374151`
- Border: 2px solid `#D1D5DB`
- Hover: Background `#F9FAFB`, Border `#9CA3AF`
- Active: Background `#F3F4F6`, Border `#6B7280`
- Disabled: Border `#E5E7EB`, Text `#9CA3AF`

**Ghost Button**
- Background: Transparent
- Text: `#0066FF`
- Border: None
- Hover: Background `#E6F2FF`
- Active: Background `#CCE5FF`
- Disabled: Text `#D1D5DB`

### Cards

#### Card Specifications

- **Width**: Varies by section (280px to 600px)
- **Border Radius**: 12px (standard) or 16px (prominent)
- **Padding**: 24px internal
- **Background**: `#FFFFFF`
- **Border**: None (relies on shadow)
- **Shadow**: Level 1 (box-shadow as defined above)
- **Hover**: Shadow Level 2, optional scale (1.02x)

#### Card Content

```
┌─────────────────┐
│  [Icon/Image]   │  (12px top padding)
│                 │
│  Card Title     │  (Semibold, 18px)
│                 │
│  Card Text      │  (Regular, 14-16px, gray)
│  Description    │  (1.6 line height)
│                 │
│  [Optional CTA] │  (12px bottom padding)
│                 │
└─────────────────┘
```

### Forms & Inputs

#### Text Input Specifications

- **Height**: 44px (mobile) / 40px (desktop)
- **Padding**: 12px horizontal, 8px vertical
- **Font Size**: 14px
- **Border**: 2px solid `#D1D5DB`
- **Border Radius**: 8px
- **Background**: `#FFFFFF`
- **Focus State**: Border `#0066FF`, shadow `0 0 0 3px rgba(0, 102, 255, 0.1)`
- **Error State**: Border `#EF4444`, bg `#FEF2F2`
- **Disabled State**: Background `#F9FAFB`, border `#E5E7EB`, text `#9CA3AF`

#### Label Specifications

- **Font Size**: 14px
- **Font Weight**: 500 (Medium)
- **Color**: `#374151`
- **Margin Below**: 8px
- **Required Indicator**: Red asterisk or required marker

### Badges & Tags

#### Badge Specifications

- **Padding**: 4px 8px (sm), 6px 12px (md), 8px 16px (lg)
- **Border Radius**: 12px (pill) or 4px (square)
- **Font Size**: 12px (sm), 14px (md)
- **Font Weight**: 500 (Medium)

#### Badge Variants

**Primary Badge**
- Background: `#E6F2FF`
- Text: `#0052CC`

**Success Badge**
- Background: `#D1FAE5`
- Text: `#047857`

**Warning Badge**
- Background: `#FEF3C7`
- Text: `#B45309`

**Danger Badge**
- Background: `#FEE2E2`
- Text: `#991B1B`

---

## 6. VISUAL HIERARCHY

### Hierarchy Levels

1. **Primary**: Hero headlines (H1), primary CTAs
2. **Secondary**: Section titles (H2), feature titles, secondary CTAs
3. **Tertiary**: Subsection titles (H3), body text
4. **Quaternary**: Small text, labels, captions, footer

### Contrast & Emphasis

- **Color**: Primary colors are brand blue (`#0066FF`)
- **Size**: Decreasing font sizes show hierarchy
- **Weight**: Bold (700) for primary, semibold (600) for secondary
- **Position**: More important content appears first/top
- **Density**: Primary content has more white space around it

### Visual Weight

| Element | Visual Weight | Font Size | Weight | Color |
|---------|---------------|-----------|--------|-------|
| Hero H1 | Maximum | 48px | 700 | Primary |
| Section H2 | Very High | 40px | 700 | Charcoal |
| Feature H4 | High | 24px | 600 | Charcoal |
| Body Text | Medium | 16px | 400 | Dark Gray |
| Secondary Text | Low | 14px | 400 | Medium Gray |
| Footer Text | Very Low | 12px | 400 | Light Gray |

---

## 7. ICONS & ILLUSTRATIONS

### Icon Specifications

- **Stroke Width**: 1.5px - 2px (outlined icons)
- **Fill**: Solid or outlined, consistent throughout
- **Colors**:
  - Primary: `#0066FF` (actions, interactive)
  - Success: `#10B981` (positive, security)
  - Warning: `#F59E0B` (alerts, caution)
  - Neutral: `#6B7280` (neutral, secondary)
- **Sizes**:
  - Small: 16px (inline, labels)
  - Standard: 24px (common use)
  - Medium: 48px (card icons)
  - Large: 64px (section highlights)
  - Extra Large: 96px (hero, background)

### Illustration Specifications

- **Style**: Clean, modern, flat design
- **Color Palette**: Use design system colors
- **Animation**: Subtle, 300ms-500ms transitions where applicable
- **Consistency**: Maintain consistent line weight and corner radius
- **Aspect Ratios**:
  - Hero: 16:9 or 4:3
  - Card: 1:1 or 16:9
  - Full width: 16:9 or 21:9

---

## 8. ANIMATIONS & TRANSITIONS

### Timing & Easing

- **Short Duration**: 150ms (hover, quick feedback)
- **Standard Duration**: 300ms (element transitions)
- **Long Duration**: 500ms-800ms (complex animations)
- **Easing Function**: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design standard)

### Common Animations

**Fade In**
```css
animation: fadeIn 0.3s ease-in-out;
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up**
```css
animation: slideUp 0.3s ease-in-out;
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

**Scale**
```css
transition: transform 0.3s ease-in-out;
&:hover { transform: scale(1.02); }
```

**Elevation**
```css
transition: box-shadow 0.3s ease-in-out;
&:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
```

### Button Interactions

- **Hover**: Subtle shadow or color shift (150ms)
- **Active/Pressed**: Color deepening, small scale down (100ms)
- **Focus**: 3px outline, visible focus indicator
- **Disabled**: Reduced opacity (0.5), no hover state

### Scroll Animations

- **Fade on Scroll**: Subtle fade-in for sections below fold
- **Parallax**: Optional subtle parallax on hero
- **Sticky Navigation**: Smooth transition when appearing
- **Progress Indicator**: Animated progress as user scrolls

---

## 9. RESPONSIVE DESIGN

### Breakpoints

```css
/* Mobile First Approach */
Mobile:     0px - 640px    (default)
Tablet:     641px - 1024px
Desktop:    1025px - 1920px
Large:      1921px+
```

### Scaling Rules

1. **Typography**: Reduce desktop sizes by 30-40% on mobile
2. **Spacing**: 40px (desktop) → 20px (mobile)
3. **Components**: Stack vertically on mobile
4. **Images**: Responsive scaling, lazy load
5. **Navigation**: Hamburger menu on mobile
6. **Buttons**: Full-width on mobile, inline on desktop

### Mobile Optimizations

- Touch targets: Minimum 44px height
- Font size: Minimum 16px to prevent zoom
- Viewport: `width=device-width, initial-scale=1`
- Safe areas: Account for notches/safe areas
- Viewport height: Account for mobile browser chrome

---

## 10. ACCESSIBILITY

### WCAG 2.1 AA Compliance

- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Font Size**: Minimum 14px for body text, 12px for labels
- **Line Height**: Minimum 1.5 for body text
- **Letter Spacing**: Minimum 0.12em for body text
- **Word Spacing**: Minimum 0.16em

### Focus States

- **Visible Focus**: 2-3px outline or underline
- **Focus Color**: High contrast (e.g., `#0066FF`)
- **Focus Style**: Outline offset 2px
- **Keyboard Navigation**: Tab order logical and intuitive

### Color Accessibility

- **No Color Alone**: Don't rely on color for information
- **Sufficient Contrast**: All text meets AA standards
- **Color Blindness**: Ensure patterns and icons are distinguishable
- **Dark Mode**: Consider implementation for future

### Interactive Elements

- **Keyboard Accessible**: All interactive elements reachable via keyboard
- **Descriptive Labels**: Form inputs have associated labels
- **Error Messages**: Clear, descriptive, and associated with inputs
- **Skip Links**: Option to skip navigation and go to main content

---

## 11. DARK MODE (FUTURE)

### Dark Mode Colors

- **Background Primary**: `#0F172A`
- **Background Secondary**: `#1A1F35`
- **Background Tertiary**: `#2A3142`
- **Text Primary**: `#F3F4F6`
- **Text Secondary**: `#D1D5DB`
- **Text Tertiary**: `#9CA3AF`
- **Accent Colors**: Slightly lighter (e.g., `#4D9FFF` for blue)

### Dark Mode Adjustments

- Reduce image opacity slightly
- Use darker shadows
- Increase white space around text
- Higher contrast for interactive elements

---

## 12. COMPONENT LIBRARY (Future Reference)

### Core Components

- Button
- Input
- Card
- Badge
- Icon
- Avatar
- Toast/Alert
- Modal/Dialog
- Dropdown
- Tab
- Accordion
- Breadcrumb
- Pagination
- Progress Bar
- Spinner/Loader
- Tooltip

### Composite Components

- Navigation Bar
- Hero Section
- Feature Grid
- Step Timeline
- Stats Counter
- Testimonial Card
- CTA Banner
- Footer

---

## 13. PRACTICAL APPLICATION EXAMPLES

### Feature Card Example

```
┌──────────────────┐
│   [Icon: 64px]   │  (Top padding: 20px)
│   Blue (#0066FF) │  (Rounded)
│                  │
│  Feature Title   │  (H4: Semibold, 24px)
│                  │  (Margin: 16px top/bottom)
│ Description text │  (Body: Regular, 16px, #6B7280)
│ spans multiple   │  (Line height: 1.5)
│ lines and is     │  (Width: 250px, centered)
│ centered         │
│                  │  (Bottom padding: 20px)
└──────────────────┘

Hover State:
- Shadow: Level 1 → Level 2
- Optional: Scale 1.02x
- Duration: 300ms
```

### Button Style Guide Example

```
Primary Button (Install Now):
┌─────────────────────────┐
│   Install Now           │  (48px height, desktop)
│                         │  (56px height, mobile)
│                         │  (180px+ width)
│                         │  (Bold, 16-18px, white)
│                         │  (Background: #0066FF)
│                         │  (Hover: #0052CC, shadow +)
│                         │  (Border radius: 8px)
└─────────────────────────┘
```

### Hero Section Example

```
Full Viewport Height:
┌──────────────────────────────────────────┐
│  ↑                                        │
│  │ "Sync Your Georgian Real Estate       │  (H1, 48px desktop)
│  │  Listings Instantly"                  │  (H1, 28px mobile)
│  │                                        │
│  │ Sync SS.ge & MyHome.ge in seconds     │  (Subheading, gray)
│  │                                        │
│  │ [Install Now] [See How It Works]      │  (CTA buttons)
│  │                                        │
│  ↓ [Hero Visual/Image]                   │  (400-600px height)
└──────────────────────────────────────────┘
```

---

## 14. IMPLEMENTATION NOTES

### CSS Architecture

- **Naming**: BEM (Block Element Modifier) for CSS classes
- **Organization**: Atomic design principles
- **Units**: Use rem for scalable sizing (base 16px = 1rem)
- **Variables**: CSS custom properties for colors, spacing, typography

### Responsive Approach

- Mobile-first CSS (base = mobile, then add media queries for larger screens)
- Avoid fixed widths, use max-width and padding
- Flexible layouts (flexbox, grid) for adaptability
- Test on multiple devices and browsers

### Performance

- Optimize images for web (WebP format, appropriate sizing)
- Minimize animations on low-end devices
- Lazy load below-fold images
- Use system fonts where possible
- Minify and compress assets

---

## 15. VERSIONING & UPDATES

**Design System Version**: 1.0  
**Last Updated**: 2024-08-02  
**Status**: Complete and Ready for Implementation  
**Next Steps**: Figma file creation, component library build, developer handoff

---

## Appendix: Color Reference Sheet

```
Primary Blue:      #0066FF
Secondary Green:   #10B981
Accent Orange:     #F59E0B
Pure Black:        #000000
Charcoal:          #1F2937
Dark Gray:         #374151
Medium Gray:       #6B7280
Light Gray:        #D1D5DB
Off-White:         #F9FAFB
Pure White:        #FFFFFF
Success:           #10B981
Warning:           #F59E0B
Error:             #EF4444
Info:              #0066FF
```

---

**Document Status**: ✅ Complete  
**Approval**: Ready for Stakeholder Review  
**Implementation**: Ready to proceed to design phase
