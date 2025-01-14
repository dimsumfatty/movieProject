//https://www.omdbapi.com/?i=tt3896198&apikey=7776b763
//http://img.omdbapi.com/?apikey=[yourkey]&

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "7776b763";
let movies;
async function movie() {
    try{
        const response = await fetch(`${API_URL}?i=tt3896198&apikey=${API_KEY}`);
        const movieData = await response.json();
        const movieListEl = document.querySelector('.movie__list');
        movieListEl.innerHTML = moviesHTML(movieData);
    }  catch (error) {
        console.error("Error fetching movie data:", error);
    }

}

function moviesHTML(movie) {
    return `<div class="movie__card">
                    <div class="movie__card--wrapper">
                        <img src="${movie.Poster}" alt="${movie.Title}" />
                        <h3>Movie: ${movie.Title}</h3>
                        <p><b>Year:</b> ${movie.Year}</p>
                        <p><b>Rating:</b> ${movie.Rated}</p>
                        <p><b>Runtime:</b> ${movie.Runtime}</p>
                        <p><b>Genre:</b> ${movie.Genre}</p>
                        <p><b>Plot:</b> ${movie.Plot}</p>
                    </div>
                </div>`
}  

movie();

/*async function onSearchChange(event){
    const id = event.target.value;
    renderMovies(id);
}


async function renderMovies(id) {
    const search = await fetch(`${API_URL}?i=tt3896198&apikey=${API_KEY}`);
    const searchData = await search.json();
    searchListEl.innerHTML = searchData.map(movie =>  moviesHTML(movie)).join('');

}*/