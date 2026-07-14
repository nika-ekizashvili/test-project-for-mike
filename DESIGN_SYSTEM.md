# Design System & Tokens

A terminal-native design system with monospace typography and systemctl.sh-inspired color palette. Built for creating cohesive, accessible UI components with consistent spacing, typography, and colors.

## Overview

The design system provides:

- **Terminal-native theme** with dark background and high-contrast colors
- **Monospace typography** using JetBrains Mono, IBM Plex Mono, or system monospace fonts
- **Color palette** inspired by systemctl output (cyan/green, blue, yellow)
- **Spacing scale** based on 8px units for consistent layouts
- **Reusable UI primitives** for rapid component development
- **Design tokens** for colors, typography, spacing, and more

## Installation

All design system features are available by default. No additional installation required.

## Usage

### Importing Tokens

```typescript
import { theme, colors, typography, spacing } from '@/theme';

// Access color palette
const primaryColor = colors.primary[400]; // #2ab59a

// Access spacing scale
const padding = spacing[4]; // 1rem (16px)

// Access typography
const fontSize = typography.fontSize.lg; // 1rem
```

### Using Primitives

```typescript
import { Button, Box, Text, Container } from '@/components/primitives';

export function MyComponent() {
  return (
    <Container>
      <Box p={4} display="flex" gap={2}>
        <Text variant="h2">Title</Text>
        <Button variant="primary">Action</Button>
      </Box>
    </Container>
  );
}
```

## Design Tokens

### Color Palette

#### Primary (Terminal Green/Cyan)

