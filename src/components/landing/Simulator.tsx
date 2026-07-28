'use client';

import React, { useState, useCallback, HTMLAttributes } from 'react';
import styles from './Simulator.module.css';
import { Button } from '@/components/ui/Button';

export type SimulatorState = 'idle' | 'extracting' | 'filling' | 'complete';

export interface SimulatorProps extends HTMLAttributes<HTMLDivElement> {
  locale?: string;
}

export const Simulator = React.forwardRef<HTMLDivElement, SimulatorProps>(
  ({ locale = 'en', className = '', ...props }, ref) => {
    const [state, setState] = useState<SimulatorState>('idle');
    const [isAnimating, setIsAnimating] = useState(false);

    // Check if user prefers reduced motion
    const prefersReducedMotion = () => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    const content = {
      en: {
        title: 'Interactive Workflow Simulator',
        description: 'Watch how data flows seamlessly from SS.ge to MyHome.ge',
        startButton: 'Start Simulation',
        resetButton: 'Reset',
        steps: {
          idle: 'Click to start the demo',
          extracting: 'Extracting data from SS.ge...',
          filling: 'Auto-filling MyHome.ge...',
          complete: 'Complete! Data synced successfully',
        },
      },
      ka: {
        title: 'ინტერაქტიული სამუშაო ნაკადის სიმულატორი',
        description: 'უყურეთ როგორ ხელოვნურად მონაცემები SS.ge-დან MyHome.ge-ზე',
        startButton: 'დაწყება',
        resetButton: 'გადატანი',
        steps: {
          idle: 'დაწყებისთვის ჩააბით',
          extracting: 'მონაცემების ამოღება SS.ge-დან...',
          filling: 'MyHome.ge-ის ავტომატური შევსება...',
          complete: 'დასრულებული! მონაცემები წარმატებით დამუშავდა',
        },
      },
    };

    const text = content[locale as keyof typeof content] || content.en;
    const reducedMotion = prefersReducedMotion();

    const handleStart = useCallback(() => {
      if (isAnimating) return;

      setIsAnimating(true);
      setState('extracting');

      if (reducedMotion) {
        // Skip animation steps if prefers-reduced-motion
        setState('complete');
        setIsAnimating(false);
        return;
      }

      // Simulate animation timeline
      const extractDuration = 1500; // 1.5 seconds
      const fillDuration = 1500; // 1.5 seconds

      const fillTimeout = setTimeout(() => {
        setState('filling');
      }, extractDuration);

      const completeTimeout = setTimeout(() => {
        setState('complete');
        setIsAnimating(false);
      }, extractDuration + fillDuration);

      return () => {
        clearTimeout(fillTimeout);
        clearTimeout(completeTimeout);
      };
    }, [isAnimating, reducedMotion]);

    const handleReset = useCallback(() => {
      setState('idle');
      setIsAnimating(false);
    }, []);

    const classes = [styles.simulator, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3 className={styles.title}>{text.title}</h3>
            <p className={styles.description}>{text.description}</p>
          </div>

          <div className={styles.visualization}>
            <div className={`${styles.platform} ${styles.source}`}>
              <div className={styles.platformLabel}>SS.ge</div>
              <div className={styles.platformContent}>
                <div className={styles.listingCard}>
                  <div className={styles.thumbnail} />
                  <div className={styles.listingInfo}>
                    <div className={styles.title4bedroom}>4-Bedroom Villa</div>
                    <div className={styles.price}>₾850,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.dataFlow} ${
                state === 'extracting' ? styles.active : ''
              } ${state === 'filling' || state === 'complete' ? styles.filled : ''}`}
            >
              <div className={styles.flowIndicator} />
              <div className={styles.flowLabel}>
                {state === 'idle' && '→'}
                {state === 'extracting' && '↓'}
                {state === 'filling' && '→'}
                {state === 'complete' && '✓'}
              </div>
            </div>

            <div className={`${styles.platform} ${styles.target}`}>
              <div className={styles.platformLabel}>MyHome.ge</div>
              <div className={styles.platformContent}>
                <div
                  className={`${styles.listingCard} ${
                    (state === 'filling' || state === 'complete') && !reducedMotion
                      ? styles.filling
                      : ''
                  } ${state === 'complete' ? styles.filled : ''}`}
                >
                  <div className={styles.thumbnail} />
                  <div className={styles.listingInfo}>
                    <div className={styles.title4bedroom}>4-Bedroom Villa</div>
                    <div className={styles.price}>₾850,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statusArea}>
            <div
              className={`${styles.statusMessage} ${styles[`status-${state}`]}`}
            >
              <span className={styles.statusIcon}>
                {state === 'idle' && '○'}
                {state === 'extracting' && '◐'}
                {state === 'filling' && '◑'}
                {state === 'complete' && '●'}
              </span>
              <span className={styles.statusText}>{text.steps[state]}</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="md"
              onClick={handleStart}
              disabled={isAnimating || state === 'complete'}
            >
              {state === 'complete' ? text.startButton : text.startButton}
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={handleReset}
              disabled={state === 'idle' && !isAnimating}
            >
              {text.resetButton}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

Simulator.displayName = 'Simulator';
