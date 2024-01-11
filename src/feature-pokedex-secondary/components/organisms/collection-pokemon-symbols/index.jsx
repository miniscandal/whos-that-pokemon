import { useContext } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { PokemonElement } from '../../molecules/pokemon-element';

import { POKEMON_TYPE_SYMBOLS_SVG } from '../../../constants/pokemon-type-symbols-svg';

import './styles.css';

function CollectionPokemonSymbols({ elementList = [] }) {
	const { isInputEqualsPokemonName, } = useContext(SelectedPokemonContext);
	const { errors } = useContext(FetchErrorContext);

	const elements = POKEMON_TYPE_SYMBOLS_SVG.map(type => {
		const { symbol, svg } = type;
		const active = elementList.includes(symbol) && isInputEqualsPokemonName;

		return (
			<PokemonElement key={symbol} svg={svg} symbol={symbol} active={active} />
		);
	});

	return (
		<section data-error={errors?.elementList} className="collection_pokemon_symbols">
			{elements}
		</section>
	);
}

export { CollectionPokemonSymbols }
