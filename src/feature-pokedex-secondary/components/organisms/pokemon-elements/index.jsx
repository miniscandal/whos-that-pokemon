import { useContext } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { ScreenNameElement } from '../../molecules/screen-name-element';

import './styles.css';

function formatElemetTypes({ element, isInputEqualsPokemonName, error }) {
	const elementNotFound = 'Not Found';
	const elementResolving = '________';
	const elementExists = element ? '' : '????????';

	if (isInputEqualsPokemonName) {
		return error ? elementNotFound : (element || elementResolving)
	}

	return elementExists;
}

function buildScreenElementData({ element, isInputEqualsPokemonName, error }) {
	return {
		name: 'TYPE',
		value: formatElemetTypes({ element, isInputEqualsPokemonName, error }),
		isBinaryEffect: element && !isInputEqualsPokemonName
	};
}

function PokemonElemets({ elementList = [] }) {
	const { isInputEqualsPokemonName } = useContext(SelectedPokemonContext);
	const { errors } = useContext(FetchErrorContext);
	const [elementOne, elementTwo] = elementList;

	const screenNameElement = {
		one: buildScreenElementData({ element: elementOne, isInputEqualsPokemonName, error: errors?.elementList }),
		two: buildScreenElementData({ element: elementTwo, isInputEqualsPokemonName, error: errors?.elementList })
	};

	return (
		<section className="pokemon_elements">
			<div>
				<ScreenNameElement {...screenNameElement.one} />
			</div>
			<div>
				<ScreenNameElement {...screenNameElement.two} />
			</div>
		</section>
	);
}

export { PokemonElemets }
