/**
 * MentorVerse Interactive Scripts (ES6 Vanilla JS)
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile & Tablet Hamburger Menu Toggle
  const menuBtn = document.getElementById('menuToggleBtn');
  const navDrawer = document.getElementById('mainNavDrawer');

  if (menuBtn && navDrawer) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      navDrawer.classList.toggle('is-active');
    });

    // Menutup drawer ketika link menu ATAU tombol CTA di dalamnya ditekan
    navDrawer.querySelectorAll('.nav-link, .drawer-actions .btn').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        navDrawer.classList.remove('is-active');
      });
    });
  }

  // 2. Category Tab Filter Interactivity
  const filterPills = document.querySelectorAll('.filter-pill');
  const serviceCards = document.querySelectorAll('.service-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      const selectedCategory = pill.dataset.filter;

      serviceCards.forEach(card => {
        const cardCat = card.dataset.category;
        if (selectedCategory === 'all' || cardCat === selectedCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Fast Newsletter Form Validation
  const newsletterForm = document.getElementById('sidebarNewsletterForm');
  const emailInput = document.getElementById('subscriberEmail');
  const feedbackMsg = document.getElementById('formFeedbackMsg');

  if (newsletterForm && emailInput && feedbackMsg) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!emailInput.checkValidity()) {
        feedbackMsg.textContent = 'Silakan masukkan alamat email yang valid.';
        feedbackMsg.className = 'form-feedback error';
        emailInput.focus();
      } else {
        feedbackMsg.textContent = 'Berhasil! Anda akan menerima update batch berikutnya.';
        feedbackMsg.className = 'form-feedback success';
        newsletterForm.reset();
        setTimeout(() => {
          feedbackMsg.textContent = '';
        }, 5000);
      }
    });
  }

  // 4. Smooth Sliding Active Indicator on Navbar
  const navList = document.getElementById('navMenuList');
  const navIndicator = document.getElementById('navSliderIndicator');
  const navLinks = document.querySelectorAll('#navMenuList .nav-link');

  function updateNavIndicator(activeLink) {
    if (!activeLink || !navIndicator || !navList) return;
    const listRect = navList.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const leftOffset = linkRect.left - listRect.left;
    const width = linkRect.width;

    navIndicator.style.transform = `translateX(${leftOffset}px)`;
    navIndicator.style.width = `${width}px`;
    navIndicator.style.opacity = '1';
  }

  function setActiveNavLink(targetId) {
    let activeEl = null;
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
        activeEl = link;
      } else {
        link.classList.remove('active');
      }
    });

    if (activeEl) {
      updateNavIndicator(activeEl);
    }
  }

  const initialActive = document.querySelector('#navMenuList .nav-link.active') || navLinks[0];
  if (initialActive) {
    setTimeout(() => updateNavIndicator(initialActive), 100);
  }

  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('#navMenuList .nav-link.active');
    if (currentActive) updateNavIndicator(currentActive);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href').replace('#', '');
      setActiveNavLink(targetId);
    });
  });

  // 5. ScrollSpy using IntersectionObserver
  const sections = ['hero', 'about', 'services', 'founders', 'testimonials'];
  const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        setActiveNavLink(sectionId);
      }
    });
  }, observerOptions);

  sectionElements.forEach(sec => observer.observe(sec));

  // 6. Floating Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});