import { Pokedex } from '@shared-components/templates/pokedex';

import { SearchLedIndicator } from './components/organisms/search-led-indicator';
import { ScreenInputPokemonName } from './components/organisms/screen-input-pokemon-name';
import { ControlPanelProcessPokemon } from './components/organisms/control-panel-process-pokemon';

function FeaturePokedexMain() {

	return (
		<Pokedex>
			<article>
				<SearchLedIndicator />
				<ScreenInputPokemonName />
				<ControlPanelProcessPokemon />
			</article>
		</Pokedex>
	);
}

export { FeaturePokedexMain };
