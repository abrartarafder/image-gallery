const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

    // Roles to cycle through
    const roles = [
        'Software Developer',
        'Graphic Designer',
        'Web Designer',
        'Computer Science Student',
        'Data Analyst',
        'Tech Enthusiast'
    ];

    // Initialize Typed.js
    const type = new Typed('#roleDescription', {
        strings: roles,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
