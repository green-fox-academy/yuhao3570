const PORT = 3000;
const express = require('express');
const app = express();

const todos = [
    'get up',
    'survive',
    'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('todo', {
        todos
    })
})

app.listen(PORT);