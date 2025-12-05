// Typing animation for hero
const phrases = [
    'Cloud automation • CI/CD • Terraform',
    'AWS, Docker, JavaScript',
    'Building scalable systems and elegant solutions'
];

const typingEl = document.getElementById('typingText');
if (typingEl) {
    let pIndex = 0, charIndex = 0, deleting = false;

    function typeLoop() {
        const current = phrases[pIndex];
        if (!deleting) {
            typingEl.textContent = current.slice(0, ++charIndex);
            if (charIndex === current.length) {
                setTimeout(() => { deleting = true; }, 900);
            }
        } else {
            typingEl.textContent = current.slice(0, --charIndex);
            if (charIndex === 0) {
                deleting = false;
                pIndex = (pIndex + 1) % phrases.length;
            }
        }
        setTimeout(typeLoop, deleting ? 40 : 70);
    }

    document.addEventListener('DOMContentLoaded', () => { typeLoop(); });
}

// Code window reveal/unreveal loop
const codeLines = Array.from(document.querySelectorAll('.code-line'));
if (codeLines.length > 0) {
    const showDelay = 350;
    const hold = 900;

    async function animateCode() {
        while (true) {
            // reveal lines one by one
            for (let i = 0; i < codeLines.length; i++) {
                codeLines[i].classList.add('visible');
                await new Promise(r => setTimeout(r, showDelay));
            }
            await new Promise(r => setTimeout(r, hold));
            // hide lines one by one (reverse)
            for (let i = codeLines.length - 1; i >= 0; i--) {
                codeLines[i].classList.remove('visible');
                await new Promise(r => setTimeout(r, showDelay / 1.2));
            }
            await new Promise(r => setTimeout(r, 400));
        }
    }

    animateCode();
}

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.style.display = 'none';
    });
});

// Project filter (if on projects page)
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
