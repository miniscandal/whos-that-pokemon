import { Led } from '../../atoms/led';

import './styles.css';

function GroupTwoRectangularLeds() {

	return (
		<section className="group_two_rectangular_leds">
			<Led size="standard" color="yellow" shape="rectangular" />
			<Led size="standard" color="blue" shape="rectangular" />
		</section>
	);
}

export { GroupTwoRectangularLeds };
