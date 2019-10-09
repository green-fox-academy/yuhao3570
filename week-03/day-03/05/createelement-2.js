const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];

document.querySelectorAll('li').forEach(e => {
    if (e.innerText === 'The King') {
        e.remove();
    }
})

for (let planet of planetData) {
    if (planet.asteroid) {
        let newItem = document.createElement("li");
        newItem.classList.add(planet.category);
        newItem.textContent = planet.content;
        document.querySelector("ul").appendChild(newItem);
    }
}