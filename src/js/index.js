
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your name.');
        }

        // Validate email
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        // Additional validation logic for other fields

        return isValid;
    }
});
// js/dynamic-updates.js
document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    // Add input event listener to the message input field
    messageInput.addEventListener('input', function () {
        // Update the character count dynamically
        const currentLength = messageInput.value.length;
        charCount.textContent = currentLength;

        // Add styling based on the character count (customize as needed)
        if (currentLength > 100) {
            charCount.style.color = 'red'; // Change color to red if character count exceeds 100
        } else {
            charCount.style.color = 'black'; // Reset color to black
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.container__header__navigation__hamburger');
    const toggleMenu = document.querySelector('.container__header__navigation__toggle-menu');
    const menu = document.querySelector('.container__header__navigation__menu');

    // Add click event listener to the hamburger icon
    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show-menu'); // Toggle the 'show-menu' class on the menu
    });

    // Add click event listener to the toggle menu
    toggleMenu.addEventListener('click', function () {
        menu.classList.toggle('show-menu'); // Toggle the 'show-menu' class on the menu
    });
});
