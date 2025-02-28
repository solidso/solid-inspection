import { isActive, empty } from './base'

export const info = isActive
    ? (await import('./methods/info')).default
    : empty

export const debug = isActive
    ? (await import('./methods/debug')).default
    : empty

export const warn = isActive
    ? (await import('./methods/warn')).default
    : empty

export const error = isActive
    ? (await import('./methods/error')).default
    : empty
