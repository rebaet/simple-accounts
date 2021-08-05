if (localStorage.getItem("data")) {
  data = JSON.parse(localStorage.getItem("data"));
} else {
  data = {};
}

const messageEl = document.getElementById("message");

// elements from newaccount.html

const nUserName = document.getElementById("new-username");
const nKeyPhrase = document.getElementById("new-phrase");
const pass1 = document.getElementById("password-1");
const pass2 = document.getElementById("password-2");

const create_btn = document.getElementById("save-data");

// elements from index.html

const UserName = document.getElementById("enter-username");
const Password = document.getElementById("enter-password");

const login_btn = document.getElementById("log-in");

// Register New Account

if (create_btn) {
  // id create_btn element found in dom, i.e currently in newaccounts page
  create_btn.addEventListener("click", () => {
    if (pass1.value === pass2.value && pass1.value.length >= 6) {
      data[nUserName.value] = {
        KeyPhrase: nKeyPhrase.value,
        Password: sha256(pass2.value),
      };

      localStorage.setItem("data", JSON.stringify(data));

      messageEl.innerHTML = "account created successfully";
      console.log(JSON.parse(localStorage.getItem("data")));

      // clear input fields
      nUserName.value = "";
      nKeyPhrase.value = "";
      pass1.value = "";
      pass2.value = "";
    } else if (pass1.value === pass2.value && pass1.value.length < 6) {
      messageEl.innerHTML =
        "passwords too small, try something longer than 6 charachters";
    } else if (pass1.value !== pass2.value) {
      messageEl.innerHTML = "passwords do not match";
    }
  });
}

// Verify if Account Exists

if (login_btn) {
  // id create_btn element found in dom, i.e currently in newaccounts page
  login_btn.addEventListener("click", () => {
    if (UserName.value in data) {
      localStorage.setItem("currentUser", UserName.value);

      if (sha256(Password.value) == data[UserName.value]["Password"]) {
        localStorage.setItem("currentPass", sha256(Password.value));

        // load the profile page
        window.location = "./links/profile.html";
      } else {
        messageEl.innerHTML =
          "wrong password, try again<br><a href='../links/confirmation.html'>forgot password?</a>";

        Password.value = "";
      }
    } else {
      messageEl.innerHTML = "account not found";

      // clear input fields
      UserName.value = "";
      Password.value = "";
    }
  });
}
