function sendMail(contactForm) {
    emailjs.send("gmail", "yummy_bites", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Contact_Us": contactForm.contactUs.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
console.log("hello")