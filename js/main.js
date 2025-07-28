document.addEventListener('DOMContentLoaded', () => {

    // Fungsi untuk inisialisasi skrip global (berjalan di semua halaman)
    const initGlobalScripts = () => {
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('open');
            });
        }
    };

    // Fungsi untuk inisialisasi skrip khusus Homepage
    const initHomepageScripts = () => {
        // Typing Effect
        const taglineElement = document.querySelector('.tagline');
        if (taglineElement) {
            const typingTexts = ["We build brands.", "We drive traffic.", "We deliver results."];
            let textIndex = 0, charIndex = 0, isDeleting = false;
            function type() {
                const currentText = typingTexts[textIndex];
                const speed = isDeleting ? 75 : 150;
                if (isDeleting) {
                    taglineElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    taglineElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                if (!isDeleting && charIndex === currentText.length) {
                    setTimeout(() => { isDeleting = true; type(); }, 1500);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % typingTexts.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Statistics Counter
        const statElements = document.querySelectorAll('.stat-item h2');
        if (statElements.length > 0) {
            const statObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const originalText = element.textContent;
                        const target = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
                        const suffix = originalText.replace(/[0-9]/g, '');
                        if (isNaN(target)) return;
                        let current = 0;
                        const duration = 2000;
                        const increment = target / (duration / 16);
                        function update() {
                            current += increment;
                            if (current < target) {
                                element.textContent = Math.ceil(current).toLocaleString() + suffix;
                                requestAnimationFrame(update);
                            } else {
                                element.textContent = target.toLocaleString() + suffix;
                            }
                        }
                        update();
                        observer.unobserve(element);
                    }
                });
            }, { threshold: 0.5 });
            statElements.forEach(el => statObserver.observe(el));
        }

        // "Learn More" Button Toggle
        const serviceButtons = document.querySelectorAll('#services .service-card button');
        serviceButtons.forEach(button => {
            button.addEventListener('click', () => {
                const details = button.nextElementSibling;
                const isVisible = details.style.display === 'block';
                details.style.display = isVisible ? 'none' : 'block';
                button.textContent = isVisible ? 'Show Less' : 'Learn More';
            });
        });

        // Testimonials Carousel
        if (typeof Swiper !== 'undefined') {
            new Swiper('.swiper', {
                loop: true,
                autoplay: { delay: 4000, disableOnInteraction: false },
                slidesPerView: 1,
                spaceBetween: 30,
                grabCursor: true,
            });
        }
    };

    // Fungsi untuk inisialisasi skrip khusus Halaman About
    const initAboutPageScripts = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        timelineItems.forEach(item => timelineObserver.observe(item));
    };

    // Fungsi untuk inisialisasi skrip khusus Halaman Services
    const initServicesPageScripts = () => {
        // Service Catalog Filter
        const filterButtons = document.querySelectorAll('#service-catalog .filter-btn');
        const serviceItems = document.querySelectorAll('.service-item');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.dataset.filter;
                serviceItems.forEach(item => {
                    item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
                });
            });
        });

        // Price Calculator
        const form = document.getElementById('calculator-form');
        const totalDisplay = document.querySelector('.total-display strong');
        if (form) {
            form.addEventListener('change', () => {
                let total = 0;
                form.querySelectorAll('select').forEach(select => {
                    total += parseInt(select.value, 10);
                });
                totalDisplay.textContent = `$${total}`;
            });
        }
    };

    // Fungsi untuk inisialisasi skrip khusus Halaman Portfolio
    const initPortfolioPageScripts = () => {
        // Portfolio Filter
        const filterButtons = document.querySelectorAll('#portfolio .filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.dataset.filter;
                portfolioItems.forEach(item => {
                    item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
                });
            });
        });

        // Lightbox Gallery
        if (typeof basicLightbox !== 'undefined') {
            const portfolioLinks = document.querySelectorAll('.portfolio-item a');
            portfolioLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    basicLightbox.create(`<img src="${link.href}">`).show();
                });
            });
        }
    };

    // Fungsi untuk inisialisasi skrip khusus Halaman Contact
    const initContactPageScripts = () => {
        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const answer = item.querySelector('.faq-answer');
                const isOpen = item.classList.contains('open');
                
                faqItems.forEach(i => {
                    i.classList.remove('open');
                    i.querySelector('.faq-answer').style.display = 'none';
                });

                if (!isOpen) {
                    item.classList.add('open');
                    answer.style.display = 'block';
                }
            });
        });

        // Real-time Form Validation
        const contactForm = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const showError = (input, message) => { input.nextElementSibling.textContent = message; };
        const clearError = (input) => { input.nextElementSibling.textContent = ''; };

        nameInput.addEventListener('input', () => { (nameInput.value.trim() === '') ? showError(nameInput, 'Name is required.') : clearError(nameInput); });
        emailInput.addEventListener('input', () => { !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) ? showError(emailInput, 'Please enter a valid email address.') : clearError(emailInput); });
        messageInput.addEventListener('input', () => { (messageInput.value.trim().length < 10) ? showError(messageInput, 'Message must be at least 10 characters long.') : clearError(messageInput); });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (This is a demo)');
        });
    };
    
    // Menjalankan skrip yang sesuai berdasarkan elemen unik di setiap halaman.
    initGlobalScripts();
    if (document.querySelector('.hero')) initHomepageScripts();
    if (document.querySelector('#timeline')) initAboutPageScripts();
    if (document.querySelector('#service-catalog')) initServicesPageScripts();
    if (document.querySelector('#portfolio')) initPortfolioPageScripts();
    if (document.querySelector('#contact-form')) initContactPageScripts();

});