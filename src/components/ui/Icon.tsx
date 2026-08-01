import React, { SVGAttributes } from 'react';
import styles from './Icon.module.css';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted';
export type StrokeWidth = 1 | 1.5 | 2 | 2.5 | 3;

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: string;
  size?: IconSize;
  color?: IconColor;
  strokeWidth?: StrokeWidth;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'primary', strokeWidth = 2, className = '', ...props }, ref) => {
    const classes = [
      styles.icon,
      styles[`size-${size}`],
      styles[`color-${color}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <svg
        ref={ref}
        className={classes}
        strokeWidth={strokeWidth}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
