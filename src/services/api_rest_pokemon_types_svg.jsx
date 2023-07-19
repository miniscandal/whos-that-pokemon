import { request } from '../customhooks/use_fetch_data';
import bug from '../assets/icons/bug.svg';
import dark from '../assets/icons/dark.svg';
import dragon from '../assets/icons/dragon.svg';
import electric from '../assets/icons/electric.svg';
import fairy from '../assets/icons/fairy.svg';
import fighting from '../assets/icons/fighting.svg';
import fire from '../assets/icons/fire.svg';
import flying from '../assets/icons/flying.svg';
import ghost from '../assets/icons/ghost.svg';
import grass from '../assets/icons/grass.svg';
import ground from '../assets/icons/ground.svg';
import ice from '../assets/icons/ice.svg';
import normal from '../assets/icons/normal.svg';
import poison from '../assets/icons/poison.svg';
import psychic from '../assets/icons/psychic.svg';
import rock from '../assets/icons/rock.svg';
import steel from '../assets/icons/steel.svg';
import water from '../assets/icons/water.svg';

const svgPokemonTypes = [
    { name: 'bug', svg: bug },
    { name: 'dark', svg: dark },
    { name: 'dragon', svg: dragon },
    { name: 'electric', svg: electric },
    { name: 'fairy', svg: fairy },
    { name: 'fighting', svg: fighting },
    { name: 'fire', svg: fire },
    { name: 'flying', svg: flying },
    { name: 'ghost', svg: ghost },
    { name: 'grass', svg: grass },
    { name: 'ground', svg: ground },
    { name: 'ice', svg: ice },
    { name: 'normal', svg: normal },
    { name: 'poison', svg: poison },
    { name: 'psychic', svg: psychic },
    { name: 'rock', svg: rock },
    { name: 'steel', svg: steel },
    { name: 'water', svg: water },
];
let cache = new Map();

function useResourcePokemonTypesSvg(src) {
    const getData = (data) => {

        return {
            blob: data,
        };
    };
    if (!cache.has(src)) {
        cache.set(src, request(src, 'blob', getData));
    }
    
    return { apiBlob: cache.get(src) };
}

export { svgPokemonTypes, useResourcePokemonTypesSvg };