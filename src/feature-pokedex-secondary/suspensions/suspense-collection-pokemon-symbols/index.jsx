import { Suspense } from 'react';

import { useResourcePokemon } from '@shared-custom-hooks/use-resource-pokemon';

import { CollectionPokemonSymbols } from '../../components/organisms/collection-pokemon-symbols';
import { FetchErrorProvider } from '@shared-contexts/fetch-error';

function Loading() {

	return <CollectionPokemonSymbols elementList={undefined} />;
}

function Loaded() {
	const [data, error] = useResourcePokemon();
	const { elementList } = data;

	const errors = {
		elementList: error.status
	};

	return (
		<FetchErrorProvider errors={errors}>
			<CollectionPokemonSymbols elementList={elementList} />
		</FetchErrorProvider>
	);
}

function SuepenseCollectionPokemonSymbols() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	);
}

export { SuepenseCollectionPokemonSymbols };
