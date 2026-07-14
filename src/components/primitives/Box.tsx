/**
 * Box Primitive Component
 * Base layout component with spacing and styling tokens
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, colors, borderRadius } from '@/theme/tokens';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Padding
   */
  p?: keyof typeof spacing;

  /**
   * Padding X (horizontal)
   */
  px?: keyof typeof spacing;

  /**
   * Padding Y (vertical)
   */
  py?: keyof typeof spacing;

  /**
   * Margin
   */
  m?: keyof typeof spacing;

  /**
   * Margin X (horizontal)
   */
  mx?: keyof typeof spacing;

  /**
   * Margin Y (vertical)
   */
  my?: keyof typeof spacing;

  /**
   * Display property
   */
  display?: React.CSSProperties['display'];

  /**
   * Flex direction
   */
  flexDirection?: React.CSSProperties['flexDirection'];

  /**
   * Align items
   */
  alignItems?: React.CSSProperties['alignItems'];

  /**
   * Justify content
   */
  justifyContent?: React.CSSProperties['justifyContent'];

  /**
   * Gap between flex children
   */
  gap?: keyof typeof spacing;

  /**
   * Background color
   */
  bg?: string;

  /**
   * Border color
   */
  borderColor?: string;

  /**
   * Border width
   */
  borderWidth?: number;

  /**
   * Border radius
   */
  borderRadius?: keyof typeof borderRadius;

  /**
   * Width
   */
  width?: React.CSSProperties['width'];

  /**
   * Height
   */
  height?: React.CSSProperties['height'];

  /**
   * Min width
   */
  minWidth?: React.CSSProperties['minWidth'];

  /**
   * Min height
   */
  minHeight?: React.CSSProperties['minHeight'];

  /**
   * Max width
   */
  maxWidth?: React.CSSProperties['maxWidth'];

  /**
   * Max height
   */
  maxHeight?: React.CSSProperties['maxHeight'];

  /**
   * Flex grow
   */
  flex?: React.CSSProperties['flex'];

  /**
   * As polymorphic component
   */
  as?: React.ElementType;
}

const StyledBox = styled.div<BoxProps>`
  /* Padding */
  ${({ p }) => p && `padding: ${spacing[p]};`}
  ${({ px }) => px && `padding-left: ${spacing[px]}; padding-right: ${spacing[px]};`}
  ${({ py }) => py && `padding-top: ${spacing[py]}; padding-bottom: ${spacing[py]};`}

  /* Margin */
  ${({ m }) => m && `margin: ${spacing[m]};`}
  ${({ mx }) => mx && `margin-left: ${spacing[mx]}; margin-right: ${spacing[mx]};`}
  ${({ my }) => my && `margin-top: ${spacing[my]}; margin-bottom: ${spacing[my]};`}

  /* Display & Flex */
  ${({ display }) => display && `display: ${display};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ gap }) => gap && `gap: ${spacing[gap]};`}
  ${({ flex }) => flex && `flex: ${flex};`}

  /* Sizing */
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}

  /* Styling */
  ${({ bg }) => bg && `background-color: ${bg};`}
  ${({ borderColor, borderWidth: bw = 1 }) => borderColor && `border: ${bw}px solid ${borderColor};`}
  ${({ borderRadius: br }) => br && `border-radius: ${borderRadius[br]};`}
`;

/**
 * Box Component
 * A base layout component that provides shorthand props for spacing, sizing, and styling
 *
 * @example
 * ```tsx
 * <Box p={4} bg={colors.neutral[100]} borderRadius="base">
 *   Content here
 * </Box>
 * ```
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const { as, ...rest } = props;
    return <StyledBox ref={ref} as={as} {...rest} />;
  },
);

Box.displayName = 'Box';

export default Box;
