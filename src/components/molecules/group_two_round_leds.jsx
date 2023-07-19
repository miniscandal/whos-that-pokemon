import '../../styles/molecules/group_two_round_leds.css';
import Led from "../atoms/led";

function GroupTwoRoundLeds() {
    const leds = {
        green: {
            style: 'round_led round_led--small led--green'
        },
        red: {
            style: 'round_led round_led--small led--red'
        },
    }

    return (
        <div className="group_two_round_leds">
            <Led attributes={ leds.green } />
            <Led attributes={ leds.red  } />
        </div>
    );
}

export default GroupTwoRoundLeds;