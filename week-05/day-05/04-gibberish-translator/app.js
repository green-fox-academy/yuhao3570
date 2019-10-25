const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Listening to PORT: ${PORT}`);
})

app.post('/translate', (req, res) => {
  const {text, lang} = req.body;
  if(!text || !lang) {
    res.json({
      "error": "I can't translate that!"
    })
  }

  if(lang !== 'en'){
    res.json({
      "error": `Can not translate ${lang.toUpperCase()} to Gibberish, please proveide text in English!`
    })
  }
  
  res.json({
    "translated": translate(text),
    "lang": "gibberish"
  })
})

function translate(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  for(let letter of text){
    result += vowels.includes(letter)
            ? (letter + 'l' + letter)
            : letter;
  }
  return result;
}