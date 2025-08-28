// Modern JavaScript for Miloverse - 21st Century Interactions

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
}

// Initialize GSAP ScrollTrigger
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// DOM Elements
const languageButtons = document.querySelectorAll('.lang-btn');
const scrollTopBtn = document.getElementById('scrollTop');
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

// Language Selector Functionality
function changeLanguage(lang, event) {
    // Remove active class from all buttons
    languageButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Here you can add actual language switching logic
    // For now, just update the UI
    console.log('Language changed to:', lang);
    
    // Add animation to language button
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 150);
}

// Scroll to Top Functionality
function scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Fallback for older browsers
        window.scrollTo(0, 0);
    }
}

// Show/Hide Scroll to Top Button
function toggleScrollTopButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// Smooth Scrolling for Navigation Links
function smoothScrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100;
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            // Fallback for older browsers
            window.scrollTo(0, offsetTop);
        }
    }
}

// Intersection Observer for Section Animations
function createSectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation to children
                const animatedElements = entry.target.querySelectorAll('[data-aos]');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Parallax Effect for Background
function createParallaxEffect() {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.floating-particles, .gradient-overlay');
    
    parallaxElements.forEach(element => {
        const speed = element.classList.contains('floating-particles') ? 0.5 : 0.3;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Mouse Movement Effect
function createMouseMovementEffect() {
    const heroSection = document.querySelector('.hero-header');
    const avatarContainer = document.querySelector('.avatar-container');
    
    if (!heroSection || !avatarContainer) return;
    
    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xAxis = (clientX / innerWidth - 0.5) * 20;
        const yAxis = (clientY / innerHeight - 0.5) * 20;
        
        avatarContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    heroSection.addEventListener('mouseleave', () => {
        avatarContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}

// Typing Effect for Hero Title
function createTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Particle Animation
function createParticleAnimation() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: var(--primary-purple);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particles
function addParticleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Hover Effects for Interactive Elements
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.nav-link, .game-link, .artist-link, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Loading Animation
function createLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Loading Miloverse...</div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    `;
    
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Add loader CSS
function addLoaderCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .loader-content {
            text-align: center;
        }
        
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top: 3px solid var(--primary-purple);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        .loader-text {
            color: var(--text-secondary);
            font-size: 1.1rem;
            letter-spacing: 0.1em;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Cursor Trail Effect
function createCursorTrail() {
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    cursorTrail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary-purple);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.6;
        transition: transform 0.1s ease;
    `;
    
    document.body.appendChild(cursorTrail);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateCursorTrail() {
        cursorTrail.style.left = mouseX - 10 + 'px';
        cursorTrail.style.top = mouseY - 10 + 'px';
        requestAnimationFrame(updateCursorTrail);
    }
    
    updateCursorTrail();
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add CSS for particles and loader
    addParticleCSS();
    addLoaderCSS();
    
    // Create loading animation
    createLoadingAnimation();
    
    // Initialize all features after a short delay
    setTimeout(() => {
        // Event listeners
        if (languageButtons.length > 0) {
            languageButtons.forEach(btn => {
                btn.addEventListener('click', (event) => changeLanguage(btn.dataset.lang, event));
            });
        }
        
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', scrollToTop);
        }
        
        window.addEventListener('scroll', toggleScrollTopButton);
        
        // Navigation smooth scrolling
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', smoothScrollToSection);
            });
        }
        
        // Initialize animations and effects
        createSectionObserver();
        createMouseMovementEffect();
        createTypingEffect();
        createParticleAnimation();
        addHoverEffects();
        createCursorTrail();
        
        // GSAP animations
        if (typeof gsap !== 'undefined') {
            gsap.from('.hero-title', {
                duration: 1.5,
                y: 100,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.5
            });
            
            gsap.from('.hero-subtitle', {
                duration: 1.5,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 1
            });
            
            gsap.from('.hero-avatar', {
                duration: 1.5,
                scale: 0,
                rotation: 360,
                ease: 'back.out(1.7)',
                delay: 1.5
            });
            
            // Stagger animation for navigation
            gsap.from('.nav-link', {
                duration: 0.8,
                y: -50,
                opacity: 0,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 2
            });
            
            // Scroll-triggered animations
            const contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(section => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            });
        }
        
    }, 1500);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(createParallaxEffect, 16));

// Add some extra interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .launcher-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(139, 92, 246, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        button, .launcher-btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(rippleStyle);
});

// Add some ambient background animations
function createAmbientAnimations() {
    const ambientContainer = document.createElement('div');
    ambientContainer.className = 'ambient-container';
    ambientContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    // Create floating orbs
    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'ambient-orb';
        orb.style.cssText = `
            position: absolute;
            width: ${Math.random() * 200 + 100}px;
            height: ${Math.random() * 200 + 100}px;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            animation: ambient-float ${Math.random() * 20 + 20}s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        ambientContainer.appendChild(orb);
    }
    
    document.body.appendChild(ambientContainer);
    
    // Add ambient CSS
    const ambientStyle = document.createElement('style');
    ambientStyle.textContent = `
        @keyframes ambient-float {
            0%, 100% {
                transform: translateY(0px) translateX(0px) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-100px) translateX(50px) scale(1.1);
                opacity: 0.5;
            }
            50% {
                transform: translateY(-50px) translateX(-50px) scale(0.9);
                opacity: 0.4;
            }
            75% {
                transform: translateY(50px) translateX(100px) scale(1.2);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(ambientStyle);
}

// Initialize ambient animations after page load
window.addEventListener('load', () => {
    setTimeout(createAmbientAnimations, 2000);
}); 