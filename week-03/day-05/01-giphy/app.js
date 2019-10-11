let xhr = new XMLHttpRequest();
let toSearch = 'apple';

fetch(`http://api.giphy.com/v1/gifs/search?q=${toSearch}&api_key=PoHEzfBaB0FLDZA8iMVWG1iHf4qyXtoT`)
    .then(response =>
        response = response.json()
    )
    .then(data => {
        for (let i = 0; i < 16; i++) {
            add(data.data[i].images['original_still'].url);
        }
    })
    .catch(() => console.log('something wentwrong'));

function add(url) {
    let gif = document.createElement('img');
    gif.setAttribute('src', url);
    gif.addEventListener('click', (event) => {
        let src = event.target.getAttribute('src');
        console.log(event);
        event.target.setAttribute('src', src.replace('giphy_s.gif', 'giphy.gif'));
    });
    document.body.querySelector('div').appendChild(gif);
}