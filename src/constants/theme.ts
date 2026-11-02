import { Platform } from 'react-native';

/**
 * 全局配色。浅色 / 深色两套，跟随系统切换。
 * accent：主题色；danger：零库存、错误；success：入库。
 */
export const Colors = {
  light: {
    text: '#1C1C1E',
    textSecondary: '#6B6F76',
    background: '#F5F5F7',
    card: '#FFFFFF',
    border: '#E4E4E8',
    backgroundElement: '#EDEDF0',
    backgroundSelected: '#E0E1E6',
    accent: '#4F5BD5',
    accentSoft: '#E8EAFB',
    success: '#2F9E6B',
    danger: '#E5484D',
  },
  dark: {
    text: '#F2F2F4',
    textSecondary: '#A1A5AC',
    background: '#0B0B0D',
    card: '#1A1A1D',
    border: '#2C2C30',
    backgroundElement: '#232327',
    backgroundSelected: '#2E3135',
    accent: '#8A93F0',
    accentSoft: '#262A4D',
    success: '#4CC38A',
    danger: '#FF6369',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: { sans: 'system-ui', rounded: 'ui-rounded', mono: 'ui-monospace' },
  default: { sans: 'normal', rounded: 'normal', mono: 'monospace' },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 8,
  medium: 14,
  large: 20,
} as const;

/** 原生底部 Tab 栏大致高度，页面底部留白用 */
export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
