/* Core helpers and the bn/en language engine. Exposes window.NU. */
(function () {
  "use strict";
  var STORE = "nu-desk-lang";
  var lang = "bn";
  try {
    var saved = localStorage.getItem(STORE);
    if (saved === "bn" || saved === "en") lang = saved;
  } catch (e) {}
  var listeners = [];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function getLang() { return lang; }

  /* t("key", {n: 3}) reads the UI dictionary for the current language. */
  function t(key, vars) {
    var d = window.I18N[lang] || {};
    var v = d[key];
    if (v == null) v = (window.I18N.en || {})[key];
    if (v == null) return key;
    if (vars) Object.keys(vars).forEach(function (k) { v = v.split("{" + k + "}").join(vars[k]); });
    return v;
  }
  /* tx({bn:"..", en:".."}) picks the current language from a data object. */
  function tx(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    return o[lang] != null ? o[lang] : (o.en || o.bn || "");
  }

  function applyI18n(root) {
    root = root || document;
    $$("[data-i18n]", root).forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    $$("[data-i18n-attr]", root).forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length === 2) n.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
  }
  function currentPage() {
    var n = document.querySelector("[data-page]");
    return n ? n.getAttribute("data-page") : "";
  }
  function setTitle() {
    var page = currentPage();
    var brand = window.CONFIG.brand;
    document.title = page && page !== "home" ? t("nav." + page) + " · " + brand : brand + " · NU Document Service Desk";
  }
  function setLang(l) {
    if (l !== "bn" && l !== "en") return;
    lang = l;
    try { localStorage.setItem(STORE, l); } catch (e) {}
    document.documentElement.lang = l;
    applyI18n();
    setTitle();
    listeners.forEach(function (fn) { fn(l); });
  }
  function onLang(fn) { listeners.push(fn); }
  function init() {
    document.documentElement.lang = lang;
    applyI18n();
    setTitle();
  }

  window.NU = {
    $: $, $$: $$, el: el, t: t, tx: tx,
    getLang: getLang, setLang: setLang, onLang: onLang,
    applyI18n: applyI18n, init: init, page: currentPage
  };
})();
