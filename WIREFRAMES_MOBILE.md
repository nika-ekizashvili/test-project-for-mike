# HomeGrab Landing Page - Mobile Wireframes (375px)

## Wireframe Overview

This document provides detailed low-fidelity wireframes for the mobile version of the HomeGrab landing page. Mobile-first responsive design principles are applied with focus on touch interaction and single-column layout.

---

## Mobile Layout Grid

- **Viewport Width**: 375px (iPhone 12/13 size reference)
- **Content Width**: 335px (20px padding on each side)
- **Single Column Layout**: Vertical stack
- **Touch Target Size**: Minimum 48px x 48px
- **Section Padding**: 20px horizontal / 40px vertical
- **Font Scale**: Base 16px with responsive scaling

---

## SECTION 1: Hero Section - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  [≡] Logo    Nav [↓] │  ← Hamburger menu (sticky)
│                      │
├──────────────────────┤
│                      │
│   "Sync Your          │
│    Georgian Real      │
│    Estate Listings"   │
│                      │
│   "Instantly sync     │
│    SS.ge & MyHome.ge" │
│                      │
│  ┌────────────────┐  │
│  │  Install Now   │  │  ← Full width, 48px height
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │ See How Works  │  │  ← Full width, outline style
│  └────────────────┘  │
│                      │
│ ┌──────────────────┐ │
│ │                  │ │
│ │  [Hero Visual    │ │
│ │   Smartphone     │ │
│ │   Mockup]        │ │
│ │                  │ │
│ └──────────────────┘ │
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Mobile Viewport | 375px | Full screen | Vertical scroll |
| Content Area | 335px | Auto | 20px padding each side |
| Navigation Bar | 375px | 56px | Sticky, hamburger menu |
| Headline | 335px | Auto | H1, 28px font, bold, line break optimization |
| Subheading | 335px | Auto | H2, 18px font, lighter |
| Primary Button | 335px | 48px | Full width, high contrast |
| Secondary Button | 335px | 48px | Full width, outline, margin top 12px |
| Hero Visual | 335px | 280px | Responsive image, 6:5 aspect |

### Key Mobile Adaptations
- Headlines break naturally at word boundaries
- Full-width buttons for easy thumb interaction
- Vertical button stacking instead of side-by-side
- Hamburger navigation menu (collapsible)
- Larger touch targets (48px minimum)
- Simplified hero visual (may be smaller/different crop)

### Visual Style Notes
- Background: Light gray or gradient
- Font sizes reduced but maintain readability
- Hero visual: Optimized for mobile view (may show phone frame)
- Spacing: Tighter than desktop but maintains breathing room

---

## SECTION 2: Features Section - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  "Everything You     │
│   Need..."           │
│                      │
│  [Feature Card]      │
│  ┌────────────────┐  │
│  │    [Icon]      │  │
│  │ One-Click Sync │  │
│  │ Sync listings  │  │
│  │ instantly      │  │
│  └────────────────┘  │
│                      │
│  [Feature Card]      │
│  ┌────────────────┐  │
│  │    [Icon]      │  │
│  │ Time-Saving    │  │
│  │ Save hours     │  │
│  │ every week     │  │
│  └────────────────┘  │
│                      │
│  [Feature Card]      │
│  ┌────────────────┐  │
│  │    [Icon]      │  │
│  │ Zero Config    │  │
│  │ Works out of   │  │
│  │ the box        │  │
│  └────────────────┘  │
│                      │
│  [Feature Card]      │
│  ┌────────────────┐  │
│  │    [Icon]      │  │
│  │ Real-Time      │  │
│  │ Stay in sync   │  │
│  │ always         │  │
│  └────────────────┘  │
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 375px | Auto | Padding 40px vertical |
| Section Headline | 335px | Auto | H2, 24px font, centered |
| Section Subheading | 335px | Auto | 14px, gray, centered |
| Feature Card Stack | 335px | Auto | Single column, 20px gap |
| Feature Card | 335px | 160px | White bg, rounded corners |
| Feature Icon | 48px | 48px | Centered top |
| Feature Title | 310px | Auto | 16px, bold, centered |
| Feature Description | 310px | Auto | 13px, gray, centered, 2-3 lines |

