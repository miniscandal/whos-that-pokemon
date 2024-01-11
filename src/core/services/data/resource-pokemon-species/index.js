import { request } from '@core-services/interceptor/api-fetch';
import { getPokemonSpeciesApiUrl } from '@core-services/api-rest-endpoints/pokeapi';

import { urlParse } from '@shared-services/utilities/url-parse/url-parse';

import { filterDescriptions } from './data-process';
import { isNumber } from '@shared-services/utilities/validate-value-type';

let cache = new Map()

const getData = ({ flavor_text_entries: flavorTextEntries, evolution_chain: evolutionChainId }) => {
	const { url } = evolutionChainId;
	const id = +urlParse(url, 2);
	const data = {
		specieDescription: filterDescriptions({ flavorTextEntries, selectedLanguage: 'en' }),
		evolutionChainId: isNumber({ value: id }) ? id : -1
	};

	return data;
};

function resourcePokemonSpecies(pokemonNumber) {
	const url = getPokemonSpeciesApiUrl({ pokemonNumber });

	if (!cache.has(url)) {
		cache.set(url, request({ url, responseType: 'json', getData }));
	}

	return { apiData: cache.get(url) };
}

export { resourcePokemonSpecies };
