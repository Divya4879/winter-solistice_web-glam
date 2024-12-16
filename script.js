document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations for Continuous Scroll
    gsap.registerPlugin(ScrollTrigger);

    // Fade and slide sections with GSAP
    document.querySelectorAll('section').forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
        });
    });

    // Snowfall Effect: Add snowflakes to each section
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const snowflakes = 40; // Number of snowflakes per section
        for (let i = 0; i < snowflakes; i++) {
            const snowflake = document.createElement("span");
            snowflake.textContent = "❄️☃️❄️"; // Snowman emoji
            snowflake.style.position = "absolute";
            snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
            snowflake.style.fontSize = `${Math.random() * 20 + 10}px`; // Vary the size of snowflakes
            snowflake.style.animationDelay = `${Math.random() * 10}s`; // Random delay for variety
            snowflake.style.animationDuration = `${5 + Math.random() * 5}s`; // Vary animation speed

            section.appendChild(snowflake);
        }
    });

    // Back-to-Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Navigation Toggle (Hamburger Menu)
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mainNav = document.getElementById("main-nav");

    hamburgerMenu.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
});

