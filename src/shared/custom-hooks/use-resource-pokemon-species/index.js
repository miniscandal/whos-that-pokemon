import { useContext, useMemo } from 'react';

import { resourcePokemonSpecies } from "@core-services/data/resource-pokemon-species";

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';

function useResourcePokemonSpecies() {
	const { pokemonId } = useContext(SelectedPokemonContext);

	const { data, error } = useMemo(() => {
		const { apiData } = resourcePokemonSpecies(pokemonId);
		const { data, error } = apiData.read();

		return { data, error };
	}, [pokemonId]);

	return [data, error];
}

export { useResourcePokemonSpecies };
