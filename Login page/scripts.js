function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        showModal("Please fill in both fields.");
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        showModal(`Logged in as ${username}`);
    }
}

function showModal(message) {
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");
    modalText.textContent = message;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function continueLogin() {
    closeModal();
    // Redirect to another page or perform other actions after login
    window.location.href = "dashboard.html"; // Redirect to dashboard page
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
