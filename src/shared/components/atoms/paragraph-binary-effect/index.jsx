import './styles.css';

function ParagraphBinaryEffect({ text, isAnimation }) {

	return (
		<p className="paragraph_binary_effect" data-binary-effect={isAnimation}>
			{text}
		</p>
	);
}

export { ParagraphBinaryEffect };
