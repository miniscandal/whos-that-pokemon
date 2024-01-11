import { Suspense } from 'react';

import { FetchErrorProvider } from '@shared-contexts/fetch-error';

import { useResourcePokemon } from '@shared-custom-hooks/use-resource-pokemon';

import { PokemonElemets } from '../../components/organisms/pokemon-elements';

function Loading() {

	return (
		<PokemonElemets elementTypes={undefined} />
	);
}

function Loaded() {
	let [data, error] = useResourcePokemon();
	const { elementList } = data;

	const errors = {
		elementList: error.status
	};

	return (
		<FetchErrorProvider errors={errors}>
			<PokemonElemets elementList={elementList} />
		</FetchErrorProvider>
	);
}

function SuspensePokemonElemets() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	);
}

export { SuspensePokemonElemets };
