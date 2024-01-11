import { useMemo } from 'react';

import { resourcePokemonEvolutionChain } from '@core-services/data/resource-pokemon-evolution-chain';

function useResourcePokemonEvolutionChain({ evolutionChainId }) {
	const { data, error } = useMemo(() => {
		const { apiData } = resourcePokemonEvolutionChain(evolutionChainId);
		const { data, error } = apiData.read();

		return { data, error };
	}, [evolutionChainId]);

	return [data, error];
}

export { useResourcePokemonEvolutionChain };
