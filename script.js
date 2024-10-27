document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;

    if (firstName && lastName && subject && message && email) {
        alert('Thank you, ' + firstName + '! Your message has been sent.');
    } else {
        alert('Please fill out all fields.');
    }
});
