if (localStorage.getItem("data")) {
  data = JSON.parse(localStorage.getItem("data"));
} else {
  data = {};
}

const messageEl = document.getElementById("message");

const username = localStorage.getItem("currentUser");
let enteredkeyphrase = document.getElementById("enter-keyphrase");

const checkKeyBtn = document.getElementById("confirm");

checkKeyBtn.addEventListener("click", () => {
  if (data[username]["KeyPhrase"] == enteredkeyphrase.value) {
    enteredkeyphrase.value = "";
    window.location = "./newpassword.html";
  } else {
    messageEl.innerHTML = "keyphrase do not match";
  }
});
