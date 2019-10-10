const navi = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
let positionX = parseInt(img.style.backgroundPositionX) || 0;
let positionY = parseInt(img.style.backgroundPositionY) || 0;
let size = parseInt(img.style['background-size']) || 200;

navi.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.getAttribute('data-action') === 'move') {
            move(event.target.getAttribute('data-direction'));
        } else {
            zoom(event.target.getAttribute('data-direction'));
        }
    }
})

function move(direction) {
    switch (direction) {
        case 'up':
            positionY -= 10;
            break;
        case 'down':
            positionY += 10;
            break;
        case 'left':
            positionX -= 10;
            break;
        case 'right':
            positionX += 10;
            break;
    }
    imageModification(positionX, positionY, size);
}

function zoom(direction) {
    if (direction === 'in') {
        size *= 1.2;
        positionX += Math.round(500 * 0.2);
        console.log(positionX);
        positionY += Math.round(320 * 0.2);
    } else {
        size *= 0.8;
        positionX -= Math.round(positionX * 0.2);
        positionY -= Math.round(positionY * 0.2);
    }
    imageModification(positionX, positionY, size);
}

function imageModification(positionX, positionY, size) {
    img.style.backgroundPositionX = positionX + 'px';
    img.style.backgroundPositionY = positionY + 'px';
    img.style['background-size'] = size + '%';
}