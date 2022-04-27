export const searchByTitle = (search) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      "X-RapidAPI-Key": "ce34e00595msha01f1b3a446a0edp1b9432jsn2d504bea8959",
    },
  };

  return fetch(
    `https://movie-database-alternative.p.rapidapi.com/?s=${search}&r=json&type=movie&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return Promise.all(
        response.Search.map((movie) => {
          return fetch(
            `https://movie-database-alternative.p.rapidapi.com/?r=json&i=${movie.imdbID}`,
            options
          )
            .then((response) => response.json())
            .then((detail) => {
              return {
                name: movie.Title,
                poster: movie.Poster,
                rating: detail.imdbRating,
                rate: detail.Rated,
                genre: detail.Genre,
                runtime: detail.Runtime,
                votes: detail.imdbVotes,
              };
            });
        })
      );
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));
};
