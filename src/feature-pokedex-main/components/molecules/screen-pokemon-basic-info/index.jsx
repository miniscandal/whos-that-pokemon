import { useContext } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { ParagraphBinaryEffect } from '@shared-components/atoms/paragraph-binary-effect';

import './styles.css';

function formatPokemonId({ id = -1, isInputEqualsPokemonName = -1, error = false }) {
	const isValidId = id > -1;
	const idNotFound = 'ID: Not Found';
	const idValid = isValidId ? 'ID: ' : 'ID: ????????';

	if (error) {
		return idNotFound;
	}
	if (isInputEqualsPokemonName && isValidId) {
		return (id < 100) ? `ID: #0${id}` : `ID: #${id}`;
	}
	return idValid;
}

function formatPokemonBaseExperience({ baseExperience, isInputEqualsPokemonName, error }) {
	const isValidBe = baseExperience > -1;
	const beNotFound = 'BE: Not Found';
	const beValid = isValidBe ? 'BE: ' : 'BE: ????????';

	if (error) {
		return beNotFound;
	}
	if (isInputEqualsPokemonName && isValidBe) {
		return `BE: ${baseExperience}`;
	}

	return beValid;
}

function ScreenPokemonBasicInfo({ id = -1, baseExperience = -1 }) {
	const { isInputEqualsPokemonName } = useContext(SelectedPokemonContext);
	const { errors } = useContext(FetchErrorContext);

	const paragraphs = {
		id: {
			text: formatPokemonId({ id, isInputEqualsPokemonName, error: errors?.baseExperience }),
			isAnimation: (id > -1) && !isInputEqualsPokemonName
		},
		baseExperience: {
			text: formatPokemonBaseExperience({ baseExperience, isInputEqualsPokemonName, error: errors?.id }),
			isAnimation: (baseExperience > -1) && !isInputEqualsPokemonName
		}
	}

	return (
		<section className="screen_pokemon_basic_info">
			<ParagraphBinaryEffect {...paragraphs.id} />
			<ParagraphBinaryEffect {...paragraphs.baseExperience} />
		</section>
	);
}

export { ScreenPokemonBasicInfo };
