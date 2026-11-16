(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$, t = NU.t, tx = NU.tx, D = window.DATA;
  var id = document.querySelector("[data-service]").getAttribute("data-service");
  var idx = -1;
  D.services.forEach(function (s, i) { if (s.id === id) idx = i; });
  var s = D.services[idx];

  function fact(icon, label, value) {
    var f = el("div", "fact"); f.appendChild(window.iconEl(icon));
    var d = el("div"); d.appendChild(el("small", "", label)); d.appendChild(el("strong", "", value)); f.appendChild(d); return f;
  }
  function sec(icon, title) {
    var w = el("section", "sd-sec"), h = el("h2"), tl = el("span", "tile");
    tl.appendChild(window.iconEl(icon)); h.appendChild(tl); h.appendChild(el("span", "", title)); w.appendChild(h); return w;
  }
  function render() {
    document.title = tx(s.name) + " · " + window.CONFIG.brand;
    $("#sdHero").textContent = "";
    var hero = $("#sdHero");
    var row = el("div", "svc-hero-row");
    var ic = el("span", "svc-hero-icon"); ic.appendChild(window.iconEl(s.icon)); row.appendChild(ic);
    var tt = el("div"); tt.appendChild(el("span", "term", s.term)); tt.appendChild(el("h1", "", tx(s.name))); tt.appendChild(el("p", "lead", tx(s.summary)));
    row.appendChild(tt); hero.appendChild(row);
    var facts = el("div", "facts");
    facts.appendChild(fact("globe", t("sd.mode"), t("mode." + s.mode)));
    facts.appendChild(fact("pin", t("sd.visit"), t("visit." + s.visit)));
    facts.appendChild(fact("file", t("sd.docsLabel"), t("sd.docsCount", { n: s.docs.length })));
    facts.appendChild(fact("route", t("sd.stepsLabel"), t("sd.stepsCount", { n: s.steps.length })));
    hero.appendChild(facts);
    $("#crumbName").textContent = tx(s.name);

    var main = $("#sdMain"); main.textContent = "";
    var docs = sec("clipcheck", t("card.docs")), ul = el("ul", "sd-docs");
    s.docs.forEach(function (d) {
      var li = el("li", d.opt ? "opt" : ""), tk = el("span", "tick"); tk.appendChild(window.iconEl(d.opt ? "alert" : "check")); li.appendChild(tk);
      var b = el("div"); b.appendChild(el("strong", "", tx(d.t) + (d.opt ? " (" + t("card.optional") + ")" : "")));
      if (d.s) b.appendChild(el("small", "", tx(d.s)));
      if (d.miss) b.appendChild(el("div", "miss", t("sd.ifMissing") + tx(d.miss)));
      li.appendChild(b); ul.appendChild(li);
    });
    docs.appendChild(ul); main.appendChild(docs);
    var st = sec("route", t("card.steps")), ol = el("ol", "sd-steps");
    s.steps.forEach(function (x) { var li = el("li"); li.appendChild(el("p", "", tx(x))); ol.appendChild(li); });
    st.appendChild(ol); main.appendChild(st);
    var nt = sec("alert", t("card.notes")), nl = el("ul", "sd-notes");
    s.notes.forEach(function (x) { var li = el("li"); li.appendChild(window.iconEl("alert")); li.appendChild(el("span", "", tx(x))); nl.appendChild(li); });
    nt.appendChild(nl); main.appendChild(nt);

    var pn = el("div", "pn");
    [[idx - 1, "prev"], [idx + 1, "next"]].forEach(function (p) {
      var o = D.services[p[0]]; if (!o) return;
      var a = el("a", p[1]); a.href = "service-" + o.id + ".html";
      a.appendChild(el("small", "", t("sd." + p[1]))); a.appendChild(el("strong", "", tx(o.name))); pn.appendChild(a);
    });
    main.appendChild(pn);

    var aside = $("#sdAside"); aside.textContent = "";
    var cta = el("div", "aside-card cta");
    cta.appendChild(el("h3", "", t("sd.aside.t"))); cta.appendChild(el("p", "", t("sd.aside.d")));
    var a1 = el("a", "btn btn-gold"); a1.href = "precheck.html#" + s.id; a1.appendChild(window.iconEl("clipcheck")); a1.appendChild(el("span", "", t("card.check"))); cta.appendChild(a1);
    var a2 = el("a", "btn btn-ghost"); a2.href = "contact.html#" + s.id; a2.appendChild(window.iconEl("message")); a2.appendChild(el("span", "", t("sd.aside.msg"))); cta.appendChild(a2);
    aside.appendChild(cta);
    var fee = el("div", "aside-card aside-fee"); fee.appendChild(window.iconEl("scale"));
    var official = window.FEES && window.FEES[s.id];
    fee.appendChild(el("span", "", official ? t("card.officialFee") + official : t("card.fee"))); aside.appendChild(fee);
    var oc = el("div", "aside-card"); oc.appendChild(el("h3", "", t("sd.other")));
    var ol2 = el("ul", "other-list");
    D.services.forEach(function (o) {
      var li = el("li"), a = el("a"); a.href = "service-" + o.id + ".html"; if (o.id === id) a.setAttribute("aria-current", "page");
      a.appendChild(window.iconEl(o.icon)); a.appendChild(el("span", "", tx(o.name))); li.appendChild(a); ol2.appendChild(li);
    });
    oc.appendChild(ol2); aside.appendChild(oc);
    window.hydrateIcons(document.querySelector("main"));
  }
  render(); NU.onLang(render);
})();
