document.querySelector('button').addEventListener('click', handler2)

function addJoke(joke){
    let p = document.createElement('p');
    p.textContent = joke;
    p.style.color = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
    document.querySelector('.container').appendChild(p);
}

function handler1(){
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => data.value.joke)
        .then(joke => addJoke(joke))
        .catch(err => alert(err));
};

// optimazion for w3d6 async
async function handler2() {
    let result = await fetch('http://api.icndb.com/jokes/random');
    result = await result.json();
    addJoke(result.value.joke);
};
