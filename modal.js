// Modal functionality
function openModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleSignup(event) {
    if (event) event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Welcome to ArchAdemia! Your account has been created successfully.');
        closeModal();
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Please fill in all required fields.');
    }
}

function socialLogin(provider) {
    alert(`Signing up with ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`);
    closeModal();
}

function switchToLogin() {
    alert('Switching to login form...');
}

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('signupModal');
    const closeBtn = document.getElementById('closeModal');
    
    // Get all CTA buttons that should open the modal
    const allCtaButtons = [
        document.querySelector('.hero .cta-btn'),
        document.querySelector('.stats .cta-btn'),
        ...document.querySelectorAll('.explore-btn'),
        document.querySelector('.community-content .cta-btn'),
        document.querySelector('.professional-content .cta-btn'),
        document.querySelector('.social-content .cta-btn')
    ];
    
    // Add click handlers to each CTA button
    allCtaButtons.forEach(function(btn) {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }
    });
    
    // Close modal events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Make openModal available globally for header component
window.openModal = openModal;
