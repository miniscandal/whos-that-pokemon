import { Suspense } from 'react';

import { FetchErrorProvider } from '@shared-contexts/fetch-error'
	;
import { useResourcePokemon } from '@shared-custom-hooks/use-resource-pokemon';

import { ScreenPokemonBasicInfo } from '../../components/molecules/screen-pokemon-basic-info';

function Loading() {

	return <ScreenPokemonBasicInfo id={undefined} baseExperience={undefined} />;
}

function Loaded() {
	const [data, error] = useResourcePokemon();
	const { id, baseExperience } = data;

	const errors = {
		id: error.status,
		baseExperience: error.status
	};

	return (
		<FetchErrorProvider errors={errors}>
			<ScreenPokemonBasicInfo id={id} baseExperience={baseExperience} />
		</FetchErrorProvider>
	);
}

function SuspenseScreenPokemonBasicInfo() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	);
}

export { SuspenseScreenPokemonBasicInfo };
