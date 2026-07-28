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
            <svg
              className={styles.heroVisual}
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Extension interface preview"
              role="img"
            >
              {/* Background */}
              <rect width="400" height="300" fill="#111827" />

              {/* Window chrome */}
              <rect width="400" height="300" fill="#1f2937" rx="8" />
              <rect width="400" height="28" fill="#0a0e27" />

              {/* Window controls */}
              <circle cx="20" cy="14" r="3" fill="#ef4444" opacity="0.8" />
              <circle cx="36" cy="14" r="3" fill="#f59e0b" opacity="0.8" />
              <circle cx="52" cy="14" r="3" fill="#10b981" opacity="0.8" />

              {/* Window title */}
              <text
                x="200"
                y="19"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="12"
                fill="#9ca3af"
                textAnchor="middle"
              >
                SS.ge + MyHome.ge Manager
              </text>

              {/* Content area */}
              <rect x="0" y="28" width="400" height="272" fill="#111827" />

              {/* Sidebar */}
              <rect x="0" y="28" width="100" height="272" fill="#1f2937" />

              {/* Sidebar items */}
              <rect x="8" y="40" width="84" height="32" rx="4" fill="#1e90ff" opacity="0.2" />
              <text x="16" y="62" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#e8e8e8">
                Listings
              </text>

              <text x="16" y="85" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#9ca3af">
                Sync
              </text>
              <text x="16" y="105" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#9ca3af">
                Settings
              </text>
              <text x="16" y="125" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#9ca3af">
                Analytics
              </text>

              {/* Main content */}
              <rect x="110" y="40" width="280" height="60" fill="#374151" rx="4" stroke="#4b5563" strokeWidth="1" />
              <text
                x="120"
                y="58"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="13"
                fontWeight="600"
                fill="#e8e8e8"
              >
                SS.ge Listings
              </text>
              <text x="120" y="75" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#9ca3af">
                12 active listings
              </text>
              <circle cx="360" cy="70" r="14" fill="#10b981" opacity="0.2" />
              <text
                x="360"
                y="74"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="#10b981"
                textAnchor="middle"
              >
                ✓
              </text>

              {/* Second listing */}
              <rect x="110" y="110" width="280" height="60" fill="#374151" rx="4" stroke="#4b5563" strokeWidth="1" />
              <text
                x="120"
                y="128"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="13"
                fontWeight="600"
                fill="#e8e8e8"
              >
                MyHome.ge Listings
              </text>
              <text x="120" y="145" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#9ca3af">
                8 active listings
              </text>
              <circle cx="360" cy="140" r="14" fill="#10b981" opacity="0.2" />
              <text
                x="360"
                y="144"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="#10b981"
                textAnchor="middle"
              >
                ✓
              </text>

              {/* Stats */}
              <rect x="110" y="180" width="85" height="50" fill="#1e90ff" opacity="0.15" rx="4" />
              <text
                x="152"
                y="197"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill="#1e90ff"
                textAnchor="middle"
              >
                20
              </text>
              <text
                x="152"
                y="217"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="10"
                fill="#9ca3af"
                textAnchor="middle"
              >
                Total Active
              </text>

              <rect x="205" y="180" width="85" height="50" fill="#10b981" opacity="0.15" rx="4" />
              <text
                x="247"
                y="197"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill="#10b981"
                textAnchor="middle"
              >
                100%
              </text>
              <text
                x="247"
                y="217"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="10"
                fill="#9ca3af"
                textAnchor="middle"
              >
                Synced
              </text>

              <rect x="300" y="180" width="90" height="50" fill="#f59e0b" opacity="0.15" rx="4" />
              <text
                x="345"
                y="197"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill="#f59e0b"
                textAnchor="middle"
              >
                2.3h
              </text>
              <text
                x="345"
                y="217"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="10"
                fill="#9ca3af"
                textAnchor="middle"
              >
                Time Saved
              </text>

              {/* Bottom action */}
              <rect x="110" y="250" width="85" height="28" fill="#1e90ff" rx="4" />
              <text
                x="152"
                y="269"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="12"
                fontWeight="600"
                fill="#e8e8e8"
                textAnchor="middle"
              >
                Sync Now
              </text>

              <rect x="205" y="250" width="85" height="28" fill="#374151" rx="4" stroke="#4b5563" strokeWidth="1" />
              <text
                x="247"
                y="269"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="12"
                fill="#9ca3af"
                textAnchor="middle"
              >
                History
              </text>
            </svg>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';
