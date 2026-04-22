// ===========================
// CUSTOM CURSOR
// ===========================
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX - 5 + 'px';
    cursor.style.top = mouseY - 5 + 'px';
});

function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    trail.style.left = trailX - 16 + 'px';
    trail.style.top = trailY - 16 + 'px';
    requestAnimationFrame(animateTrail);
}
animateTrail();

// Scale cursor on hover
document.querySelectorAll('a, button, .project-card, .skill-block').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        trail.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        trail.style.transform = 'scale(1)';
    });
});

// ===========================
// NAV SCROLL EFFECT
// ===========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===========================
// SMOOTH ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${id}`) {
                    link.style.color = 'var(--accent)';
                }
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));

// ===========================
// REVEAL ON SCROLL
// ===========================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger delay based on sibling index
            const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, idx * 90);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ===========================
// HERO PARALLAX (subtle)
// ===========================
document.addEventListener('mousemove', (e) => {
    const heroGrid = document.querySelector('.hero-bg-grid');
    if (!heroGrid) return;
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 12;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 12;
    heroGrid.style.transform = `translate(${xRatio}px, ${yRatio}px)`;
});

// ===========================
// TYPED EFFECT ON HERO SUB
// ===========================
const heroSub = document.querySelector('.hero-sub');
if (heroSub) {
    const text = heroSub.textContent;
    heroSub.textContent = '';
    heroSub.style.opacity = '1';
    let i = 0;
    const typeInterval = setInterval(() => {
        heroSub.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(typeInterval);
    }, 55);
}

// ===========================
// SKILL TAGS HOVER GLOW
// ===========================
document.querySelectorAll('.skill-tags span').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.background = 'rgba(232,255,77,0.08)';
        tag.style.borderColor = 'rgba(232,255,77,0.25)';
        tag.style.color = 'var(--text)';
        tag.style.transition = 'all 0.2s';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.background = '';
        tag.style.borderColor = '';
        tag.style.color = '';
    });
});

// ===========================
// PROJECT CARD TILT
// ===========================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transition = 'transform 0.1s ease';
        card.style.transform = `translateX(4px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.4s ease';
        card.style.transform = 'translateX(0) rotateX(0) rotateY(0)';
    });
});

console.log('%c Guru Dastagiri Jillela | Portfolio ',
    'background: #e8ff4d; color: #0a0a0f; font-weight: bold; font-size: 14px; padding: 4px 8px;');
console.log('%c gurudastagiri3@gmail.com | github.com/Dastagiri3 ',
    'color: #4dffc8; font-size: 12px;');