
module.exports = handleMoviesWithID = (req, res) => {
  let movieID = parseInt(req.url.split('/movies/')[1]);

  if(!validateMovieID(movieID)){
    res.statusCode = 404;
    res.end("Invid movie id");
    return;
  }

  if(req.method === 'GET'){
    res.statusCode = 200;
    const resultMovies = MOVIES.filter(movie => movie.id === movieID);
    res.write(JSON.stringify(resultMovies));
  }

  else if(req.method === 'DELETE'){
    if(!checkAUTH(req.headers.authorization, res)){
      return;
    }
    MOVIES = MOVIES.filter(movie => movie.id !== movieID);
    res.statusCode = 204;
  }

  else if(req.method === 'PUT') {
    if(!checkAUTH(req.headers.authorization, res)){
      return;
    }

    let requestBody = '';
    req.on('data', (part) => {
      requestBody += part;
    });

    req.on('end', () => {
      const requestBodyObject = JSON.parse(requestBody);
      if(!['id', 'title', 'genre'].every(key => requestBodyObject.hasOwnProperty(key))
            || requestBodyObject.id !== movieID){
        res.statusCode = 400;
        res.end();
        return;
      }

      MOVIES.push(requestBodyObject);
      res.statusCode = 201;
      res.write(`\nyou have modified movie: "${requestBodyObject.id}", thanks!`);
      res.end();
    });
  }
  res.end();
}

const validateMovieID = (movieID) => {
  return MOVIES.some(movie => movie.id === movieID);
}
