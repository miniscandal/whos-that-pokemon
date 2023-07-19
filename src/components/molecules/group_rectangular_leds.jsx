import '../../styles/molecules/group_rectangular_leds.css';
import Led from "../atoms/led";

function GroupRectangularLeds({ type }) {
    const types = {
        rectangular: {
            style: 'rectangular_led rectangular_led--small led--red'
        }
    };

    return (
        <div className="group_leds">
            <Led attributes={ types[type] } />
            <Led attributes={ types[type] } />
            <Led attributes={ types[type] } />
        </div>
    );
}

export default GroupRectangularLeds;