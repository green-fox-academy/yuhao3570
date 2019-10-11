let peopleCopy = {};

document.querySelector('#search').addEventListener('click', () => {
    document.querySelector('#left').innerHTML = '';
    document.querySelector('#right').innerHTML = '';
    showPeople(document.querySelector('input').value.replace(' ', '+'))
});

document.querySelector('#left').addEventListener('click', (event) => {
    document.querySelector('#right').innerHTML = '';
    let clicked = event.target.textContent;
    showFilm(peopleCopy[clicked]);
});

// functions
function showPeople(name) {
    fetch(`https://swapi.co/api/people/?search=${name}&format=json`)
        .then(res => res.json())
        .then(data =>
            data.results
        )
        .then(people => {
            for (let person of people) {
                addPerson(person);
                peopleCopy[person.name] = person.films;
            }
        })
}

function addPerson(person) {
    let left = document.querySelector('#left');
    let li = document.createElement('li');
    li.textContent = person.name;
    left.appendChild(li);
}

function showFilm(films) {
    for (let film of films) {
        fetch(film + '?format=json')
            .then(res => res.json())
            .then(data => addFilm(data.title, data.release_date))
    }
}

function addFilm(title, releaseDate) {
    let li = document.createElement('li');
    li.textContent = title + '( ' + releaseDate + ' )';
    document.querySelector('#right').appendChild(li);
}