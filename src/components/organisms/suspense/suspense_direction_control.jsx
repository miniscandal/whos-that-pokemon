import '../../../styles/organisms/direction_control.css';
import { Suspense } from 'react';
import { useResourcePokemonEvolutionChain } from '../../../services/api_rest_pokemon_evolution_chain';
import RectangularButton from '../../atoms/rectangular_button';

function Joystick({ fn }) {
    const left = {
        attribute: { text: 'Evolution', symbol: 'E', }
    };
    const ringht = {
        attribute: { text: 'Evolution', symbol: 'E', }
    };
    const up = {
        attribute: { text: 'Random', symbol: 'R', }
    };
    const down = {
        attribute: { text: 'Next #', symbol: 'N', },
    };
    const center = {
        attribute: { text: 'Solution', symbol: 'S', },
    };

    return (
        <div className="direction_control">
            <div>
                <RectangularButton
                    attributes={ left.attribute }
                    handleClick={ () => fn?.nextOrPreviousEvolution(true) }
                />
            </div>
            <div>
                <RectangularButton
                    attributes={ ringht.attribute }
                    handleClick={ () => fn?.nextOrPreviousEvolution(false) }
                />
            </div>
            <div>
                <RectangularButton
                    attributes={ up.attribute }
                    handleClick={ fn?.randomPokemon }
                />
            </div>
            <div>
                <RectangularButton
                    attributes={ down.attribute }
                    handleClick={ fn?.nextNumberPokemon }
                />
            </div>
            <div>
                <RectangularButton
                    attributes={ center.attribute }
                    handleClick={ fn?.solutionNameMatch }
                />
            </div>
        </div>
    );
}

function Load({ apiData, states, }) {
    const { setIsNameMatch, setNumberPokemon, numberPokemon, } = states;
    const { joystickLock } = states;
    
    const { data, error, } = apiData.read();
    const urlEvolutionChain = data.evolution_chain;
    const apiDataEvolutionChain = useResourcePokemonEvolutionChain(urlEvolutionChain);
    const dataEvolutionChain = apiDataEvolutionChain.apiData.read().data;
    const errorEvolutionChain = apiDataEvolutionChain.apiData.read().error;

    if (error) return error.component;
    if (errorEvolutionChain) return errorEvolutionChain.component;

    const randomPokemon = () => {
        if (joystickLock) return;
        const randomNumber = Math.floor(Math.random() * (1010 - 1) + 1);
        setNumberPokemon(randomNumber);
        setIsNameMatch(false);
    };

    const nextOrPreviousEvolution = (next) => {
        if (joystickLock) return;
        const evolutions = dataEvolutionChain.evolutions;
        const index = evolutions.findIndex((e) => e.number === numberPokemon);
        const nextIndex = next ? index - 1 : index + 1;
        const nextNumberPokemon = evolutions[nextIndex]?.number;
        if (nextNumberPokemon) {
            setIsNameMatch(false);
            setNumberPokemon(nextNumberPokemon);
        }
    };

    const nextNumberPokemon = () => {
        if (joystickLock) return;
        setNumberPokemon(numberPokemon + 1);
        setIsNameMatch(false);
    };

    const solutionNameMatch = () => {
        if (joystickLock) return;
        setIsNameMatch(true);
    };

    const fn = {
        randomPokemon,
        nextOrPreviousEvolution,
        nextNumberPokemon,
        solutionNameMatch,
    };
    
    return (
        <Joystick fn={ fn } />
    )
}

function SuspenseDirectionControl({ apiData, states, }) {
    
    return (
        <Suspense fallback={  <Joystick /> }>
            <Load apiData={ apiData } states={ states } />
        </Suspense>
    );
}

export default SuspenseDirectionControl;