const names = ['Esther', 'Eulalia', 'Harriet', 'Ida', 'Lula', 'Marguerite', 'Mary', 'Minerva', 'Nancy', 'Pearl', 'Rowena', 'Theodosia', 'Zephyrine', 'Albert', 'Bernard', 'Chester', 'Edmund', 'Ira', 'Leon', 'Linus', 'Ralph', 'Roger', 'Stanley', 'Van', 'Victor', 'Virgil', 'Wilfred', 'Esmeralda', 'Fernanda', 'Flavia', 'Ines', 'Io', 'Ione', 'Ludovica', 'Olga', 'Noa', 'Fflur', 'Saskia', 'Soleil', 'Anders', 'Bas', 'Boris', 'Dev', 'Dimitri', 'Ivan', 'Lazaro', 'Magnus', 'Neo', 'Seb', 'Soren', 'Vladimir', 'Teilo', 'Andromeda', 'Aster', 'Azalea', 'Bee', 'Birdie', 'Blossom', 'December', 'Dove', 'Lilac', 'Maple', 'Nova', 'Vega', 'Ash', 'Beach', 'Bear', 'Frost', 'Hawk', 'Huckleberry', 'Mars', 'Oak', 'Pike', 'Agatha', 'Agnes', 'Constance', 'Ethel', 'Eunice', 'Francine', 'Gertrude', 'Ida', 'Lenore', 'Mildred', 'Myrtle', 'Opal', 'Thomasina', 'Wilhelmina', 'Clarence', 'Edgar', 'Floyd', 'Irving', 'Leonard', 'Murray', 'Osbert', 'Oswald', 'Percival', 'Sheldon'];

function* pour() {
    yield names.shift();
}

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('h2').textContent = pour().next().value;
})