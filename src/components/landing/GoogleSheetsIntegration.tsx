import React, { HTMLAttributes } from 'react';
import styles from './GoogleSheetsIntegration.module.css';
import { Button } from '@/components/ui/Button';

export interface GoogleSheetsIntegrationProps extends HTMLAttributes<HTMLDivElement> {
  locale?: string;
}

export const GoogleSheetsIntegration = React.forwardRef<HTMLDivElement, GoogleSheetsIntegrationProps>(
  ({ locale = 'en', className = '', ...props }, ref) => {
    const featureList = [
      {
        icon: '📊',
        titleKey: 'automaticLogging.title',
        descriptionKey: 'automaticLogging.description',
      },
      {
        icon: '📑',
        titleKey: 'centralizedRecords.title',
        descriptionKey: 'centralizedRecords.description',
      },
      {
        icon: '🔐',
        titleKey: 'noPasswordStorage.title',
        descriptionKey: 'noPasswordStorage.description',
      },
      {
        icon: '✓',
        titleKey: 'oauth2Certified.title',
        descriptionKey: 'oauth2Certified.description',
      },
    ];

    const content = {
      en: {
        title: 'Google Sheets Integration',
        description: 'Centralized tracking and record-keeping for all your property listings',
        automaticLogging: {
          title: 'Automatic Property Logging',
          description: 'Every property URL, date, and pricing is automatically logged to your Google Sheet in real-time. No manual data entry needed.',
        },
        centralizedRecords: {
          title: 'Centralized Record-Keeping',
          description: 'Keep all your listing data in one synchronized location. Access your complete property history and track market trends over time.',
        },
        noPasswordStorage: {
          title: 'No Password Storage',
          description: 'We never store your passwords. Your data is protected with OAuth 2.0 certification, ensuring secure access without storing credentials.',
        },
        oauth2Certified: {
          title: 'OAuth 2.0 Certified',
          description: 'Secure authentication protocol that keeps your Google Account safe. We access only the sheets we need to update.',
        },
        sampleSheet: 'Sample Google Sheet',
        viewExample: 'View Sample Sheet',
      },
      ka: {
        title: 'Google Sheets ინტეგრაცია',
        description: 'ცენტრალიზებული ახორციელება და ჩანაწერი თქვენი ყველა ქონების სიმბოლოსთვის',
        automaticLogging: {
          title: 'ავტომატური საკუთრების ჩაწერა',
          description: 'ყველა ქონების URL, თარიღი და ფასი ავტომატურად ხელოვნურად ჯამდება თქვენ Google ფურცელში. არ გჭირდებათ ხელით მონაცემთა შეყვანა.',
        },
        centralizedRecords: {
          title: 'ცენტრალიზებული ჩანაწერი',
          description: 'იყოთ თქვენი ყველა სიმბოლოს მონაცემი ერთი სინქრონიზებულ ადგილას. წვდომა აქვს თქვენი სრული საკუთრების ისტორია და ნახეთ ბაზრის ტენდენცია დროის განმავლობაში.',
        },
        noPasswordStorage: {
          title: 'პაროლი არ ინახება',
          description: 'თქვენი პაროლი არასოდეს არ ინახება. თქვენი მონაცემი დაცულია OAuth 2.0 სერტიფიკატით, ხელოვნური უსაფრთხო წვდომის უზრუნველყოფა დაკრედიტებული ინახვის გარეშე.',
        },
        oauth2Certified: {
          title: 'OAuth 2.0 ლიცენზირებული',
          description: 'უსაფრთხო აუთენტიფიკაციის ოქროვანი რომელიც თქვენი Google ანგარიშის უსაფრთხოებას აქცევს. მხოლოდ ფურცლებში შეიძლება გვჭირდება აკცეს აკცე.',
        },
        sampleSheet: 'Google ფურცლის ნიმუში',
        viewExample: 'ნიმუშის ხედი',
      },
    };

    const text = content[locale as keyof typeof content] || content.en;
    const classes = [styles.googleSheets, className].filter(Boolean).join(' ');

    const getNestedValue = (obj: any, path: string) => {
      return path.split('.').reduce((acc, part) => acc?.[part], obj);
    };

    return (
      <section ref={ref} className={classes} {...props}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>{text.title}</h2>
            <p className={styles.description}>{text.description}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.featuresGrid}>
              {featureList.map((feature, index) => {
                const featureTitle = getNestedValue(text, feature.titleKey);
                const featureDescription = getNestedValue(text, feature.descriptionKey);

                return (
                  <div key={index} className={styles.featureCard}>
                    <div className={styles.icon} role="img" aria-label={feature.icon}>
                      {feature.icon}
                    </div>
                    <h3 className={styles.featureTitle}>{featureTitle}</h3>
                    <p className={styles.featureDescription}>{featureDescription}</p>
                  </div>
                );
              })}
            </div>

            <div className={styles.sampleSheetContainer}>
              <div className={styles.sampleSheetLabel}>{text.sampleSheet}</div>
              <div className={styles.sampleSheet}>
                <div className={styles.sheetHeader}>
                  <div className={styles.headerCell}>Property URL</div>
                  <div className={styles.headerCell}>Date Listed</div>
                  <div className={styles.headerCell}>Price (₾)</div>
                  <div className={styles.headerCell}>Platform</div>
                  <div className={styles.headerCell}>Status</div>
                </div>
                <div className={styles.sheetRow}>
                  <div className={styles.cell}>ss.ge/property/12345</div>
                  <div className={styles.cell}>2024-08-01</div>
                  <div className={styles.cell}>850,000</div>
                  <div className={styles.cell}>SS.ge</div>
                  <div className={styles.cell}>Active</div>
                </div>
                <div className={styles.sheetRow}>
                  <div className={styles.cell}>myhome.ge/listing/67890</div>
                  <div className={styles.cell}>2024-08-01</div>
                  <div className={styles.cell}>850,000</div>
                  <div className={styles.cell}>MyHome</div>
                  <div className={styles.cell}>Active</div>
                </div>
                <div className={styles.sheetRow}>
                  <div className={styles.cell}>ss.ge/property/54321</div>
                  <div className={styles.cell}>2024-07-30</div>
                  <div className={styles.cell}>620,000</div>
                  <div className={styles.cell}>SS.ge</div>
                  <div className={styles.cell}>Sold</div>
                </div>
              </div>
              <p className={styles.sheetDescription}>
                All property data synced in real-time. Columns include Property URL, Date Listed, Price, Platform, and Current Status.
              </p>
            </div>
          </div>

          <div className={styles.securityCallout}>
            <div className={styles.calloutContent}>
              <h3 className={styles.calloutTitle}>🔒 Security & Privacy First</h3>
              <ul className={styles.calloutList}>
                <li>✓ OAuth 2.0 Certified – No passwords stored</li>
                <li>✓ Secure authentication with Google</li>
                <li>✓ Your data stays in your Google Drive</li>
                <li>✓ Only read/write access to your designated sheets</li>
              </ul>
            </div>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" size="lg">
              {text.viewExample}
            </Button>
          </div>
        </div>
      </section>
    );
  }
);

GoogleSheetsIntegration.displayName = 'GoogleSheetsIntegration';
