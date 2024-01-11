import { useContext, useEffect, useState } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { Led } from '@shared-components/atoms/led';

import { TextInputBox } from '../../atoms/text-input-box';
import { EarpieceSpeaker } from '../../atoms/earpiece-speaker';

import { MAGIC_WORD_SOLVE } from '../../../constants/index';

import './styles.css';

function updateInputAndCheckEquality({ event, name, setInputValue, setIsInputEqualsPokemonName }) {
	const { value } = event.target;
	if ((value === name) || (value === MAGIC_WORD_SOLVE)) {
		setIsInputEqualsPokemonName(true);

		return;
	}
	setInputValue(value);
}

function ControlPanelInputPokemonName({ name = '' }) {
	const { isInputEqualsPokemonName, setIsInputEqualsPokemonName } = useContext(SelectedPokemonContext);
	const { errors } = useContext(FetchErrorContext);
	const [inputValue, setInputValue] = useState('');

	const nameNotFound = 'Name Not Found';
	const nameValid = name ? 'POKEMON NAME?' : '????????';
	const nameResolving = 'PROCESSING...';

	useEffect(() => setInputValue(''), [name]);

	useEffect(() => {
		if (isInputEqualsPokemonName && !errors?.name) {
			setInputValue(name || nameResolving);
		}
	}, [isInputEqualsPokemonName, name]);

	const handleChange = (event) => {
		updateInputAndCheckEquality({ event, name, setInputValue, setIsInputEqualsPokemonName });
	};

	const textInputBox = {
		placeholder: errors?.name ? nameNotFound : nameValid,
		disabled: !name,
		value: inputValue,
		onChange: handleChange
	};

	return (
		<section className="control_panel_input_pokemon_name">
			<Led size="standard" color="red" />
			<TextInputBox {...textInputBox} />
			<EarpieceSpeaker />
		</section>
	);
}

export { ControlPanelInputPokemonName, updateInputAndCheckEquality };
