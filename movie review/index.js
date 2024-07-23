const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGE1ZDEwNTllM2ZjOTdjMWRhY2EyZDY5ZTFiNmE4NSIsIm5iZiI6MTcyMTcxMzEzMy4wMjYyODEsInN1YiI6IjY2OWRiNzhhZTcyMjM4ODEwOTkxODQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkYfk8ucQP_iOYdajXmrPOUvcqyKfkKL9EIIhSapzL8'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));