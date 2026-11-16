/* Shared header, mobile drawer, footer, theme and language switch. Injected into every page. */
(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$, $$ = NU.$$, t = NU.t, tx = NU.tx;
  var root = document.documentElement;
  var CFG = window.CONFIG;

  var NAV = [
    { key: "home", href: "index.html", icon: "home" },
    { key: "services", href: "services.html", icon: "grid" },
    { key: "precheck", href: "precheck.html", icon: "clipcheck" },
    { key: "process", href: "process.html", icon: "route" },
    { key: "policy", href: "policy.html", icon: "shieldcheck" },
    { key: "faq", href: "faq.html", icon: "help" },
    { key: "contact", href: "contact.html", icon: "message" }
  ];

  var LOGO = '<span class="logo-mark"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M12 11h11l5 5v13a1.5 1.5 0 0 1-1.5 1.5h-14.5A1.5 1.5 0 0 1 10.5 29V12.5A1.5 1.5 0 0 1 12 11z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 22.5l3 3 6-6.5" fill="none" stroke="#E7C26B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
    '<span class="logo-text"><strong class="brand-name"></strong><small data-i18n="brand.sub"></small></span>';

  function navLinks(cls) {
    var page = NU.page();
    return NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === page ? ' aria-current="page"' : '') + '><span class="icon" data-icon="' + n.icon + '"></span><span data-i18n="nav.' + n.key + '"></span></a>';
    }).join("");
  }
  function langSeg() {
    return '<div class="seg" role="group" data-i18n-attr="aria-label:ui.lang"><button type="button" data-lang="bn">বাংলা</button><button type="button" data-lang="en">EN</button></div>';
  }
  function themeBtn() {
    return '<button type="button" class="icon-btn theme-btn" data-theme-toggle><span class="icon i-moon" data-icon="moon"></span><span class="icon i-sun" data-icon="sun"></span></button>';
  }

  function buildHeader() {
    var h = el("div");
    h.innerHTML =
      '<a class="skip" href="#main" data-i18n="a11y.skip"></a>' +
      '<div class="topbar"><div class="wrap"><span class="icon" data-icon="shield"></span><span data-i18n="topbar.text"></span><a href="policy.html" data-i18n="topbar.link"></a></div></div>' +
      '<header class="site-header"><div class="wrap wide bar">' +
        '<a class="logo" href="index.html">' + LOGO + '</a>' +
        '<nav class="nav" aria-label="Main">' + navLinks() + '</nav>' +
        '<div class="actions">' + langSeg() + themeBtn() +
          '<a class="btn btn-primary btn-sm cta-desktop" href="contact.html"><span data-i18n="cta.help"></span><span class="icon" data-icon="arrow"></span></a>' +
          '<button type="button" class="icon-btn menu-btn" id="menuBtn" aria-controls="drawer" aria-expanded="false" data-i18n-attr="aria-label:ui.menu"><span class="icon" data-icon="menu"></span></button>' +
        '</div>' +
      '</div></header>' +
      '<div class="drawer" id="drawer" aria-hidden="true">' +
        '<div class="drawer-overlay" data-drawer-close></div>' +
        '<div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">' +
          '<div class="drawer-head"><a class="logo" href="index.html">' + LOGO + '</a>' +
            '<button type="button" class="icon-btn" data-drawer-close data-i18n-attr="aria-label:ui.close"><span class="icon" data-icon="x"></span></button></div>' +
          '<nav class="drawer-nav" aria-label="Mobile">' + navLinks() + '</nav>' +
          '<a class="btn btn-primary drawer-cta" href="contact.html"><span data-i18n="cta.help"></span><span class="icon" data-icon="arrow"></span></a>' +
          '<div class="drawer-tools">' + langSeg() + themeBtn() + '</div>' +
        '</div>' +
      '</div>';
    return h;
  }

  function contactItems() {
    var rows = [];
    if (CFG.phone) rows.push({ icon: "phone", k: "contact.phone", v: CFG.phone });
    if (CFG.whatsapp) rows.push({ icon: "message", k: "contact.whatsapp", v: "+" + CFG.whatsapp });
    if (CFG.email) rows.push({ icon: "mail", k: "contact.email", v: CFG.email });
    var hrs = tx(CFG.hours); if (hrs) rows.push({ icon: "clock", k: "contact.hours", v: hrs });
    var adr = tx(CFG.address); if (adr) rows.push({ icon: "pin", k: "contact.address", v: adr });
    return rows;
  }
  window.NU.contactItems = contactItems;

  function buildFooter() {
    var f = el("footer", "site-footer");
    f.innerHTML =
      '<div class="wrap wide footer-grid">' +
        '<div class="footer-brand"><a class="logo" href="index.html">' + LOGO + '</a><p data-i18n="footer.about"></p></div>' +
        '<div class="footer-col"><h4 data-i18n="footer.explore"></h4><ul>' +
          NAV.map(function (n) { return '<li><a href="' + n.href + '"><span class="icon" data-icon="' + n.icon + '"></span><span data-i18n="nav.' + n.key + '"></span></a></li>'; }).join("") +
        '</ul></div>' +
        '<div class="footer-col"><h4 data-i18n="footer.services"></h4><ul id="footServices"></ul></div>' +
        '<div class="footer-col"><h4 data-i18n="footer.contact"></h4><ul class="footer-contact" id="footContact"></ul></div>' +
      '</div>' +
      '<div class="footer-bottom"><div class="wrap wide">' +
        '<p data-i18n="footer.disclaimer"></p>' +
        '<div class="row"><span><span id="footBrand"></span> · © ' + new Date().getFullYear() + ' · <span data-i18n="footer.rights"></span></span>' +
        '<button type="button" class="to-top" id="toTop"><span class="icon" data-icon="arrow"></span><span data-i18n="footer.top"></span></button></div>' +
      '</div></div>';
    return f;
  }

  function renderFooterDynamic() {
    var sv = $("#footServices"); sv.textContent = "";
    window.DATA.services.slice(0, 5).forEach(function (s) {
      var li = el("li"), a = el("a"); a.href = "service-" + s.id + ".html"; a.textContent = tx(s.name); li.appendChild(a); sv.appendChild(li);
    });
    var all = el("li"), aa = el("a"); aa.href = "services.html"; aa.textContent = t("cta.viewAll") + " →"; all.appendChild(aa); sv.appendChild(all);

    var ct = $("#footContact"); ct.textContent = "";
    var rows = contactItems();
    if (!rows.length) { var li = el("li"); li.className = "muted-line"; li.textContent = t("contact.none"); ct.appendChild(li); }
    rows.forEach(function (r) {
      var li = el("li"); li.appendChild(window.iconEl(r.icon));
      var s = el("span", "", r.v); li.appendChild(s); ct.appendChild(li);
    });
    $("#footBrand").textContent = CFG.brand;
  }

  /* ---------- mount ---------- */
  var hostH = $("#siteHeader"), hostF = $("#siteFooter");
  hostH.appendChild(buildHeader());
  hostF.appendChild(buildFooter());
  $$(".brand-name").forEach(function (n) { n.textContent = CFG.brand; });
  renderFooterDynamic();
  window.hydrateIcons(document);
  NU.init();

  /* ---------- theme ---------- */
  var THEME = "nu-desk-theme";
  function effective() {
    var a = root.getAttribute("data-theme");
    if (a === "dark" || a === "light") return a;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintTheme() {
    var e = effective();
    root.setAttribute("data-theme-eff", e);
    var label = t(e === "dark" ? "ui.theme.toLight" : "ui.theme.toDark");
    $$("[data-theme-toggle]").forEach(function (b) { b.setAttribute("aria-label", label); b.setAttribute("title", label); });
  }
  $$("[data-theme-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = effective() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME, next); } catch (e) {}
      paintTheme();
    });
  });
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", paintTheme);
  }
  paintTheme();

  /* ---------- language ---------- */
  function paintLang() {
    var l = NU.getLang();
    $$(".seg button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === l ? "true" : "false"); });
    paintTheme();
    renderFooterDynamic();
    window.hydrateIcons(document);
  }
  $$(".seg button").forEach(function (b) {
    b.addEventListener("click", function () { NU.setLang(b.getAttribute("data-lang")); });
  });
  NU.onLang(paintLang);
  paintLang();

  /* ---------- mobile drawer ---------- */
  var drawer = $("#drawer"), menuBtn = $("#menuBtn");
  function openDrawer() {
    drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true"); root.classList.add("menu-open");
    var first = $(".drawer-nav a", drawer); if (first) first.focus();
  }
  function closeDrawer() {
    drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false"); root.classList.remove("menu-open");
  }
  menuBtn.addEventListener("click", function () { drawer.classList.contains("open") ? closeDrawer() : openDrawer(); });
  $$("[data-drawer-close]").forEach(function (n) { n.addEventListener("click", closeDrawer); });
  $$(".drawer-nav a, .drawer-cta").forEach(function (a) { a.addEventListener("click", closeDrawer); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) { closeDrawer(); menuBtn.focus(); } });
  window.addEventListener("resize", function () { if (window.innerWidth >= 1100) closeDrawer(); });

  /* ---------- back to top ---------- */
  $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
})();
