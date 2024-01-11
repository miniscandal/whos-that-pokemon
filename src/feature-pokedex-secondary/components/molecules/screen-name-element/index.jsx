import { ParagraphBinaryEffect } from '@shared-components/atoms/paragraph-binary-effect';

import { ScreenBase } from '@shared-components/templates/screen-base';

import { Paragraph } from '../../../../shared/components/atoms/paragraph';

import './styles.css';

function ScreenNameElement({ name, value, isBinaryEffect }) {

	return (
		<section>
			<ScreenBase>
				<div className="screen_name_element__content">
					<Paragraph text={name} style="orbitron" />
					<div className="screen_name_element__text">
						<ParagraphBinaryEffect text={value} isAnimation={isBinaryEffect} />
					</div>
				</div>
			</ScreenBase>
		</section>
	);
}

export { ScreenNameElement };
