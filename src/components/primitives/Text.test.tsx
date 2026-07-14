/**
 * Text Component Tests
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';
import { colors } from '@/theme/tokens';

describe('Text Component', () => {
  it('should render with default variant', () => {
    render(<Text>Default text</Text>);
    expect(screen.getByText('Default text')).toBeInTheDocument();
  });

  it('should support heading variants', () => {
    const { rerender } = render(<Text variant="h1">Heading 1</Text>);
    expect(screen.getByText('Heading 1')).toBeInTheDocument();

    rerender(<Text variant="h2">Heading 2</Text>);
    expect(screen.getByText('Heading 2')).toBeInTheDocument();

    rerender(<Text variant="h3">Heading 3</Text>);
    expect(screen.getByText('Heading 3')).toBeInTheDocument();

    rerender(<Text variant="h4">Heading 4</Text>);
    expect(screen.getByText('Heading 4')).toBeInTheDocument();

    rerender(<Text variant="h5">Heading 5</Text>);
    expect(screen.getByText('Heading 5')).toBeInTheDocument();

    rerender(<Text variant="h6">Heading 6</Text>);
    expect(screen.getByText('Heading 6')).toBeInTheDocument();
  });

  it('should support body variant', () => {
    render(<Text variant="body">Body text</Text>);
    expect(screen.getByText('Body text')).toBeInTheDocument();
  });

  it('should support caption variant', () => {
    render(<Text variant="caption">Caption text</Text>);
    expect(screen.getByText('Caption text')).toBeInTheDocument();
  });

  it('should support label variant', () => {
    render(<Text variant="label">Label</Text>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should support code variant', () => {
    render(<Text variant="code">const x = 1;</Text>);
    expect(screen.getByText('const x = 1;')).toBeInTheDocument();
  });

  it('should accept custom color', () => {
    render(<Text color={colors.primary[400]}>Colored text</Text>);
    expect(screen.getByText('Colored text')).toBeInTheDocument();
  });

  it('should support truncate', () => {
    render(<Text truncate>Very long text that should be truncated</Text>);
    const element = screen.getByText('Very long text that should be truncated');
    expect(element).toBeInTheDocument();
  });

  it('should support line clamping', () => {
    render(<Text lineClamp={2}>Text that should be clamped to two lines</Text>);
    expect(screen.getByText('Text that should be clamped to two lines')).toBeInTheDocument();
  });

  it('should support text alignment', () => {
    render(<Text textAlign="center">Centered text</Text>);
    expect(screen.getByText('Centered text')).toBeInTheDocument();
  });

  it('should forward ref', () => {
    const ref = { current: null };
    render(
      <Text ref={ref as any} data-testid="test-text">
        Test
      </Text>,
    );
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should map heading variants to semantic HTML elements', () => {
    const { container: h1Container } = render(<Text variant="h1">Heading</Text>);
    expect(h1Container.querySelector('h1')).toBeInTheDocument();

    const { container: h2Container } = render(<Text variant="h2">Heading</Text>);
    expect(h2Container.querySelector('h2')).toBeInTheDocument();
  });
});
