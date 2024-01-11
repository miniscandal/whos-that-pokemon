import { Led } from '@shared-components/atoms/led';

import './styles.css';

function SearchLedIndicator() {
	return (
		<section className="search_led_indicator">
			<Led size="large" color="blue" />
			<Led size="standard" color="red" />
			<Led size="standard" color="yellow" />
			<Led size="standard" color="green" />
		</section>
	);
}

export { SearchLedIndicator }
