import './styles.css';

function ScreenBase({ children }) {

	return (
		<div className="screen_base">
			<div className="screen_base__children">
				{children}
			</div>
		</div>
	);
}

export { ScreenBase };
