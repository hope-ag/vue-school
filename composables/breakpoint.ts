import { breakpointsTailwind } from '@vueuse/core'

export const breakpoints = useBreakpoints(breakpointsTailwind)

export const isMobile = breakpoints.smallerOrEqual('sm')
export const isDesktop = breakpoints.greaterOrEqual('lg')
