// Contact page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact page loaded');
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Send the form data using EmailJS
            emailjs.sendForm('service_5wqqiqn', 'template_lu372om', contactForm)
                .then((result) => {
                    console.log('Email successfully sent!', result.text);
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, (error) => {
                    console.error('Failed to send email:', error);
                    alert('There was an error sending your message. Please try again later.');
                });
        });
    }
    
    // Add form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        // Remove focus effect when input is empty
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Social link hover effects (if applicable)
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        const iconPlaceholder = icon.querySelector('.icon-placeholder');
        
        icon.addEventListener('mouseenter', () => {
            iconPlaceholder.style.backgroundColor = 'rgba(100, 255, 218, 0.3)';
        });
        
        icon.addEventListener('mouseleave', () => {
            iconPlaceholder.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
        });
    });
});
