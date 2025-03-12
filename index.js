// index.js

// Function to display a welcome message
function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to my personal website!";
    console.log(welcomeMessage);
    document.getElementById('welcome').innerText = welcomeMessage;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Name: ${name}, Email: ${email}`);
    alert(`Thank you for contacting me, ${name}!`);
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);

// Call the welcome message function on page load
window.onload = displayWelcomeMessage;