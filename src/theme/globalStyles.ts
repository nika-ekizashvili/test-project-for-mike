/**
 * Global styles using design tokens
 * Terminal-native theme with monospace typography
 */

import { css } from '@emotion/react';
import { colors, typography, spacing } from './tokens';

export const globalStyles = css`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background-color: ${colors.neutral[50]};
    color: ${colors.neutral[400]};
  }

  /* Body styling - monospace base */
  body {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize.base};
    font-weight: ${typography.fontWeight.normal};
    line-height: ${typography.lineHeight.normal};
    letter-spacing: ${typography.letterSpacing.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography elements */
  h1 {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize['4xl']};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.tight};
    color: ${colors.neutral[900]};
    margin-bottom: ${spacing[4]};
    letter-spacing: ${typography.letterSpacing.wide};
  }

  h2 {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize['3xl']};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.tight};
    color: ${colors.neutral[900]};
    margin-bottom: ${spacing[3]};
  }

  h3 {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize['2xl']};
    font-weight: ${typography.fontWeight.semibold};
    line-height: ${typography.lineHeight.tight};
    color: ${colors.neutral[800]};
    margin-bottom: ${spacing[2]};
  }

  h4 {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors.neutral[800]};
    margin-bottom: ${spacing[2]};
  }

  h5,
  h6 {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize.base};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors.neutral[800]};
    margin-bottom: ${spacing[2]};
  }

  p {
    line-height: ${typography.lineHeight.normal};
    margin-bottom: ${spacing[3]};
  }

  /* Code elements - double monospace */
  code,
  pre {
    font-family: ${typography.fontFamily.mono};
    background-color: ${colors.neutral[100]};
    color: ${colors.primary[400]};
    font-size: ${typography.fontSize.sm};
    border-radius: 4px;
  }

  code {
    padding: ${spacing[1]} ${spacing[2]};
    display: inline-block;
  }

  pre {
    padding: ${spacing[4]};
    overflow-x: auto;
    margin-bottom: ${spacing[4]};
    border: 1px solid ${colors.neutral[200]};
  }

  pre code {
    background-color: transparent;
    padding: 0;
    display: block;
  }

  /* Links */
  a {
    color: ${colors.primary[400]};
    text-decoration: none;
    transition: color 150ms ease-in-out;

    &:hover {
      color: ${colors.primary[300]};
    }

    &:active {
      color: ${colors.primary[500]};
    }
  }

  /* Lists */
  ul,
  ol {
    margin-bottom: ${spacing[3]};
    padding-left: ${spacing[6]};

    li {
      margin-bottom: ${spacing[2]};
    }
  }

  /* Forms */
  input,
  textarea,
  select {
    font-family: ${typography.fontFamily.monospace};
    font-size: ${typography.fontSize.base};
  }

  /* Tables */
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: ${spacing[4]};

    th {
      background-color: ${colors.neutral[100]};
      color: ${colors.neutral[900]};
      padding: ${spacing[2]} ${spacing[3]};
      text-align: left;
      font-weight: ${typography.fontWeight.semibold};
      border: 1px solid ${colors.neutral[200]};
    }

    td {
      padding: ${spacing[2]} ${spacing[3]};
      border: 1px solid ${colors.neutral[200]};
    }

    tr:hover {
      background-color: ${colors.neutral[100]};
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.neutral[100]};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.neutral[400]};
    border-radius: 4px;

    &:hover {
      background-color: ${colors.neutral[500]};
    }
  }

  /* Selection color */
  ::selection {
    background-color: ${colors.primary[400]};
    color: ${colors.neutral[50]};
  }
`;
