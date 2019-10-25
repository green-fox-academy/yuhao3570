const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Listening to PORT: ${PORT}`);
})

app.post('/sith', (req, res) => {
  const text = req.body.text;

  if(!text){
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    })
  }

  res.json({
    "sith_text": reversedText(text)
  })
})

function reversedText(text) {
  let result = '';
  let sentences = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
  for(let sentence of sentences ){
    result += reverseSentence(sentence) + 'Err..err.err.';
  }
  return result;
}

function reverseSentence(sentence){
  let arr = sentence.slice(0, -1).toLowerCase().split(' ');
  for(let i = 0; i < arr.length - 1; i+=2){
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;  
  }
  arr[0] = capitalize(arr[0]);
  return arr.join(' ') + '. ';
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}