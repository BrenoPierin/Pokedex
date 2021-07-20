import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/gengar')
    .then(data => {
        let id = console.log(`Numero: #${data.data.id}`)
        let name = console.log(`Nome: ${data.data.name.charAt().toUpperCase() + data.data.name.slice(1)}`)
        let height = console.log(`Altura: ${data.data.height * 10 / 100}m`)
        let weight = console.log(`Peso: ${data.data.weight * 10 / 100}Kg`)
        let base_experience = console.log(`XP base: ${data.data.base_experience}`)
        let ability = data.data.abilities.forEach(e => console.log(`Habilidades: ${e.ability.name}`))
        let stats = console.log('Stats:') + data.data.stats.forEach(e => console.log(' ' + e.stat.name + ': ' + e.base_stat))
        let types = console.log('Tipos:') + data.data.types.forEach(e => console.log(' ' + e.type.name))
        let moves = console.log('Moves:') + data.data.moves.forEach(e => console.log(' ' + e.move.name))
        let especie = console.log('Especie:' + data.data.species.name)
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.data.id}/`).then(data => {
            console.log(' Felicidade base: ' + data.data.base_happiness)
            console.log(' Taxa de Captura: ' + data.data.capture_rate + '%')
            console.log(' Cor: ' + data.data.color.name)
            console.log(' Forma: ' + data.data.shape.name)
            console.log(' Variações:') + data.data.varieties.forEach(e => console.log(' ' + e.pokemon.name))
            console.log('Bebê: ' + data.data.is_baby)
            console.log('Lendário: ' + data.data.is_legendary)
            console.log('Mitíco: ' + data.data.is_mythical)
            axios.get(data.data.evolution_chain.url).then(data => {
                console.log('Evoluição base: ' + data.data.chain.species.name)
                console.log('Evoluição secundaria: ' + data.data.chain.evolves_to[0].species.name)
                console.log('Evoluição final: ' + data.data.chain.evolves_to[0].evolves_to[0].species.name)
            })
        })

    })
