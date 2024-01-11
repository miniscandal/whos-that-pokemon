import { useContext, useMemo } from 'react';

import { resourcePokemonArt } from '@core-services/data/resource-pokemon-art';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';

function useResourcePokemonArt() {
	const { pokemonId } = useContext(SelectedPokemonContext);

	const { data, error } = useMemo(() => {
		const { apiBlob } = resourcePokemonArt(pokemonId);
		const { data, error } = apiBlob.read();

		return { data, error };
	}, [pokemonId]);

	return [data, error];
}

export { useResourcePokemonArt };
