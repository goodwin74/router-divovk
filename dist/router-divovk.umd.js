(function(e3) {
            return "key" !== e3;
          });
          a3 = 0 < b2.length ? "{key: someKey, " + b2.join(": ..., ") + ": ...}" : "{key: someKey}", C[m2 + a3] || (b2 = 0 < b2.length ? "{" + b2.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', a3, m2, b2, m2), C[m2 + a3] = true);
        }
        if (m2 = null, void 0 !== o3 && (n2(o3), m2 = "" + o3), function(e3) {
          if ($.call(e3, "key")) {
            var t3 = Object.getOwnPropertyDescriptor(e3, "key").get;
            if (t3 && t3.isReactWarning) return false;
          }
          return void 0 !== e3.key;
        }(r3) && (n2(r3.key), m2 = "" + r3.key), "key" in r3) for (var h2 in o3 = {}, r3) "key" !== h2 && (o3[h2] = r3[h2]);
        else o3 = r3;
        return m2 && function(e3, t3) {
          function r4() {
            u2 || (u2 = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t3));
          }
          r4.isReactWarning = true, Object.defineProperty(e3, "key", { get: r4, configurable: true });
        }(o3, "function" == typeof t2 ? t2.displayName || t2.name || "Unknown" : t2), function(e3, t3, r4, n3, o4, a4, i3, s4) {
          return r4 = a4.ref, e3 = { $$typeof: y2, type: e3, key: t3, props: a4, _owner: o4 }, null !== (void 0 !== r4 ? r4 : null) ? Object.defineProperty(e3, "ref", { enumerable: false, get: l2 }) : Object.defineProperty(e3, "ref", { enumerable: false, value: null }), e3._store = {}, Object.defineProperty(e3._store, "validated", { configurable: false, enumerable: false, writable: true, value: 0 }), Object.defineProperty(e3, "_debugInfo", { configurable: false, enumerable: false, writable: true, value: null }), Object.defineProperty(e3, "_debugStack", { configurable: false, enumerable: false, writable: true, value: i3 }), Object.defineProperty(e3, "_debugTask", { configurable: false, enumerable: false, writable: true, value: s4 }), Object.freeze && (Object.freeze(e3.props), Object.freeze(e3)), e3;
        }(t2, m2, s3, 0, null === (p2 = O.A) ? null : p2.getOwner(), o3, f3, d2);
      }
      function c2(e3) {
        "object" == typeof e3 && null !== e3 && e3.$$typeof === y2 && e3._store && (e3._store.validated = 1);
      }
      var u2, f2 = t, y2 = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), v = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), O = f2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, N = Array.isArray, T = console.createTask ? console.createTask : function() {
        return null;
      }, E = {}, R = (f2 = { "react-stack-bottom-frame": function(e3) {
        return e3();
      } })["react-stack-bottom-frame"].bind(f2, a2)(), P = T(o2(a2)), C = {};
      i.Fragment = p, i.jsx = function(e3, t2, r3, n3, a3) {
        var l3 = 1e4 > O.recentlyCreatedOwnerStacks++;
        return s2(e3, t2, r3, false, 0, a3, l3 ? Error("react-stack-top-frame") : R, l3 ? T(o2(e3)) : P);
      }, i.jsxs = function(e3, t2, r3, n3, a3) {
        var l3 = 1e4 > O.recentlyCreatedOwnerStacks++;
        return s2(e3, t2, r3, true, 0, a3, l3 ? Error("react-stack-top-frame") : R, l3 ? T(o2(e3)) : P);
      };
    }()), i;
  }
  var c = (l || (l = 1, "production" === process.env.NODE_ENV ? n.exports = function() {
    if (r) return o;
    r = 1;
    var e2 = Symbol.for("react.transitional.element"), t2 = Symbol.for("react.fragment");
    function n2(t3, r2, n3) {
      var o2 = null;
      if (void 0 !== n3 && (o2 = "" + n3), void 0 !== r2.key && (o2 = "" + r2.key), "key" in r2) for (var a2 in n3 = {}, r2) "key" !== a2 && (n3[a2] = r2[a2]);
      else n3 = r2;
      return r2 = n3.ref, { $$typeof: e2, type: t3, key: o2, ref: void 0 !== r2 ? r2 : null, props: n3 };
    }
    return o.Fragment = t2, o.jsx = n2, o.jsxs = n2, o;
  }() : n.exports = s()), n.exports);
  const u = "_activity_1syf0_1", f = "_activityCont_1syf0_21", y = t.createContext();
  e.ActivityBlock = ({ id: e2, children: t2, activityStyle: r2, activityContStyle: n2 }) => c.jsx(c.Fragment, { children: c.jsx("div", { id: e2, className: u, style: r2, children: c.jsx("div", { className: f, style: n2, children: t2 }) }) }), e.BtnToBlock = ({ id: e2, toId: r2, children: n2, style: o2, className: a2 }) => {
    const { showBlock: l2 } = t.useContext(y);
    return c.jsx(c.Fragment, { children: c.jsx("button", { id: e2, style: o2, className: a2, onClick: () => l2(r2), children: n2 }) });
  }, e.DIVOVKContext = y, e.DIVOVKProvider = ({ children: e2 }) => {
    const [r2, n2] = t.useState([]), o2 = t.useRef(r2);
    let a2 = t.useCallback((e3) => document.querySelector(e3), []), l2 = { open: (e3) => {
      a2(`#${e3}`).style.display = "block", setTimeout(() => {
        a2(`#${e3}`).style.zIndex = o2.current.length + 1, a2(`#${e3}`).style.transform = "translate(0%,0%)", a2(`#${e3}`).children[0].style.transform = "translate(0%,0%)";
      }, 100);
    }, close: (e3) => {
      a2(`#${e3}`).children[0].style.transform = "", setTimeout(() => {
        a2(`#${e3}`).style.transform = "", a2(`#${e3}`).style.zIndex = "-1", a2(`#${e3}`).style.display = "none";
      }, 400);
    }, init: (e3, t2) => {
      a2(`#${e3}`).style.display = "block", a2(`#${e3}`).style.zIndex = t2, a2(`#${e3}`).style.transform = "translate(0%,0%)", a2(`#${e3}`).children[0].style.transform = "translate(0%,0%)";
    } };
    t.useEffect(() => {
      const e3 = (e4) => {
        e4 = e4 || false;
        const t3 = window.location.hash.slice(1).split("/").filter(Boolean);
        t3.length > o2.current.length ? l2.open(t3[t3.length - 1]) : t3.length < o2.current.length && l2.close(o2.current[o2.current.length - 1]), true === e4 && o2.current.length > 0 && o2.current.forEach((e5, t4) => {
          l2.init(e5, t4 + 2);
        }), n2(t3), o2.current = t3;
      }, t2 = window.location.hash.slice(1);
      return o2.current = t2.split("/").filter(Boolean), e3(true), window.addEventListener("hashchange", e3), () => {
        window.removeEventListener("hashchange", e3);
      };
    }, []);
    const i2 = { blockHistory: r2, showBlock: (e3) => {
      ((e4) => {
        const t2 = e4.join("/");
        window.location.hash = t2 || "";
      })([...o2.current, e3]);
    }, getBlockStyle: (e3) => {
      const t2 = r2.indexOf(e3);
      return -1 === t2 ? {} : { zIndex: t2 + 1 };
    } };
    return c.jsx(y.Provider, { value: i2, children: e2 });
  }, Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
});
