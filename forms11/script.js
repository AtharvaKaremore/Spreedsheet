document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Bootstrap validation
    if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add("was-validated");
        return;
    }

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;

    // Encrypt password using SHA-256
    let encryptedPassword = CryptoJS.SHA256(password).toString();

    let formData = {
        fullName,
        email,
        phone,
        dob,
        gender,
        address,
        password: encryptedPassword // Send encrypted password
    };

    fetch("https://script.google.com/macros/s/AKfycbyr9dPw-8IsxV1HccYflRz8ft5vxotwH10JmqwHWZfFJtlpazONaN8Px3GYlONEyrKLRQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(() => {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }).catch(error => {
        console.error("Error:", error);
    });
});
