import { useState, createContext } from 'react';

const POKEMON_PIKACHU_ID = 25;

const SelectedPokemonContext = createContext({
	pokemonId: POKEMON_PIKACHU_ID,
	setPokemonId: () => { },
	isInputEqualsPokemonName: false,
	setIsInputEqualsPokemonName: () => { }
});

function SelectedPokemonProvider({ children }) {
	const [pokemonId, setPokemonId] = useState(POKEMON_PIKACHU_ID);
	const [isInputEqualsPokemonName, setIsInputEqualsPokemonName] = useState(false);
	const value = {
		pokemonId,
		setPokemonId,
		isInputEqualsPokemonName,
		setIsInputEqualsPokemonName
	}

	return (
		<SelectedPokemonContext.Provider value={value}>
			{children}
		</SelectedPokemonContext.Provider>
	);
}

export { SelectedPokemonContext, SelectedPokemonProvider };
