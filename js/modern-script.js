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
    
    // Load translations and apply them
    loadTranslations(lang);
    
    // Add animation to language button
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 150);
}

// Load and apply translations
async function loadTranslations(lang) {
    try {
        // Import translations dynamically
        const { translations } = await import('../src/translations.js');
        
        if (translations && translations[lang]) {
            applyTranslations(translations[lang]);
        }
    } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback: load translations from a simpler approach
        loadTranslationsFallback(lang);
    }
}

// Fallback method for loading translations
function loadTranslationsFallback(lang) {
    // Define translations inline as fallback
    const translations = {
        pl: {
            welcomeIn: "WELCOME IN",
            subtitle: "Web3 • Gaming • Muzyka • Development",
            about: "O mnie",
            gaming: "Gaming",
            music: "Muzyka",
            contacts: "Kontakt",
            spotifyPlaylist: "Spotify Playlist",
            aboutTitle: "O mnie",
            aboutIntro: "Jestem",
            aboutIntro2: "ale w Web2 jak i Web3 możecie mnie znać jako",
            aboutDescription: "Entuzjasta Web3 z aspiracjami na zostanie full stack developer, odwieczny gracz, miłośnik książek (głównie popularnonaukowych i fantasy), multiinstrumentalista, uzależniony od samorozwoju, cichy zwolennik transhumanizmu.",
            web3Title: "Web3 & Kryptowaluty",
            web3Description1: "Zajmuję się kryptowalutami od dość długiego czasu i oszalałem na punkcie Web3, oraz mnóstwa możliwości, jakie oferuje. Chcę być częścią rozwoju tego półświatka co nakłoniło mnie aby w końcu rozpocząć naukę w kierunku",
            web3Description2: "Robiłem wiele rzeczy związanych z programowaniem, głównie kopiuj/wklej z pomocą YouTube lub metodą \"prób i błędów\". Zaczęło się to już w czasach młodzieńczych (myślę, że w wieku 11/12 lat były pierwsze próby), ale zawsze znajdywałem tysiące wymówek do rozpoczęcia studiów/kursów/nauki \"na własną rękę\".",
            web3Description3: "Jakiś czas temu postanowiłem skupić się tylko na",
            web3Description4: "Głównie inwestuje w waluty i NFT, z których w dużej mierze mogę korzystać w grach, ale również w surowce.",
            gamingTitle: "Gaming & Play2Earn",
            gamingDescription1: "Od najmłodszych lat jestem zapalonym graczem i zawsze uwielbiałem spędzać czas na grach komputerowych. Przez wiele lat grałem na różnych konsolach PlayStation oraz na komputerze, w szczególności",
            gamingDescription2: "Jednak nie tylko tego typu gry mnie interesowały - na swoim telefonie lubię grać w",
            gamingDescription3: "oraz inne gatunki, które przyciągają moją uwagę. To właśnie dzięki graniu zyskałem nie tylko rozrywkę, ale również wiele pozytywnych doświadczeń i umiejętności, takich jak",
            usedLaunchers: "Używane Launchery:",
            solido: "Solido",
            elixir: "Elixir",
            favoriteBlockchainGames: "Ulubione Gry Blockchain:",
            musicTitle: "Muzyka & Inspiracje",
            musicDescription1: "Słucham dosłownie wszystkiego,",
            musicDescription2: "Uwielbiam muzykę lat '70-'90 i polski punk z okresu komunistycznego, muzykę elektroniczną, klubową... no i na dobrą sprawę mógłbym tak wymieniać w nieskończoność.",
            musicDescription3: "Skończyłem szkołę muzyczną i z zamiłowania jestem",
            musicDescription4: "(ale wszystko trafia \"do szuflady\"), też",
            currentlyListening: "Obecnie na słuchawkach:",
            topSongsTitle: "TOP 11 SONGS",
            song: "Utwór",
            artist: "Wykonawca",
            album: "Album"
        },
        en: {
            welcomeIn: "WELCOME IN",
            subtitle: "Web3 • Gaming • Music • Development",
            about: "About",
            gaming: "Gaming",
            music: "Music",
            contacts: "Contact",
            spotifyPlaylist: "Spotify Playlist",
            aboutTitle: "About Me",
            aboutIntro: "I am",
            aboutIntro2: "but in Web2 as well as Web3 you may know me as",
            aboutDescription: "Web3 enthusiast with aspirations to become a full stack developer, lifelong gamer, book lover (mainly popular science and fantasy), multi-instrumentalist, addicted to self-development, quiet supporter of transhumanism.",
            web3Title: "Web3 & Cryptocurrencies",
            web3Description1: "I've been involved with cryptocurrencies for quite a long time and I'm crazy about Web3 and the many opportunities it offers. I want to be part of the development of this underworld which prompted me to finally start learning towards",
            web3Description2: "I've done many things related to programming, mainly copy/paste with the help of YouTube or the trial and error method. It started already in my youth (I think at the age of 11/12 there were first attempts), but I always found thousands of excuses to start studies/courses/learning \"on my own\".",
            web3Description3: "Some time ago I decided to focus only on",
            web3Description4: "I mainly invest in currencies and NFTs, which I can largely use in games, but also in raw materials.",
            gamingTitle: "Gaming & Play2Earn",
            gamingDescription1: "From an early age I've been a passionate gamer and I've always loved spending time on computer games. For many years I played on various PlayStation consoles and on computer, especially",
            gamingDescription2: "However, not only this type of games interested me - on my phone I like to play",
            gamingDescription3: "and other genres that catch my attention. It was through gaming that I gained not only entertainment, but also many positive experiences and skills, such as",
            usedLaunchers: "Used Launchers:",
            solido: "Solido",
            elixir: "Elixir",
            favoriteBlockchainGames: "Favorite Blockchain Games:",
            musicTitle: "Music & Inspirations",
            musicDescription1: "I listen to literally everything,",
            musicDescription2: "I love music from the '70s-'90s and Polish punk from the communist period, electronic music, club music... and actually I could go on listing forever.",
            musicDescription3: "I graduated from music school and by passion I am a",
            musicDescription4: "(but everything goes \"to the drawer\"), I also",
            currentlyListening: "Currently on headphones:",
            topSongsTitle: "TOP 11 SONGS",
            song: "Song",
            artist: "Artist",
            album: "Album"
        },
        nl: {
            welcomeIn: "WELCOME IN",
            subtitle: "Web3 • Gaming • Muziek • Development",
            about: "Over mij",
            gaming: "Gaming",
            music: "Muziek",
            contacts: "Contact",
            spotifyPlaylist: "Spotify Afspeellijst",
            aboutTitle: "Over mij",
            aboutIntro: "Ik ben",
            aboutIntro2: "maar in Web2 zowel als Web3 kun je me kennen als",
            aboutDescription: "Web3-enthousiast met aspiraties om full stack developer te worden, levenslange gamer, boekenliefhebber (voornamelijk populairwetenschappelijk en fantasy), multi-instrumentalist, verslaafd aan zelfontwikkeling, stille voorstander van transhumanisme.",
            web3Title: "Web3 & Cryptocurrencies",
            web3Description1: "Ik ben al geruime tijd bezig met cryptocurrencies en ik ben gek op Web3 en de vele mogelijkheden die het biedt. Ik wil deel uitmaken van de ontwikkeling van deze onderwereld wat me ertoe bracht om eindelijk te beginnen met leren in de richting van",
            web3Description2: "Ik heb veel dingen gedaan die verband houden met programmeren, voornamelijk kopiëren/plakken met behulp van YouTube of de trial and error methode. Het begon al in mijn jeugd (ik denk op de leeftijd van 11/12 jaar waren er eerste pogingen), maar ik vond altijd duizenden excuses om te beginnen met studies/cursussen/leren \"op eigen houtje\".",
            web3Description3: "Enige tijd geleden besloot ik me alleen te concentreren op",
            web3Description4: "Ik investeer voornamelijk in valuta's en NFT's, die ik grotendeels kan gebruiken in games, maar ook in grondstoffen.",
            gamingTitle: "Gaming & Play2Earn",
            gamingDescription1: "Van jongs af aan ben ik een gepassioneerde gamer en ik heb altijd graag tijd doorgebracht met computerspellen. Jarenlang speelde ik op verschillende PlayStation-consoles en op computer, vooral",
            gamingDescription2: "Echter, niet alleen dit type spellen interesseerde me - op mijn telefoon speel ik graag",
            gamingDescription3: "en andere genres die mijn aandacht trekken. Het was door gamen dat ik niet alleen vermaak kreeg, maar ook veel positieve ervaringen en vaardigheden, zoals",
            usedLaunchers: "Gebruikte Launchers:",
            solido: "Solido",
            elixir: "Elixir",
            favoriteBlockchainGames: "Favoriete Blockchain Spellen:",
            musicTitle: "Muziek & Inspiraties",
            musicDescription1: "Ik luister naar letterlijk alles,",
            musicDescription2: "Ik hou van muziek uit de jaren '70-'90 en Poolse punk uit de communistische periode, elektronische muziek, clubmuziek... en eigenlijk zou ik zo oneindig door kunnen gaan met opsommen.",
            musicDescription3: "Ik ben afgestudeerd van de muziekschool en uit passie ben ik een",
            musicDescription4: "(maar alles gaat \"naar de la\"), ik",
            currentlyListening: "Momenteel op koptelefoon:",
            topSongsTitle: "TOP 11 LIEDJES",
            song: "Liedje",
            artist: "Artiest",
            album: "Album"
        }
    };
    
    if (translations[lang]) {
        applyTranslations(translations[lang]);
    }
}