### Key Mobile Adaptations
- Single column stack (all cards full width)
- Smaller icons (48px instead of 64px)
- Reduced text size while maintaining readability
- More compact spacing between cards
- Cards still have visual separation (shadow/border)

### Visual Style Notes
- Same color scheme as desktop
- Cards: White with light shadow
- Icons: Smaller but still recognizable
- Text: Reduced size but proportionally spaced

---

## SECTION 3: How It Works / Simulator - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  "Three Simple       │
│   Steps"             │
│                      │
│  ┌────────────────┐  │
│  │  Circle: "1"   │  │
│  │  Install the   │  │
│  │  Extension     │  │
│  │                │  │
│  │    ↓ Arrow     │  │ ← Vertical arrow
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │  Circle: "2"   │  │
│  │  Connect Your  │  │
│  │  Accounts      │  │
│  │                │  │
│  │    ↓ Arrow     │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │  Circle: "3"   │  │
│  │  Start Syncing │  │
│  │  Automatically │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │ Simulator/     │  │
│  │ Walkthrough    │  │
│  │                │  │
│  │ [Screenshot]   │  │
│  │                │  │
│  └────────────────┘  │
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 375px | Auto | Padding 40px vertical |
| Section Headline | 335px | Auto | H2, 24px font, centered |
| Steps Container | 335px | Auto | Single column, vertical flow |
| Step Card | 335px | 140px | White bg, rounded |
| Step Number Circle | 48px | 48px | Centered, brand color |
| Step Title | 310px | Auto | 18px, bold, centered |
| Step Description | 310px | Auto | 13px, gray, centered |
| Vertical Arrow | 30px | 30px | Down arrow icon |
| Simulator Area | 335px | 280px | Responsive screenshot area |

### Key Mobile Adaptations
- Vertical flow instead of horizontal 3-column layout
- Arrows between steps (vertical, down-pointing)
- Smaller step circles (48px)
- Full-width step cards
- Simulator screenshot optimized for mobile viewport
- Tighter spacing to reduce scrolling

### Visual Style Notes
- Same as desktop but vertically oriented
- Arrows: Gray, pointing downward
- Cards: Maintain visual hierarchy with step numbers

---

## SECTION 4: Google Sheets Tracking - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  "Track Everything   │
│   with Google        │
│   Sheets..."         │
│                      │
│  ┌────────────────┐  │
│  │ Google Sheets  │  │
│  │ Screenshot     │  │
│  │                │  │
│  │ (Responsive)   │  │
│  │                │  │
│  └────────────────┘  │
│                      │
│  Export your data    │
│  and stay on top     │
│  of your listings    │
│  with custom         │
│  reporting tools.    │
│                      │
│  Key Benefits:       │
│                      │
│  • Automated data    │
│    export            │
│  • Custom reports    │
│  • Performance       │
│    tracking          │
│                      │
│  ┌────────────────┐  │
│  │  Learn More    │  │
│  └────────────────┘  │
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 375px | Auto | Padding 40px vertical |
| Section Headline | 335px | Auto | H2, 24px font |
| Screenshot Area | 335px | 280px | Image on top (mobile: image first) |
| Description Text | 335px | Auto | 14px, paragraph style |
| Benefit List | 335px | Auto | Bullet points, 14px |
| CTA Button | 335px | 48px | Full width |

### Key Mobile Adaptations
- Image placed above text (not side-by-side)
- Full-width image for better visibility
- Text follows image vertically
- Button full width
- Bullet points single column

### Visual Style Notes
- Similar to desktop color scheme
- Image optimized for mobile aspect ratio (likely 16:9 or 1:1)

---

