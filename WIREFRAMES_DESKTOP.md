# HomeGrab Landing Page - Desktop Wireframes (1280px)

## Wireframe Overview

This document provides detailed low-fidelity wireframes for the desktop version of the HomeGrab landing page. Each section is described with layout, component placement, and spacing.

---

## Desktop Layout Grid

- **Viewport Width**: 1280px
- **Max Content Width**: 1200px (80px total padding)
- **Column System**: 12 columns @ 100px per column
- **Gutter Width**: 20px
- **Section Padding**: 40px horizontal / 60px vertical
- **Font Scale**: Base 16px

---

## SECTION 1: Hero Section

### Layout Structure
```
┌─────────────────────────────────────────────┐
│                                             │
│   [Logo/Nav] ────────────────────────────   │
│                                             │
│                 Hero Content                │
│    [Headline centered, white space above]   │
│    [Subheading centered]                    │
│                                             │
│    [Primary CTA Button] [Secondary CTA]     │
│                                             │
│              [Hero Visual/Image]            │
│              (Browser mockup or             │
│               Animated sync visual)         │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Viewport | 1280px | 100vh | Full screen |
| Content Container | 1200px | 100vh | Centered |
| Headline | 1000px | Auto | H1, 48px font, centered, bold |
| Subheading | 900px | Auto | H2, 24px font, centered, lighter weight |
| CTA Buttons Area | 500px | 60px | Flex row, center aligned |
| Primary Button | 180px | 48px | "Install Now", high contrast |
| Secondary Button | 180px | 48px | "See How It Works", outline style |
| Hero Visual | 600px | 400px | Image/mockup, 16:9 aspect ratio |

### Content Hierarchy
1. Navigation bar (sticky, top 0)
2. Hero headline (large, bold, primary color)
3. Subheading (supporting text, gray)
4. Dual CTA buttons (prominent, accessible)
5. Hero visual (engaging image or animation)

### Visual Style Notes
- Background: Light gray or gradient
- Headline: Primary brand color or black
- Subheading: Medium gray (#666)
- Buttons: Primary color for "Install Now", transparent outline for secondary
- Visual: Should convey instant sync/connection concept

---

## SECTION 2: Features Section

### Layout Structure
```
┌──────────────────────────────────────────────┐
│                                              │
│   [Section Headline: "Everything..."]        │
│   [Section Subheading: "Key capabilities"]   │
│                                              │
│  ┌─────────────┐  ┌─────────────┐           │
│  │   Feature   │  │   Feature   │           │
│  │   Icon      │  │   Icon      │           │
│  │   Title     │  │   Title     │           │
│  │   Desc      │  │   Desc      │           │
│  └─────────────┘  └─────────────┘           │
│                                              │
│  ┌─────────────┐  ┌─────────────┐           │
│  │   Feature   │  │   Feature   │           │
│  │   Icon      │  │   Icon      │           │
│  │   Title     │  │   Title     │           │
│  │   Desc      │  │   Desc      │           │
│  └─────────────┘  └─────────────┘           │
│                                              │
└──────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 1200px | Auto | Padding 60px vertical |
| Section Headline | 1200px | Auto | H2, 40px font, centered |
| Section Subheading | 800px | Auto | Subtitle, 18px, centered, gray |
| Feature Grid | 1200px | Auto | 4 columns, 20px gap |
| Feature Card | 280px | 280px | White bg, rounded corners, shadow |
| Feature Icon | 64px | 64px | Centered in card, top spacing 20px |
| Feature Title | 250px | Auto | Bold, 18px, centered |
| Feature Description | 250px | Auto | 14px, gray, centered, 3-4 lines |

### Content Hierarchy
1. Section headline (40px, bold)
2. Subheading describing features
3. Feature cards in 4-column grid
   - Each card: Icon → Title → Description
4. Subtle background or divider between sections

### Visual Style Notes
- Background: White or light gray
- Cards: White with light shadow, rounded corners (8px)
- Icons: 64px squares, flat design, brand color
- Text: Black headlines, gray descriptions
- Hover state: Subtle shadow increase or background color shift

---

## SECTION 3: How It Works / Simulator Section

