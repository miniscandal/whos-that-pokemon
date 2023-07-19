import { request } from '../customhooks/use_fetch_data';

let cache = new Map();

function useResourcePokemon(numberPokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${ numberPokemon }`;
    const getData = (data) => {
        
        return {
            id: data.id,
            name: data.name,
            base_experience: data.base_experience,
            types: {
                one: { name: data.types[0]?.type.name },
                two: { name: data.types[1]?.type.name },
            },
        };
    };
    if (!cache.has(url)) {
        cache.set(url, request(url, 'json', getData));
    }

    return { apiData: cache.get(url) }
}

export { useResourcePokemon };