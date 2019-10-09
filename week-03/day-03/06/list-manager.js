createLayout();

let [lefts, buttons, rights] = document.querySelectorAll('table');
buttons.childNodes[0].setAttribute('onClick', 'up()');
buttons.childNodes[1].setAttribute('onClick', 'shift()');
buttons.childNodes[2].setAttribute('onClick', 'remove()');
buttons.childNodes[3].setAttribute('onClick', 'down()');


function createLayout(){
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.setAttribute('style', 'width: 300px; height: 300px; margin: 30px auto; display: flex; flex-direction: row;');
    
    let left = document.createElement('table');
    left.setAttribute('style', 'margin: 20px; width: 30%; height: 260px; border: 1px solid black; display: flex; flex-direction: column');
    ['bread', 'milk', 'orange', 'tomato'].forEach( e => {
        let newItem = document.createElement('tr');
        newItem.setAttribute('style', 'flex-grow: 1')
        newItem.textContent = e;
        left.appendChild(newItem);
    })

    let mid = document.createElement('table');
    mid.setAttribute('style', 'margin: 20px; width: 30%; height: 260px; border: 1px solid black; display: flex; flex-direction: column');
    ['Up', '>', 'X', 'Down'].forEach( e => {
        let newItem = document.createElement('button');
        newItem.setAttribute('style', 'flex-grow: 1')

        newItem.textContent = e;
        mid.appendChild(newItem);
    })

    let right = document.createElement('table');

    right.setAttribute('style', 'margin: 20px; width: 30%; height: 260px; border: 1px solid black; display: flex; flex-direction: column');

    wrapper.appendChild(left);
    wrapper.appendChild(mid);
    wrapper.appendChild(right);

    document.body.insertBefore(wrapper, document.body.childNodes[0]);
}



// Up
function up() {
    
}

// Remove
function remove() {
    
}

// Move
function shift() {
    
}

// Down
function down() {
    
}

