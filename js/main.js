function loadComponent(id, path) {
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      const container = document.getElementById(id);
      container.innerHTML = html;

      // لو ده الـ sidebar، نفعّل الرابط المناسب
      if (id === 'sidebar-container') {
        const links = container.querySelectorAll('a');
        const currentPage = window.location.pathname.split('/').pop(); // اسم الصفحة الحالي
        links.forEach(link => {
          const linkPage = link.getAttribute('href');
          if (linkPage === currentPage) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    })
    .catch((err) => console.error(`Error loading ${path}:`, err));
}

// تحميل الهيدر والسايدبار
loadComponent('header-container', '/components/header.html');
loadComponent('sidebar-container', '/components/sidebar.html');
