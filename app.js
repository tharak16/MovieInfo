
let api = "https://www.omdbapi.com/?apikey=91278d9d&t=";
let titleData = document.getElementById('title-data');
let relaseDate = document.getElementById('released-data');
let director = document.getElementById('director-data');
let actor = document.getElementById('actors-data');
let genre = document.getElementById('genre-data');
let language = document.getElementById('language-data');
let rating = document.getElementById('rating-data');
let collection = document.getElementById('collection-data');
let awards = document.getElementById('award-data');
let poster = document.getElementById('poster-data');


function getDetails(){
    let movieName = document.getElementById('movie-name');
    let query = api + movieName.value;
    console.log(query);
    // let infoBox = document.getElementById('info-box');
    // infoBox.style.display = ;
   fetch(query).then((data)=>{
    return data.json()
   }).then((data)=>{ 
    titleData.innerText = data.Title;
    relaseDate.innerText = data.Released;
    director.innerText = data.Director;
    actor.innerText = data.Actors;
    genre.innerText = data.Genre;
    language.innerText = data.Language;
    rating.innerText = data.imdbRating;
    collection.innerText = data.BoxOffice;
    awards.innerText = data.Awards;
    poster.src = data.Poster;
   }
        
    )
}