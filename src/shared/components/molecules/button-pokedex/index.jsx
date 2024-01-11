import { Led } from '../../atoms/led';

import './styles.css';

function ButtonPokedex({ text, handleClick }) {
	const button = {
		onClick: handleClick,
		title: 'Button Pokedex',
		['arial-label']: 'Button Pokedex'
	};

	return (
		<button className="button_pokedex" {...button}>
			<div>
				<div className="button_pokedex__content">
					<Led size="small" color="yellow" />
					<span className="button_pokedex__text">
						{text}
					</span>
				</div>
			</div>
		</button>
	);
}

export { ButtonPokedex };
