export const states = ['success', 'error', 'warning', 'info'] as const
export type States = (typeof states)[number]
