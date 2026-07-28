import React, { HTMLAttributes } from 'react';
import styles from './Features.module.css';

export interface FeaturesProps extends HTMLAttributes<HTMLDivElement> {
  locale?: string;
}

export const Features = React.forwardRef<HTMLDivElement, FeaturesProps>(
  ({ locale = 'en', className = '', ...props }, ref) => {
    // Feature list with emoji icons and translation keys
    const featureList = [
      {
        icon: '🔄',
        titleKey: 'oneClickExtraction.title',
        descriptionKey: 'oneClickExtraction.description',
      },
      {
        icon: '📋',
        titleKey: 'dualPlatformFilling.title',
        descriptionKey: 'dualPlatformFilling.description',
      },
      {
        icon: '🎨',
        titleKey: 'customizableTemplates.title',
        descriptionKey: 'customizableTemplates.description',
      },
      {
        icon: '💰',
        titleKey: 'autoPriceAdjustment.title',
        descriptionKey: 'autoPriceAdjustment.description',
      },
      {
        icon: '🛡️',
        titleKey: 'draftAlertProtection.title',
        descriptionKey: 'draftAlertProtection.description',
      },
    ];

    // Translation content
    const content = {
      en: {
        title: 'Core Capabilities',
        description: 'Powerful features designed for Georgian real estate professionals',
        oneClickExtraction: {
          title: 'One-Click Data Extraction & Injection',
          description: 'Seamlessly extract property data from SS.ge and inject it directly into MyHome.ge with a single click. No manual copying required.',
        },
        dualPlatformFilling: {
          title: 'Concurrent Dual-Platform Form Filling',
          description: 'Fill forms on both SS.ge and MyHome.ge simultaneously. Save time by updating both platforms at once.',
        },
        customizableTemplates: {
          title: 'Customizable Listing Templates',
          description: 'Create and customize templates for different deal types: sales, rentals, daily rentals, and mortgage listings. Reuse templates to speed up listings.',
        },
        autoPriceAdjustment: {
          title: 'Automatic Price Adjustments',
          description: 'Adjust prices across both platforms with calculated rounding and area adjustments. Keep pricing consistent and competitive.',
        },
        draftAlertProtection: {
          title: 'Draft-Alert Protection',
          description: 'Prevent accidental data loss with draft-alert notifications. Your work is automatically saved and protected across sessions.',
        },
      },
      ka: {
        title: 'ძირითადი შესაძლებლობები',
        description: 'ძლიერი ფუნქციები ქართველი უძრავ ქონების პროფესიონალებისთვის',
        oneClickExtraction: {
          title: 'ერთი ნაკლიკის მონაცემთა ამოღება და ჩასმა',
          description: 'მარტივად ამოიღეთ საკუთრების მონაცემები SS.ge-დან და სწორედ ჩასვით MyHome.ge-ში ერთი ნაკლიკით. არ არის საჭირო ხელით კოპირება.',
        },
        dualPlatformFilling: {
          title: 'ერთდროული ორ-პლატფორმის ფორმების შევსება',
          description: 'შეავსეთ ფორმები SS.ge-სა და MyHome.ge-ზე ერთდროულად. დაზოგეთ დრო ორივე პლატფორმის ერთბაშად განახლებით.',
        },
        customizableTemplates: {
          title: 'მორგებული სიის შაბლონები',
          description: 'შექმენით და მორგეთ შაბლონები სხვადსხვა ტიპის გარიგებებისთვის: გაყიდვები, ენაში, დღეღამეული ქირავნობა და იპოთეკა. გამოიყენეთ შაბლონები სიების აჩქარებისთვის.',
        },
        autoPriceAdjustment: {
          title: 'ავტომატური ფასის კორექტირება',
          description: 'კორექტირება ფასები ორივე პლატფორმაზე გამოთვლილი დამრგვალებით და ფართობის კორექტირებით. ფასები დარჩება თანმიმდევრული და კონკურენტული.',
        },
        draftAlertProtection: {
          title: 'მონახაზის-გაფრთხოების დაცვა',
          description: 'თავიდან აიცილეთ შემთხვევითი მონაცემთა დაკარგვა მონახაზის-გაფრთხოების გაცნობებით. თქვენი სამუშაო ავტომატურად ინახება და დაცულია სეანსებში.',
        },
      },
    };

    const text = content[locale as keyof typeof content] || content.en;
    const classes = [styles.features, className].filter(Boolean).join(' ');

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

          <div className={styles.grid}>
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
        </div>
      </section>
    );
  }
);

Features.displayName = 'Features';
