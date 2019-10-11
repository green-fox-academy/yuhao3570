document.querySelector('button').addEventListener('click', _ => {
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => data.value.joke)
        .then(joke => addJoke(joke))
        .catch(err => alert(err));
})

function addJoke(joke){
    let p = document.createElement('p');
    p.textContent = joke;
    p.style.color = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
    document.querySelector('.container').appendChild(p);
}