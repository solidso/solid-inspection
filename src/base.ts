/// <reference types="vite/client" />

import { DEV } from 'solid-js'
import { isServer } from 'solid-js/web'

export type SolidInspectionLevel = 'debug' | 'info' | 'warn' | 'error'
export type SolidInspectionInput = {
    msg: string,
    [prop: string]: string | number | boolean | Error
} | string | Error
export type SolidInspectionTransport = {
    msg: string
    level: SolidInspectionLevel
    timestamp: string
    [prop: string]: string | number | boolean | Error
}

interface ImportMetaEnv {
    readonly VITE_SOLID_INSPECTION: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}

export const isActive = (DEV && !isServer) || import.meta.env['VITE_SOLID_INSPECTION']

export function empty(msg: SolidInspectionInput) {
    return;
}
