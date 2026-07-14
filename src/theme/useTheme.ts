/**
 * useTheme hook for accessing design tokens
 */

import { useCallback } from 'react';
import theme, { type Theme } from './tokens';

/**
 * Hook to access the theme tokens
 * Returns the complete theme object with all design tokens
 */
export function useTheme(): Theme {
  return theme;
}

/**
 * Hook to access a specific color from the theme
 */
export function useThemeColor(path: string) {
  return useCallback(() => {
    const keys = path.split('.');
    let value: any = theme;

    for (const key of keys) {
      value = value?.[key];
    }

    return value;
  }, [path]);
}

/**
 * Hook to get a responsive value based on breakpoint
 */
export function useResponsive<T>(values: Record<string, T>, defaultBreakpoint: string = 'base'): T {
  return values[defaultBreakpoint] || Object.values(values)[0];
}
