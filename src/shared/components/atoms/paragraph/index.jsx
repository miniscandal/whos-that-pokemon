import './styles.css';

function Paragraph({ text = '', size = 'small', color = 'light' }) {

	return (
		<p className="paragraph" data-size={size} data-color={color}>
			{text}
		</p>
	);
}

export { Paragraph };
