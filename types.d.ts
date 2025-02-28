export type SolidInspectionInput = {
    msg: string;
    [prop: string]: string | number | boolean | Error;
} | string | Error;
export type log = (msg: SolidInspectionInput) => void;

export declare const info: log;
export declare const debug: log;
export declare const warn: log;
export declare const error: log;
