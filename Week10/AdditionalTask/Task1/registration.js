async function handleRegistration(event) {
    event.preventDefault();

    const messageDiv = document.getElementById('registration-message');
    
    const formData = {
        name: document.getElementById('reg-name').value,
        username: document.getElementById('reg-username').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value,
        age: document.getElementById('reg-age').value,
        phone: document.getElementById('reg-phone').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value
    };

    try {
        const response = await fetch('users.json');
        if (!response.ok) throw new Error("Could not load user database.");
        
        const existingUsers = await response.json();

        const isUsernameTaken = existingUsers.some(u => u.username === formData.username);
        const isEmailTaken = existingUsers.some(u => u.email === formData.email);

        if (isUsernameTaken) {
            displayMessage("Registration failed: Username already exists.", "danger");
        } else if (isEmailTaken) {
            displayMessage("Registration failed: Email is already registered.", "danger");
        } else {
            displayMessage("Success! Your account has been created (Simulated).", "success");
            console.log("New User Data:", formData);
        }

    } catch (error) {
        displayMessage("Error: " + error.message, "danger");
    }
}

function displayMessage(text, type) {
    const messageDiv = document.getElementById('registration-message');
    messageDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${text}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}