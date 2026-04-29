<script>
  // Cat tag toggle
  document.querySelectorAll('.c-tag').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.c-tag').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
    });
  });

  // Scroll reveal
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);}});
  },{threshold:0.1});
  document.querySelectorAll('.rv').forEach(el=>obs.observe(el));

  // Navbar shadow on scroll
  window.addEventListener('scroll',()=>{
    document.querySelector('.navbar').style.boxShadow=
      window.scrollY>20?'0 4px 20px rgba(0,0,0,.13)':'0 2px 12px rgba(0,0,0,.08)';
  });
</script>