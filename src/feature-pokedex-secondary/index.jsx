import { Pokedex } from '@shared-components/templates/pokedex';

import { ChargingIndicatorLedSymbol } from './components/organisms/charging-indicator-led-symbol';

import { SuspensePokemonElemets } from './suspensions/suspense-pokemon-elements';
import { SuepenseCollectionPokemonSymbols } from './suspensions/suspense-collection-pokemon-symbols';
import { SuspenseScreenWritePokemonDescription } from './suspensions/suspense-screen-write-pokemon-description';

function FeaturePokedexSecondary() {

	return (
		<Pokedex>
			<article>
				<SuspenseScreenWritePokemonDescription />
				<SuepenseCollectionPokemonSymbols />
				<ChargingIndicatorLedSymbol />
				<SuspensePokemonElemets />
			</article>
		</Pokedex>
	);
}

export { FeaturePokedexSecondary };
