import React, { HTMLAttributes } from 'react';
import styles from './Stack.module.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'column',
      spacing = 'md',
      align = 'stretch',
      justify = 'start',
      className = '',
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.stack,
      styles[`direction-${direction}`],
      styles[`spacing-${spacing}`],
      styles[`align-${align}`],
      styles[`justify-${justify}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <div ref={ref} className={classes} {...props} />;
  }
);

Stack.displayName = 'Stack';
