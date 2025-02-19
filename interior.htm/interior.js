document. querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor. addEventListener('click', function(e){
        e. preventDefault();
        document. querySelector(this. getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('thank you for message! We will get back to you soon.');
    this. reset();
} );
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Get the form element
    const form = document.getElementById("contact-form");

    // Add event listener to handle form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission (page reload)
        event.preventDefault();

        // Get form data
        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;

        // Simple validation for name and email
        if (!name || !email) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate sending the data (replace this with actual AJAX or API call)
        setTimeout(function () {
            // Display success message after form is 'sent'
            alert("Thank you, " + name + "! Your message has been sent.");
            
            // Optionally, reset the form fields after submission
            form.reset();
        }, 1000); // Simulate 1 second delay for sending form data
    });
});
