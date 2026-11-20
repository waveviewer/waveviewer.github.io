// Reveal page content as it enters the viewport.
// Elements are only hidden when this file runs, so the page stays readable
// without JavaScript.

(function () {
  var selector = '.page__content > h1, .page__content > h2, .page__content > p, .page__content > ul, .pub';
  var nodes = Array.prototype.slice.call(document.querySelectorAll(selector));
  if (!nodes.length || !('IntersectionObserver' in window)) return;

  var siblings = new Map();
  nodes.forEach(function (node) {
    node.classList.add('reveal');
    var index = siblings.get(node.parentNode) || 0;
    node.style.transitionDelay = Math.min(index, 4) * 70 + 'ms';
    siblings.set(node.parentNode, index + 1);
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  nodes.forEach(function (node) {
    observer.observe(node);
  });
})();
