import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// LOGIN FORM
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "bookloop.html";
      })
      .catch((err) => alert(err.message));
  });
}

// SIGNUP FORM
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "bookloop.html";
      })
      .catch((err) => alert(err.message));
  });
}

// AUTH STATE (optional redirect if not logged in)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.uid);
  }
});
