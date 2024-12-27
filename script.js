document.getElementById("searchButton").addEventListener("click", searchMovies);

let api_key = "276ffa053b8b41b0ff0e0966480f677d";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImage = "https://image.tmdb.org/t/p/w500";

function searchMovies() {
  let searchInput = document.getElementById("searchInput").value;
  fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then((response) => response.json())
    .then((response) => displayMovies(response.results));
}

function displayMovies(movies) {
  let resultConteiner = document.getElementById("results");
  resultConteiner.innerHTML = "";

  if (movies.length === 0) {
    resultConteiner.innerHTML = "<p>No results found</p>"
      return;
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        let title = document.createElement("h2")
        title.textContent = movie.title

        let releaseDate = document.createElement("p")
        releaseDate.textContent = "Fecha de lanzamiento: " + movie.release_date

        let overview = document.createElement("p")
        overview.textContent = movie.overview

        let voteAverage = document.createElement("p")
        voteAverage.textContent = "Rating: " + movie.vote_average.toFixed(1)

        let posterPath = urlImage + movie.poster_path
        let poster = document.createElement("img")
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(voteAverage)
        movieDiv.appendChild(overview)

        resultConteiner.appendChild(movieDiv)
    })
  }


