// GSAP Animations used for Continuous Scrolling through all my sections
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

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

    // Snowfall added to each of the sections
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const snowflakes = 40; 
        for (let i = 0; i < snowflakes; i++) {
            const snowflake = document.createElement("span");
            snowflake.textContent = "❄️☃️❄️"; 
            snowflake.style.position = "absolute";
            snowflake.style.left = `${Math.random() * 100}%`; 
            snowflake.style.fontSize = `${Math.random() * 20 + 10}px`; 
            snowflake.style.animationDelay = `${Math.random() * 10}s`; 
            snowflake.style.animationDuration = `${5 + Math.random() * 5}s`; 
            section.appendChild(snowflake);
        }
    });
});