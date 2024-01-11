function generateRandomPokemonNumber() {
	const number = Math.floor(Math.random() * (1010 - 1) + 1);

	return number;
}

export { generateRandomPokemonNumber }
