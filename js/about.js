// About page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('About page loaded');
    
    // You can add animations, interactions, or other functionality
    // specific to the About page here
    
    // Example: Fade in skills with delay
    const skillItems = document.querySelectorAll('.skill-category li');
    
    skillItems.forEach((item, index) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease';
            item.style.opacity = 1;
        }, 100 * index);
    });
});