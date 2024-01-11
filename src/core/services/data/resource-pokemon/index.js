import { request } from '@core-services/interceptor/api-fetch';
import { getPokemonApiUrl } from '@core-services/api-rest-endpoints/pokeapi';

import { isNumber } from '@shared-services/utilities/validate-value-type';
import { isString } from '@shared-services/utilities/validate-value-type';

import { createElementNameList } from './data-process/create-element-name-list';

const cache = new Map();

function getData({ id, name, base_experience: baseExperience, types }) {
	const data = {
		id: isNumber({ value: id }) ? id : -1,
		name: isString({ value: name }) ? name : '',
		baseExperience: isNumber({ value: baseExperience }) ? baseExperience : -1,
		elementList: createElementNameList({ types })
	};

	return data;
};

function resourcePokemon(pokemonNumber) {
	const url = getPokemonApiUrl({ pokemonNumber });

	if (!cache.has(url)) {
		cache.set(url, request({ url, responseType: 'json', getData }));
	}

	return { apiData: cache.get(url) }
}

export { resourcePokemon };
