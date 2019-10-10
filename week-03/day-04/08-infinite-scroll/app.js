let scrollThreshold = 300;

generateRandomDivs(3);


document.addEventListener('scroll', () => {
    //infinite top
    if(top.scrollY < scrollThreshold ){
        generateRandomDivs(10);
    }

    //infinite bottom
    if(top.scrollY > document.body.clientHeight - scrollThreshold ){
        generateRandomDivs(10);
    }
})







function generateRandomDivs(size){
    for(let i = 0; i < size; i++){
        let div = document.createElement('div');
        div.classList.add('sized');
        div.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        document.body.insertBefore(div, document.body.childNodes[0]);
    }
}