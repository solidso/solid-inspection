class n {
  transports = [];
  format(s, e) {
    return Object.assign(
      {},
      typeof s == "string" ? { msg: s, level: e } : s instanceof Error ? { msg: s.message, level: e, err: s } : s,
      { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: e }
    );
  }
  handle(s, e) {
    const t = this.format(s, e);
    this.transports.map((o) => o.out(t));
  }
  add(s) {
    this.transports.some((e) => e.name === s.name) || this.transports.push(s);
  }
}
const p = new n();
class l {
  name = "base";
  levelColorMap = {
    debug: "gray",
    info: "blue",
    warn: "orange",
    error: "red"
  };
  out(s) {
  }
}
class m extends l {
  name = "console";
  out(s) {
    const e = s.msg, { msg: t, level: o, timestamp: c, ...a } = s;
    console.log.apply(console, [
      "%c" + s.timestamp + " %c[" + s.level.toUpperCase() + "]:",
      "color:gray;",
      "color:" + this.levelColorMap[s.level] + ";",
      e,
      ...Object.values(a)
    ]);
  }
}
const g = new m();
export {
  g as a,
  p as t
};
