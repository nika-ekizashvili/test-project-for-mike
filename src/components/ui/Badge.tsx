import React, { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'primary-outline'
    | 'secondary-outline'
    | 'success-outline'
    | 'warning-outline'
    | 'error-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      disabled = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.badge,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} role="status" aria-disabled={disabled} {...props}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
