import '../../styles/molecules/group_two_rectangular_leds.css';
import Led from "../atoms/led";

function GroupTwoRectangularLeds() {
    const leds = {
        green: {
            style: 'rectangular_led rectangular_led--medium led--green'
        },
        red: {
            style: 'rectangular_led rectangular_led--medium led--red'
        },
    }

    return (
        <div className="group_two_rectangular_leds">
            <Led attributes={ leds.green } />
            <Led attributes={ leds.red  } />
        </div>
    );
}

export default GroupTwoRectangularLeds;