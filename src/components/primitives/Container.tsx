/**
 * Container Primitive Component
 * Responsive container with max-width constraints
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, breakpoints } from '@/theme/tokens';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container size
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * Horizontal padding
   * @default '4'
   */
  px?: keyof typeof spacing;
}

const StyledContainer = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  /* Padding */
  padding-left: ${({ px }) => (px ? spacing[px] : spacing[4])};
  padding-right: ${({ px }) => (px ? spacing[px] : spacing[4])};

  /* Size variants */
  ${({ size = 'lg' }) => {
    switch (size) {
      case 'sm':
        return `max-width: 640px;`;
      case 'md':
        return `max-width: 768px;`;
      case 'lg':
        return `max-width: 1024px;`;
      case 'xl':
        return `max-width: 1280px;`;
      case 'full':
        return `max-width: 100%;`;
      default:
        return '';
    }
  }}

  /* Responsive padding */
  @media (max-width: ${breakpoints.md}) {
    padding-left: ${({ px }) => (px ? spacing[px] : spacing[3])};
    padding-right: ${({ px }) => (px ? spacing[px] : spacing[3])};
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-left: ${({ px }) => (px ? spacing[px] : spacing[2])};
    padding-right: ${({ px }) => (px ? spacing[px] : spacing[2])};
  }
`;

/**
 * Container Component
 * Responsive container for layout
 *
 * @example
 * ```tsx
 * <Container size="lg">
 *   <Text variant="h1">Page content</Text>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return <StyledContainer ref={ref} {...props} />;
  },
);

Container.displayName = 'Container';

export default Container;
