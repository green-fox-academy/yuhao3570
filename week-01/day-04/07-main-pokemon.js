'use strict';

const Pokemon = require('./Pokemon');

const pokemonOfAsh = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

console.log('I choose you, ', go2(wildPokemon, pokemonOfAsh));

function go(wildPokemon, pokemons){
    for(let e of pokemons){
        if(e.isEffectiveAgainst(wildPokemon)){
            return e;
        }
    }
    return;
}

// Another solution
function go2(wildPokemon, pokemons){
    const flw = ['fire', 'leaf', 'water'];
    for(let e of pokemons){
        if(e.type === flw[(flw.indexOf(wildPokemon.type) + 2) % flw.length]){
            return e;
        }
    }
    return;
}


function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}