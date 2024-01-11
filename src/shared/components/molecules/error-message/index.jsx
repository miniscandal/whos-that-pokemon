import { Paragraph } from '@shared-components/atoms/paragraph';

import './styles.css';

function ErrorMessage({ text }) {

	return (
		<div className="error_message">
			<Paragraph text={text} size="small" color="error" />
		</div>
	);
}

export { ErrorMessage };
