// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzM_a2uobrzB1cdh5X6-EjMqtEMl2Bi8U",
  authDomain: "slutexamination-d5bc4.firebaseapp.com",
  projectId: "slutexamination-d5bc4",
  storageBucket: "slutexamination-d5bc4.appspot.com",
  messagingSenderId: "685163588974",
  appId: "1:685163588974:web:41def654673cfa8cfa657f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const movieTitle = document.querySelectorAll(".movieTitle")
const movieOptions = document.querySelector(".movieOptions")
const mainPage = document.querySelector(".mainPage")
const addtoWatch = document.querySelector(".addtoWatch")
const goBack = document.querySelector(".goBack")
const watchlist = document.querySelector(".watchlist")
const openWatch = document.querySelector(".openWatch")
console.log(movieTitle[0].innerText);



movieOptions.style.display = "none"
watchlist.style.display = "none"

for (let i = 0; i < movieTitle.length; i++) {   
    movieTitle[i].addEventListener("click", () => {
        movieOptions.classList.add("show")
        movieOptions.style.removeProperty("display")
        mainPage.style.display = "none"
            
        let elem = `
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
    
        //movieOptions.innerText= ""
        movieOptions.insertAdjacentHTML("beforeend", elem)


        goBack.addEventListener("click", () => {
            mainPage.style.display = "block"
            movieOptions.style.display = "none"
            watchlist.style.display = "none"
            console.log(elem);
            elem.replace("article", "ss")
            console.log(elem);
        })
        
        addtoWatch.addEventListener("click", () => {
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
            
            watchlist.insertAdjacentHTML("beforeend", elem)
            
            //saveToDatabase()
            tt = movieTitle[i].innerText
            console.log(tt);
            saveToDatabase()
        })
    })
};

 let tt 


async function saveToDatabase() {
    await addDoc(collection(db, 'Watchlist'), {  
        Movie:{tt}

    });     
}





openWatch.addEventListener("click", () => {
        watchlist.classList.add("show")
        watchlist.style.removeProperty("display")
        mainPage.style.display = "none"  
})