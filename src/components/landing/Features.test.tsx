import React from 'react';
import { render, screen } from '@testing-library/react';
import { Features } from './Features';

describe('Features', () => {
  it('renders features section with English content by default', () => {
    render(<Features />);

    expect(screen.getByText('Core Capabilities')).toBeInTheDocument();
    expect(
      screen.getByText('Powerful features designed for Georgian real estate professionals')
    ).toBeInTheDocument();
    expect(screen.getByText('One-Click Data Extraction & Injection')).toBeInTheDocument();
    expect(screen.getByText('Concurrent Dual-Platform Form Filling')).toBeInTheDocument();
    expect(screen.getByText('Customizable Listing Templates')).toBeInTheDocument();
    expect(screen.getByText('Automatic Price Adjustments')).toBeInTheDocument();
    expect(screen.getByText('Draft-Alert Protection')).toBeInTheDocument();
  });

  it('renders features section with Georgian content when locale is set to ka', () => {
    render(<Features locale="ka" />);

    expect(screen.getByText('ძირითადი შესაძლებლობები')).toBeInTheDocument();
    expect(
      screen.getByText('ძლიერი ფუნქციები ქართველი უძრავ ქონების პროფესიონალებისთვის')
    ).toBeInTheDocument();
    expect(screen.getByText('ერთი ნაკლიკის მონაცემთა ამოღება და ჩასმა')).toBeInTheDocument();
    expect(screen.getByText('ერთდროული ორ-პლატფორმის ფორმების შევსება')).toBeInTheDocument();
    expect(screen.getByText('მორგებული სიის შაბლონები')).toBeInTheDocument();
    expect(screen.getByText('ავტომატური ფასის კორექტირება')).toBeInTheDocument();
    expect(screen.getByText('მონახაზის-გაფრთხოების დაცვა')).toBeInTheDocument();
  });

  it('renders exactly 5 feature cards', () => {
    const { container } = render(<Features />);

    const featureCards = container.querySelectorAll('[class*="featureCard"]');
    expect(featureCards.length).toBe(5);
  });

  it('renders feature icons with proper aria labels', () => {
    const { container } = render(<Features />);

    const icons = container.querySelectorAll('[role="img"]');
    expect(icons.length).toBe(5);
    expect(icons[0]).toHaveAttribute('aria-label', '🔄');
    expect(icons[1]).toHaveAttribute('aria-label', '📋');
    expect(icons[2]).toHaveAttribute('aria-label', '🎨');
    expect(icons[3]).toHaveAttribute('aria-label', '💰');
    expect(icons[4]).toHaveAttribute('aria-label', '🛡️');
  });

  it('applies custom className if provided', () => {
    const { container } = render(<Features className="custom-class" />);

    expect(container.querySelector('section')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSectionElement>();
    render(<Features ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('renders all feature descriptions', () => {
    render(<Features />);

    expect(
      screen.getByText(
        'Seamlessly extract property data from SS.ge and inject it directly into MyHome.ge with a single click. No manual copying required.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Fill forms on both SS.ge and MyHome.ge simultaneously. Save time by updating both platforms at once.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Create and customize templates for different deal types: sales, rentals, daily rentals, and mortgage listings. Reuse templates to speed up listings.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Adjust prices across both platforms with calculated rounding and area adjustments. Keep pricing consistent and competitive.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Prevent accidental data loss with draft-alert notifications. Your work is automatically saved and protected across sessions.'
      )
    ).toBeInTheDocument();
  });
});
