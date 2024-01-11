import { Suspense } from 'react';

import { useResourcePokemon } from '@shared-custom-hooks/use-resource-pokemon';
import { FetchErrorProvider } from '@shared-contexts/fetch-error';

import { ControlPanelInputPokemonName } from '../../components/organisms/control-panel-input-pokemon-name';

function Loading() {

	return <ControlPanelInputPokemonName name={undefined} />;
}

function Loaded() {
	const [data, error] = useResourcePokemon();

	const { name } = data;

	const errors = {
		name: error?.status
	};

	return (
		<FetchErrorProvider errors={errors}>
			<ControlPanelInputPokemonName name={name} />
		</FetchErrorProvider>
	);
}

function SuspenseControlPanelInputPokemonName() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	)
}

export { SuspenseControlPanelInputPokemonName };
