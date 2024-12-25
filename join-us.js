document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you for signing up, ${name}! We'll be in touch at ${email}.`);
        document.getElementById('signupForm').reset();
    } else {
        alert('Please fill in both fields.');
    }
});
