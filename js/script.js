// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
const movieContainer = document.querySelector(".movieContainer")
const openWatch = document.querySelector(".openWatch")
const removeMovie = document.querySelector(".removeMovie")
let movieID 
let movieName
console.log(movieTitle[0].innerText);



movieOptions.style.display = "none"
watchlist.style.display = "none"

for (let i = 0; i < movieTitle.length; i++) {   
    movieTitle[i].addEventListener("click", () => {
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
    
        movieContainer.insertAdjacentHTML("beforeend", elem)
        
        movieName = movieTitle[i].innerText
        addtoWatch.addEventListener("click", addtowatch)
    })
};


goBack.addEventListener("click", () => {
    mainPage.style.display = "block"
    movieOptions.style.display = "none"
    watchlist.style.display = "none"
    movieContainer.innerHTML = ""
    console.log(movieName);

})

function addtowatch() {
    const elem = `
    <button class="removeMovie">Remove from watchlist</button>
    <article class="movieTitle">
    <h2>${movieName}</h2>
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
    const removeMovie = document.querySelector(".removeMovie")
    console.log(removeMovie);
    alert("Movie has been added to watchlist")
    movieName
    saveToDatabase()
    removeEvent()

    removeMovie.addEventListener("click", () => {
        removeFromDatabase()
        getAllMovies()
        watchlist.innerHTML = ""
    })
}

function removeEvent() {
        addtoWatch.removeEventListener("click", addtowatch)
}


async function saveToDatabase() {
    await addDoc(collection(db, 'Watchlist'), {  
        movieName
    });     
}

async function getAllMovies() {
    const selected = await getDocs(collection(db, 'Watchlist'));  
     
    selected.forEach(movie => {
        movieID = movie.id 
    });    
}

async function removeFromDatabase() {     
    
    await deleteDoc(doc(db, "Watchlist", movieID))// where("selectedPlanet", "==", ""))
    console.log(movieID);
}





openWatch.addEventListener("click", () => {
        watchlist.classList.add("show")
        watchlist.style.removeProperty("display")
        mainPage.style.display = "none"  
})


