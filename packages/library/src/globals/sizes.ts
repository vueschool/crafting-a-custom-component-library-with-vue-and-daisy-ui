export const sizes = ['xs', 'sm', 'md', 'lg'] as const
export type Sizes = (typeof sizes)[number]

export const xlSizes = ['xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] as const
export type XlSizes = (typeof xlSizes)[number]

export const extendedSizes = [...sizes, ...xlSizes] as const
export type ExtendedSizes = (typeof extendedSizes)[number]
