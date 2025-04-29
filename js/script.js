// wait until everything is ready
document.addEventListener('DOMContentLoaded', () => {
    /* ---------- sidebar toggle (mobile) ---------- */
    const sidebar    = document.getElementById('sidebar');
    const sidebarBtn = document.querySelector('.toggler-btn');   // ← was null, now selects the button
  
    sidebarBtn.addEventListener('click', () => {
      // toggle helper class for smooth width change
      sidebar.classList.toggle('collapsed');
    });
  
    /* ---------- Typed.js header roles ---------- */
    new Typed('#roleDescription', {
      strings: [
        'Software Developer',
        'Web Designer',
        'Computer Science Student'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      smartBackspace: true
    });
  });
  