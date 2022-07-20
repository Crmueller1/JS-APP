let pokemonRepository = (function() {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    //let //modalContainer = document.querySelector('#modal-container');

    const search = document.getElementById('pokemon-search');
    search.addEventListener('input', searchList);

    function searchList() {
        let searchInput = document.getElementById('pokemon-search').value;
        searchInput = searchInput.toLowerCase();
        const listItem = $('li');
        listItem.each(function() {
            const item = $(this);
            const name = item.text();
            if (name.includes(searchInput)) {
                item.show();
            } else {
                item.hide();
            }
        });
    }

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon
        ) {

            pokemonList.push(pokemon);
        } else {
            console.log('Must be object - did not add');
        }
    }

    function getAll() {
        return pokemonList;
    }


    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let pokemonItem = document.createElement('li');

        pokemonList.classList.add('group-list-item');
        pokemonList.classList.add('col-sm','col-lg-20');
        let buttonItem = document.createElement('button');
        buttonItem.innerText = pokemon.name;
        buttonItem.classList.add('pokemonButton');
        buttonItem.setAttribute('data-toggle', 'modal');
        buttonItem.setAttribute('data-target', '#pokemon-modal');
        $(buttonItem).addClass('button-class btn-block btn m1');
        pokemonItem.appendChild(buttonItem);
        pokemonList.appendChild(pokemonItem);
        buttonItem.addEventListener("click", function(event) {
            showDetails(pokemon);
        });
    }
    // Gets and creates a list from pokeapi
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            pokemon.imageUrl = details.sprites.other.dream_world.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types.map((type) => type.type.name).join(', ');
            pokemon.weight = details.weight;
        }).catch(function(e) {
            console.error(e);
        });
    }



    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function() {
            showModal(pokemon);

        });
    }


    /////MODAL

    function showModal(pokemon) {

        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalFooter= $(".modal-footer")

        modalBody.empty();
        modalTitle.empty();
        modalFooter.empty();

        let nameElement = $('<h1>' + pokemon.name + '</h1>');


        let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');


        let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');


        let typeElement = $('<p>' + 'Type: ' + pokemon.types + '</p>');


        let imageElement = $('<img class="mw-100 img-fluid pokemon-img">')
        imageElement.attr('src', pokemon.imageUrl);

        modalTitle.append(nameElement);
        modalFooter.append(heightElement);
        modalFooter.append(weightElement);
        modalFooter.append(typeElement);
        modalBody.append(imageElement);

    }







    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        search: search
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});