### Layout Structure
```
┌──────────────────────────────────────────────┐
│                                              │
│   [Section Headline: "Three Simple Steps"]   │
│                                              │
│   ┌──────────────────────────────────────┐  │
│   │          [Step 1]                    │  │
│   │    Icon + Circle "1"                 │  │
│   │    "Install the Extension"           │  │
│   │    Connecting arrow ──→              │  │
│   └──────────────────────────────────────┘  │
│                                              │
│   ┌──────────────────────────────────────┐  │
│   │          [Step 2]                    │  │
│   │    Icon + Circle "2"                 │  │
│   │    "Connect Your Accounts"           │  │
│   │    Connecting arrow ──→              │  │
│   └──────────────────────────────────────┘  │
│                                              │
│   ┌──────────────────────────────────────┐  │
│   │          [Step 3]                    │  │
│   │    Icon + Circle "3"                 │  │
│   │    "Start Syncing"                   │  │
│   └──────────────────────────────────────┘  │
│                                              │
│        [Interactive Simulator Area]         │
│        [Screenshot or Animated GIF]         │
│        [showing sync in action]             │
│                                              │
└──────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 1200px | Auto | Padding 60px vertical |
| Section Headline | 1200px | Auto | H2, 40px font, centered |
| Steps Container | 1200px | Auto | 3 columns with arrows |
| Step Card | 350px | 200px | White bg, rounded corners |
| Step Number Circle | 60px | 60px | Centered top, brand color |
| Step Icon | 48px | 48px | Inside/below number |
| Step Title | 300px | Auto | Bold, 20px, centered |
| Step Description | 300px | Auto | 14px, gray, centered |
| Connecting Arrow | 40px | 2px | Horizontal, gray |
| Simulator Area | 800px | 400px | Mockup/screenshot area |

### Content Hierarchy
1. Section headline
2. Three step cards with visual flow
3. Connecting arrows showing progression
4. Interactive simulator or screenshot demonstration

### Visual Style Notes
- Background: Light background (off-white or light blue tint)
- Step cards: White with subtle shadow
- Numbers: Large, bold, brand color
- Arrows: Thin gray lines or chevron icons
- Simulator: High-fidelity mockup showing before/after states

---

## SECTION 4: Google Sheets Tracking Section

### Layout Structure
```
┌──────────────────────────────────────────────┐
│                                              │
│   ┌─────────────────┐  ┌─────────────────┐  │
│   │  [Text Area]    │  │ [Spreadsheet    │  │
│   │  Headline       │  │  Screenshot]    │  │
│   │  Subheading     │  │                 │  │
│   │  Description    │  │                 │  │
│   │                 │  │                 │  │
│   │  • Benefit 1    │  │                 │  │
│   │  • Benefit 2    │  │                 │  │
│   │  • Benefit 3    │  │                 │  │
│   │                 │  │                 │  │
│   │ [Secondary CTA] │  │                 │  │
│   └─────────────────┘  └─────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 1200px | Auto | Padding 60px vertical |
| Two-Column Layout | 1200px | 400px | 50/50 split, 20px gap |
| Text Column | 540px | 400px | Left aligned |
| Headline | 500px | Auto | H2, 36px, bold |
| Subheading | 500px | Auto | 18px, gray |
| Description | 500px | Auto | 16px, full paragraph |
| Benefit List | 500px | Auto | Bullet points, 16px |
| CTA Button | 160px | 48px | "Learn More" or "Enable Tracking" |
| Image Column | 540px | 400px | Right aligned |
| Screenshot | 540px | 400px | Google Sheets mockup, 16:9 aspect |

### Content Hierarchy
1. Two-column layout (image right, text left)
2. Headline highlighting feature
3. Description explaining value
4. Bullet-point benefits
5. Secondary CTA button
6. High-quality screenshot of integration

### Visual Style Notes
- Background: White
- Image: Real screenshot of Google Sheets with data (or mockup)
- Text: Black headlines, gray descriptions
- Bullets: Brand color bullets
- Button: Secondary style (outline or muted color)

---

## SECTION 5: Privacy & Security Section

### Layout Structure
```
┌──────────────────────────────────────────────┐
│                                              │
│   [Section Headline: "Your Data. Your..."]   │
│   [Section Subheading about trust]           │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Lock     │  │ Shield   │  │ Check    │  │
│  │ Icon     │  │ Icon     │  │ Icon     │  │
│  │ Message  │  │ Message  │  │ Message  │  │
│  │ Details  │  │ Details  │  │ Details  │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                              │
│  ┌──────────┐                               │
│  │ GitHub   │                               │
│  │ Icon     │                               │
│  │ Message  │                               │
│  │ Details  │                               │
│  └──────────┘                               │
│                                              │
│  [Privacy Policy] [Terms] [GitHub Link]     │
│                                              │
└──────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 1200px | Auto | Padding 60px vertical |
| Section Headline | 1200px | Auto | H2, 40px font, centered |
| Section Subheading | 800px | Auto | Subtitle, 18px, centered |
| Message Grid | 1200px | Auto | 4 columns, 20px gap (can wrap to 2x2) |
| Message Card | 280px | 280px | White bg, centered icon |
| Icon | 64px | 64px | Top centered in card |
| Message Title | 250px | Auto | Bold, 18px, centered |
| Message Description | 250px | Auto | 14px, gray, centered |
| Links Footer | 1200px | 60px | Flex row, center aligned, spaced |
| Link | Auto | 18px | Underlined on hover |

### Content Hierarchy
1. Section headline with trust positioning
2. 4 key message cards with icons:
   - "No Account Required" (user icon)
   - "End-to-End Encryption" (lock icon)
   - "Privacy First" (shield icon)
   - "Open Source" (GitHub icon)
3. Footer links (Privacy Policy, Terms, GitHub)

### Visual Style Notes
- Background: Slightly darker or different tint (light blue/green) for trust
- Cards: White with subtle shadow
- Icons: 64px, green or blue for trust messaging
- Text: Black headlines, gray descriptions
- Links: Primary color, underline on hover

---

## SECTION 6: Install CTA Section

### Layout Structure
```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│   [Headline: "Ready to Save Hours?"]         │
│                                              │
│   [Subheading about social proof]            │
│                                              │
│   [Primary CTA: "Install Now"]               │
│                                              │
│   [Trust message: "Free • No Account..."]    │
│                                              │
│   [Secondary: "View on GitHub"]              │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Section Container | 1200px | Auto | Padding 60px vertical, centered |
| Headline | 800px | Auto | H2, 40px font, bold, centered |
| Subheading | 700px | Auto | 18px, gray, centered |
| Primary Button | 220px | 56px | "Install Now", high contrast, largest |
| Button Text | Auto | Auto | Bold, 18px |
| Trust Message | 500px | Auto | 14px, gray, centered, italicized |
| Secondary Link | Auto | Auto | "View on GitHub", text link style |

