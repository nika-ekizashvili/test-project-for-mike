import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GoogleSheetsIntegration } from './GoogleSheetsIntegration';

describe('GoogleSheetsIntegration', () => {
  it('renders the Google Sheets Integration section', () => {
    render(<GoogleSheetsIntegration />);
    expect(screen.getByText('Google Sheets Integration')).toBeInTheDocument();
  });

  it('displays the section title', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Google Sheets Integration');
  });

  it('displays all four feature cards', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    const featureCards = screen.getAllByRole('heading', { level: 3 });
    expect(featureCards.length).toBeGreaterThanOrEqual(4);
  });

  it('includes automatic logging feature', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('Automatic Property Logging')).toBeInTheDocument();
  });

  it('includes centralized records feature', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('Centralized Record-Keeping')).toBeInTheDocument();
  });

  it('includes no password storage feature', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('No Password Storage')).toBeInTheDocument();
  });

  it('includes OAuth 2.0 certification feature', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('OAuth 2.0 Certified')).toBeInTheDocument();
  });

  it('displays sample sheet section', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('Sample Google Sheet')).toBeInTheDocument();
  });

  it('includes sample data with property URLs', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText(/ss\.ge\/property/)).toBeInTheDocument();
    expect(screen.getByText(/myhome\.ge\/listing/)).toBeInTheDocument();
  });

  it('displays security callout with OAuth 2.0 mention', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    const callout = screen.getByText(/OAuth 2.0 Certified/i);
    expect(callout).toBeInTheDocument();
  });

  it('displays "No passwords stored" in security callout', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    const securityText = screen.getByText(/No passwords stored/i);
    expect(securityText).toBeInTheDocument();
  });

  it('supports Georgian locale', () => {
    render(<GoogleSheetsIntegration locale="ka" />);
    expect(screen.getByText('Google Sheets ინტეგრაცია')).toBeInTheDocument();
  });

  it('displays sample sheet with proper columns', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('Property URL')).toBeInTheDocument();
    expect(screen.getByText('Date Listed')).toBeInTheDocument();
    expect(screen.getByText('Price (₾)')).toBeInTheDocument();
    expect(screen.getByText('Platform')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('displays example data in sample sheet', () => {
    render(<GoogleSheetsIntegration locale="en" />);
    expect(screen.getByText('2024-08-01')).toBeInTheDocument();
    expect(screen.getByText(/850,000/)).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Sold')).toBeInTheDocument();
  });

  it('renders as a section element', () => {
    const { container } = render(<GoogleSheetsIntegration />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });
});
