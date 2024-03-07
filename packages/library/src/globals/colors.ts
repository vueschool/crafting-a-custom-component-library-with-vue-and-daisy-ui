export const colorsBrand = ['primary', 'secondary', 'accent', 'neutral'] as const
export type ColorsBrand = (typeof colorsBrand)[number]

export const colorsState = ['success', 'warning', 'error', 'info'] as const
export type ColorsState = (typeof colorsState)[number]

export const colorsBase = ['base-100', 'base-200', 'base-300', 'base-content'] as const
export type ColorsBase = (typeof colorsBase)[number]

export const colorsContent = [
  'base-content',
  'primary-content',
  'secondary-content',
  'accent-content',
  'neutral-content',
  'info-content',
  'success-content',
  'warning-content',
  'error-content'
] as const
export type ColorsContent = (typeof colorsContent)[number]

export const colors = [...colorsBrand, ...colorsState, ...colorsBase, ...colorsContent] as const
export type Colors = (typeof colors)[number]
