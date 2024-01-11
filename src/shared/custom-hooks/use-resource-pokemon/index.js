import { useContext, useMemo } from 'react';

import { resourcePokemon } from '@core-services/data/resource-pokemon';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';

function useResourcePokemon() {
	const { pokemonId } = useContext(SelectedPokemonContext);

	const { data, error } = useMemo(() => {
		const { apiData } = resourcePokemon(pokemonId);
		const { data, error } = apiData.read();

		return { data, error };
	}, [pokemonId]);

	return [data, error];
}

export { useResourcePokemon }
