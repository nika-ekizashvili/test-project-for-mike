import React, { HTMLAttributes } from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'flat' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  disabled?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Card Component
 * A container for related content, supporting multiple variants and sections.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      size = 'md',
      interactive = false,
      disabled = false,
      image,
      imageAlt = '',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.card,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      interactive && styles.interactive,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        role={interactive ? 'button' : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {image && <img src={image} alt={imageAlt} className={styles.image} />}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * CardHeader Component
 * Header section with optional title and subtitle
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, className = '', children, ...props }, ref) => {
    const classes = [styles.header, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * CardBody Component
 * Main content section
 */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = '', children, ...props }, ref) => {
    const classes = [styles.body, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

/**
 * CardFooter Component
 * Footer section, typically for actions
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    const classes = [styles.footer, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
