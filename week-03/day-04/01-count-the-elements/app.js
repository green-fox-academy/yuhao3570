
const count = () => {
    document.querySelector('.result').innerText = document.getElementsByTagName('ul')[0].getElementsByTagName('li').length;
}

document.querySelector('button').addEventListener('click', count);
