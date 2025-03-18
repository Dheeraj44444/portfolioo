// Projects page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Projects page loaded');
    
    // Animate project cards on load
    const projectCards = document.querySelectorAll('.project-card');
    
    // Set initial state
    projectCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        
        // Animate with delay based on index
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Add hover effect for project cards
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image');
        
        card.addEventListener('mouseenter', () => {
            image.style.transition = 'transform 0.3s ease';
            image.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
    
    // Handle project links
    const projectLinks = document.querySelectorAll('.project-links a');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // If the link is just a placeholder (#), prevent default behavior
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This is a placeholder link. Add your actual project URL here.');
            }
        });
    });
});