### Content Hierarchy
1. Large, compelling headline (urgency/FOMO)
2. Social proof subheading (user count or testimonial)
3. Prominent primary CTA button
4. Reassurance message (free, no account, quick setup)
5. Secondary action for developers

### Visual Style Notes
- Background: Bright, high contrast (could be brand color or complementary)
- Headline: Large, bold, high contrast
- Button: High contrast, must meet WCAG AA accessibility standards
- Button hover: Darker shade or shadow
- Trust message: Subtle, small font, gray
- Secondary link: Underline on hover, gray text

---

## SECTION 7: Footer

### Layout Structure
```
┌──────────────────────────────────────────────┐
│                                              │
│  [Product]     [Company]    [Legal]  [Social]│
│  • Features    • About      • Privacy • Twitter
│  • How It      • Blog       • Terms   • GitHub
│    Works       • Contact            • LinkedIn
│  • GitHub                           │
│                                              │
│  ────────────────────────────────────────   │
│                                              │
│   © 2024 HomeGrab. All rights reserved.     │
│   Made with ❤️ by HomeGrab Team             │
│                                              │
│  Newsletter Signup (optional):               │
│  [Email Input] [Subscribe Button]           │
│                                              │
└──────────────────────────────────────────────┘
```

### Component Details

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| Footer Container | 1280px | Auto | Full width, dark background |
| Content Wrapper | 1200px | Auto | Max width container |
| Column Section | 280px | Auto | 4 columns in top row |
| Footer Link | Auto | 20px | Text link, 14px |
| Divider | 1200px | 1px | Light gray line |
| Copyright Text | 1200px | Auto | 12px, centered, gray |
| Newsletter Section | 1200px | 60px | Email input + subscribe (optional) |
| Email Input | 300px | 48px | Text input field |
| Subscribe Button | 120px | 48px | Secondary button style |

### Content Hierarchy
1. Link columns (Product, Company, Legal, Social)
2. Divider line
3. Copyright and attribution
4. Newsletter signup (optional, positioned centrally)

### Visual Style Notes
- Background: Dark gray (#333) or dark brand color variant
- Text: Light gray or white
- Links: White, underline on hover
- Hover state: Subtle color shift (lighter)
- Newsletter input: Light background, dark text, rounded corners

---

## RESPONSIVE BREAKPOINTS (Desktop)

### Large Desktop (1920px)
- Increased padding/margins for breathing room
- Feature grid may expand to 5 columns
- Hero visual scaled up

### Standard Desktop (1280px)
- As specified in this document
- Primary target resolution

### Tablet Landscape (1024px)
- Adjustments documented in WIREFRAMES_MOBILE.md
- Feature grid reduces to 3 columns
- Some sections may stack

---

## ACCESSIBILITY CONSIDERATIONS

- All buttons: Minimum 48px height for touch targets
- Font sizes: Minimum 14px for body text, 16px for inputs
- Color contrast: WCAG AA standard (4.5:1 for text)
- Line height: Minimum 1.5 for body text
- Focus states: Visible outline for keyboard navigation
- Alt text: All images and icons have descriptive alt text
- Semantic HTML: Proper heading hierarchy (H1, H2, H3)

---

## ANIMATION & INTERACTION

### Hover States
- Buttons: Darker shade or subtle lift effect
- Links: Underline, color change
- Cards: Slight shadow increase or scale (1.02x)

### Scroll Animations (Optional)
- Fade-in on scroll for sections
- Parallax for hero section
- Step counter animation in "How It Works"

### Loading States
- Skeleton screens for dynamic content
- Spinner for async operations

---

## File Assets to Create

- `hero-visual.png` or `hero-visual.gif` (animated sync)
- `feature-icon-*.svg` (4 icons)
- `step-icon-*.svg` (3 icons)
- `google-sheets-screenshot.png`
- `security-icon-*.svg` (4 icons)

---

**Wireframe Version**: 1.0 (Desktop)  
**Target Resolution**: 1280px  
**Status**: Ready for Design Phase  
**Next**: High-fidelity mockups in design tool (Figma/Adobe XD)
