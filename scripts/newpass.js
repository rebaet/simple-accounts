if (localStorage.getItem("data")) {
  data = JSON.parse(localStorage.getItem("data"));
} else {
  data = {};
}

const messageEl = document.getElementById("message");

const username = localStorage.getItem("currentUser");

const pass1 = document.getElementById("enter-password");
const pass2 = document.getElementById("confirm-password");

const confirmBtn = document.getElementById("set-new");

confirmBtn.addEventListener("click", () => {
  if (pass1.value == pass2.value && pass1.value.length >= 6) {
    data[username]["Password"] = sha256(pass1.value);
    localStorage.setItem("data", JSON.stringify(data));

    messageEl.innerHTML =
      "updated your password<br><a href='../index.html'>Log In</a>";

    pass1.value = "";
    pass2.value = "";
  } else if (pass1.value == pass2.value && pass1.value.length < 6) {
    messageEl.innerHTML = "password to small";
  } else {
    messageEl.innerHTML = "passwords do not match";
  }
});
