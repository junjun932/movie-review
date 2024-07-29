const apiKey = "e5eb059ad5da310378a11322b030b6de";
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWViMDU5YWQ1ZGEzMTAzNzhhMTEzMjJiMDMwYjZkZSIsIm5iZiI6MTcyMTk5NTkyNC42Mjg5MzQsInN1YiI6IjY2OWRiNzhhZTcyMjM4ODEwOTkxODQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwOHke6oGsK0oyxE4oXeb6ucSwxsujwP6mvfKvDaP_M";

        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        const fetchMovies = (url) => {
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    const movies = data.results;
                    const movieCards = document.querySelector(".movies-container");
                    movieCards.innerHTML = ''; 

                    movies.forEach((movie) => {
                        const movieCard = document.createElement("div");
                        movieCard.classList.add("movie");
                        movieCard.innerHTML = `
                            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="image">
                            <h2>${movie.title}</h2>
                            <p>${movie.overview}</p>
                            <p>Rating ${movie.vote_average}</p>
                            
                        `;
                         movieCard.addEventListener('click', () => {
                    alert(`Movie ID: ${movie.id}`);
                });
                        movieCards.appendChild(movieCard);
                    });
                })
                .catch((err) => console.error(err));
        };

        
        const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(topRatedUrl);

        document.getElementById('search-button').addEventListener('click', () =>  {
            const queryElement = document.getElementById("search-input");
            console.log("click");
            if (queryElement) {
                const query = queryElement.value;
                const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`;

                if (query) {
                    fetchMovies(searchUrl);
                    
                }
            }
        });

        function onSearch () { 
            const queryElement = document.getElementById("search-input");
            console.log("click");
            if (queryElement) {
                const query = queryElement.value;
                const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`;

                if (query) {
                    fetchMovies(searchUrl);
                    
                }
            }
           
        }
        // searchForm.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     const searchTerm = searchInput.value.trim();
        //     if (searchTerm) {
        //       searchMovies(searchTerm);
        //     }
        //   });
        
    