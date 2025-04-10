document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = window.location.pathname;
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active class to current page link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Mobile menu functionality
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    }

    // Remove scroll animations only
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';

    // Remove scroll event listeners that handle animations
    window.removeEventListener('scroll', function() {});
    
    // Keep smooth scrolling for anchor links but without animations
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'auto' });
            }
        });
    });
});

// Remove all scroll event listeners
window.removeEventListener('scroll', function() {});
window.removeEventListener('wheel', function() {});
window.removeEventListener('touchmove', function() {});

// Remove all IntersectionObserver instances
if (typeof IntersectionObserver !== 'undefined') {
    const observers = document.querySelectorAll('[data-observer]');
    observers.forEach(observer => {
        observer.removeAttribute('data-observer');
    });
}

// Remove all animation frames
cancelAnimationFrame(0);

// Remove all timeouts
clearTimeout(0);
clearInterval(0);

// Remove all event listeners for animations
document.removeEventListener('animationstart', function() {});
document.removeEventListener('animationend', function() {});
document.removeEventListener('animationiteration', function() {});
document.removeEventListener('transitionstart', function() {});
document.removeEventListener('transitionend', function() {});
document.removeEventListener('transitioncancel', function() {});

// Remove all CSS animations
document.querySelectorAll('*').forEach(element => {
    element.style.animation = 'none';
    element.style.transition = 'none';
    element.style.transform = 'none';
});

// Force immediate rendering
document.body.style.animation = 'none';
document.body.style.transition = 'none';
document.body.style.transform = 'none';

// Remove all smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView();
        }
    });
});
