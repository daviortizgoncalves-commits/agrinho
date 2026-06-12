// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animated Counter
const counters = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.statistics');
let animated = false;

function animateNumbers() {
    if (animated) return;
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
    
    animated = true;
}

// Intersection Observer for Statistics
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    observer.observe(statsSection);
}

// Hero Stats Animation
const heroStats = document.querySelectorAll('.hero-stats .stat-number');
let heroAnimated = false;

function animateHeroStats() {
    if (heroAnimated) return;
    
    heroStats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.innerText = Math.ceil(current) + '%';
                setTimeout(updateStat, 20);
            } else {
                stat.innerText = target + '%';
            }
        };
        
        updateStat();
    });
    
    heroAnimated = true;
}

// Intersection Observer for Hero Stats
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateHeroStats();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (document.querySelector('.hero-stats')) {
    heroObserver.observe(document.querySelector('.hero-stats'));
}

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');
const solutionsSection = document.querySelector('.solutions');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (solutionsSection) {
    progressObserver.observe(solutionsSection);
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Gallery Lightbox Effect
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
        overlay.style.zIndex = '2000';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'pointer';
        
        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.borderRadius = '10px';
        
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,
