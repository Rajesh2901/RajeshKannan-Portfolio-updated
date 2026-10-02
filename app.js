document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.work-card, .capability-grid > div, .journey-item');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(18px)';
      element.style.transition = 'opacity .6s ease, transform .6s ease';
    });

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observerInstance.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((element) => observer.observe(element));
  }
});