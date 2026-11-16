(function () {
  "use strict";
  var NU = window.NU, el = NU.el, $ = NU.$, t = NU.t, tx = NU.tx;
  var cat = "all";
  function chips() {
    var box = $("#chips"); box.textContent = "";
    ["all", "collect", "correct", "verify"].forEach(function (k) {
      var b = el("button", "chip", t("filter." + k)); b.type = "button";
      b.setAttribute("aria-pressed", k === cat ? "true" : "false");
      b.addEventListener("click", function () { cat = k; render(); });
      box.appendChild(b);
    });
  }
  function tile(s, i) {
    var a = el("a", "svc-tile"); a.href = "service-" + s.id + ".html";
    var top = el("div", "svc-tile-top");
    var ic = el("span", "tile"); ic.appendChild(window.iconEl(s.icon)); top.appendChild(ic);
    top.appendChild(el("span", "svc-num", String(i + 1).padStart(2, "0")));
    a.appendChild(top);
    var h = el("div"); h.appendChild(el("h3", "", tx(s.name))); h.appendChild(el("span", "term", s.term)); a.appendChild(h);
    a.appendChild(el("p", "", tx(s.summary)));
    var tags = el("div", "tags");
    tags.appendChild(el("span", "tag", t("mode." + s.mode)));
    a.appendChild(tags);
    var foot = el("div", "svc-tile-foot");
    foot.appendChild(el("span", "tag", t("filter." + s.cat)));
    var go = el("span", "go"); go.appendChild(el("span", "", t("svc.open"))); go.appendChild(window.iconEl("arrow")); foot.appendChild(go);
    a.appendChild(foot);
    return a;
  }
  function render() {
    chips();
    var box = $("#svcList"); box.textContent = "";
    var n = 0;
    window.DATA.services.forEach(function (s, i) {
      if (cat === "all" || s.cat === cat) { box.appendChild(tile(s, i)); n++; }
    });
    $("#svcCount").textContent = n + " / " + window.DATA.services.length;
    window.hydrateIcons(box);
  }
  render(); NU.onLang(render);
})();
