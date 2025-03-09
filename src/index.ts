import { isActive, empty, type SolidInspectionInput } from './base'
import { default as _debug } from './methods/debug'
import { default as _info } from './methods/info'
import { default as _warn } from './methods/warn'
import { default as _error } from './methods/error'

/*@__NO_SIDE_EFFECTS__*/
export function info(msg: SolidInspectionInput) {
    return isActive ? _info(msg) : empty(msg)
}
/*@__NO_SIDE_EFFECTS__*/
export function debug(msg: SolidInspectionInput) {
    return isActive ? _debug(msg) : empty(msg)
}
/*@__NO_SIDE_EFFECTS__*/
export function warn(msg: SolidInspectionInput) {
    return isActive ? _warn(msg) : empty(msg)
}
/*@__NO_SIDE_EFFECTS__*/
export function error(msg: SolidInspectionInput) {
    return isActive ? _error(msg) : empty(msg)
}
