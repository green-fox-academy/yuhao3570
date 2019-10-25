const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());
app.listen(PORT, (req, res) => {
  console.log(`Listeing to PORT: ${PORT}`);
})

app.post('/arrays', (req, res) => {
  let {what, numbers} = req.body;
  
  if(!what || !numbers){
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  }
  res.json({
    "result": handleWhat[what](numbers)
  })
})

const handleWhat = {
  sum: (numbers) => numbers.reduce((a, b) => a + b),
  multiply: (numbers) => numbers.reduce((a, b) => a * b),
  double: (numbers) => numbers.map(num => num * 2)
}