import { DEV as i } from "solid-js";
const d = {}, t = i && !0 || d.VITE_SOLID_INSPECTION;
function n(r) {
}
class p {
  transports = [];
  format(e, o) {
    return Object.assign(
      {},
      typeof e == "string" ? { msg: e, level: o } : e instanceof Error ? { msg: e.message, level: o, err: e } : e,
      { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: o }
    );
  }
  handle(e, o) {
    const c = this.format(e, o);
    this.transports.map((l) => l.out(c));
  }
  add(e) {
    this.transports.some((o) => o.name === e.name) || this.transports.push(e);
  }
}
const s = new p();
class g {
  name = "base";
  levelColorMap = {
    debug: "gray",
    info: "blue",
    warn: "orange",
    error: "red"
  };
  out(e) {
  }
}
class f extends g {
  name = "console";
  out(e) {
    const o = e.msg, { msg: c, level: l, timestamp: w, ...m } = e;
    console.log.apply(console, [
      "%c" + e.timestamp + " %c[" + e.level.toUpperCase() + "]:",
      "color:gray;",
      "color:" + this.levelColorMap[e.level] + ";",
      o,
      ...Object.values(m)
    ]);
  }
}
const a = new f();
s.add(a);
function u(r) {
  s.handle(r, "debug");
}
s.add(a);
function h(r) {
  s.handle(r, "info");
}
s.add(a);
function _(r) {
  s.handle(r, "warn");
}
s.add(a);
function v(r) {
  s.handle(r, "error");
}
const y = t ? h : n, C = t ? u : n, I = t ? _ : n, O = t ? v : n;
export {
  C as debug,
  O as error,
  y as info,
  I as warn
};
