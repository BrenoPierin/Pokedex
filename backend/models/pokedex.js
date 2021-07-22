const Pokedex = require('pokedex-promise-v2');
const pokedex = new Pokedex();
const axios = require('axios')

async function getPokemon(name) {
    const getPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await getPokemon

    let pokemon = new Object();

    //Id do pokemon
    pokemon.id = data.data.id

    //foto do pokemon
    pokemon.sprite = data.data.sprites.front_default

    //Nome do pokemon
    pokemon.nome = data.data.name.charAt().toUpperCase() + data.data.name.slice(1)

    //Altura do pokemon
    pokemon.altura = data.data.height * 10 / 100

    //Peso do pokemon
    pokemon.peso = data.data.weight * 10 / 100

    //XP de base do pokemon
    pokemon.xp_base = data.data.base_experience

    //habilidades do pokemon
    pokemon.habilidade = data.data.abilities

    //Status do pokemon
    pokemon.status = data.data.stats

    //Tipos do pokemon
    pokemon.tipos = data.data.types

    //Moves do pokemon
    pokemon.movimentos = data.data.moves

    return pokemon
}

async function getPokemonEspecie(id) {

    let pokemon = new Object()

    const getPokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    const data1 = await getPokemonSpecies

    //Url evolution chain
    pokemon.url = data1.data.evolution_chain.url

    //nome do pokemon
    pokemon.nome = data1.data.name

    //Felicidae base dentro de especie
    pokemon.felicidade = data1.data.base_happiness

    //Taxa de captura do pokemon
    pokemon.taxa_captura = data1.data.capture_rate

    //cor do pokemon
    pokemon.cor = data1.data.color.name

    //forma do pokemon
    pokemon.forma = data1.data.shape.name

    // Variações do pkemon
    pokemon.variacao = data1.data.varieties

    //É bebe?
    pokemon.bebe = data1.data.is_baby

    //Lendário?
    pokemon.lendario = data1.data.is_legendary

    //Mitico?
    pokemon.mitico = data1.data.is_mythical

    return pokemon
}

async function getPokemonEvolution(url) {

    const evolution = await axios.get(url)
    const chain = evolution.data

    return chain
 
}

module.exports = {
    getPokemon,
    getPokemonEspecie,
    getPokemonEvolution,
}

