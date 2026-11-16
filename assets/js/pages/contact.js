(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$, t = NU.t, tx = NU.tx, CFG = window.CONFIG;
  var form = $("#cForm"), built = "";

  function fillServices() {
    var sel = $("#fService"), v = sel.value; sel.textContent = "";
    window.DATA.services.forEach(function (s) { var o = el("option", "", tx(s.name)); o.value = s.id; sel.appendChild(o); });
    var h = location.hash.slice(1); if (!v && h) v = h;
    if (v) sel.value = v;
  }
  function renderInfo() {
    var ul = $("#infoList"); ul.textContent = "";
    var rows = NU.contactItems();
    if (!rows.length) ul.appendChild(el("li", "", t("contact.none")));
    rows.forEach(function (r) {
      var li = el("li"); li.appendChild(window.iconEl(r.icon));
      var d = el("div"); d.appendChild(el("small", "", t(r.k))); d.appendChild(el("strong", "", r.v));
      li.appendChild(d); ul.appendChild(li);
    });
  }
  function err(id, key) { var n = $("#" + id); n.textContent = key ? t(key) : ""; }
  function phoneOk(v) {
    v = v.replace(/[\s\-]/g, "").replace(/^\+?88/, "");
    return /^01[3-9]\d{8}$/.test(v) ? v : null;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("#fName").value.trim(), ph = phoneOk($("#fPhone").value);
    var ok = true;
    err("eName", name ? "" : "err.name"); if (!name) ok = false;
    err("ePhone", ph ? "" : "err.phone"); if (!ph) ok = false;
    err("eConsent", $("#fConsent").checked ? "" : "err.consent"); if (!$("#fConsent").checked) ok = false;
    if (!ok) return;
    var svc = window.DATA.services.filter(function (s) { return s.id === $("#fService").value; })[0];
    var lines = [t("msg.hello", { name: name }), t("msg.service") + tx(svc.name), t("msg.mobile") + ph];
    var c = $("#fCourse").value.trim(), n = $("#fNote").value.trim();
    if (c) lines.push(t("msg.course") + c);
    if (n) lines.push(t("msg.note") + n);
    lines.push(t("msg.bye"));
    built = lines.join("\n"); showOut();
  });
  function showOut() {
    var out = $("#out"); out.textContent = "";
    if (!built) { out.appendChild(el("p", "muted", t("msg.empty"))); return; }
    var ta = el("textarea"); ta.readOnly = true; ta.rows = 7; ta.value = built; ta.id = "outText"; out.appendChild(ta);
    var row = el("div", "cta-row");
    var cp = el("button", "btn btn-primary btn-sm"); cp.type = "button";
    cp.appendChild(window.iconEl("copy")); cp.appendChild(el("span", "", t("msg.copy")));
    var st = el("span", "status-line"); st.setAttribute("role", "status");
    cp.addEventListener("click", function () {
      function fallback() { ta.focus(); ta.select(); st.textContent = t("msg.select"); }
      if (navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(built).then(function () { st.textContent = t("msg.copied"); }, fallback);
      else fallback();
    });
    row.appendChild(cp);
    if (CFG.whatsapp) {
      var w = el("a", "btn btn-ghost btn-sm"); w.target = "_blank"; w.rel = "noopener";
      w.href = "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(built);
      w.appendChild(window.iconEl("message")); w.appendChild(el("span", "", t("msg.wa"))); row.appendChild(w);
    }
    out.appendChild(row); out.appendChild(st); window.hydrateIcons(out);
  }
  function all() { fillServices(); renderInfo(); showOut(); }
  all(); NU.onLang(all);
})();
