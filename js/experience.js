// Experience page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Experience page loaded');
    
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Set initial state
    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
    });
    
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };
    
    // Function to handle scroll animation
    const handleScroll = () => {
        timelineItems.forEach(item => {
            if (isInViewport(item) && item.style.opacity === '0') {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Run once to check initial state
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});