/**
 * Text Primitive Component
 * Typography component for consistent text styling
 */

import React from 'react';
import styled from '@emotion/styled';
import { typography, colors } from '@/theme/tokens';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Text variant
   * @default 'body'
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label' | 'code';

  /**
   * Text color
   * @default colors.neutral[400]
   */
  color?: string;

  /**
   * Font weight
   */
  fontWeight?: keyof typeof typography.fontWeight;

  /**
   * Font size
   */
  fontSize?: keyof typeof typography.fontSize;

  /**
   * Line height
   */
  lineHeight?: keyof typeof typography.lineHeight;

  /**
   * Text alignment
   */
  textAlign?: React.CSSProperties['textAlign'];

  /**
   * Whether text should be truncated
   */
  truncate?: boolean;

  /**
   * Number of lines to display (with ellipsis)
   */
  lineClamp?: number;

  /**
   * As polymorphic component
   */
  as?: React.ElementType;
}

const StyledText = styled.p<TextProps>`
  font-family: ${typography.fontFamily.monospace};
  margin: 0;
  padding: 0;

  /* Variant styles */
  ${({ variant = 'body' }) => {
    switch (variant) {
      case 'h1':
        return `
          font-size: ${typography.fontSize['4xl']};
          font-weight: ${typography.fontWeight.bold};
          line-height: ${typography.lineHeight.tight};
        `;
      case 'h2':
        return `
          font-size: ${typography.fontSize['3xl']};
          font-weight: ${typography.fontWeight.bold};
          line-height: ${typography.lineHeight.tight};
        `;
      case 'h3':
        return `
          font-size: ${typography.fontSize['2xl']};
          font-weight: ${typography.fontWeight.semibold};
          line-height: ${typography.lineHeight.tight};
        `;
      case 'h4':
        return `
          font-size: ${typography.fontSize.lg};
          font-weight: ${typography.fontWeight.semibold};
          line-height: ${typography.lineHeight.normal};
        `;
      case 'h5':
      case 'h6':
        return `
          font-size: ${typography.fontSize.base};
          font-weight: ${typography.fontWeight.semibold};
          line-height: ${typography.lineHeight.normal};
        `;
      case 'caption':
        return `
          font-size: ${typography.fontSize.xs};
          font-weight: ${typography.fontWeight.normal};
          line-height: ${typography.lineHeight.normal};
          color: ${colors.neutral[600]};
        `;
      case 'label':
        return `
          font-size: ${typography.fontSize.sm};
          font-weight: ${typography.fontWeight.medium};
          line-height: ${typography.lineHeight.normal};
          text-transform: uppercase;
          letter-spacing: ${typography.letterSpacing.wide};
        `;
      case 'code':
        return `
          font-family: ${typography.fontFamily.mono};
          font-size: ${typography.fontSize.sm};
          font-weight: ${typography.fontWeight.normal};
          line-height: ${typography.lineHeight.normal};
          background-color: ${colors.neutral[100]};
          color: ${colors.primary[400]};
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        `;
      case 'body':
      default:
        return `
          font-size: ${typography.fontSize.base};
          font-weight: ${typography.fontWeight.normal};
          line-height: ${typography.lineHeight.normal};
        `;
    }
  }}

  /* Color */
  color: ${({ color }) => color || colors.neutral[400]};

  /* Font weight override */
  ${({ fontWeight }) => fontWeight && `font-weight: ${typography.fontWeight[fontWeight]};`}

  /* Font size override */
  ${({ fontSize }) => fontSize && `font-size: ${typography.fontSize[fontSize]};`}

  /* Line height override */
  ${({ lineHeight }) => lineHeight && `line-height: ${typography.lineHeight[lineHeight]};`}

  /* Text alignment */
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

  /* Truncation */
  ${({ truncate }) =>
    truncate &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Line clamping */
  ${({ lineClamp }) =>
    lineClamp &&
    `
    display: -webkit-box;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

/**
 * Text Component
 * A typography component for rendering text with consistent styling
 *
 * @example
 * ```tsx
 * <Text variant="h2" color={colors.primary[400]}>
 *   Heading
 * </Text>
 *
 * <Text variant="body">
 *   Body text
 * </Text>
 * ```
 */
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const { as = 'p', variant, ...rest } = props;

    // Map variants to semantic HTML elements
    let element = as;
    if (!as || as === 'p') {
      if (variant?.startsWith('h')) {
        element = variant;
      }
    }

    return <StyledText ref={ref} as={element} variant={variant} {...rest} />;
  },
);

Text.displayName = 'Text';

export default Text;
