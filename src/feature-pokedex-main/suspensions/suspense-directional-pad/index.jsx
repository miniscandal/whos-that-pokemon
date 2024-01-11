import { Suspense } from 'react';

import { FetchErrorProvider } from '@shared-contexts/fetch-error';

import { useResourcePokemonSpecies } from '@shared-custom-hooks/use-resource-pokemon-species';
import { useResourcePokemonEvolutionChain } from '@shared-custom-hooks/use-resource-pokemon-evolution-chain';

import { DirectionalPad } from '../../components/organisms/directional-pad';

function Loading() {

	return <DirectionalPad evolutionList={undefined} />;
}

function Loaded() {
	const [dataSpecies, errorSpecies] = useResourcePokemonSpecies();
	const { evolutionChainId } = dataSpecies;

	const [dataEvolutionChain, errorEvolutionChain] = useResourcePokemonEvolutionChain({ evolutionChainId });
	const { evolutionList } = dataEvolutionChain;

	const errors = {
		species: errorSpecies.status,
		evolutionList: errorEvolutionChain.status
	};

	return (
		<FetchErrorProvider errors={errors}>
			<DirectionalPad evolutionList={evolutionList} />
		</FetchErrorProvider>
	);
}

function SuspenseDirectionalPad() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	);
}

export { SuspenseDirectionalPad };
