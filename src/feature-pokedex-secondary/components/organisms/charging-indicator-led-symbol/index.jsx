import { Led } from '@shared-components/atoms/led';

import { GroupTwoRoundLeds } from '@shared-components/molecules/group-two-round-leds';
import { GroupTwoRectangularLeds } from '@shared-components/molecules/group-two-rectangular-leds';

import './styles.css';

function ChargingIndicatorLedSymbol() {

	return (
		<section className="charging_indicator_led_symbol">
			<section>
				<GroupTwoRoundLeds />
				<GroupTwoRectangularLeds />
			</section>
			<section>
				<Led size="large" color="white" shape="rectangular" />
				<Led size="large" color="white" shape="rectangular" />
			</section>
			<section>
				<Led size="standard" color="yellow" shape="round" />
			</section>
		</section>
	);
}

export { ChargingIndicatorLedSymbol };
