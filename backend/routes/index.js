var express = require('express');
var pokedex = require('../models/pokedex')
var router = express.Router();

/* GET home page. */
router.get('/pokemon/:name', async function(req, res, next) {
  const pokemon = await pokedex.getPokemon(req.params.name)
  res.json(pokemon)
});

router.get('/pokemon/evolution/:id', async function(req, res, next) {
  const pokemonEspecie = await pokedex.getPokemonEspecie(req.params.id)
  const url = pokemonEspecie.url
  const pokemon = await pokedex.getPokemonEvolution(url)

  res.json(pokemon)
})

router.get('/pokemon/especie/:id', async function(req, res, next) {
  const pokemon = await pokedex.getPokemonEspecie(req.params.id)

  res.json(pokemon)
})

router.get('/pokemon/full/:id', async function(req, res, next) {
  const pokemonEspecie = await pokedex.getPokemonEspecie(req.params.id)
  const nome = pokemonEspecie.nome
  const url = pokemonEspecie.url
  const pokemonName = await pokedex.getPokemon(nome)
  const pokemonChain = await pokedex.getPokemonEvolution(url)

  res.json({
    pokemonEspecie,
    pokemonName,
    pokemonChain
  })
})
module.exports = router;
