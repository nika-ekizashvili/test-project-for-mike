import React, { SVGAttributes } from 'react';
import styles from './Icon.module.css';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'muted'
  | 'current';
export type StrokeWidth = '1' | '1.5' | '2' | '2.5';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  color?: IconColor;
  strokeWidth?: StrokeWidth;
  animated?: 'spin' | 'pulse' | false;
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * Icon Component
 * A reusable SVG wrapper for consistent icon styling and sizing.
 * Supports multiple sizes, colors, animations, and interactive states.
 *
 * @example
 * // Icon with system emoji
 * <Icon size="md" color="success">
 *   ✓
 * </Icon>
 *
 * @example
 * // SVG icon
 * <Icon size="lg" color="primary" strokeWidth="1.5">
 *   <svg>...</svg>
 * </Icon>
 *
 * @example
 * // Animated loading icon
 * <Icon size="md" animated="spin">
 *   ⚙️
 * </Icon>
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 'md',
      color = 'current',
      strokeWidth,
      animated = false,
      interactive = false,
      className = '',
      children,
      viewBox = '0 0 24 24',
      fill = 'none',
      stroke = 'currentColor',
      strokeLinecap = 'round',
      strokeLinejoin = 'round',
      ...props
    },
    ref
  ) => {
    // If children is provided, render as a wrapper div (for emoji or custom content)
    if (children && typeof children !== 'string') {
      const wrapperClasses = [
        styles.icon,
        styles[`size-${size}`],
        color !== 'current' && styles[`color-${color}`],
        interactive && styles.interactive,
        animated && styles[`animate-${animated}`],
        className,
      ]
        .filter(Boolean)
        .join(' ');

      return (
        <div ref={ref as any} className={wrapperClasses} role="img" aria-hidden="true">
          {children}
        </div>
      );
    }

    // SVG icon rendering
    const svgClasses = [
      styles.icon,
      styles[`size-${size}`],
      color !== 'current' && styles[`color-${color}`],
      strokeWidth && styles[`stroke-${strokeWidth}`],
      interactive && styles.interactive,
      animated && styles[`animate-${animated}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <svg
        ref={ref}
        className={svgClasses}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        role="img"
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
