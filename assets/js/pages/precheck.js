(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$, t = NU.t, tx = NU.tx;
  var D = window.DATA, state = {}, current = location.hash.slice(1) || "pm";
  if (!D.services.some(function (s) { return s.id === current; })) current = "pm";
  var moiGroup = 0, moiSub = 0;

  function svc() { return D.services.filter(function (s) { return s.id === current; })[0]; }
  function option(sel, val, text, selected) { var o = el("option", "", text); o.value = val; o.selected = selected; sel.appendChild(o); }

  function renderChecker() {
    var sel = $("#pcService"); sel.textContent = "";
    D.services.forEach(function (s) { option(sel, s.id, tx(s.name), s.id === current); });
    var s = svc(); state[s.id] = state[s.id] || {};
    var box = $("#pcChecks"); box.textContent = "";
    s.docs.forEach(function (d, i) {
      var lab = el("label", "check"), cb = el("input"); cb.type = "checkbox"; cb.checked = !!state[s.id][i];
      cb.addEventListener("change", function () { state[s.id][i] = cb.checked; renderResult(); });
      lab.appendChild(cb);
      var sp = el("span", "", tx(d.t) + (d.s ? " · " + tx(d.s) : "") + (d.opt ? " (" + t("card.optional") + ")" : ""));
      lab.appendChild(sp); box.appendChild(lab);
    });
    renderResult();
  }
  function renderResult() {
    var s = svc(), out = $("#pcResult"); out.textContent = "";
    var missing = [];
    s.docs.forEach(function (d, i) { if (!d.opt && !state[s.id][i]) missing.push(d); });
    if (!missing.length) {
      out.className = "result ok";
      out.appendChild(el("strong", "", t("pc.ready"))); out.appendChild(el("p", "", t("pc.readyText")));
    } else {
      out.className = "result " + (missing.length > 2 ? "bad" : "warn");
      out.appendChild(el("strong", "", t("pc.missing", { n: missing.length })));
      var u = el("ul", "plist");
      missing.forEach(function (d) { u.appendChild(el("li", "", d.miss ? tx(d.miss) : tx(d.t) + " " + t("pc.mustGet"))); });
      out.appendChild(u);
    }
  }
  function renderMoi() {
    var g = $("#moiGroup"), sb = $("#moiSub"); g.textContent = ""; sb.textContent = "";
    D.moi.forEach(function (x, i) { option(g, i, tx(x.g), i === moiGroup); });
    D.moi[moiGroup].items.forEach(function (x, i) { option(sb, i, tx(x.n), i === moiSub); });
    var it = D.moi[moiGroup].items[moiSub], out = $("#moiResult"); out.textContent = "";
    out.className = "result " + (it.ok ? "ok" : "bad");
    out.appendChild(el("strong", "", t(it.ok ? "moi.yes" : "moi.no") + (it.type ? " · " + it.type : "")));
    if (it.ok) { out.appendChild(el("p", "", t("moi.docs"))); out.appendChild(el("p", "", t("moi.manual"))); }
    else out.appendChild(el("p", "", it.note ? tx(it.note) : t("moi.generic")));
    out.appendChild(el("p", "muted", t("moi.disclaimer")));
  }
  $("#pcService").addEventListener("change", function (e) { current = e.target.value; renderChecker(); });
  $("#moiGroup").addEventListener("change", function (e) { moiGroup = +e.target.value; moiSub = 0; renderMoi(); });
  $("#moiSub").addEventListener("change", function (e) { moiSub = +e.target.value; renderMoi(); });
  function all() { renderChecker(); renderMoi(); }
  all(); NU.onLang(all);
})();
