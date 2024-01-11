import { Led } from '@shared-components/atoms/led';
import { Picture } from '@shared-components/atoms/picture';

import './styles.css';

function PokemonElement({ svg, symbol, active }) {
	const className = `pokemon_element ${active && symbol}`

	return (
		<section className={className} data-active={active}>
			<div className="pokemon_element__picture">
				<Picture src={svg} alt={`Element ${symbol}`} size="symbol" />
			</div>
			<div className="pokemon_element__led">
				<Led size="resizable" color="transparent" shape="resizable" />
			</div>
		</section>
	);
};

export { PokemonElement };
