
  <script>
  // Category tag toggle
  document.querySelectorAll('.c-tag').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.c-tag').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
    });
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); obs.unobserve(e.target); } });
  }, {threshold: 0.1});
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  // Navbar white bg only when scrolled
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 10);
  });
</script>
