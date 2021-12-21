let pokemonList = [
    { name: "Charmander", height: "2", type: "fire" },
    { name: "Squirtle", height: "1.08", type: "water" },
    { name: "Bulbasaur", height: "2.04", type: ["grass", "poison"] }
];




// Initialization= let i=0,  
// Condition= i < pokemonList.length;
// Action = i++ which is  i=i+1

for (let i = 0; i < pokemonList.length; i++) {

    document.write(pokemonList[i].name + " " + "(Height: " +
        pokemonList[i].height + ", Type: " + pokemonList[i].type + ") ");

    // if the pokemon is greater than or equal to, write "This pokemon is huge!!"
    if (pokemonList[i].height > 1.5) {

        document.write('This pokemon is huge!!');
    }
    // line breaks twice after each document.write to make it easier to read
    document.write('<br><br>');
}