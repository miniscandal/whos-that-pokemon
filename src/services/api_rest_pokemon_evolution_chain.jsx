import { request } from '../customhooks/use_fetch_data';

let cache = new Map();

const getPokemonNumber = (url) => {
    const urlParts = url.split('/');
    
    return parseInt(urlParts[urlParts.length - 2]);
};

const getSpeciesData = (pokemonChain) => {
    const speciesData = [{
        name: pokemonChain.species.name,
        number: getPokemonNumber(pokemonChain.species.url),
    }];
    let evolvesTo = pokemonChain.evolves_to;

    while(evolvesTo.length) {
        speciesData.push(...evolvesTo.map(evolution => {

            return  {
                name: evolution.species.name,
                number: getPokemonNumber(evolution.species.url),
            };
        }));
        evolvesTo = evolvesTo.flatMap(evolution => evolution.evolves_to);
    }

    return speciesData;
};

function useResourcePokemonEvolutionChain(url) {
    /**
     * https://pokeapi.co/api/v2/evolution-chain/number
     */
    const getData = (data) => {
        
        return {
            evolutions: getSpeciesData(data.chain),
        };
    };

    if (!cache.has(url)) {
        cache.set(url, request(url, 'json', getData));
    }
    
    return { apiData: cache.get(url) };
}

export { useResourcePokemonEvolutionChain };