// Apply translations to the DOM
function applyTranslations(translations) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
    
    // Update page title and meta description if available
    if (translations.title) {
        document.title = translations.title;
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = translations.lang || 'pl';
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

// Parallax Effect for Background - Disabled to fix visual issues
function createParallaxEffect() {
    // Disabled parallax effect to prevent visual glitches
    return;
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

// Particle Animation - Disabled to fix visual issues
function createParticleAnimation() {
    // Disabled particle animation to prevent visual glitches
    return;
}

// Add CSS for particles - Disabled to fix visual issues
function addParticleCSS() {
    // Disabled particle CSS to prevent visual glitches
    return;
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

// Cursor Trail Effect - Disabled to improve mobile experience
function createCursorTrail() {
    // Disabled cursor trail effect to improve mobile readability
    return;
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
            // Add CSS for particles and loader
        // addParticleCSS(); // Disabled to fix visual glitches
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
            
            // Initialize with Polish language
            loadTranslationsFallback('pl');
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
        // createParticleAnimation(); // Disabled to fix visual glitches
        addHoverEffects();
        // createCursorTrail(); // Disabled to improve mobile experience
        
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

// Apply throttling to scroll events - Disabled to fix visual glitches
// window.addEventListener('scroll', throttle(createParallaxEffect, 16));

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