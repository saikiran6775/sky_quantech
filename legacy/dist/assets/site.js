// Shared behavior for every page. Kept small and dependency-free.
(function () {
  'use strict';

  // Mobile navigation.
  var toggle = document.querySelector('[data-menu-toggle]');
  var panel = document.getElementById('mobile-nav');
  var icon = document.querySelector('[data-menu-icon]');

  function setMenu(open) {
    if (!toggle || !panel) return;
    panel.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (icon) icon.textContent = open ? 'close' : 'menu';
  }

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      setMenu(panel.classList.contains('hidden'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
        setMenu(false);
        toggle.focus();
      }
    });
    // Reset state when the desktop nav takes over.
    window.matchMedia('(min-width: 1280px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  // Copyright year, so the footer never goes stale.
  Array.prototype.forEach.call(document.querySelectorAll('[data-current-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
