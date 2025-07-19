window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.dataset.target;
      const sec = document.getElementById(id);
      if (!sec) return console.warn('No section with id:', id);

      history.pushState(null, '', `/${id}`);
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  window.addEventListener('popstate', () => {
    const id = location.pathname.slice(1) || 'home';
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
