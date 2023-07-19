import { request } from '../customhooks/use_fetch_data';

let cache = new Map();

function useResourcePokemonImage(numberPokemon) {
    const domain = 'https://raw.githubusercontent.com';
    const path = 'PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    const url = `${ domain }/${ path }/${ numberPokemon }.png`;
    const getData = (data) => {
        
        return {
            blob: data
        };
    };

    if (!cache.has(url)) {
        cache.set(url, request(url, 'blob', getData));
    }
    
    return { apiBlob: cache.get(url) };
}

export { useResourcePokemonImage };