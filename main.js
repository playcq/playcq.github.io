(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("menuBtn");
    var nav = document.getElementById("nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
      });
    }

    var backTop = document.getElementById("backTop");
    if (backTop) {
      backTop.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    var results = document.getElementById("results");
    if (!results) return;

    var input = document.getElementById("q");
    var params = new URLSearchParams(window.location.search);
    var keyword = (params.get("q") || "").trim();
    if (input) input.value = keyword;

    var data = window.SITE_DATA || [];
    if (!keyword) {
      results.innerHTML = '<p class="tip">共收录 ' + data.length + ' 条内容，输入关键词开始查找，例如“单职业”“合击”“1.76”。</p>';
      return;
    }
    var lower = keyword.toLowerCase();
    var matched = data.filter(function (item) {
      var text = (item.t + " " + item.c + " " + item.d + " " + item.k).toLowerCase();
      return text.indexOf(lower) !== -1;
    });
    if (!matched.length) {
      results.innerHTML = '<p class="tip">没有找到与“' + escapeHtml(keyword) + '”相关的内容，试试更短的词，或返回<a href="index.html">首页</a>按栏目浏览。</p>';
      return;
    }
    var html = '<p class="tip">找到 ' + matched.length + ' 条相关内容：</p>';
    matched.slice(0, 60).forEach(function (item) {
      html += '<article class="post-card"><div class="post-info"><h3><a href="' + item.u + '">' +
        escapeHtml(item.t) + '</a></h3><p>' + escapeHtml(item.d) + '</p><div class="post-meta"><span>' +
        escapeHtml(item.c) + '</span><span>匹配关键词：' + escapeHtml(keyword) + '</span></div></div></article>';
    });
    results.innerHTML = html;
  });

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
})();
