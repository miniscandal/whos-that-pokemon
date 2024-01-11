import { Suspense } from 'react';

import { FetchErrorProvider } from '@shared-contexts/fetch-error';

import { useResourcePokemon } from '@shared-custom-hooks/use-resource-pokemon';
import { useResourcePokemonArt } from '@shared-custom-hooks/use-resource-pokemon-art';

import { PokemonImageToGuess } from '../../components/organisms/pokemon-image-to-guess';

function Loading() {

	return <PokemonImageToGuess blob={undefined} alt={undefined} />;
}

function Loaded() {
	const [dataPokemon, errorPokemon] = useResourcePokemon();
	const [dataBlob, errorBlob] = useResourcePokemonArt();

	const { name: alt } = dataPokemon;
	const { blob } = dataBlob;

	const errors = {
		name: errorPokemon?.status,
		blob: errorBlob?.status,
	};

	return (
		<FetchErrorProvider errors={errors}>
			<PokemonImageToGuess blob={blob} alt={alt} />
		</FetchErrorProvider>
	);
}

function SuspensePokemonImageToGuess() {

	return (
		<Suspense fallback={<Loading />}>
			<Loaded />
		</Suspense>
	);
}

export { SuspensePokemonImageToGuess };
