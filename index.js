import axios from "axios"


axios.get('https://pokeapi.co/api/v2/pokemon/gengar')
.then(data => {
        let pokemon = new Object();

        //Id do pokemon
        //console.log(`Numero: #${data.data.id}`)
        pokemon.id = data.data.id

        //Nome do pokemon
        //console.log(`Nome: ${data.data.name.charAt().toUpperCase() + data.data.name.slice(1)}`)
        pokemon.nome = data.data.name.charAt().toUpperCase() + data.data.name.slice(1)

        //Altura do pokemon
        //console.log(`Altura: ${data.data.height * 10 / 100}m`)
        pokemon.altura = data.data.height * 10 / 100

        //Peso do pokemon
        //console.log(`Peso: ${data.data.weight * 10 / 100}Kg`)
        pokemon.peso = data.data.weight * 10 / 100

        //XP de base do pokemon
        //lconsole.log(`XP base: ${data.data.base_experience}`)
        pokemon.xp_base = data.data.base_experience

        //habilidades do pokemon
        //data.data.abilities.forEach(e => console.log(`Habilidades: ${e.ability.name}`))
        pokemon.habilidade =  data.data.abilities

        //Status do pokemon
        //console.log('Stats:') + data.data.stats.forEach(e => console.log(' ' + e.stat.name + ': ' + e.base_stat))
        pokemon.status = data.data.stats
        
        //Tipos do pokemon
        //console.log('Tipos:') + data.data.types.forEach(e => console.log(' ' + e.type.name))
        pokemon.tipos = data.data.types

        //Moves do pokemon
        //console.log('Moves:') + data.data.moves.forEach(e => console.log(' ' + e.move.name))
        pokemon.movimentos = data.data.moves

        //Especies do pokemon
        //console.log('Especie:' + data.data.species.name)
        pokemon.especie = new Object()

        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.data.id}/`).then(data => {
            //Felicidae base dentro de especie
            //console.log(' Felicidade base: ' + data.data.base_happiness)
            pokemon.especie.felicidade = data.data.base_happiness

            //Taxa de captura do pokemon
            //console.log(' Taxa de Captura: ' + data.data.capture_rate + '%')
            pokemon.especie.taxa_captura = data.data.capture_rate

            //cor do pokemon
            //console.log(' Cor: ' + data.data.color.name)
            pokemon.especie.cor = data.data.color.name

            //forma do pokemon
            //console.log(' Forma: ' + data.data.shape.name)
            pokemon.especie.forma = data.data.shape.name

            // Variações do pkemon
            //console.log(' Variações:') + data.data.varieties.forEach(e => console.log(' ' + e.pokemon.name))
            pokemon.especie.variacao = data.data.varieties

            //É bebe?
            //console.log('Bebê: ' + data.data.is_baby)
            pokemon.especie.bebe = data.data.is_baby

            //Lendário?
            //console.log('Lendário: ' + data.data.is_legendary)
            pokemon.especie.lendario = data.data.is_legendary

            //Mitico?
            //console.log('Mitíco: ' + data.data.is_mythical)
            pokemon.especie.mitico = data.data.is_mythical

            axios.get(data.data.evolution_chain.url).then(data => {
                //evoluçao base
                //console.log('Evoluição base: ' + data.data.chain.species.name)
                pokemon.especie.evo_base = data.data.chain.species.name

                //evolução secundaria
                //console.log('Evoluição secundaria: ' + data.data.chain.evolves_to[0].species.name)
                pokemon.especie.evo_second = data.data.chain.evolves_to[0].species.name

                //evolução final
                //console.log('Evoluição final: ' + data.data.chain.evolves_to[0].evolves_to[0].species.name)
                pokemon.especie.evo_final = data.data.chain.evolves_to[0].evolves_to[0].species.name
                console.log(pokemon)
            })
        })


    })
