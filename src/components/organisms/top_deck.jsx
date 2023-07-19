import '../../styles/organisms/top_deck.css';
import { useState } from 'react';
import { useResourcePokemon } from '../../services/api_rest_pokemon';
import { useResourcePokemonSpecies } from '../../services/api_rest_pokemon_species';
import Deck from "../templates/deck";
import DisplayLcd from "./display_lcd";
import Led from '../atoms/led';
import AllTypesPokemon from './all_types_pokemon';
import GroupTwoRoundLeds from '../molecules/group_two_round_leds';
import GroupTwoRectangularLeds from '../molecules/group_two_rectangular_leds';
import SuspenseDescription from './suspense/suspense_description';
import SuspenseTypePokemon from './suspense/suspense_type_pokemon';

function TopDeck({ states }) {
    const [pokemonTypes, setPokemonTypes] = useState({
        one: { name: null },
        two: { name: null },
    });
    const { numberPokemon } = states;
    const apiDataPokemon = useResourcePokemon(numberPokemon);
    const apiDataSpecies = useResourcePokemonSpecies(numberPokemon);
    states.pokemonTypes = pokemonTypes;
    states.setPokemonTypes = setPokemonTypes;
    const leds = {
        rectangular: {
            style: 'rectangular_led rectangular_led--big led--white'
        },
        round: {
            style: 'round_led round_led--medium led--yellow'
        },
    };

    return (
        <Deck style="top_deck">
            <DisplayLcd>
                <div className="top_deck--displaylcd_description_pokemon">
                    <SuspenseDescription apiData={ apiDataSpecies.apiData } states={ states } />
                </div>
            </DisplayLcd>
            <div className="top_deck__div--group_leds">
                <div>
                    <AllTypesPokemon states={ states } />
                </div>
                <div>
                    <GroupTwoRoundLeds />
                    <GroupTwoRectangularLeds />
                </div>
                <div>
                    <div>
                        <Led attributes={ leds.rectangular } />
                        <Led attributes={ leds.rectangular } />
                    </div>
                    <div>
                        <Led attributes={ leds.round } />
                    </div>
                </div>
            </div>
            <SuspenseTypePokemon apiData={ apiDataPokemon.apiData } states={ states } />
        </Deck>
    );
}

export default TopDeck;