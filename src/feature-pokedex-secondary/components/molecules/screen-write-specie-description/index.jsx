import { useState, useEffect, useContext } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { ScreenBase } from '@shared-components/templates/screen-base';

import './styles.css';

function ScreenWriteSpecieDescription({ specieDescription = '' }) {
	const { isInputEqualsPokemonName } = useContext(SelectedPokemonContext);
	const { errors } = useContext(FetchErrorContext);
	const [displayText, setDisplayText] = useState('');


	useEffect(() => {
		if (!isInputEqualsPokemonName) {
			return;
		}

		const textNotFound = 'Species Description Not Found';
		let processedText = '';
		processedText = errors?.specieDescription
			? textNotFound
			: specieDescription || 'Processing...';

		let index = 0;
		const interval = 50;
		const timer = setInterval(() => {
			const letter = processedText.charAt(index);
			setDisplayText((textPrev) => textPrev + letter);
			index++;
		}, interval);

		return () => {
			clearInterval(timer);
			setDisplayText('');
		}
	}, [isInputEqualsPokemonName, specieDescription]);

	return (
		<section className="screen_write_specie_description">
			<ScreenBase>
				<pre>
					{displayText}
				</pre>
			</ScreenBase>
		</section>
	);
}

export { ScreenWriteSpecieDescription };
