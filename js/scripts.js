let pokemonRepository = (function() {

    let pokemonList = [
        { name: "<u> Charmander </u>", height: "2", type: " Fire" },
        { name: "<u> Squirtle </u>", height: "1.08", type: " Water" },
        { name: "<u>Bulbasaur </u>", height: "2.04", type: [" Grass", " Poison"] }
    ];

    // function to return all items in the pokemonList array.
    function getAll() {
        return pokemonList;
    }
    //function to add new pokemon to pokemonList array.
    function add(newPokemon) {
        if (typeof newPokemon);
        else {
            console.log('Must be object - did not add');
        }
    }


    return {
        getAll: getAll,
        add: add
    };

})()


function printArrayDetails(list) {
    list.forEach(function(pokemon) {
        if (pokemon.height >= 1.5) {

            document.write(pokemon.name + ' </br>Height: ' + pokemon.height + '</br>  Type:' + pokemon.type + ' This pokemon is huge!!</br></br>');
        } else {
            document.write(pokemon.name + ' </br>Height: ' + pokemon.height + '</br>  Type:' + pokemon.type + '</br></br> ');

        }
    });
}

printArrayDetails(pokemonRepository.getAll());