import React, { useState, HTMLAttributes } from 'react';
import styles from './CodeBlock.module.css';

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  language?: string;
  code: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  variant?: 'default' | 'dark' | 'compact';
  showCopyButton?: boolean;
}

/**
 * CodeBlock Component
 * A styled container for displaying code with optional syntax highlighting,
 * line numbers, and copy functionality.
 *
 * @example
 * <CodeBlock
 *   language="typescript"
 *   code={`const greeting: string = "Hello";`}
 *   showLineNumbers
 * />
 */
export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      language = 'code',
      code,
      showLineNumbers = false,
      highlightLines = [],
      variant = 'default',
      showCopyButton = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const classes = [
      styles.codeblock,
      styles[`variant-${variant}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const lines = code.split('\n');
    const maxLineNumberWidth = lines.length.toString().length;

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.language}>{language}</span>
          {showCopyButton && (
            <button
              className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
              onClick={handleCopy}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
              aria-label="Copy code to clipboard"
            >
              {copied ? '✓' : '📋'}
            </button>
          )}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <pre className={styles.code}>
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = highlightLines.includes(lineNum);

              return (
                <div
                  key={idx}
                  className={isHighlighted ? styles.highlightLine : undefined}
                >
                  {showLineNumbers && (
                    <span
                      className={styles.lineNumber}
                      style={{ minWidth: `${maxLineNumberWidth}ch` }}
                      aria-hidden="true"
                    >
                      {lineNum}
                    </span>
                  )}
                  <span>{line}</span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
