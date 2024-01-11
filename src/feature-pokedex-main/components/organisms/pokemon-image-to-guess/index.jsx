import { useContext } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { isBlob } from '@shared-services/utilities/validate-value-type';

import { Picture } from '@shared-components/atoms/picture';
import { ErrorMessage } from '@shared-components/molecules/error-message';

import svgPokeball from '@assets-images/pokeball.svg';

import './styles.css';

function PokemonImageToGuess({
	blob = new Blob([], { type: 'image/png' }),
	alt = 'Pokemón picture'
}) {
	const { isInputEqualsPokemonName } = useContext(SelectedPokemonContext);
	const { errors } = useContext(FetchErrorContext);

	const src = isBlob({ blob }) ? URL.createObjectURL(blob) : svgPokeball;
	const sizePicture = isBlob({ blob }) ? 'pokemon' : 'pokeball';

	return (
		<section
			className="pokemon_image_to_guess"
			data-pokeball={blob && !blob.size}
			data-solved={isInputEqualsPokemonName}
			data-error={errors?.blob}
		>
			{
				errors?.blob
					? <ErrorMessage text="Picture Not Found" />
					: <Picture src={src} alt={alt} size={sizePicture} />
			}
		</section>
	);
};

export { PokemonImageToGuess };
