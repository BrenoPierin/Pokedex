import axios from "axios"

import * as util from 'util'

async function listByName() {
    const getPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/gengar')
    const data = await getPokemon
    console.log(data)

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

    //Especies do pokemon
    pokemon.especie = new Object()

    const getPokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.data.id}/`)
    const data1 = await getPokemonSpecies

    //Felicidae base dentro de especie
    pokemon.especie.felicidade = data1.data.base_happiness

    //Taxa de captura do pokemon
    pokemon.especie.taxa_captura = data1.data.capture_rate

    //cor do pokemon
    pokemon.especie.cor = data1.data.color.name

    //forma do pokemon
    pokemon.especie.forma = data1.data.shape.name

    // Variações do pkemon
    pokemon.especie.variacao = data1.data.varieties

    //É bebe?
    pokemon.especie.bebe = data1.data.is_baby

    //Lendário?
    pokemon.especie.lendario = data1.data.is_legendary

    //Mitico?
    pokemon.especie.mitico = data1.data.is_mythical

    const getPokemonEvolution = await axios.get(data1.data.evolution_chain.url)
    const data2 = await getPokemonEvolution

    //evoluçao base
    pokemon.especie.evo_base = data2.data.chain.species.name

    //evolução secundaria
    pokemon.especie.evo_second = data2.data.chain.evolves_to[0].species.name

    //evolução final
    pokemon.especie.evo_final = data2.data.chain.evolves_to[0].evolves_to[0].species.name
    console.log(util.inspect(pokemon))
}

listByName()
