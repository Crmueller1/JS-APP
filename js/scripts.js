let pokemonRepository = (function() {

    let pokemonList = [
        { name: "Charmander", height: "2", type: " Fire" },
        { name: "Squirtle ", height: "1.08", type: " Water" },
        { name: "Bulbasaur", height: "2.04", type: [" Grass", " Poison"] }
    ];



    //function to add new pokemon to pokemonList array.
    function add(pokemon) {
        if (typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "type" in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log('Must be object - did not add');
        }
    }

    // function to return all items in the pokemonList array.
    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('butn');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }






    function showDetails(pokemon) {
        console.log(pokemon);
    }




    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };

})()

console.log(pokemonRepository.getAll());




pokemonRepository.getAll().forEach(function(pokemon) {

    pokemonRepository.addListItem(pokemon);



});