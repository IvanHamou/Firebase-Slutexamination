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



const movieTitle = document.querySelectorAll(".movieTitle")
const movieBtnSelec = document.querySelector(".movieBtnSelec")
const mainPage = document.querySelector(".mainPage")
const watchlist = document.querySelector(".watchlist")
const watchlistBtn = document.querySelector(".watchlistBtn")
console.log(movieTitle[0].innerText);



movieBtnSelec.style.display = "none"
watchlist.style.display = "none"
for (let i = 0; i < movieTitle.length; i++) {   
    movieTitle[i].addEventListener("click", () => {
        movieBtnSelec.classList.add("show")
        movieBtnSelec.style.removeProperty("display")
        mainPage.style.display = "none"
            
        const elem = `
        <article class="movieTitle">
            <h2>${movieTitle[i].innerText}</h2>
        </article>
        <article class="movieGenre">
            <h4>Genre </h4>
            <p>Horror</p>
        </article>
        <article class="movieDate">
            <h4>Release-date </h4>
            <p>2020-03-23</p>
        </article>`
    
        movieBtnSelec.insertAdjacentHTML("beforeend", elem)
    })
};

watchlistBtn.addEventListener("click", () => {
        watchlist.classList.add("show")
        watchlist.style.removeProperty("display")
        mainPage.style.display = "none"  
})