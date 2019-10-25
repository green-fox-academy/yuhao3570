const express = require('express');
const path = require('path');

const app = express.Router();
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//doubling
app.get('/doubling', (req, res) => {
  let received = req.query.input;
  if (!received) {
    res.json({
      "error": "Please provide an input!"
    })
  }
  res.json({
    "received": parseInt(received),
    "result": 2 * parseInt(received)
  })
})

//greeter
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  if(!name || !title){
    res.json({
      "error": `Please provide a ${
        !name 
            ? "name" + (!title ? " and a title" : "")
            : !title ? "title" : ""
        }!`
    })
  }

  res.json({
    "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
  })
})

// append
app.get('/appenda/:appendable', (req, res) => {
  if(!req.params.appendable){
    res.status(404).send(" - Page you are looking for is missing!")
  }
  res.json({
    "appended": req.params.appendable + 'a'
  })
})

//do-until
app.post('/dountil/:action', (req, res) =>{
  let until = req.body.until;
  if(!until){
    res.json({
      "error": "Please provide a number!"
    })
  }

  res.send({
    "result": actionFunc[req.params.action](parseInt(until))
  })
})

const actionFunc = {
  sum: (until) => sumUntil(until),
  factor: (until) => factorUntil(until)
}

function sumUntil(until) {
  if(until === 1){
    return 1;
  }
  return until + sumUntil(until - 1);
}

function factorUntil(until) {
  if(until === 1){
    return 1;
  }
  return until * sumUntil(until - 1);
}

module.exports = app;