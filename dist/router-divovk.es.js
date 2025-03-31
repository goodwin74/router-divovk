import e, { createContext as r, useState as t, useRef as n, useCallback as o, useEffect as a, useContext as l } from "react";
var s, i = { exports: {} }, c = {};
var u, f, y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function p() {
  return u || (u = 1, "production" !== process.env.NODE_ENV && function() {
    function r2(e2) {
      if (null == e2) return null;
      if ("function" == typeof e2) return e2.$$typeof === x ? null : e2.displayName || e2.name || null;
      if ("string" == typeof e2) return e2;
      switch (e2) {
        case d2:
          return "Fragment";
        case b2:
          return "Profiler";
        case m2:
          return "StrictMode";
        case k2:
          return "Suspense";
        case S:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if ("object" == typeof e2) switch ("number" == typeof e2.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e2.$$typeof) {
        case p2:
          return "Portal";
        case v2:
          return (e2.displayName || "Context") + ".Provider";
        case h2:
          return (e2._context.displayName || "Context") + ".Consumer";
        case g2:
          var t3 = e2.render;
          return (e2 = e2.displayName) || (e2 = "" !== (e2 = t3.displayName || t3.name || "") ? "ForwardRef(" + e2 + ")" : "ForwardRef"), e2;
        case j:
          return null !== (t3 = e2.displayName || null) ? t3 : r2(e2.type) || "Memo";
        case w:
          t3 = e2._payload, e2 = e2._init;
          try {
            return r2(e2(t3));
          } catch (e3) {
          }
      }
      return null;
    }
    function t2(e2) {
      return "" + e2;
    }
    function n2(e2) {
      try {
        t2(e2);
        var r3 = false;
      } catch (e3) {
        r3 = true;
      }
      if (r3) {
        var n3 = (r3 = console).error, o3 = "function" == typeof Symbol && Symbol.toStringTag && e2[Symbol.toStringTag] || e2.constructor.name || "Object";
        return n3.call(r3, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", o3), t2(e2);
      }
    }
    function o2(e2) {
      if (e2 === d2) return "<>";
      if ("object" == typeof e2 && null !== e2 && e2.$$typeof === w) return "<...>";
      try {
        var t3 = r2(e2);
        return t3 ? "<" + t3 + ">" : "<...>";
      } catch (e3) {
        return "<...>";
      }
    }
    function a2() {
      return Error("react-stack-top-frame");
    }
    function l2() {
      var e2 = r2(this.type);
      return T[e2] || (T[e2] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (e2 = this.props.ref) ? e2 : null;
    }
    function s2(e2, t3, o3, a3, s3, u3, y2, p3) {
      var d3, m3 = t3.children;
      if (void 0 !== m3) if (a3) if (N(m3)) {
        for (a3 = 0; a3 < m3.length; a3++) i2(m3[a3]);
        Object.freeze && Object.freeze(m3);
      } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
      else i2(m3);
      if ($.call(t3, "key")) {
        m3 = r2(e2);
        var b3 = Object.keys(t3).filter(function(e3) {
          return "key" !== e3;
        });
        a3 = 0 < b3.length ? "{key: someKey, " + b3.join(": ..., ") + ": ...}" : "{key: someKey}", C[m3 + a3] || (b3 = 0 < b3.length ? "{" + b3.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', a3, m3, b3, m3), C[m3 + a3] = true);
      }
      if (m3 = null, void 0 !== o3 && (n2(o3), m3 = "" + o3), function(e3) {
        if ($.call(e3, "key")) {
          var r3 = Object.getOwnPropertyDescriptor(e3, "key").get;
          if (r3 && r3.isReactWarning) return false;
        }
        return void 0 !== e3.key;
      }(t3) && (n2(t3.key), m3 = "" + t3.key), "key" in t3) for (var h3 in o3 = {}, t3) "key" !== h3 && (o3[h3] = t3[h3]);
      else o3 = t3;
      return m3 && function(e3, r3) {
        function t4() {
          c2 || (c2 = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", r3));
        }
        t4.isReactWarning = true, Object.defineProperty(e3, "key", { get: t4, configurable: true });
      }(o3, "function" == typeof e2 ? e2.displayName || e2.name || "Unknown" : e2), function(e3, r3, t4, n3, o4, a4, s4, i3) {
        return t4 = a4.ref, e3 = { $$typeof: f2, type: e3, key: r3, props: a4, _owner: o4 }, null !== (void 0 !== t4 ? t4 : null) ? Object.defineProperty(e3, "ref", { enumerable: false, get: l2 }) : Object.defineProperty(e3, "ref", { enumerable: false, value: null }), e3._store = {}, Object.defineProperty(e3._store, "validated", { configurable: false, enumerable: false, writable: true, value: 0 }), Object.defineProperty(e3, "_debugInfo", { configurable: false, enumerable: false, writable: true, value: null }), Object.defineProperty(e3, "_debugStack", { configurable: false, enumerable: false, writable: true, value: s4 }), Object.defineProperty(e3, "_debugTask", { configurable: false, enumerable: false, writable: true, value: i3 }), Object.freeze && (Object.freeze(e3.props), Object.freeze(e3)), e3;
      }(e2, m3, u3, 0, null === (d3 = O.A) ? null : d3.getOwner(), o3, y2, p3);
    }
    function i2(e2) {
      "object" == typeof e2 && null !== e2 && e2.$$typeof === f2 && e2._store && (e2._store.validated = 1);
    }
    var c2, u2 = e, f2 = Symbol.for("react.transitional.element"), p2 = Symbol.for("react.portal"), d2 = Symbol.for("react.fragment"), m2 = Symbol.for("react.strict_mode"), b2 = Symbol.for("react.profiler"), h2 = Symbol.for("react.consumer"), v2 = Symbol.for("react.context"), g2 = Symbol.for("react.forward_ref"), k2 = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), x = Symbol.for("react.client.reference"), O = u2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, N = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    }, T = {}, R = (u2 = { "react-stack-bottom-frame": function(e2) {
      return e2();
    } })["react-stack-bottom-frame"].bind(u2, a2)(), P = E(o2(a2)), C = {};
    y.Fragment = d2, y.jsx = function(e2, r3, t3, n3, a3) {
      var l3 = 1e4 > O.recentlyCreatedOwnerStacks++;
      return s2(e2, r3, t3, false, 0, a3, l3 ? Error("react-stack-top-frame") : R, l3 ? E(o2(e2)) : P);
    }, y.jsxs = function(e2, r3, t3, n3, a3) {
      var l3 = 1e4 > O.recentlyCreatedOwnerStacks++;
      return s2(e2, r3, t3, true, 0, a3, l3 ? Error("react-stack-top-frame") : R, l3 ? E(o2(e2)) : P);
    };
  }()), y;
}
var d = (f || (f = 1, "production" === process.env.NODE_ENV ? i.exports = function() {
  if (s) return c;
  s = 1;
  var e2 = Symbol.for("react.transitional.element"), r2 = Symbol.for("react.fragment");
  function t2(r3, t3, n2) {
    var o2 = null;
    if (void 0 !== n2 && (o2 = "" + n2), void 0 !== t3.key && (o2 = "" + t3.key), "key" in t3) for (var a2 in n2 = {}, t3) "key" !== a2 && (n2[a2] = t3[a2]);
    else n2 = t3;
    return t3 = n2.ref, { $$typeof: e2, type: r3, key: o2, ref: void 0 !== t3 ? t3 : null, props: n2 };
  }
  return c.Fragment = r2, c.jsx = t2, c.jsxs = t2, c;
}() : i.exports = p()), i.exports);
const m = "_activity_1syf0_1", b = "_activityCont_1syf0_21", h = r(), v = ({ children: e2 }) => {
  const [r2, l2] = t([]), s2 = n(r2);
  let i2 = o((e3) => document.querySelector(e3), []), c2 = { open: (e3) => {
    i2(`#${e3}`).style.display = "block", setTimeout(() => {
      i2(`#${e3}`).style.zIndex = s2.current.length + 1, i2(`#${e3}`).style.transform = "translate(0%,0%)", i2(`#${e3}`).children[0].style.transform = "translate(0%,0%)";
    }, 100);
  }, close: (e3) => {
    i2(`#${e3}`).children[0].style.transform = "", setTimeout(() => {
      i2(`#${e3}`).style.transform = "", i2(`#${e3}`).style.zIndex = "-1", i2(`#${e3}`).style.display = "none";
    }, 400);
  }, init: (e3, r3) => {
    i2(`#${e3}`).style.display = "block", i2(`#${e3}`).style.zIndex = r3, i2(`#${e3}`).style.transform = "translate(0%,0%)", i2(`#${e3}`).children[0].style.transform = "translate(0%,0%)";
  } };
  a(() => {
    const e3 = (e4) => {
      e4 = e4 || false;
      const r4 = window.location.hash.slice(1).split("/").filter(Boolean);
      r4.length > s2.current.length ? c2.open(r4[r4.length - 1]) : r4.length < s2.current.length && c2.close(s2.current[s2.current.length - 1]), true === e4 && s2.current.length > 0 && s2.current.forEach((e5, r5) => {
        c2.init(e5, r5 + 2);
      }), l2(r4), s2.current = r4;
    }, r3 = window.location.hash.slice(1);
    return s2.current = r3.split("/").filter(Boolean), e3(true), window.addEventListener("hashchange", e3), () => {
      window.removeEventListener("hashchange", e3);
    };
  }, []);
  const u2 = { blockHistory: r2, showBlock: (e3) => {
    ((e4) => {
      const r3 = e4.join("/");
      window.location.hash = r3 || "";
    })([...s2.current, e3]);
  }, getBlockStyle: (e3) => {
    const t2 = r2.indexOf(e3);
    return -1 === t2 ? {} : { zIndex: t2 + 1 };
  } };
  return d.jsx(h.Provider, { value: u2, children: e2 });
}, g = ({ id: e2, children: r2, activityStyle: t2, activityContStyle: n2 }) => d.jsx(d.Fragment, { children: d.jsx("div", { id: e2, className: m, style: t2, children: d.jsx("div", { className: b, style: n2, children: r2 }) }) }), k = ({ id: e2, toId: r2, children: t2, style: n2, className: o2 }) => {
  const { showBlock: a2 } = l(h);
  return d.jsx(d.Fragment, { children: d.jsx("button", { id: e2, style: n2, className: o2, onClick: () => a2(r2), children: t2 }) });
};
export {
  g as ActivityBlock,
  k as BtnToBlock,
  h as DIVOVKContext,
  v as DIVOVKProvider
};
