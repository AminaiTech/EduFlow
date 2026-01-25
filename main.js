document.addEventListener('DOMContentLoaded', () => {
    // Header background change on scroll
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.padding = '5px 0';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
            header.style.padding = '0';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .stat-item, .cta-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Add animation active class style via JS to avoid CSS bloat
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Form submission handling
    const form = document.querySelector('.subscribe-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            const button = form.querySelector('button');
            
            button.textContent = 'Subscribed!';
            button.style.background = 'var(--accent)';
            form.querySelector('input').value = '';
            
            setTimeout(() => {
                button.textContent = 'Request a Demo';
                button.style.background = 'var(--primary)';
            }, 3000);
            
            console.log(`Demo request for: ${email}`);
        });
    }
});
