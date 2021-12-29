import {
  e as b,
  v as c,
  r as d,
  j as u,
  F as h,
  a as t,
  T as m,
  B as f,
  V as g,
  H as v,
  I as S,
  R as x,
  b as w,
  C as R,
} from "./vendor.1ea38fa5.js";
const k = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = s(e);
    fetch(e.href, r);
  }
};
k();
var C = "./assets/bg.6808d548.jpg",
  j = b({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${C})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          w: "100%",
          minH: "100vh",
          fontSize: "16px",
        },
      },
    },
  });
const I = [
  { id: c(), name: "Medias " },
  { id: c(), name: "caramelos" },
  { id: c(), name: "Vitel Tone" },
];
function B() {
  const [a, n] = d.exports.useState([]),
    [s, i] = d.exports.useState("");
  d.exports.useEffect(() => {
    n(I);
  }, []);
  const e = (o) => {
      o.preventDefault(),
        s.trim() !== "" && n([...a, { id: c(), name: s.trim() }]),
        i("");
    },
    r = (o) => {
      n(a.filter((y) => y.id !== o));
    },
    l = () => {
      n([]);
    },
    p = a.map((o) =>
      u(
        h,
        {
          justifyContent: "space-between",
          w: "100%",
          children: [
            t(m, { children: o.name }),
            t(f, {
              colorScheme: "red",
              size: "xs",
              onClick: () => r(o.id),
              children: "x",
            }),
          ],
        },
        o.id
      )
    );
  return t(h, {
    alignItems: "center",
    justifyContent: "center",
    minH: "100vh",
    w: "100%",
    children: u(g, {
      background: "white",
      boxShadow: "md",
      p: 4,
      w: "30%",
      children: [
        t(v, { fontFamily: "'Mountains of Christmas'", children: "Regalos:" }),
        u(h, {
          as: "form",
          gap: 2,
          onSubmit: e,
          children: [
            t(S, {
              placeholder: "Regalo",
              value: s,
              onChange: (o) => i(o.target.value),
            }),
            t(f, { colorScheme: "red", type: "submit", children: "Agregar" }),
          ],
        }),
        t(g, {
          w: "100%",
          children:
            a.length !== 0
              ? p
              : t(m, {
                  color: "gray.400",
                  children: "No hay regalos Grinch!! agrega uno .",
                }),
        }),
        a.length !== 0 &&
          t(f, {
            colorScheme: "red",
            w: "100%",
            onClick: l,
            children: "Borrar todo",
          }),
      ],
    }),
  });
}
x.render(
  t(w.StrictMode, { children: t(R, { theme: j, children: t(B, {}) }) }),
  document.getElementById("root")
);
