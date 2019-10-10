let candies = parseInt(document.querySelector('.candies').textContent);
let lollypops = document.querySelector('.lollypops').textContent.length / 2;
let speed = parseInt(document.querySelector('.speed').textContent);
let timer;

document.querySelector('.create-candies').addEventListener('click', (event) => {
    candies++;
    update();
});

document.querySelector('.buy-lollypops').addEventListener('click', (event) => {
    if (candies >= 100) {
        candies -= 100;
        lollypops++;
        update();

        if (lollypops >= 10) {
            speed = Math.floor(lollypops / 10);
            timer = setInterval(() => {
                candies += speed;
                update();
            }, 1000);
        }
    }
});

document.querySelector('.candy-machine').addEventListener('click', (event) => {
    if (lollypops >= 10) {
        speed *= 2;
        clearInterval(timer);
        timer = setInterval(() => {
            candies += speed;
            update();
        }, 1000);
    }
})

function update() {
    document.querySelector('.candies').textContent = candies.toString();
    document.querySelector('.lollypops').textContent = '🍭'.repeat(lollypops);
    document.querySelector('.speed').textContent = speed;
}