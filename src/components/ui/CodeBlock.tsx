import React, { HTMLAttributes } from 'react';
import styles from './CodeBlock.module.css';

export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ code, language = 'text', showLineNumbers = false, className = '', ...props }, ref) => {
    const classes = [styles.codeBlock, className].filter(Boolean).join(' ');

    return (
      <pre ref={ref} className={classes} {...props}>
        <code className={styles.code}>{code}</code>
      </pre>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
