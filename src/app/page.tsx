import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function Home() {
  const locale = 'en'; // Default locale, can be extended with next-intl

  return (
    <main>
      <Hero locale={locale} />
      <Features locale={locale} />
      <HowItWorks locale={locale} />
    </main>
  );
}
