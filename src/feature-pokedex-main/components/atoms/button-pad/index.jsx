import './styles.css';

function ButtonPad({ shape = 'square', handleClick, ariaLabel = 'Button pad' }) {
	const button = {
		onClick: handleClick,
		title: ariaLabel,
		['aria-label']: ariaLabel
	}

	return (
		<button className="button_pad" data-shape={shape} {...button}>
			<div></div>
		</button>
	);
}

export { ButtonPad };
