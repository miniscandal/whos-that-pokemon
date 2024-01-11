import { request } from '@core-services/interceptor/api-fetch';

import { getPokemonEvolutionChainApiUrl } from '@core-services/api-rest-endpoints/pokeapi';

import { createEvolutionList } from './data-process';

let cache = new Map();

const getData = ({ chain }) => {
	const data = {
		evolutionList: createEvolutionList({ chain })
	};

	return data;
};

function resourcePokemonEvolutionChain(evolutionChainId) {
	const url = getPokemonEvolutionChainApiUrl({ evolutionChainId });

	if (!cache.has(url)) {
		cache.set(url, request({ url, responseType: 'json', getData }));
	}

	return { apiData: cache.get(url) };
}

export { resourcePokemonEvolutionChain };
