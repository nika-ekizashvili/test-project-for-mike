import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { Stack } from '@/components/ui/Stack';

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  locale?: string;
}

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ locale = 'en', className = '', ...props }, ref) => {
    // Using hardcoded translations for now (can be integrated with next-intl later)
    const content = {
      en: {
        title: 'Double Your Listings, Half the Effort',
        subtitle: 'The intelligent extension for Georgian real estate agents managing SS.ge and MyHome.ge listings simultaneously',
        cta: 'Install on Chrome',
        chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID',
      },
      ka: {
        title: 'ორმაგი სიმბოლო, ნახევარი დრო',
        subtitle: 'ინტელექტუალური გაფართოება ქართველი უძრავ ქონების აგენტებისთვის, რომლებიც SS.ge და MyHome.ge-ს ერთდროულად მართავენ',
        cta: 'Chrome-ზე დაინსტალირება',
        chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID',
      },
    };

    const text = content[locale as keyof typeof content] || content.en;
    const classes = [styles.hero, className].filter(Boolean).join(' ');

    return (
      <section ref={ref} className={classes} {...props}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Stack direction="column" spacing="lg" align="start">
              <h1 className={styles.title}>{text.title}</h1>
              <p className={styles.subtitle}>{text.subtitle}</p>
              <div className={styles.cta}>
                <Link href={text.chromeWebStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    {text.cta}
                  </Button>
                </Link>
              </div>
            </Stack>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.heroVisual}>
              <p>{text.title}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';
