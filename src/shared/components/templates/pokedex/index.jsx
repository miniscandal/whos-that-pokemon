import './styles.css';

function Pokedex({ children }) {

	return (
		<div className="pokedex">
			<div>
				<div className="pokedex__children">
					{children}
				</div>
			</div>
		</div>
	);
}

export { Pokedex };
