/**
 * Kernel Craze - Main JavaScript
 * "Every Bag Brings Henderson Together"
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initScrollAnimations();
  initNavScroll();
  initProductFilters();
  initCounterAnimations();
  initNewsletterForm();
  initFundraiserForm();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
}

/**
 * Navigation scroll effect
 */
function initNavScroll() {
  const nav = document.getElementById('nav');

  if (nav) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animation to save resources
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('visible'));
  }
}

/**
 * Product filtering (Shop page)
 */
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-card[data-category]');
  const countEl = document.querySelector('.products-count strong');

  if (filterBtns.length === 0 || products.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      products.forEach(product => {
        const category = product.dataset.category;

        if (filter === 'all' || category === filter) {
          product.style.display = 'block';
          visibleCount++;

          // Re-trigger animation
          product.classList.remove('visible');
          setTimeout(() => product.classList.add('visible'), 10);
        } else {
          product.style.display = 'none';
        }
      });

      // Update count
      if (countEl) {
        countEl.textContent = visibleCount;
      }
    });
  });
}

/**
 * Animated number counters
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.impact-number[id^="counter"]');

  if (counters.length === 0) return;

  const animateCounter = (element, target) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, stepDuration);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.textContent) || 0;
          if (target > 0) {
            animateCounter(entry.target, target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }
}

/**
 * Newsletter form submission
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = form.querySelector('input[type="email"]').value;
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      // Simulate submission
      btn.textContent = 'Joining...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Welcome to the Crew! 🍿';
        btn.style.background = 'var(--color-growth)';

        // Reset after delay
        setTimeout(() => {
          form.reset();
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1000);

      // In production, this would send to your email service
      console.log('Newsletter signup:', email);
    });
  }
}

/**
 * Fundraiser form submission
 */
function initFundraiserForm() {
  const form = document.getElementById('fundraiserForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      // Simulate submission
      btn.textContent = 'Submitting...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = "You're In! Check Your Email 🎉";
        btn.style.background = 'var(--color-growth)';

        // Scroll to top of form
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Reset after delay
        setTimeout(() => {
          form.reset();
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 5000);
      }, 1500);

      // In production, this would send to your backend
      console.log('Fundraiser signup submitted');
    });
  }
}

/**
 * Add to cart functionality (placeholder)
 */
document.addEventListener('click', (e) => {
  if (e.target.closest('.product-add')) {
    const btn = e.target.closest('.product-add');
    const card = btn.closest('.product-card');
    const productName = card.querySelector('.product-name').textContent;

    // Visual feedback
    btn.textContent = '✓';
    btn.style.background = 'var(--color-growth)';
    btn.style.color = 'white';

    // Update cart count
    const cartCount = document.querySelector('.nav-cart-count');
    if (cartCount) {
      const current = parseInt(cartCount.textContent) || 0;
      cartCount.textContent = current + 1;

      // Animate cart
      cartCount.style.transform = 'scale(1.3)';
      setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
      }, 200);
    }

    // Reset button after delay
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);

    console.log('Added to cart:', productName);
  }
});

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/**
 * Lazy loading for images (if needed in future)
 */
function lazyLoadImages() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback to Intersection Observer
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait = 20) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Console Easter egg for developers
 */
console.log(`
🍿 Kernel Craze
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Every Bag Brings Henderson Together

Founded by Stephen Wolf in Henderson, NC
Building community, one kernel at a time.

Want to contribute? We'd love that.
→ kernelcraze.com/contact

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
