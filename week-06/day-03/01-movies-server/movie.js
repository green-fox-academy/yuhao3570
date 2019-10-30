module.exports = handleMovies = (req, res, genreFilter=false) => {  
  //extra
  if(req.method === 'PUT'){
    res.statusCode = 405;
    res.end();
    return;
  }
  
  if(req.method === 'GET'){
    let genreNeeded = req.url.split('genre=')[1];
    let resultMovies = genreFilter ? MOVIES.filter(movie => movie.genre === genreNeeded): MOVIES;
    res.statusCode = 200;
    res.write(JSON.stringify(resultMovies));
    res.end();
  }
  else if(req.method === 'POST') {

    let requestBody = '';
    req.on('data', (part) => {
      requestBody += part;
    });
    
    req.on('end', () => {
      const requestBodyObject = JSON.parse(requestBody);

      if(!validatePostReqBody(res, requestBodyObject)){
        res.end("hehe");
        return;
      }

      MOVIES.push(requestBodyObject);
      res.write(`\nYou have posted movie: "${requestBodyObject.title}", thanks!`);
      res.end();
    });
  }
}

const validatePostReqBody = (res, requestBodyObject) => {
  if(!requestBodyObject.title){
    res.statusCode = 400;
    return false;
  }

  let titles = MOVIES.map(movie => movie.title);
  if(titles.includes(requestBodyObject.title)){
    res.statusCode = 409;
    return false;
  }

  if(!requestBodyObject.genre){
    requestBodyObject['genre'] = 'unknown';
  }
  return true;
}
