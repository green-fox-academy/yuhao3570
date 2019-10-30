module.exports = handleMoviesWithID = (req, res) => {
  let movieID = parseInt(req.url.split('/movies/')[1]);

  if (!validateMovieID(movieID)) {
    res.statusCode = 404;
    res.end("Invid movie id");
    return;
  }

  if (req.method === 'GET') {
    res.statusCode = 200;
    const resultMovies = MOVIES.filter(movie => movie.id === movieID);
    res.write(JSON.stringify(resultMovies));
  }

  else if (req.method === 'DELETE') {
    MOVIES = MOVIES.filter(movie => movie.id !== movieID);
    res.statusCode = 204;
  }

  else if (req.method === 'PUT') {
    let requestBody = '';
    req.on('data', (part) => {
      requestBody += part;
    });

    req.on('end', () => {
      const requestBodyObject = JSON.parse(requestBody);
      if (!validatePostRequestBody(res, requestBodyObject, movieID)) {
        res.end();
        return;
      }
      updateMovie(MOVIES, requestBodyObject);
      res.statusCode = 201;
      res.write(`\nYou've updateded: "${JSON.stringify(requestBodyObject)}", thanks!`);
      res.end();
    });
    return;
  }
  res.end();
}

const validateMovieID = (movieID) => {
  return MOVIES.some(movie => movie.id === movieID);
}

const validatePostRequestBody = (res, requestBodyObject, movieID) => {
  if (!['id', 'title', 'genre'].every(key => requestBodyObject.hasOwnProperty(key))){
    res.statusCode = 400;
    return false;
  }

  if (requestBodyObject.id !== movieID) {
    res.statusCode = 404;
    return false;
  }
  return true;
}

const updateMovie = (MOVIES, requestBodyObject) => {
  for(let movie of MOVIES ){
    if(movie.id === requestBodyObject.id){
      movie.title = requestBodyObject.title;
      movie.genre = requestBodyObject.genre;
    }
  }
}