import './styles.css';

function TextInputBox({ placeholder = '', disabled = true, value, onChange }) {
	const attributes = {
		type: 'text',
		autoComplete: 'off',
		placeholder,
		disabled,
		value,
		onChange
	};

	return (
		<input className="text_input_box" {...attributes} spellCheck="false"></input>
	);
}

export { TextInputBox };
