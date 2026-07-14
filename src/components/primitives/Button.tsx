/**
 * Button Primitive Component
 * Terminal-styled button with monospace typography
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius, shadow, transition } from '@/theme/tokens';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether button is loading
   */
  isLoading?: boolean;

  /**
   * Whether button is disabled
   */
  isDisabled?: boolean;

  /**
   * Full width button
   */
  isFullWidth?: boolean;
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  /* Base styles */
  font-family: ${typography.fontFamily.monospace};
  font-weight: ${typography.fontWeight.semibold};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  white-space: nowrap;
  transition: ${transition.base};
  border-radius: ${borderRadius.base};

  /* Size variants */
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          font-size: ${typography.fontSize.sm};
          padding: ${spacing[2]} ${spacing[3]};
        `;
      case 'lg':
        return `
          font-size: ${typography.fontSize.lg};
          padding: ${spacing[4]} ${spacing[6]};
        `;
      case 'md':
      default:
        return `
          font-size: ${typography.fontSize.base};
          padding: ${spacing[3]} ${spacing[4]};
        `;
    }
  }}

  /* Width */
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};

  /* Variant styles */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${colors.primary[400]};
          color: ${colors.neutral[50]};
          box-shadow: ${shadow.sm};

          &:hover:not(:disabled) {
            background-color: ${colors.primary[300]};
            box-shadow: ${shadow.base};
          }

          &:active:not(:disabled) {
            background-color: ${colors.primary[500]};
          }
        `;
      case 'secondary':
        return `
          background-color: ${colors.secondary[400]};
          color: ${colors.neutral[50]};
          box-shadow: ${shadow.sm};

          &:hover:not(:disabled) {
            background-color: ${colors.secondary[300]};
            box-shadow: ${shadow.base};
          }

          &:active:not(:disabled) {
            background-color: ${colors.secondary[500]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${colors.primary[400]};
          border: 2px solid ${colors.primary[400]};

          &:hover:not(:disabled) {
            background-color: ${colors.primary[400]};
            color: ${colors.neutral[50]};
          }

          &:active:not(:disabled) {
            background-color: ${colors.primary[500]};
            border-color: ${colors.primary[500]};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${colors.neutral[700]};

          &:hover:not(:disabled) {
            background-color: ${colors.neutral[100]};
            color: ${colors.neutral[800]};
          }

          &:active:not(:disabled) {
            background-color: ${colors.neutral[200]};
          }
        `;
      case 'danger':
        return `
          background-color: ${colors.status.error};
          color: ${colors.neutral[50]};
          box-shadow: ${shadow.sm};

          &:hover:not(:disabled) {
            background-color: ${colors.error.dark};
            box-shadow: ${shadow.base};
          }

          &:active:not(:disabled) {
            opacity: 0.9;
          }
        `;
      default:
        return '';
    }
  }}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Focus state */
  &:focus-visible {
    outline: 2px solid ${colors.accent[400]};
    outline-offset: 2px;
  }
`;

/**
 * Button Component
 * A terminal-styled button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, isDisabled, children, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading && <span>→</span>}
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
