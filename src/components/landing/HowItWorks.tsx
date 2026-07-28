import React, { HTMLAttributes } from 'react';
import styles from './HowItWorks.module.css';
import { Simulator } from './Simulator';

export interface HowItWorksProps extends HTMLAttributes<HTMLDivElement> {
  locale?: string;
}

export const HowItWorks = React.forwardRef<HTMLDivElement, HowItWorksProps>(
  ({ locale = 'en', className = '', ...props }, ref) => {
    const content = {
      en: {
        title: 'How It Works',
        description: 'A simple three-step workflow to manage your listings across both platforms seamlessly',
        steps: [
          {
            number: '1',
            title: 'Visit SS.ge',
            description:
              'Browse and open any property listing on SS.ge that you want to publish on MyHome.ge',
          },
          {
            number: '2',
            title: 'Extract Data',
            description:
              "Click the extension icon and select 'Extract' to automatically capture all property details and images",
          },
          {
            number: '3',
            title: 'Auto-Fill MyHome.ge',
            description:
              'Navigate to MyHome.ge and click \'Auto-fill\' to populate the listing form with the extracted data in seconds',
          },
          {
            number: '4',
            title: 'Publish & Monitor',
            description:
              'Review the details, make any final adjustments, and publish to both platforms simultaneously with one click',
          },
        ],
      },
      ka: {
        title: 'როგორ მუშაობს',
        description: 'სამეტაპო მარტივი სამუშაო ნაკადი თქვენი სიების ორივე პლატფორმაზე მართვისთვის',
        steps: [
          {
            number: '1',
            title: 'SS.ge-ზე დაუცხადეთ',
            description:
              'დაათვალიერეთ და გახსენით ნებისმიერი ქონების ფარდული SS.ge-ზე, რომელიც გსურთ MyHome.ge-ზე გამოაქვეყნოთ',
          },
          {
            number: '2',
            title: 'ამოიღეთ მონაცემები',
            description:
              "დააჭირეთ გაფართოების ხატულას და აირჩიეთ 'ამოღება' ყველა ქონების დეტალისა და სურათის ავტომატურად დასაჭერად",
          },
          {
            number: '3',
            title: 'ავტომატური შევსება MyHome.ge-ზე',
            description:
              'გადავიდეთ MyHome.ge-ზე და დააჭირეთ \'ავტოშევსება\' დეტალების ფორმის რამდენიმე წამში შესავსებად',
          },
          {
            number: '4',
            title: 'გამოქვეყნება და მონიტორინგი',
            description:
              'გადახედეთ დეტალებს, დაკეცეთ საბოლოო ცვლილებები და გამოაქვეყნეთ ორივე პლატფორმაზე ერთი ნაკლიკით',
          },
        ],
      },
    };

    const text = content[locale as keyof typeof content] || content.en;
    const classes = [styles.howItWorks, className].filter(Boolean).join(' ');

    return (
      <section ref={ref} className={classes} {...props}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>{text.title}</h2>
            <p className={styles.description}>{text.description}</p>
          </div>

          <div className={styles.stepsGrid}>
            {text.steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Simulator locale={locale} />
      </section>
    );
  }
);

HowItWorks.displayName = 'HowItWorks';
