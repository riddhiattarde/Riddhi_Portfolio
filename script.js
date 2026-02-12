// Theme Toggle Logic
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if(document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'RESTORE';
    } else {
        toggleBtn.textContent = 'OVERRIDE';
    }
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const emailField = document.getElementById('email').value;
    
    if (!emailField.includes('@')) {
        event.preventDefault(); // Stop form from sending
        alert('Even a glitchy compiler needs an @ sign. Check your email!');
    } else {
        alert('Message sent to the noise. (Simulation Only)');
    }
});