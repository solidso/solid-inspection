'use strict';

var solidJs = require('solid-js');
var web = require('solid-js/web');

/// <reference types="vite/client" />
const isActive = solidJs.DEV && !web.isServer || undefined['VITE_SOLID_INSPECTION'];
function empty(msg) {
  return;
}

class Transporter {
  transports = [];
  format(input, level) {
    return Object.assign({}, typeof input === 'string' ? {
      msg: input,
      level
    } : input instanceof Error ? {
      msg: input.message,
      level,
      err: input
    } : input, {
      timestamp: new Date().toISOString(),
      level
    });
  }
  handle(input, level) {
    const obj = this.format(input, level);
    this.transports.map(t => t.out(obj));
  }
  add(obj) {
    if (this.transports.some(t => t.name === obj.name)) {
      return;
    }
    this.transports.push(obj);
  }
}
const transporter = new Transporter();

class TransporterBase {
  name = 'base';
  levelColorMap = {
    'debug': 'gray',
    'info': 'light-dark(blue, deepskyblue);',
    'warn': 'orange',
    'error': 'red'
  };
  out(obj) {}
}

class TransporterConsole extends TransporterBase {
  name = 'console';
  out(obj) {
    const message = obj.msg;
    const {
      msg,
      level,
      timestamp,
      ...rest
    } = obj;
    console.log.apply(console, ['%c' + obj.timestamp + ' %c[' + obj.level.toUpperCase() + ']:', 'color:gray;', 'color:' + this.levelColorMap[obj.level] + ';', message, ...Object.values(rest)]);
  }
}
const tconsole = new TransporterConsole();

transporter.add(tconsole);
function debug$1(msg) {
  transporter.handle(msg, 'debug');
}

transporter.add(tconsole);
function info$1(msg) {
  transporter.handle(msg, 'info');
}

transporter.add(tconsole);
function warn$1(msg) {
  transporter.handle(msg, 'warn');
}

transporter.add(tconsole);
function error$1(msg) {
  transporter.handle(msg, 'error');
}

/*@__NO_SIDE_EFFECTS__*/
function info(msg) {
  return isActive ? info$1(msg) : empty();
}
/*@__NO_SIDE_EFFECTS__*/
function debug(msg) {
  return isActive ? debug$1(msg) : empty();
}
/*@__NO_SIDE_EFFECTS__*/
function warn(msg) {
  return isActive ? warn$1(msg) : empty();
}
/*@__NO_SIDE_EFFECTS__*/
function error(msg) {
  return isActive ? error$1(msg) : empty();
}

exports.debug = debug;
exports.error = error;
exports.info = info;
exports.warn = warn;
//# sourceMappingURL=index.cjs.js.map
