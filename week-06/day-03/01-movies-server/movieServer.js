const http = require('http');
const PORT = 3000;
const handleMovies = require('./requestHandlers/movie');
const handleMoviesWithID = require('./requestHandlers/movieWithID');
const acceptedMethods = ['GET', 'POST', 'DELETE', 'PUT'];
const authRequired = ['POST', 'DELETE', 'PUT'];
let MOVIES = require('./movieData');


const server = http.createServer((req, res) => {

  if(authRequired.includes(req.method) && req.headers.authorization !== 'top-secret'){
    res.statusCode = 403;
    res.end("Caution! You have attempted to access with NO Auth! Calling police now...");
    return;
  }

  if(!acceptedMethods.includes(req.method)){
    res.statusCode = 404;
    res.end();
    return;
  }
  
  if(req.url === '/movies'){
    handleMovies(req, res);
  }
  else if(req.url.includes('/movies?')){
    handleMovies(req, res, true);
  }
  else if(req.url.includes('/movies/')){
    handleMoviesWithID(req, res);
  }
})

server.listen(PORT, () => {
  console.log('server started on port 3000');
})