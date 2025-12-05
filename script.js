// Typing animation for hero
const phrases = [
    'Open to freelance & web design roles',
    'DevOps & infrastructure automation',
    'Full-stack web development'
];

const typingEl = document.getElementById('typingText');
if (typingEl) {
    let pIndex = 0, charIndex = 0, deleting = false;
    let typeTimeout;

    function typeLoop() {
        const current = phrases[pIndex];
        if (!deleting) {
            typingEl.textContent = current.slice(0, ++charIndex);
            if (charIndex === current.length) {
                typeTimeout = setTimeout(() => { deleting = true; typeLoop(); }, 900);
                return;
            }
        } else {
            typingEl.textContent = current.slice(0, --charIndex);
            if (charIndex === 0) {
                deleting = false;
                pIndex = (pIndex + 1) % phrases.length;
            }
        }
        typeTimeout = setTimeout(typeLoop, deleting ? 40 : 70);
    }

    // Reset typing every 30 seconds
    function resetTyping() {
        clearTimeout(typeTimeout);
        pIndex = 0;
        charIndex = 0;
        deleting = false;
        typingEl.textContent = '';
        typeLoop();
    }

    document.addEventListener('DOMContentLoaded', () => { typeLoop(); });
    setInterval(resetTyping, 30000);
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

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

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
