document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and portfolio items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Animation duration in milliseconds
    const ANIMATION_DURATION = 400;

    // Function to handle the filtering
    function filterPortfolio(category) {
        portfolioItems.forEach(item => {
            // Get the item's category
            const itemCategory = item.dataset.category;
            
            // Remove any existing transition classes
            item.classList.remove('portfolio-item-exit');
            item.classList.remove('portfolio-item-enter');
            
            // Determine if the item should be shown
            const shouldShow = category === 'all' || itemCategory === category;
            
            if (shouldShow) {
                // Show items that match the category
                item.style.display = 'block';
                // Trigger enter animation
                setTimeout(() => {
                    item.classList.add('portfolio-item-enter');
                }, 10);
            } else {
                // Hide items that don't match
                item.classList.add('portfolio-item-exit');
                setTimeout(() => {
                    item.style.display = 'none';
                }, ANIMATION_DURATION);
            }
        });
    }

    // Add click handlers to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the filter category and apply filtering
            const category = button.dataset.filter;
            filterPortfolio(category);
        });
    });

    // Initialize with 'all' category
    filterPortfolio('all');

    // Add hover animations
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
        });
    });

    // Optional: Add scroll reveal animation
    function revealOnScroll() {
        portfolioItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight * 0.85) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial check for visible items
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
});
