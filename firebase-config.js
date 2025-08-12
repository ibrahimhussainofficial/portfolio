import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7vsZ9lPSRzMYpaO47NQvSA2hnCRJE3JU",
  authDomain: "ibrahim-hussain-portfolio.firebaseapp.com",
  databaseURL: "https://ibrahim-hussain-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "ibrahim-hussain-portfolio",
  storageBucket: "ibrahim-hussain-portfolio.firebasestorage.app",
  messagingSenderId: "1069905285528",
  appId: "1:1069905285528:web:c9496bd7e90796eb805bed"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[placeholder='Full Name']").value;
  const email = form.querySelector("input[placeholder='Email']").value;
  const phone = form.querySelector("input[placeholder='Mobile Number']").value;
  const subject = form.querySelector(
    "input[placeholder='Email Subject']"
  ).value;
  const message = form.querySelector("textarea").value;

  const dataRef = ref(database, "contacts/" + Date.now());
  set(dataRef, {
    name,
    email,
    phone,
    subject,
    message,
  })
    .then(() => {
      alert("Message submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("Error: " + error);
    });
});
