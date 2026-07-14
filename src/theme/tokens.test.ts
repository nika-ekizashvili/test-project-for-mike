/**
 * Design System Tokens Tests
 */

import { describe, it, expect } from 'vitest';
import { theme, colors, typography, spacing, borderRadius, borderWidth, shadow, transition, breakpoints, zIndex } from './tokens';

describe('Design System Tokens', () => {
  describe('colors', () => {
    it('should have neutral color palette', () => {
      expect(colors.neutral).toBeDefined();
      expect(colors.neutral[0]).toBe('#000000');
      expect(colors.neutral[50]).toBe('#0a0a0a');
      expect(colors.neutral[950]).toBe('#f5f5f5');
    });

    it('should have primary color palette (terminal green/cyan)', () => {
      expect(colors.primary).toBeDefined();
      expect(colors.primary[400]).toBe('#2ab59a');
    });

    it('should have secondary color palette (terminal blue)', () => {
      expect(colors.secondary).toBeDefined();
      expect(colors.secondary[400]).toBe('#1a8eff');
    });

    it('should have accent color palette (terminal yellow/orange)', () => {
      expect(colors.accent).toBeDefined();
      expect(colors.accent[400]).toBe('#ffca1a');
    });

    it('should have semantic colors', () => {
      expect(colors.success).toBeDefined();
      expect(colors.error).toBeDefined();
      expect(colors.warning).toBeDefined();
      expect(colors.info).toBeDefined();
    });

    it('should have status colors', () => {
      expect(colors.status).toBeDefined();
      expect(colors.status.active).toBe('#2ab59a');
      expect(colors.status.inactive).toBe('#535353');
      expect(colors.status.error).toBe('#d32f2f');
    });
  });

  describe('typography', () => {
    it('should have monospace font families', () => {
      expect(typography.fontFamily.monospace).toContain('Mono');
      expect(typography.fontFamily.mono).toContain('Mono');
    });

    it('should have complete font weight scale', () => {
      expect(typography.fontWeight.normal).toBe(400);
      expect(typography.fontWeight.bold).toBe(700);
      expect(typography.fontWeight.semibold).toBe(600);
    });

    it('should have font sizes defined in rem', () => {
      expect(typography.fontSize.xs).toBe('0.625rem');
      expect(typography.fontSize.base).toBe('0.875rem');
      expect(typography.fontSize.lg).toBe('1rem');
    });

    it('should have line heights', () => {
      expect(typography.lineHeight.tight).toBe(1.2);
      expect(typography.lineHeight.normal).toBe(1.5);
      expect(typography.lineHeight.loose).toBe(2);
    });

    it('should have letter spacing', () => {
      expect(typography.letterSpacing.normal).toBe('0em');
      expect(typography.letterSpacing.wide).toBe('0.025em');
    });
  });

  describe('spacing', () => {
    it('should have 8px base spacing scale', () => {
      expect(spacing[0]).toBe('0');
      expect(spacing[1]).toBe('0.25rem'); // 4px
      expect(spacing[2]).toBe('0.5rem'); // 8px
      expect(spacing[4]).toBe('1rem'); // 16px
      expect(spacing[8]).toBe('2rem'); // 32px
    });

    it('should have consistent scale progression', () => {
      expect(spacing[3]).toBe('0.75rem'); // 12px
      expect(spacing[5]).toBe('1.25rem'); // 20px
      expect(spacing[6]).toBe('1.5rem'); // 24px
    });
  });

  describe('borderRadius', () => {
    it('should have border radius scale', () => {
      expect(borderRadius.none).toBe('0');
      expect(borderRadius.xs).toBe('2px');
      expect(borderRadius.sm).toBe('4px');
      expect(borderRadius.base).toBe('6px');
      expect(borderRadius.full).toBe('9999px');
    });
  });

  describe('borderWidth', () => {
    it('should have border width scale', () => {
      expect(borderWidth[0]).toBe('0');
      expect(borderWidth[1]).toBe('1px');
      expect(borderWidth[2]).toBe('2px');
    });
  });

  describe('shadow', () => {
    it('should have shadow scale', () => {
      expect(shadow.none).toBe('none');
      expect(shadow.xs).toContain('rgba');
      expect(shadow.sm).toContain('rgba');
      expect(shadow.xl).toContain('rgba');
    });

    it('should have minimal shadows for terminal aesthetic', () => {
      // Terminal aesthetic uses subtle shadows
      expect(shadow.base).toContain('1px');
    });
  });

  describe('transition', () => {
    it('should have transition speeds', () => {
      expect(transition.fast).toContain('150ms');
      expect(transition.base).toContain('200ms');
      expect(transition.slow).toContain('300ms');
    });

    it('should use cubic-bezier easing', () => {
      expect(transition.base).toContain('cubic-bezier');
    });
  });

  describe('breakpoints', () => {
    it('should have responsive breakpoints', () => {
      expect(breakpoints.xs).toBe('320px');
      expect(breakpoints.sm).toBe('640px');
      expect(breakpoints.md).toBe('768px');
      expect(breakpoints.lg).toBe('1024px');
    });
  });

  describe('zIndex', () => {
    it('should have z-index scale', () => {
      expect(zIndex.hide).toBe(-1);
      expect(zIndex.base).toBe(0);
      expect(zIndex.dropdown).toBe(1000);
      expect(zIndex.modal).toBe(1040);
      expect(zIndex.tooltip).toBe(1060);
    });
  });

  describe('theme object', () => {
    it('should export complete theme', () => {
      expect(theme).toBeDefined();
      expect(theme.colors).toBeDefined();
      expect(theme.typography).toBeDefined();
      expect(theme.spacing).toBeDefined();
      expect(theme.borderRadius).toBeDefined();
      expect(theme.shadow).toBeDefined();
      expect(theme.transition).toBeDefined();
      expect(theme.breakpoints).toBeDefined();
      expect(theme.zIndex).toBeDefined();
    });
  });
});
