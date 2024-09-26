// script.js
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            var targetId = event.target.getAttribute('href'); // Get target section ID
            var targetElement = document.querySelector(targetId); // Find target element
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target element
        });
    });
});