## SECTION 5: Privacy & Security - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  "Your Data.         │
│   Your Control."     │
│                      │
│  Build trust with    │
│  our privacy-first   │
│  approach            │
│                      │
│  ┌────────────────┐  │
│  │   [Lock Icon]  │  │
│  │ No Account     │  │
│  │ Required       │  │
│  │ Uses browser   │  │
│  │ local storage  │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │  [Shield Icon] │  │
│  │ End-to-End     │  │
│  │ Encryption     │  │
│  │ Data stays on  │  │
│  │ your device    │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │  [Check Icon]  │  │
│  │ Privacy First  │  │
│  │ We never store │  │
│  │ your listings  │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │ [GitHub Icon]  │  │
│  │ Open Source    │  │
│  │ Code is        │  │
│  │ transparent    │  │
│  └────────────────┘  │
│                      │
│  [Privacy Policy]    │
│  [Terms] [GitHub]    │
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 375px | Auto | Padding 40px vertical |
| Section Headline | 335px | Auto | H2, 24px font, centered |
| Section Subheading | 335px | Auto | 14px, gray, centered |
| Message Card Stack | 335px | Auto | Single column, 20px gap |
| Message Card | 335px | 140px | White bg, rounded |
| Icon | 48px | 48px | Centered top |
| Message Title | 310px | Auto | 16px, bold, centered |
| Message Description | 310px | Auto | 13px, gray, centered, 2-3 lines |
| Links Footer | 335px | Auto | Stack or flex wrap, centered, 12px gap |
| Link | Auto | 16px | Underlined, 13px font |

### Key Mobile Adaptations
- Single column card stack
- All cards full width
- Links stack vertically or wrap
- Smaller icons (48px)
- Reduced text size
- Centered links at bottom

### Visual Style Notes
- Same color scheme as desktop
- Cards: White with light shadow
- Icons: Green/blue for trust messaging
- Links: Primary color, underline on tap

---

## SECTION 6: Install CTA - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  "Ready to Save      │
│   Hours Every        │
│   Week?"             │
│                      │
│  Join dozens of      │
│  Georgian real       │
│  estate agents       │
│  using HomeGrab      │
│                      │
│  ┌────────────────┐  │
│  │ Install Now    │  │ ← Full width, largest button
│  └────────────────┘  │
│                      │
│  Free • No Account   │
│  No Credit Card      │
│  Takes 30 seconds    │
│                      │
│  [View on GitHub]    │ ← Text link
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 375px | Auto | Padding 40px vertical, centered |
| Headline | 335px | Auto | H2, 26px font, centered, bold |
| Subheading | 335px | Auto | 16px, gray, centered |
| Primary Button | 335px | 56px | Full width, largest tap target |
| Button Text | Auto | Auto | Bold, 18px |
| Trust Message | 335px | Auto | 13px, gray, centered |
| Secondary Link | Auto | Auto | Text link, 14px, centered |

### Key Mobile Adaptations
- Headline breaks naturally
- Full-width button, extra padding (56px height for ease)
- Extra large touch target
- Text link below (not side-by-side)
- Centered layout
- Prominent visual hierarchy

### Visual Style Notes
- Background: Bright, high contrast
- Button: High contrast, oversized for mobile ease
- Trust message: Small, reassuring
- Secondary link: Underline on tap, gray text

---

## SECTION 7: Footer - Mobile

