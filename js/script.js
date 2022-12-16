import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, doc, deleteDoc, where, query } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyAzM_a2uobrzB1cdh5X6-EjMqtEMl2Bi8U",
  authDomain: "slutexamination-d5bc4.firebaseapp.com",
  projectId: "slutexamination-d5bc4",
  storageBucket: "slutexamination-d5bc4.appspot.com",
  messagingSenderId: "685163588974",
  appId: "1:685163588974:web:41def654673cfa8cfa657f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const movieTitle = document.querySelectorAll(".movieTitle")
const movieh2 = document.querySelectorAll(".movieh2")
const genreP = document.querySelectorAll(".movieGenre p")
const dateP = document.querySelectorAll(".movieDate p")
const movieOptions = document.querySelector(".movieOptions")
const movies = document.querySelectorAll(".momomovie")
const mainPage = document.querySelector(".mainPage")
const addtoWatch = document.querySelector(".addtoWatch")
const goBack = document.querySelectorAll(".goBack")
const watchlist = document.querySelector(".watchlist")
const movieContainer = document.querySelector(".movieContainer")
const movieContainerWatch = document.querySelector(".movieContainerWatch")
const openWatch = document.querySelector(".openWatch")
const removeMovie = document.querySelector(".removeMovie")
let movieID 
let movieName
let resultMovie 
const input = document.querySelector("input")
const inputBtn = document.querySelector(".inputBtn")
console.log(movieTitle[0].innerText);



movieOptions.style.display = "none"
watchlist.style.display = "none"

for (let i = 0; i < movieTitle.length; i++) {   
    inputBtn.addEventListener("click", () => {
        console.log(input.value);
        if (input.value == movieTitle[i].innerText || input.value == genreP[i].innerText || input.value == dateP[i].innerText) {
            movies[i].style.backgroundColor = "red"
            movieh2[i].style.backgroundColor = "red"
            console.log(input.value);
        }else{
            
        }
    })

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

goBack.forEach((element)  => {
    element.addEventListener("click", () => {
        mainPage.style.display = "block"
        movieOptions.style.display = "none"
        watchlist.style.display = "none"
        movieContainer.innerHTML = ""
        console.log(movieName);

    })
})


function addtowatch() {
    const elem = `
    <section class= "movieSection">
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
    </article>
    </section>`
    
    movieContainerWatch.insertAdjacentHTML("beforeend", elem)
    const removeMovie = document.querySelector(".removeMovie")

    alert("Movie has been added to watchlist")
    movieName
    saveToDatabase()
    removeEvent()

}

function addClickEvent() {
    const removeMovie = document.querySelectorAll(".removeMovie")

    console.log(removeMovie);
    removeMovie.forEach((removeMovieID) => {
            removeMovieID.addEventListener("click", async (event) => {
                
                
                
                
                const movieID = event.target.getAttribute("id"); 
                console.log(movieID);
                
                removeFromDatabase(movieID);
                idk.style.display = "none"
            })
            
            
        });

}
function removeEvent() {
        addtoWatch.removeEventListener("click", addtowatch)
}


async function saveToDatabase() {
    await addDoc(collection(db, 'Watchlist'), {  
        movieName
    });     
}
let array = []
let idk
async function getAllMovies() {
    const selected = await getDocs(collection(db, 'Watchlist'));  
    const movieSection = document.querySelectorAll(".movieSection")
    console.log(selected);

    for (let i = 0; i < movieSection.length; i++) {
        idk = movieSection[i]
        console.log(idk);
        console.log(movieSection);
        


        selected.forEach(movie => {
            console.log(movie.id); 
            movieID = movie.id
            array.push(movieID)
            console.log(array);
            for (let j = 0; j < movieSection.length; j++) {
                const idk2 = array[i]
                
                console.log(idk2);
                const element = `<button class="removeMovie" id="${idk2}">Remove from watchlist</button>`
                idk.insertAdjacentHTML('beforeend', element);
            }
        });    

        
        
    }
    addClickEvent();
}

async function removeFromDatabase(movieID) {     
    console.log(movieID);
    await deleteDoc(doc(db, "Watchlist", movieID))
}



openWatch.addEventListener("click", () => {
        watchlist.classList.add("show")
        watchlist.style.removeProperty("display")
        mainPage.style.display = "none"  
        getAllMovies()
})

console.log(movieh2);
    console.log(movieh2);


    

