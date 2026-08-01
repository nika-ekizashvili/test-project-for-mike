import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SS.ge & MyHome.ge Manager - Dual Platform Listing Extension',
  description:
    'Manage real estate listings on SS.ge and MyHome.ge simultaneously with our intelligent browser extension. Extract data, auto-fill forms, and sync listings in seconds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
