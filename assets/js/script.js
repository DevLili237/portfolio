// Typing Effect for Subtitle
   // Typing Effect for Multiple Elements
   const typingConfigs = [
        {
            element: document.querySelector('#home #typing-text'),
            texts: ["A Full-stack Developer", "A Tech Innovator", "A Creative Coder"," A UI/UX Designer","A Graphic Designer","A Team Player"],
            speed: 100,
            eraseSpeed: 50
        },
        {
            element: document.querySelector('#about #typing-text'),
            texts: ["A Full-stack Developer", "A Tech Innovator", "A Creative Coder"," A UI/UX Designer","A Graphic Designer","A Team Player"],
            speed: 100,
            eraseSpeed: 50
        }
    ];

    function typeText(config, textIndex = 0, callback) {
        const { element, texts, speed, eraseSpeed } = config;
        const text = texts[textIndex];
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, 1000);
            }
        }
        type();
    }

    function eraseText(config, callback) {
        const { element, eraseSpeed } = config;
        function erase() {
            if (element.textContent.length > 0) {
                element.textContent =
                    element.textContent.slice(0, -1);
                setTimeout(erase, eraseSpeed);
            } else if (callback) {
                callback();
            }
        }
        erase();
    }

    function typeAndErase(config) {
        let currentTextIndex = 0;

        function cycle() {
            typeText(config, currentTextIndex, () => {
                eraseText(config, () => {
                    currentTextIndex = (currentTextIndex + 1) % config.texts.length;
                    cycle();
                });
            });
        }

        cycle();
    }

    // Initialize typing for each configured element
    typingConfigs.forEach(config => {
        if (config.element) {
            typeAndErase(config);
        }
    });

            // Add smooth scrolling to all links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add mobile menu functionality
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });


    // Existing smooth scrolling and navigation scripts remain the same
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add form submission handler (you would replace this with actual backend processing)
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! I will get back to you soon.');
    });
