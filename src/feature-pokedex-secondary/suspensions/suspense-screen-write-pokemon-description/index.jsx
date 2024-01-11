import { Suspense } from 'react';

import { useResourcePokemonSpecies } from '@shared-custom-hooks/use-resource-pokemon-species';

import { ScreenWriteSpecieDescription } from '../../components/molecules/screen-write-specie-description';
import { FetchErrorProvider } from '@shared-contexts/fetch-error';

function Loading() {

	return <ScreenWriteSpecieDescription specieDescription={undefined} />;
}

function Loaded() {
	const [data, error] = useResourcePokemonSpecies();
	const { specieDescription } = data;

	const errors = {
		specieDescription: error.status
	};

	return (
		<FetchErrorProvider errors={errors}>
			<ScreenWriteSpecieDescription specieDescription={specieDescription} />
		</FetchErrorProvider>
	);
}

function SuspenseScreenWritePokemonDescription() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	);
}

export { SuspenseScreenWritePokemonDescription };



