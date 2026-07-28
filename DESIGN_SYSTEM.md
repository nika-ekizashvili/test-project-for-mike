# HomeGrab Design System

A comprehensive design system and branding guide for the HomeGrab landing page. This document defines the visual language, typography standards, and component specifications for consistency across the platform.

## Table of Contents

1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Border Radius System](#border-radius-system)
6. [Shadows & Elevation](#shadows--elevation)
7. [Components](#components)
8. [Branding Guidelines](#branding-guidelines)
9. [Accessibility](#accessibility)
10. [Usage Examples](#usage-examples)

---

## Overview

The HomeGrab Design System is built on CSS Custom Properties (CSS Variables) for maximum flexibility and maintainability. All design tokens are centralized in `src/styles/design-tokens.css` and can be referenced throughout the codebase.

### Key Principles

- **Dark-first design**: Optimized for comfortable viewing in all lighting conditions
- **Georgian + Latin support**: Full support for both scripts with appropriate typography
- **Accessibility-first**: WCAG AA compliant with semantic HTML and sufficient contrast ratios
- **Modular & scalable**: Component-based architecture with semantic naming
- **Performance-focused**: Minimal CSS overhead, efficient animations

### File Structure

```
src/
├── styles/
│   ├── design-tokens.css      # All CSS variables and design tokens
│   └── typography.css          # Font definitions and text utilities
├── components/
│   ├── ui/                     # Base UI components
│   │   ├── Button.tsx/css
│   │   ├── Card.tsx/css
│   │   ├── Badge.tsx/css
│   │   ├── Icon.tsx/css
│   │   ├── CodeBlock.tsx/css
│   │   ├── Stack.tsx/css
│   │   └── index.ts
│   └── common/
│       └── index.ts            # Re-exports for convenience
└── app/
    └── globals.css             # Global styles and imports
```

---

## Color Palette

### Brand Colors

#### Primary Brand - HomeGrab Blue
- **Accent Blue**: `#1e90ff` — Primary interactive color, used for buttons and highlights
- **Accent Blue Dark**: `#0070cc` — Hover state and deeper emphasis
- **Accent Blue Light**: `#60b8ff` — Light overlays and subtle backgrounds

```css
--color-accent-blue: #1e90ff;
--color-accent-blue-dark: #0070cc;
--color-accent-blue-light: #60b8ff;
```

### Primary Colors (Modular Scale)
Complete 9-step scale for flexible application:

```css
--color-primary-50:  #eff6ff   /* Lightest */
--color-primary-100: #dbeafe
--color-primary-200: #bfdbfe
--color-primary-300: #93c5fd
--color-primary-400: #60a5fa
--color-primary-500: #3b82f6
--color-primary-600: #2563eb   /* Brand default */
--color-primary-700: #1d4ed8
--color-primary-800: #1e40af
--color-primary-900: #1e3a8a   /* Darkest */
```

### Neutral Colors (Dark Theme)
Used for backgrounds, borders, and text hierarchy:

```css
--color-neutral-0:   #ffffff   /* Pure white */
--color-neutral-50:  #f8fafc
--color-neutral-100: #f1f5f9
--color-neutral-200: #e2e8f0
--color-neutral-300: #cbd5e1
--color-neutral-400: #94a3b8
--color-neutral-500: #64748b
--color-neutral-600: #475569
--color-neutral-700: #334155
--color-neutral-800: #1e293b
--color-neutral-900: #0f172a   /* Darkest */
```

### Dark Theme Background
```css
--color-dark-bg: #111827;              /* Primary background */
--color-dark-surface-primary: #1f2937; /* Card/surface level 1 */
--color-dark-surface-secondary: #374151; /* Surface level 2 */
--color-dark-border: #4b5563;          /* Border color */
```

### Semantic Colors

#### Success
```css
--color-success-500: #22c55e;  /* Primary */
--color-success-600: #16a34a;  /* Hover */
--color-success-700: #15803d;  /* Active */
```

#### Warning
```css
--color-warning-500: #f59e0b;  /* Primary */
--color-warning-600: #d97706;  /* Hover */
--color-warning-700: #b45309;  /* Active */
```

#### Error
```css
--color-error-500: #ef4444;    /* Primary */
--color-error-600: #dc2626;    /* Hover */
--color-error-700: #b91c1c;    /* Active */
```

### Text Colors
```css
--color-text-primary: #e8e8e8;      /* Main body text */
--color-text-secondary: #9ca3af;    /* Muted/secondary text */
--color-text-tertiary: #6b7280;     /* Disabled/placeholder text */
--color-text-muted: #4b5563;        /* Very subtle text */
--color-text-inverted: #111827;     /* For light backgrounds */
```

#### Usage Guidelines
- **Primary text**: Body copy, headings, important information
- **Secondary text**: Descriptions, hints, timestamps
- **Tertiary text**: Disabled states, placeholders
- **Muted text**: Very subtle information, helper text

### Contrast Ratios
All color combinations meet WCAG AA accessibility standards (4.5:1 minimum for text).

---

## Typography

### Font Families

#### Georgian Script
```css
--font-family-georgian: 'Noto Sans Georgian', 'Sylfaen', system-ui, sans-serif;
```
Optimized for Georgian text rendering with excellent metrics and kerning.

#### Latin Script
```css
--font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```
Primary font stack with system font fallbacks for excellent performance.

#### Monospace
```css
--font-family-mono: 'Monaco', 'Courier New', monospace;
```
Used for code blocks, inline code, and technical content.

### Font Sizes (Modular Scale: 1.125)
Based on a 1.125 scale ratio for harmonious typographic hierarchy:

```css
--font-size-xs:    0.75rem   /* 12px */
--font-size-sm:    0.875rem  /* 14px */
--font-size-base:  1rem      /* 16px - Default */
--font-size-lg:    1.125rem  /* 18px */
--font-size-xl:    1.25rem   /* 20px */
--font-size-2xl:   1.5rem    /* 24px */
--font-size-3xl:   1.875rem  /* 30px */
--font-size-4xl:   2.25rem   /* 36px */
--font-size-5xl:   2.75rem   /* 44px */
--font-size-6xl:   3.5rem    /* 56px */
```

### Font Weights
```css
--font-weight-light:     300;  /* Subtle, reduced emphasis */
--font-weight-normal:    400;  /* Regular body text */
--font-weight-medium:    500;  /* Emphasized body text */
--font-weight-semibold:  600;  /* Button labels, strong emphasis */
--font-weight-bold:      700;  /* Headings, strong calls-to-action */
--font-weight-extrabold: 800;  /* Hero text, maximum emphasis */
```

### Line Heights
```css
--line-height-tight:    1.2;   /* Headings (h1-h3) */
--line-height-snug:     1.375; /* Subheadings (h4-h6) */
--line-height-normal:   1.5;   /* Body text (default) */
--line-height-relaxed:  1.625; /* Long-form content */
--line-height-loose:    2;     /* Extra-spacious layouts */
```

### Letter Spacing
```css
--letter-spacing-tighter: -0.05em;  /* Tight headlines */
--letter-spacing-tight:   -0.025em; /* Headlines */
--letter-spacing-normal:  0em;      /* Default */
--letter-spacing-wide:    0.025em;  /* Emphasis */
--letter-spacing-wider:   0.05em;   /* Decorative */
--letter-spacing-widest:  0.1em;    /* Maximum spacing */
```

### Typographic Scales

#### Headings
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| h1      | 44px | bold   | tight       | tight          |
| h2      | 36px | bold   | tight       | tight          |
| h3      | 30px | semibold | snug      | tight          |
| h4      | 24px | semibold | snug      | normal         |
| h5      | 20px | semibold | snug      | normal         |
| h6      | 18px | semibold | normal     | normal         |

#### Body Text
| Class    | Size | Weight | Line Height |
|----------|------|--------|-------------|
| .text-lg | 18px | normal | relaxed     |
| .text-base | 16px | normal | normal    |
| .text-sm | 14px | normal | snug       |
| .text-xs | 12px | normal | snug       |

### Georgian Text Optimization
Georgian text requires special rendering adjustments:

```css
/* In HTML */
<div lang="ka">Georgian content here</div>

/* Automatic adjustments */
[lang='ka'] {
  word-spacing: 0.15em;      /* Increases readability */
  letter-spacing: 0.02em;    /* Fine-tunes character spacing */
}
```

---

## Spacing & Layout

### Spacing Scale (4px Baseline Grid)
All spacing uses a consistent 4px baseline for alignment and rhythm:

```css
--spacing-0:  0;        /* 0px */
--spacing-1:  0.25rem;  /* 4px */
--spacing-2:  0.5rem;   /* 8px */
--spacing-3:  0.75rem;  /* 12px */
--spacing-4:  1rem;     /* 16px */
--spacing-5:  1.25rem;  /* 20px */
--spacing-6:  1.5rem;   /* 24px */
--spacing-8:  2rem;     /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
--spacing-32: 8rem;     /* 128px */
```

### Gap/Margin Aliases
Convenient aliases for common layout gaps:

```css
--gap-xs:   var(--spacing-2);   /* 8px - Tight spacing */
--gap-sm:   var(--spacing-4);   /* 16px - Small gap */
--gap-md:   var(--spacing-6);   /* 24px - Default gap */
--gap-lg:   var(--spacing-8);   /* 32px - Large gap */
--gap-xl:   var(--spacing-12);  /* 48px - Extra large gap */
--gap-2xl:  var(--spacing-16);  /* 64px - Maximum gap */
```

### Usage Guidelines
- **Padding**: Internal spacing within components (use `--spacing-*`)
- **Margin**: External spacing between components (use `--gap-*`)
- **Gap**: Space between flex/grid children (use `--gap-*`)

#### Common Patterns
```css
/* Button padding */
--btn-padding-sm: var(--spacing-2) var(--spacing-3);    /* 8px 12px */
--btn-padding-md: var(--spacing-2) var(--spacing-4);    /* 8px 16px */
--btn-padding-lg: var(--spacing-3) var(--spacing-6);    /* 12px 24px */

/* Card padding */
--card-padding: var(--spacing-6);                       /* 24px all */

/* Input padding */
--input-padding: var(--spacing-2) var(--spacing-3);     /* 8px 12px */
```

---

## Border Radius System

Consistent, scalable border radius values:

```css
--border-radius-none:   0;
--border-radius-sm:     0.25rem;  /* 4px - Subtle rounding */
--border-radius-md:     0.375rem; /* 6px - Standard (buttons) */
--border-radius-lg:     0.5rem;   /* 8px - Cards, inputs */
--border-radius-xl:     0.75rem;  /* 12px - Large elements */
--border-radius-2xl:    1rem;     /* 16px - Extra large */
--border-radius-3xl:    1.5rem;   /* 24px - Maximum rounding */
--border-radius-full:   9999px;   /* Circular (badges, pills) */
```

### Usage Guidelines
| Component | Radius | Value |
|-----------|--------|-------|
| Button    | md     | 6px   |
| Card      | lg     | 8px   |
| Badge     | full   | 9999px |
| Input     | lg     | 8px   |
| Modal     | 2xl    | 16px  |

---

## Shadows & Elevation

### Shadow Scale
Provides visual depth and hierarchy:

```css
--shadow-none: none;
--shadow-xs:   0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm:   0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md:   0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg:   0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl:   0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl:  0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Elevation Scale (Z-Index)
```css
--elevation-base: 0;
--elevation-1:    100;  /* Slightly elevated (cards) */
--elevation-2:    200;  /* Dropdown, popover */
--elevation-3:    300;  /* Modal backdrop */
--elevation-4:    400;  /* Modal content */
--elevation-5:    500;  /* Tooltip, high-priority overlay */
```

### Usage Guidelines
| Level | Shadow | Z-Index | Component |
|-------|--------|---------|-----------|
| Base  | none   | 0       | Backgrounds |
| 1     | sm     | 100     | Cards, lifted elements |
| 2     | md     | 200     | Dropdowns, popovers |
| 3     | lg     | 300     | Modal backdrop |
| 4     | xl     | 400     | Modal, dialog |
| 5     | 2xl    | 500     | Tooltip, critical overlays |

---

## Components

### Button

Versatile button component for all interactive actions.

#### Variants
- **primary**: Brand-blue button for primary actions
- **secondary**: Outlined button for secondary actions

#### Sizes
- **sm**: 32px height, 12px font — Compact actions
- **md**: 40px height, 14px font — Default (recommended)
- **lg**: 48px height, 16px font — Prominent CTA

#### CSS Variables
```css
--btn-padding-sm: var(--spacing-2) var(--spacing-3);
--btn-padding-md: var(--spacing-2) var(--spacing-4);
--btn-padding-lg: var(--spacing-3) var(--spacing-6);
--btn-border-radius: var(--border-radius-md);
--btn-font-weight: var(--font-weight-semibold);
--btn-transition: var(--transition-base);
```

#### Example Usage
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">
  Install Extension
</Button>

<Button variant="secondary" size="md">
  Learn More
</Button>
```

#### States
- **Default**: Full opacity, ready to interact
- **Hover**: 8px elevated shadow, translateY(-1px)
- **Active**: Reduced shadow, translateY(0)
- **Disabled**: 50% opacity, cursor not-allowed
- **Focus**: 2px outline, 2px offset

---

### Card

Container component for grouping related content.

#### Variants
- **elevated**: Shadowed card (default)
- **outlined**: Bordered card
- **flat**: Subtle background, no shadow
- **filled**: Color-tinted background

#### Sizes
- **sm**: 16px padding
- **md**: 24px padding (default)
- **lg**: 32px padding

#### Composition
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

<Card variant="elevated" size="md">
  <CardHeader title="Features" subtitle="Core capabilities" />
  <CardBody>
    {/* Main content */}
  </CardBody>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>
```

#### CSS Variables
```css
--card-padding: var(--spacing-6);
--card-border-radius: var(--border-radius-lg);
--card-border: 1px solid var(--color-dark-border);
--card-shadow: var(--shadow-md);
--card-background: var(--color-dark-surface-primary);
```

---

### Badge

Small label component for tags, status, or highlights.

#### Variants
- **primary**: Filled blue badge
- **secondary**: Neutral grey badge
- **success**: Green badge for positive states
- **warning**: Orange badge for cautionary states
- **error**: Red badge for error states
- **{variant}-outline**: Outlined versions of above

#### Sizes
- **sm**: 20px height, 10px font
- **md**: 24px height, 12px font (default)
- **lg**: 28px height, 14px font

#### CSS Variables
```css
--badge-padding: var(--spacing-1) var(--spacing-3);
--badge-border-radius: var(--border-radius-full);
--badge-font-size: var(--font-size-xs);
--badge-font-weight: var(--font-weight-semibold);
--badge-line-height: 1.4;
```

#### Example Usage
```tsx
import { Badge } from '@/components/ui';

<Badge variant="success" size="md">
  Active
</Badge>

<Badge variant="warning" size="sm">
  Pending
</Badge>
```

---

### Icon

Flexible SVG wrapper for consistent icon rendering.

#### Sizes
- **xs**: 16px
- **sm**: 20px
- **md**: 24px (default)
- **lg**: 32px
- **xl**: 40px
- **2xl**: 48px
- **3xl**: 56px

#### Colors
- **primary**: Brand blue (#2563eb)
- **secondary**: Muted grey
- **success**: Green (#22c55e)
- **warning**: Orange (#f59e0b)
- **error**: Red (#ef4444)
- **muted**: Light grey
- **current**: Inherits text color (default)

#### Animations
- **spin**: 1s linear rotation
- **pulse**: 2s opacity pulse

#### Example Usage
```tsx
import { Icon } from '@/components/ui';

// SVG Icon
<Icon size="lg" color="primary" strokeWidth="1.5">
  <path d="M..." />
</Icon>

// Emoji Icon
<Icon size="md" color="success">
  ✓
</Icon>

// Animated Loading
<Icon size="md" animated="spin">
  ⚙️
</Icon>
```

---

### CodeBlock

Syntax-aware code display with copy functionality.

#### Props
- **language**: Language for syntax highlighting label (e.g., "typescript")
- **code**: Code content string
- **showLineNumbers**: Display line numbers (default: false)
- **highlightLines**: Array of line numbers to highlight
- **variant**: "default" | "dark" | "compact"
- **showCopyButton**: Display copy button (default: true)

#### Example Usage
```tsx
import { CodeBlock } from '@/components/ui';

<CodeBlock
  language="typescript"
  code={`const greeting = "Hello, HomeGrab!";`}
  showLineNumbers
  highlightLines={[1]}
/>
```

---

### Stack

Layout component for flexbox-based spacing.

#### Props
- **direction**: "row" | "column" (default: "column")
- **spacing**: "xs" | "sm" | "md" | "lg" | "xl" (default: "md")
- **align**: "start" | "center" | "end" | "stretch" (default: "stretch")
- **justify**: "start" | "center" | "end" | "between" | "around" | "evenly" (default: "start")

#### Example Usage
```tsx
import { Stack } from '@/components/ui';

<Stack direction="row" spacing="md" align="center">
  <Icon size="lg" color="primary">📦</Icon>
  <div>
    <h3>Fast Listing Management</h3>
    <p>Manage multiple platforms at once</p>
  </div>
</Stack>
```

---

## Branding Guidelines

### Logo Specifications
- **Primary Logo**: Horizontal lockup with wordmark
- **Icon**: Square, 1:1 aspect ratio
- **Minimum Size**: 32px (icon), 120px (horizontal lockup)
- **Clear Space**: Minimum 8px padding around logo
- **Colors**: Use on dark backgrounds with white/light logo

### Color Application

#### Call-to-Action Elements
- Primary buttons: Always use `--color-accent-blue`
- Hover states: Use `--color-accent-blue-dark`
- Focus outlines: Use `--color-accent-blue`

#### Status Indicators
- Success: `--color-success-500`
- Warning: `--color-warning-500`
- Error: `--color-error-500`
- Info: `--color-primary-500`

#### Information Hierarchy
- Page headings: `--color-text-primary` (70% opacity of primary color)
- Body text: `--color-text-secondary`
- Disabled/placeholder: `--color-text-tertiary`
- Borders/dividers: `--color-dark-border`

### Typography Application

#### Headlines
- **Hero Headline (h1)**: 56px, bold, tight line-height
- **Section Headline (h2)**: 36px, bold, tight line-height
- **Subsection (h3)**: 30px, semibold, snug line-height

#### Body Copy
- **Default**: 16px, normal weight, 1.5 line-height
- **Emphasis**: semibold (500) or bold (700)
- **De-emphasis**: secondary text color

### Tone & Voice
- **Professional yet approachable**: Language is clear and direct
- **Empowering**: Focus on agent benefits and time savings
- **Confident**: Bold claims backed by clear value propositions
- **Bilingual**: Full Georgian + English support with equal prominence

---

## Accessibility

### Contrast Requirements
All text color combinations meet WCAG AA standards (minimum 4.5:1 ratio for normal text, 3:1 for large text).

### Keyboard Navigation
- All buttons and links are keyboard accessible (Tab order)
- Focus states clearly visible (2px outline with offset)
- Logical tab order from top to bottom, left to right

### Screen Reader Support
- Semantic HTML elements (button, nav, main, section)
- Appropriate ARIA labels for icon-only buttons
- Form labels properly associated with inputs

### Motion & Animation
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Independence
- Information is never conveyed by color alone
- Status is indicated by multiple means (color + icon + text)

### Responsive Design
```css
/* Mobile-first approach */
@media (min-width: 768px) {
  /* Tablet adjustments */
}

@media (min-width: 1024px) {
  /* Desktop adjustments */
}

@media (min-width: 1280px) {
  /* Large desktop adjustments */
}
```

### Breakpoints
```css
--breakpoint-sm:   640px;   /* Small devices */
--breakpoint-md:   768px;   /* Tablets */
--breakpoint-lg:   1024px;  /* Desktops */
--breakpoint-xl:   1280px;  /* Wide desktops */
--breakpoint-2xl:  1536px;  /* Ultra-wide */
```

---

## Transitions & Animations

### Timing Functions
```css
--transition-fast:    150ms ease-out;  /* Quick feedback */
--transition-base:    200ms ease-out;  /* Default (recommended) */
--transition-slow:    300ms ease-out;  /* Noticeable transition */
--transition-slower:  500ms ease-out;  /* Emphasis animation */

--timing-linear:      linear;
--timing-ease-in:     cubic-bezier(0.4, 0, 1, 1);
--timing-ease-out:    cubic-bezier(0, 0, 0.2, 1);
--timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Animation Patterns
- **Button hover**: Use `transform: translateY(-1px)` + shadow increase
- **State change**: Use fade transition (opacity change)
- **Loading**: Use spin animation (360deg rotation)
- **Validation**: Use color transition for error states

---

## Usage Examples

### Import Patterns

```typescript
// Import individual components
import { Button, Card, Badge } from '@/components/ui';

// Import from common alias
import { Button, Icon } from '@/components/common';

// Import with types
import { Button, ButtonProps } from '@/components/ui';

type CustomButtonProps = ButtonProps & {
  customProp?: string;
};
```

### Component Composition

```tsx
import { Card, CardHeader, CardBody, CardFooter, Button, Badge, Stack, Icon } from '@/components/ui';

export function FeatureCard() {
  return (
    <Card variant="elevated" size="md">
      <CardHeader
        title="One-Click Data Extraction"
        subtitle="Seamless integration"
      />
      <CardBody>
        <Stack direction="row" spacing="md" align="center">
          <Icon size="lg" color="success">
            ✓
          </Icon>
          <p>
            Seamlessly extract property data from SS.ge and inject it directly
            into MyHome.ge with a single click.
          </p>
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack direction="row" spacing="sm">
          <Badge variant="success" size="sm">
            Ready
          </Badge>
          <Badge variant="primary" size="sm">
            Recommended
          </Badge>
        </Stack>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Layout

```tsx
<Stack
  direction={{ base: 'column', md: 'row' }}
  spacing={{ base: 'sm', lg: 'lg' }}
  align={{ base: 'start', md: 'center' }}
  justify="between"
>
  <div>Content</div>
  <Button>Action</Button>
</Stack>
```

---

## Maintenance & Updates

### Design Token Updates
1. Update the token value in `src/styles/design-tokens.css`
2. Verify all affected components visually
3. Update this documentation with rationale for change
4. Test accessibility (contrast, motion preferences)

### Component Updates
1. Maintain backward compatibility when possible
2. Use semantic versioning for breaking changes
3. Update component prop types and documentation
4. Add unit tests for new variants/props

### Dark Mode Extension
Future light mode support should:
- Use `@media (prefers-color-scheme: light)` for overrides
- Maintain contrast ratios at all times
- Provide toggle mechanism in settings
- Test with system preference detection

---

## Resources

### Web Fonts
- [Noto Sans Georgian](https://fonts.google.com/noto/specimen/Noto+Sans+Georgian)
- [Inter Font](https://fonts.google.com/specimen/Inter)

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- [Figma Design System Plugin](https://www.figma.com/community/file/1260372457627175074)

### References
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Design Systems](https://www.designsystems.com/)

---

## Version History

| Version | Date       | Changes |
|---------|------------|---------|
| 1.0.0   | 2026-07-29 | Initial design system established with component suite, typography system, and color palette |

---

**Last Updated**: July 29, 2026

For questions or updates to this design system, contact the design team.
