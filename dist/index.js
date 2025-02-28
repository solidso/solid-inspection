import { DEV as i } from "solid-js";
const r = {}, t = i && !0 || r.VITE_SOLID_INSPECTION;
function o(a) {
}
const n = t ? (await import("./info-C_CRY_5E.js")).default : o, m = t ? (await import("./debug-8QVVL39W.js")).default : o, _ = t ? (await import("./warn-Dq3jwQME.js")).default : o, c = t ? (await import("./error-ZsWMfUb0.js")).default : o;
export {
  m as debug,
  c as error,
  n as info,
  _ as warn
};
