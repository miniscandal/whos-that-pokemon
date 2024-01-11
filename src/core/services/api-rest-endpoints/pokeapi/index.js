const mocks = Boolean(import.meta.env.VITE_DATA_ACCESS_MOCKS);

const mocksPokemon = './src/mocks/api-rest-pokemon.json';
const mocksPokemonSpecies = './src/mocks/api-rest-pokemon-species.json';
const mocksPokemonArt = './src/mocks/pokemon-art.png';
const mocksPokemonEvolutionChain = './src/mocks/api-rest-pokemon-evolution-chain.json';

const origin = 'https://pokeapi.co';
const pathname = '/api/v2';
const apiRestPokemon = `${origin}${pathname}/pokemon`;
const apiRestPokemonSpecies = `${origin}${pathname}/pokemon-species`;
const apiRestPokemonEvolutionChain = `${origin}${pathname}/evolution-chain`;

const originArt = 'https://raw.githubusercontent.com';
const pathnameArt = '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
const apiRestPokemonArt = `${originArt}${pathnameArt}`;

const getPokemonApiUrl = ({ pokemonNumber = 25 }) => (
	mocks ? mocksPokemon : `${apiRestPokemon}/${pokemonNumber}`
);

const getPokemonSpeciesApiUrl = ({ pokemonNumber = 25 }) => (
	mocks ? mocksPokemonSpecies : `${apiRestPokemonSpecies}/${pokemonNumber}`
);

const getPokemonArtApiUrl = ({ pokemonNumber = 25 }) => (
	mocks ? mocksPokemonArt : `${apiRestPokemonArt}/${pokemonNumber}.png`
);

const getPokemonEvolutionChainApiUrl = ({ evolutionChainId = 10 }) => (
	mocks ? mocksPokemonEvolutionChain : `${apiRestPokemonEvolutionChain}/${evolutionChainId}`
);

export {
	getPokemonApiUrl,
	getPokemonSpeciesApiUrl,
	getPokemonArtApiUrl,
	getPokemonEvolutionChainApiUrl
};
