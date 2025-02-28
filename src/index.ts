import { isActive, empty } from './base'
import { default as _debug } from './methods/debug'
import { default as _info } from './methods/info'
import { default as _warn } from './methods/warn'
import { default as _error } from './methods/error'

export const info = isActive ? _info : empty
export const debug = isActive ? _debug : empty
export const warn = isActive ? _warn : empty
export const error = isActive ? _error : empty
