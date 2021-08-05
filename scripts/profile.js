// Display Username in the banner
const username_banner = document.getElementById("Username-banner");
username_banner.innerHTML = localStorage.getItem("currentUser");

// Display Password Hash in the maincontent
const password_hashEl = document.getElementById("password-hash");
password_hashEl.innerHTML = localStorage.getItem("currentPass");
