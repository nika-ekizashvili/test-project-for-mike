/**
 * Button Component Tests
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render with default variant', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('should support multiple variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toBeInTheDocument();

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByText('Outline')).toBeInTheDocument();

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByText('Ghost')).toBeInTheDocument();

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByText('Danger')).toBeInTheDocument();
  });

  it('should support multiple sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('should handle disabled state', () => {
    render(<Button isDisabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should handle loading state', () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should support full width', () => {
    render(<Button isFullWidth>Full Width</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should accept standard button attributes', () => {
    const onClick = () => {};
    render(
      <Button onClick={onClick} data-testid="test-button">
        Test
      </Button>,
    );
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  it('should forward ref', () => {
    const ref = { current: null };
    render(
      <Button ref={ref as any} data-testid="test-button">
        Test
      </Button>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
