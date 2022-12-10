  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSlzOm6yU94Py70fkCgFRTvfKfhgqqJbM",
    authDomain: "slutexamination-1b0cf.firebaseapp.com",
    projectId: "slutexamination-1b0cf",
    storageBucket: "slutexamination-1b0cf.appspot.com",
    messagingSenderId: "608850675443",
    appId: "1:608850675443:web:c81f09336250b0d85c9986"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);