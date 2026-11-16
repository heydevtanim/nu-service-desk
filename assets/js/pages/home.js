(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$;
  function render() {
    var box = $("#svcPreview"); if (!box) return;
    box.textContent = "";
    window.DATA.services.forEach(function (s) {
      var a = el("a", "svc-mini"); a.href = "service-" + s.id + ".html";
      var tile = el("span", "tile"); tile.appendChild(window.iconEl(s.icon)); a.appendChild(tile);
      a.appendChild(el("h3", "", NU.tx(s.name)));
      a.appendChild(el("p", "", NU.tx(s.summary)));
      var m = el("span", "more"); m.appendChild(el("span", "", NU.t("cta.details"))); m.appendChild(window.iconEl("arrow")); a.appendChild(m);
      box.appendChild(a);
    });
    window.hydrateIcons(box);
  }
  render(); NU.onLang(render);
})();
