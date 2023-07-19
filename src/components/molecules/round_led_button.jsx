import '../../styles/molecules/round_led_button.css';
import Led from '../atoms/led';

function RoundLedButton({ states }) {
    const led = {
        style: 'round_led round_led--medium led--red'
    };

    const randomPokemon = () => {
        const randomNumber = Math.floor(Math.random() * (1010 - 1) + 1);
        states.setNumberPokemon(randomNumber);
        states.setIsNameMatch(false);
    };

    return (
        <button className="round_led_button" onClick={ randomPokemon }>
            <Led attributes={ led } />
        </button>
    );
}

export default RoundLedButton;