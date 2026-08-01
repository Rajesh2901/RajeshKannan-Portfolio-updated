// Interactive JavaScript logic for Rajesh Kannan Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Modal Handler
  const modalTriggers = document.querySelectorAll('.open-modal');
  const closeBtns = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.modal');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modals.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = 'auto';
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Animated Metrics Counter
  const metrics = document.querySelectorAll('.metric-number');
  let animated = false;

  const animateMetrics = () => {
    metrics.forEach(metric => {
      const targetStr = metric.innerText;
      const target = parseInt(metric.getAttribute('data-target') || targetStr);
      let count = 0;
      const step = Math.ceil(target / 40);

      const updateCount = () => {
        count += step;
        if (count >= target) {
          metric.innerText = targetStr; // Keep original formatting e.g. "10+"
        } else {
          metric.innerText = count + (targetStr.includes('+') ? '+' : targetStr.includes('%') ? '%' : '');
          setTimeout(updateCount, 30);
        }
      };

      updateCount();
    });
  };

  // Intersection Observer for Metrics
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateMetrics();
        animated = true;
      }
    });
  }, { threshold: 0.5 });

  const metricsBanner = document.querySelector('.hero-metrics');
  if (metricsBanner) {
    observer.observe(metricsBanner);
  }
});
