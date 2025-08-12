function showTab(tabId){
      document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
    }
    document.addEventListener('DOMContentLoaded', () => {
      showTab('home');
    });
// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true,     // whether animation should happen only once - while scrolling down
});

// Change navbar color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#007bff'; // Change to blue
        navbar.style.transition = 'background-color 0.3s ease';
    } else {
        navbar.style.backgroundColor = 'transparent'; // Change back to transparent
    }
});