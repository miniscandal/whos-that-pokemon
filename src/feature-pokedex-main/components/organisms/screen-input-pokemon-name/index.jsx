import { GroupTwoRoundLeds } from '@shared-components/molecules/group-two-round-leds';
import { ScreenBase } from '@shared-components/templates/screen-base';

import { SuspensePokemonImageToGuess } from '../../../suspensions/suspense-pokemon-image-to-guess';
import { SuspenseControlPanelInputPokemonName } from '../../../suspensions/suspense-control-panel-input-pokemon-name';

import './styles.css';

function ScreenInputPokemonName() {

	return (
		<section>
			<ScreenBase>
				<header className="screen_input_pokemon_name__header">
					<GroupTwoRoundLeds />
				</header>
				<section className="screen_input_pokemon_name__picture">
					<SuspensePokemonImageToGuess />
				</section>
				<SuspenseControlPanelInputPokemonName />
			</ScreenBase>
		</section>
	);
}

export { ScreenInputPokemonName };
