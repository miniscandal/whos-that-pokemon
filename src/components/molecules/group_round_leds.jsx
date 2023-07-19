import '../../styles/molecules/group_round_leds.css';
import Led from '../atoms/led';

function GroupRoundLeds() {
    const leds = {
        'a': { style: 'round_led round_led--medium led--yellow' },
        'b': { style: 'round_led round_led--medium led--red' },
    };

    return (
        <div className="group_round_leds">
            <Led attributes={ leds.a } />
            <Led attributes={ leds.b } />
            <Led attributes={ leds.b } />
        </div>
    );
}

export default GroupRoundLeds;