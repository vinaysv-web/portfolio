// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    // Update toggle button class
    themeToggle.className = `theme-toggle ${savedTheme}`;
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        themeToggle.className = `theme-toggle ${newTheme}`;
        
        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Bootstrap mobile navbar close on link click
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                new bootstrap.Collapse(navbarCollapse, 'toggle');
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                const statusDiv = document.getElementById('submit-status');
                statusDiv.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Show success message
                statusDiv.textContent = 'Message sent successfully!';
                statusDiv.className = 'submit-status success';
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide status after 5 seconds
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
});

// Bootstrap mobile navbar close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const navbarToggler = document.querySelector('.navbar-toggler');
            new bootstrap.Collapse(navbarCollapse, 'toggle');
        }
    });
});