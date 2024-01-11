import { Led } from '../../atoms/led';

import './styles.css';

function GroupTwoRoundLeds() {

	return (
		<section className="group_two_round_leds">
			<Led size="small" color="red" />
			<Led size="small" color="red" />
		</section>
	);
}

export { GroupTwoRoundLeds };
