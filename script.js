console.log("Script loaded");

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide the submit button text and show the spinner
    var submitBtn = document.getElementById('submitBtn');
    var buttonText = document.getElementById('buttonText');
    var spinner = document.getElementById('spinner');

    submitBtn.disabled = true;
    buttonText.textContent = 'Please wait...'; // Change text
    spinner.style.display = 'inline-block'; // Show spinner

    // Simulate a network request or processing delay
    setTimeout(function() {
        // Reset the submit button
        submitBtn.disabled = false;
        buttonText.textContent = 'Submit'; // Reset text
        spinner.style.display = 'none'; // Hide spinner

        // Display success message
        alert('Form submitted successfully!');
    }, 5000); // 5 seconds delay
});

document.addEventListener("DOMContentLoaded", function() {
    let mybutton = document.getElementById("btn-back-to-top");
    let introSection = document.getElementById("intro");

    if (!introSection) {
        console.error("Intro section not found. Check the ID.");
        return;
    }

    let triggerShowButtonPosition = introSection.offsetHeight;
    console.log("Trigger position:", triggerShowButtonPosition);

    window.onscroll = function() {
        console.log("Current scroll:", window.pageYOffset);
        if (window.pageYOffset >= triggerShowButtonPosition) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    mybutton.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});


