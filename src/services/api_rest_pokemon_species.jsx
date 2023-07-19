import { request } from '../customhooks/use_fetch_data';

let cache = new Map();

function filterDescription(descriptions) {
    const filter = descriptions.filter(description => description.language.name === 'en')
    const text = filter[0]?.flavor_text.trim().replace(/\n/g, ' ');
    
    return text ?? 'Pokémon description unknown!';
}

function useResourcePokemonSpecies(numberPokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${ numberPokemon }`;
    const getData = (data) => {

        return {
            specieDescription: filterDescription(data.flavor_text_entries),
            evolution_chain: data.evolution_chain.url,
        };
    };

    if (!cache.has(url)) {
        cache.set(url, request(url, 'json', getData));
    }
    
    return { apiData: cache.get(url) };
}

export { useResourcePokemonSpecies };