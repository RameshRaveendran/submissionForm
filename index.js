
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const form = this; // Store the form element

        emailjs.sendForm("service_3juf4eo", "template_lh23z6m", form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Optionally, display a success message to the user here
                const formStatus = document.getElementById('formStatus');
                if (formStatus) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.className = 'success'; // Add a success class for styling
                    form.reset(); // Clear the form
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = '';
                    }, 5000);
                }
            }, function(error) {
                console.log('FAILED...', error);
                // Display an error message to the user
                const formStatus = document.getElementById('formStatus');
                if (formStatus) {
                    formStatus.textContent = 'Failed to send message. Please try again later.';
                    formStatus.className = 'error'; // Add an error class for styling
                    console.error('EmailJS Error:', error); // Log the error for debugging
                }
            });
    });
}
