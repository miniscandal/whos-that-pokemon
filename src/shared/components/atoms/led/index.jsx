import './styles.css';

function Led({ size = 'standard', color = 'yellow', shape = 'round' }) {

	return (
		<div className="led" data-size={size} data-color={color} data-shape={shape}>
			<div className="led__first"></div>
			<div className="led__second"></div>
		</div>
	);
}

export { Led };
