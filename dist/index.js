var i = Object.defineProperty;
var p = (s, e, r) => e in s ? i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var t = (s, e, r) => p(s, typeof e != "symbol" ? e + "" : e, r);
import { DEV as g } from "solid-js";
const f = {}, n = g && !0 || f.VITE_SOLID_INSPECTION;
function a(s) {
}
class u {
  constructor() {
    t(this, "transports", []);
  }
  format(e, r) {
    return Object.assign(
      {},
      typeof e == "string" ? { msg: e, level: r } : e instanceof Error ? { msg: e.message, level: r, err: e } : e,
      { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: r }
    );
  }
  handle(e, r) {
    const l = this.format(e, r);
    this.transports.map((m) => m.out(l));
  }
  add(e) {
    this.transports.some((r) => r.name === e.name) || this.transports.push(e);
  }
}
const o = new u();
class h {
  constructor() {
    t(this, "name", "base");
    t(this, "levelColorMap", {
      debug: "gray",
      info: "light-dark(blue, deepskyblue);",
      warn: "orange",
      error: "red"
    });
  }
  out(e) {
  }
}
class _ extends h {
  constructor() {
    super(...arguments);
    t(this, "name", "console");
  }
  out(r) {
    const l = r.msg, { msg: m, level: C, timestamp: I, ...d } = r;
    console.log.apply(console, [
      "%c" + r.timestamp + " %c[" + r.level.toUpperCase() + "]:",
      "color:gray;",
      "color:" + this.levelColorMap[r.level] + ";",
      l,
      ...Object.values(d)
    ]);
  }
}
const c = new _();
o.add(c);
function v(s) {
  o.handle(s, "debug");
}
o.add(c);
function w(s) {
  o.handle(s, "info");
}
o.add(c);
function b(s) {
  o.handle(s, "warn");
}
o.add(c);
function y(s) {
  o.handle(s, "error");
}
const E = n ? w : a, S = n ? v : a, $ = n ? b : a, D = n ? y : a;
export {
  S as debug,
  D as error,
  E as info,
  $ as warn
};
