import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders hero section with English content by default', () => {
    render(<Hero />);

    expect(screen.getByText('Double Your Listings, Half the Effort')).toBeInTheDocument();
    expect(
      screen.getByText(
        'The intelligent extension for Georgian real estate agents managing SS.ge and MyHome.ge listings simultaneously'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Install on Chrome')).toBeInTheDocument();
  });

  it('renders hero section with Georgian content when locale is set to ka', () => {
    render(<Hero locale="ka" />);

    expect(screen.getByText('ორმაგი სიმბოლო, ნახევარი დრო')).toBeInTheDocument();
    expect(
      screen.getByText(
        'ინტელექტუალური გაფართოება ქართველი უძრავ ქონების აგენტებისთვის, რომლებიც SS.ge და MyHome.ge-ს ერთდროულად მართავენ'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Chrome-ზე დაინსტალირება')).toBeInTheDocument();
  });

  it('renders a link to Chrome Web Store in the CTA button', () => {
    render(<Hero />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the hero visual placeholder', () => {
    render(<Hero />);

    expect(screen.getByLabelText('Hero visual placeholder')).toBeInTheDocument();
  });

  it('applies custom className if provided', () => {
    const { container } = render(<Hero className="custom-class" />);

    expect(container.querySelector('section')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Hero ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
