import { GroupTwoRectangularLeds } from '@shared-components/molecules/group-two-rectangular-leds';
import { GroupTwoRoundLeds } from '@shared-components/molecules/group-two-round-leds';

import { ButtonPad } from '../../atoms/button-pad';

import { SuspenseDirectionalPad } from '../../../suspensions/suspense-directional-pad';
import { SuspenseScreenPokemonBasicInfo } from '../../../suspensions/suspense-screen-pokemon-basic-info';

import './styles.css';

function ControlPanelProcessPokemon() {

	return (
		<section className="control_panel_process_pokemon">
			<section className="control_panel_process_pokemon__btn_led">
				<ButtonPad shape="round" ariaLabel="Activate voice command" />
				<GroupTwoRoundLeds />
			</section>
			<section className="control_panel_process_pokemon__led_info">
				<GroupTwoRectangularLeds />
				<SuspenseScreenPokemonBasicInfo />
			</section>
			<section>
				<SuspenseDirectionalPad />
			</section>
		</section>
	);
}

export { ControlPanelProcessPokemon };
