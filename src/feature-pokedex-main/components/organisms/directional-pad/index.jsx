import { useContext } from 'react';

import { SelectedPokemonContext } from '@shared-contexts/selected-pokemon';
import { FetchErrorContext } from '@shared-contexts/fetch-error';

import { generateRandomPokemonNumber } from '@shared-services/utilities/random-pokemon-number';

import { ButtonPad } from '../../atoms/button-pad';

import './styles.css';

function findEvolutionId({ evolutionList, currentId, transition }) {
	if (!evolutionList.length) {
		return currentId;
	}

	const index = evolutionList.findIndex((evolution) => evolution.id === currentId);
	const newIndex = transition ? index + 1 : index - 1;

	if (!evolutionList[newIndex]) {
		return currentId;

	}

	const { id } = evolutionList[newIndex];

	return id;
}

function DirectionalPad({ evolutionList = [] }) {
	const { pokemonId, setPokemonId, setIsInputEqualsPokemonName } = useContext(SelectedPokemonContext)
	const { errors } = useContext(FetchErrorContext);

	const setNewRandomPokemon = () => {
		setPokemonId(generateRandomPokemonNumber());
		setIsInputEqualsPokemonName(false);
	};

	const navigateEvolution = (transition) => {
		if (errors.evolutionList) {
			return;
		}
		const evolutionId = findEvolutionId({ evolutionList, currentId: pokemonId, transition });
		if (evolutionId === pokemonId) {
			return;
		}
		setPokemonId(evolutionId);
		setIsInputEqualsPokemonName(false);
	};

	const solvePokemonNameQuiz = () => {
		setIsInputEqualsPokemonName(true);
	};

	const handleUpClick = () => setNewRandomPokemon();
	const handleLeftClick = () => navigateEvolution(false);
	const handleRightClick = () => navigateEvolution(true);
	const handleCenterClick = () => solvePokemonNameQuiz();
	const handleDownClick = () => setNewRandomPokemon();

	const shape = 'square';

	return (
		<section className="directional_pad">
			<div>
				<ButtonPad shape={shape} handleClick={handleUpClick} ariaLabel="Random Pokemón" />
			</div>
			<div>
				<ButtonPad shape={shape} handleClick={handleLeftClick} ariaLabel="Navigate lower evolution" />
			</div>
			<div>
				<ButtonPad shape={shape} handleClick={handleCenterClick} ariaLabel="Solve question about pokemon name" />
			</div>
			<div>
				<ButtonPad shape={shape} handleClick={handleRightClick} ariaLabel="Navigate further evolution" />
			</div>
			<div>
				<ButtonPad shape={shape} handleClick={handleDownClick} ariaLabel="Random Pokemón" />
			</div>
		</section>
	)
}

export { DirectionalPad, findEvolutionId };