### Layout Structure
```
┌──────────────────────┐
│                      │
│  [Links]             │
│  • Features          │
│  • How It Works      │
│  • GitHub            │
│                      │
│  [Links]             │
│  • About             │
│  • Blog              │
│  • Contact           │
│                      │
│  [Links]             │
│  • Privacy Policy    │
│  • Terms             │
│  • Sitemap           │
│                      │
│  [Social Links]      │
│  [Twitter] [GitHub]  │
│  [LinkedIn]          │
│                      │
│  ──────────────────  │
│                      │
│  © 2024 HomeGrab.    │
│  All rights reserved │
│                      │
│  Made with ❤️        │
│                      │
│  Newsletter Signup   │
│  (Optional)          │
│  [Email Input]       │
│  [Subscribe Button]  │
│                      │
└──────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Footer Container | 375px | Auto | Full width, dark background |
| Content Wrapper | 335px | Auto | 20px padding each side |
| Link Section | 335px | Auto | Stack vertically, 30px gap |
| Section Title | 335px | Auto | Bold, 14px, uppercase |
| Link | Auto | 18px | Text link, 13px |
| Divider | 335px | 1px | Light gray line |
| Copyright Text | 335px | Auto | 11px, centered, gray |
| Social Links | 335px | Auto | Centered, icon buttons, 40px each |
| Newsletter Section | 335px | Auto | Stack vertically |
| Email Input | 335px | 44px | Full width |
| Subscribe Button | 335px | 44px | Full width |

### Key Mobile Adaptations
- Link sections stack vertically (not in columns)
- All links full width tap targets
- Reduced font size but maintains readability
- Social icons larger for touch (40px minimum)
- Newsletter stacked vertically
- Single column layout
- Hamburger menu optional (for primary footer)

### Visual Style Notes
- Background: Dark gray or dark brand color
- Text: Light gray or white
- Links: White, full opacity on tap
- Icons: White/light color
- Input: Light background, proper padding

---

## RESPONSIVE BREAKPOINTS & TRANSITIONS

### Mobile (375px - iPhone)
- All sections single column
- Full-width buttons
- Hamburger navigation
- Images optimized for 375px width
- Touch-friendly spacing (48px minimum targets)

### Tablet Portrait (600px)
- Some sections 2-column
- Feature cards: 2 per row
- Message cards: 2 per row
- Same single column hamburger nav
- Slightly larger fonts

### Tablet Landscape (900px)
- Sections can expand to 3-column
- Feature cards: 3 per row
- Some sections begin to resemble desktop
- Larger images
- Stable top navigation (optional)

### Desktop (1280px+)
- Refer to WIREFRAMES_DESKTOP.md

---

## MOBILE-SPECIFIC INTERACTIONS

### Touch Gestures
- **Tap**: All buttons, links, cards
- **Swipe**: Between steps (optional for simulator)
- **Scroll**: Primary navigation method

### Mobile Navigation
```
┌──────────────────────┐
│  [≡]  Logo      [↓]  │ ← Sticky header
│                      │
│ When tapped: ≡       │
│ ┌────────────────┐   │
│ │ Features       │   │ ← Slide-out menu
│ │ How It Works   │   │   (overlay or push)
│ │ Privacy        │   │
│ │ GitHub         │   │
│ │ [Install CTA]  │   │ ← Prominent in menu
│ └────────────────┘   │
```

### Sticky Elements
- Navigation bar (56px height)
- Floating button for "Install Now" (optional, bottom-right)

### Performance Considerations
- Lazy load images (below fold)
- Minimize animations on low-end devices
- Optimize images for mobile bandwidth
- Efficient CSS media queries

---

## ACCESSIBILITY FOR MOBILE

- Touch targets: Minimum 44-48px height/width
- Text: Minimum 16px for inputs
- Color contrast: WCAG AA standard maintained
- Semantic HTML: Proper heading hierarchy
- Focus management: Visible focus for keyboard users
- Meta viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Alt text: All images have descriptive alt text

---

## TESTING CHECKLIST - MOBILE

- [ ] Tested on iPhone 12/13 (375px)
- [ ] Tested on iPhone SE (375px)
- [ ] Tested on Android devices (360px, 480px)
- [ ] Touch targets all >= 48px
- [ ] Text readable at 16px+ on mobile
- [ ] Images load properly and resize
- [ ] Forms accessible and usable
- [ ] Video/media responsive
- [ ] No horizontal scroll
- [ ] Performance acceptable on 3G
- [ ] Navigation clear and accessible
- [ ] CTA buttons prominent and tappable

---

## FILE ASSETS FOR MOBILE

- Optimized hero visual (375px width)
- Optimized feature icons (48px)
- Mobile-specific screenshots/images
- Compressed versions of all graphics
- SVG versions preferred for icons and logos

---

**Wireframe Version**: 1.0 (Mobile)  
**Target Resolution**: 375px  
**Reference Device**: iPhone 12/13  
**Status**: Ready for Design Phase  
**Next**: High-fidelity mockups in design tool
