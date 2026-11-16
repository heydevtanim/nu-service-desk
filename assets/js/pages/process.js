(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$;
  function render() {
    [["chainNormal", "normal"], ["chainName", "name"]].forEach(function (p) {
      var box = $("#" + p[0]); box.textContent = "";
      window.DATA.chains[p[1]].forEach(function (n) { box.appendChild(el("li", "node", NU.tx(n))); });
    });
  }
  render(); NU.onLang(render);
})();
