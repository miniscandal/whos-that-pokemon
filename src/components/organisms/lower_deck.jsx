import '../../styles/organisms/lower_deck.css';
import { useResourcePokemon } from '../../services/api_rest_pokemon';
import { useResourcePokemonSpecies } from '../../services/api_rest_pokemon_species';
import Led from '../atoms/led';
import RoundButton from '../atoms/round_button';
import RoundLedButton from '../molecules/round_led_button';
import GroupRectangularLeds from '../molecules/group_rectangular_leds';
import GroupTwoRectangularLeds from '../molecules/group_two_rectangular_leds';
import GroupTwoRoundLeds from '../molecules/group_two_round_leds';
import GroupRoundLeds from '../molecules/group_round_leds';
import DisplayLcd from './display_lcd';
import Deck from '../templates/deck';
import SuspenseImage from './suspense/suspense_image';
import SuspenseInput from './suspense/suspense_input';
import SuspenseInformation from './suspense/suspense_information';
import SuspenseDirectionControl from './suspense/suspense_direction_control';

function LowerDeck({ states }) {
    const { numberPokemon } = states;
    const apiDataPokemon = useResourcePokemon(numberPokemon);
    const apiDataSpecies = useResourcePokemonSpecies(numberPokemon);
   
    const led = {
        style: 'round_led round_led--big led--blue'
    };

    return (
        <Deck style="lower_deck">
            <div className="lower_deck__div--first">
                <Led attributes={ led } />
                <GroupRoundLeds />
            </div>
            <DisplayLcd>
                <div className="lower_deck__div--picture">
                    <GroupTwoRoundLeds />
                </div>
                <div className="lower_deck__div--picture">
                    <SuspenseImage apiData={ apiDataPokemon.apiData } states={ states } />
                </div>
                <div className="lower_deck__div--picture">
                    <RoundLedButton states={ states } />
                    <SuspenseInput apiData={ apiDataPokemon.apiData } states={ states } />
                    <GroupRectangularLeds type="rectangular" />
                </div>
            </DisplayLcd>
            <div className="lower_deck__div--joystick">
                <div>
                    <div className='lower_deck__div--joystick--button'>
                        <RoundButton />
                        <GroupTwoRectangularLeds />
                    </div>
                    <div className="lower_deck__div--joystick--display">
                        <GroupTwoRoundLeds />
                        <DisplayLcd>
                            <SuspenseInformation apiData={ apiDataPokemon.apiData } states={ states } />
                        </DisplayLcd>
                    </div>
                </div>
                <SuspenseDirectionControl apiData={ apiDataSpecies.apiData } states={ states } />
            </div>
        </Deck>
    );
}

export default LowerDeck;