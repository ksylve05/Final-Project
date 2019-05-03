//Grab elements
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

//Validate Form
const validate = document
  .querySelector("button")
  .addEventListener("click", () => {
    if (
      fname.value === "" ||
      lname.value === "" ||
      email.value === "" ||
      password.value === ""
    ) {
      alert("Please Fill Out Form");
    } else {
      localStorage.setItem("First name", fname.value);
      localStorage.setItem("Last name", lname.value);
      localStorage.setItem("Email", email.value);
      localStorage.setItem("Password", password.value);
      alert("You Are Registered!");
    }
  });
