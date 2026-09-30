(function () {
  var header = document.getElementById('site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');

  // Header turns solid once you scroll past the hero's top edge
  function onScroll() {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  if (toggle && nav) {
    function setOpen(open) {
      nav.classList.toggle('open', open);
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Reveal-on-scroll
  var items = document.querySelectorAll('.reveal');
  document.querySelectorAll('.index-list li.reveal').forEach(function (li, i) { li.style.setProperty('--i', i); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle('in', en.isIntersecting); });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Watermark (demo builds) — remove this block to ship without it
  (function () {
    var css = document.createElement('style');
    css.textContent = '.wm{position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;user-select:none}' +
      '.wm span{position:absolute;white-space:nowrap;font-family:"Jost",system-ui,sans-serif;font-weight:600;font-size:clamp(15px,2.2vw,26px);letter-spacing:.3em;text-transform:uppercase;color:#8a92a0;opacity:.28;transform:rotate(-24deg);mix-blend-mode:difference}' +
      '.wm .wm-tag{position:fixed;left:auto;right:16px;bottom:14px;transform:none;opacity:.55;font-size:11px;letter-spacing:.3em;color:#C6A35E}';
    document.head.appendChild(css);
    var wm = document.createElement('div');
    wm.className = 'wm';
    wm.setAttribute('aria-hidden', 'true');
    var cols = 3, rows = 5, html = '';
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = (c / cols) * 105 - 8 + (r % 2 ? 16 : 0), y = (r / rows) * 105 + 2;
        html += '<span style="left:' + x + 'vw;top:' + y + 'vh">KEFY STUDIO</span>';
      }
    }
    html += '<span class="wm-tag">Design by KEFY STUDIO</span>';
    wm.innerHTML = html;
    document.body.appendChild(wm);
  })();

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
