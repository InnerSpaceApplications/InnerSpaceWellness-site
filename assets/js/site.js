// Inner Space Wellness — small site behaviours
(function () {
  document.documentElement.classList.add('js');

  // Mobile menu
  var menu = document.querySelector('.mobile-menu');
  var openBtn = document.querySelector('.menu-toggle');
  var closeBtn = document.querySelector('.menu-close');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('open', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Reveal sections as they scroll into view
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }


  // Explainer video: custom play overlay, as in the original embed
  var video = document.getElementById('is-player');
  var overlay = document.getElementById('is-overlay');
  if (video && overlay) {
    overlay.addEventListener('click', function () {
      var p = video.play();
      overlay.style.display = 'none';
      video.setAttribute('controls', 'controls');
      if (p && p.catch) p.catch(function () {});
    });
    video.addEventListener('ended', function () {
      video.currentTime = 0; video.pause(); video.removeAttribute('controls');
      overlay.style.display = 'flex';
    });
  }
})();