- `colors.primary[400]` - Main primary (#2ab59a)
- `colors.primary[300]` - Light variant
- `colors.primary[500]` - Dark variant

#### Secondary (Terminal Blue)

- `colors.secondary[400]` - Main secondary (#1a8eff)
- `colors.secondary[300]` - Light variant
- `colors.secondary[500]` - Dark variant

#### Accent (Terminal Yellow/Orange)

- `colors.accent[400]` - Main accent (#ffca1a)
- `colors.accent[300]` - Light variant
- `colors.accent[500]` - Dark variant

#### Neutral (Grayscale)

- `colors.neutral[0]` - Pure black (#000000)
- `colors.neutral[50]` - Near black (#0a0a0a)
- `colors.neutral[100-300]` - Dark grays
- `colors.neutral[400-500]` - Mid grays
- `colors.neutral[600-700]` - Light grays
- `colors.neutral[800-900]` - Very light grays
- `colors.neutral[950]` - Near white (#f5f5f5)

#### Semantic Colors

```typescript
colors.success.main;  // #2ab59a
colors.error.main;    // #d32f2f
colors.warning.main;  // #ffca1a
colors.info.main;     // #1a8eff

colors.status.active;    // #2ab59a
colors.status.inactive;  // #535353
colors.status.pending;   // #ffca1a
colors.status.error;     // #d32f2f
```

### Typography

#### Font Families

```typescript
typography.fontFamily.monospace;  // JetBrains Mono, IBM Plex Mono, Courier New
typography.fontFamily.mono;       // Fira Code, Source Code Pro
typography.fontFamily.fallback;   // System sans-serif fallback
```

#### Font Sizes (rem-based)

```typescript
typography.fontSize.xs;    // 0.625rem (10px)
typography.fontSize.sm;    // 0.75rem (12px)
typography.fontSize.base;  // 0.875rem (14px)
typography.fontSize.lg;    // 1rem (16px)
typography.fontSize.xl;    // 1.125rem (18px)
typography.fontSize['2xl']; // 1.25rem (20px)
typography.fontSize['3xl']; // 1.5rem (24px)
typography.fontSize['4xl']; // 1.875rem (30px)
```

#### Font Weights

```typescript
typography.fontWeight.normal;    // 400
typography.fontWeight.medium;    // 500
typography.fontWeight.semibold;  // 600
typography.fontWeight.bold;      // 700
// ... and more
```

#### Line Heights

```typescript
typography.lineHeight.tight;    // 1.2
typography.lineHeight.normal;   // 1.5
typography.lineHeight.relaxed;  // 1.75
typography.lineHeight.loose;    // 2
```

### Spacing

Based on 8px units:

```typescript
spacing[0];   // 0
spacing[1];   // 0.25rem (4px)
spacing[2];   // 0.5rem (8px)
spacing[3];   // 0.75rem (12px)
spacing[4];   // 1rem (16px)
spacing[5];   // 1.25rem (20px)
spacing[6];   // 1.5rem (24px)
spacing[8];   // 2rem (32px)
spacing[10];  // 2.5rem (40px)
spacing[12];  // 3rem (48px)
// ... and more up to spacing[40]
```

### Border Radius

```typescript
borderRadius.none;     // 0
borderRadius.xs;       // 2px
borderRadius.sm;       // 4px
borderRadius.base;     // 6px
borderRadius.md;       // 8px
borderRadius.lg;       // 12px
borderRadius.xl;       // 16px
borderRadius.full;     // 9999px (circular)
```

### Shadows

Minimal shadows for terminal aesthetic:

```typescript
shadow.none;   // none
shadow.xs;     // Small shadow
shadow.sm;     // Small-medium shadow
shadow.base;   // Medium shadow
shadow.md;     // Medium-large shadow
shadow.lg;     // Large shadow
shadow.xl;     // Extra large shadow
```

### Transitions

```typescript
transition.fast;    // 150ms
transition.base;    // 200ms
transition.slow;    // 300ms
transition.slower;  // 500ms
```

All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` easing.

### Breakpoints

```typescript
breakpoints.xs;     // 320px
breakpoints.sm;     // 640px
breakpoints.md;     // 768px
breakpoints.lg;     // 1024px
breakpoints.xl;     // 1280px
breakpoints['2xl']; // 1536px
```

### Z-Index Scale

```typescript
zIndex.hide;       // -1
zIndex.base;       // 0
zIndex.dropdown;   // 1000
zIndex.sticky;     // 1020
zIndex.fixed;      // 1030
zIndex.modal;      // 1040
zIndex.popover;    // 1050
zIndex.tooltip;    // 1060
```

## UI Primitives

### Button

Versatile button component with multiple variants and sizes.

```typescript
import { Button } from '@/components/primitives';

// Variants: primary, secondary, outline, ghost, danger
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes: sm, md, lg
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Props
<Button isLoading>Loading...</Button>
<Button isDisabled>Disabled</Button>
<Button isFullWidth>Full width</Button>
```

### Box

Base layout component for spacing and styling.

```typescript
import { Box } from '@/components/primitives';

<Box
  p={4}                           // Padding
  px={6}                          // Horizontal padding
  py={3}                          // Vertical padding
  m={2}                           // Margin
  display="flex"                  // Display
  flexDirection="column"          // Flex direction
  alignItems="center"             // Align items
  justifyContent="space-between"  // Justify content
  gap={3}                         // Gap between children
  bg={colors.neutral[100]}        // Background color
  borderColor={colors.primary[400]}
  borderWidth={2}
  borderRadius="base"
  width="100%"
  minHeight="400px"
>
  Content
</Box>
```

### Text

Typography component for consistent text styling.

```typescript
import { Text } from '@/components/primitives';

// Variants: h1, h2, h3, h4, h5, h6, body, caption, label, code
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="body">Body text</Text>
<Text variant="caption">Small caption</Text>
<Text variant="label">Label</Text>
<Text variant="code">const x = 1;</Text>

// Props
<Text color={colors.primary[400]}>Colored text</Text>
<Text fontWeight="bold">Bold text</Text>
<Text truncate>Long text...</Text>
<Text lineClamp={2}>Clamped to 2 lines</Text>
<Text textAlign="center">Centered</Text>
```

### Container

Responsive container with max-width constraints.

```typescript
import { Container } from '@/components/primitives';

// Sizes: sm, md, lg, xl, full
<Container size="lg">
  Max width 1024px with horizontal padding
</Container>

<Container size="lg" px={6}>
  Custom padding
</Container>
```

## Theme Object

Access the complete theme:

```typescript
import { theme } from '@/theme';

theme.colors;        // All colors
theme.typography;    // All typography scales
theme.spacing;       // All spacing values
theme.borderRadius;  // All border radii
theme.shadow;        // All shadows
theme.transition;    // All transitions
theme.breakpoints;   // All breakpoints
theme.zIndex;        // All z-indices
```

## Custom Hooks

### useTheme

Access the theme in components:

```typescript
import { useTheme } from '@/theme';

function MyComponent() {
  const theme = useTheme();
  // Use theme.colors, theme.spacing, etc.
}
```

### useThemeColor

Get a specific color from the theme:

```typescript
import { useThemeColor } from '@/theme';

function MyComponent() {
  const getColor = useThemeColor('colors.primary.400');
  const color = getColor(); // #2ab59a
}
```

## Best Practices

1. **Use spacing tokens** - Always use `spacing[n]` for consistent spacing
2. **Use color tokens** - Don't use hardcoded hex values
3. **Use typography tokens** - Apply consistent font sizes and weights
4. **Use primitives** - Build with Button, Box, Text, Container
5. **Monospace focus** - Keep terminal aesthetic with monospace fonts
6. **Accessibility** - Use semantic HTML elements and proper contrast
7. **Responsive** - Use breakpoints for mobile-first design
8. **Consistency** - Follow the established patterns and conventions

## File Structure

```
src/
├── theme/
│   ├── tokens.ts           # Design tokens
│   ├── tokens.test.ts      # Token tests
│   ├── useTheme.ts         # Theme hooks
│   ├── globalStyles.ts     # Global styles
│   └── index.ts            # Theme exports
├── components/
│   └── primitives/
│       ├── Button.tsx      # Button component
│       ├── Button.test.tsx # Button tests
│       ├── Box.tsx         # Box component
│       ├── Text.tsx        # Text component
│       ├── Text.test.tsx   # Text tests
│       ├── Container.tsx   # Container component
│       └── index.ts        # Primitives exports
└── app/
    ├── globals.css         # Global styles using tokens
    └── page.tsx            # Demo page
public/
└── logo.svg                # systemctl-inspired logo
```

## Logo

The `public/logo.svg` asset is a terminal window inspired by systemctl output, featuring:

- Dark terminal background (#0a0a0a)
- Terminal frame with primary color stroke (#2ab59a)
- Title bar showing "systemctl"
- Service indicators with status colors
- Terminal cursor
- Corner accents

## Examples

See `src/app/page.tsx` for a complete demo of the design system showing:

- Color palette showcase
- Typography scale
- Spacing scale
- Button variants and sizes
- Component usage examples

Run the app with `npm run dev` to view the design system in action.
