(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$;
  function render() {
    var box = $("#faqList"); box.textContent = "";
    window.DATA.faq.forEach(function (f) {
      var d = el("details", "faq"), s = el("summary", "", NU.tx(f.q));
      d.appendChild(s); d.appendChild(el("p", "", NU.tx(f.a))); box.appendChild(d);
    });
  }
  render(); NU.onLang(render);
})();
