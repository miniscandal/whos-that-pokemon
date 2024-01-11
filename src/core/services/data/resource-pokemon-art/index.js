import { request } from '@core-services/interceptor/api-fetch';

import { getPokemonArtApiUrl } from '@core-services/api-rest-endpoints/pokeapi';

import { isBlob } from '@shared-services/utilities/validate-value-type';

let cache = new Map();

const getData = (blob) => {
	const data = {
		blob: isBlob({ blob }) ? blob : new Blob([], { type: 'image/png' })
	};

	return data;
};

function resourcePokemonArt(pokemonNumber) {
	const url = getPokemonArtApiUrl({ pokemonNumber });

	if (!cache.has(url)) {
		cache.set(url, request({ url, responseType: 'blob', getData }));
	}

	return { apiBlob: cache.get(url) };
}

export { resourcePokemonArt };
