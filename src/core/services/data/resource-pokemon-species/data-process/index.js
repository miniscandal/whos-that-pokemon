import { isArrayObject } from '@shared-services/utilities/validate-value-type';
import { isJsonObject } from '@shared-services/utilities/validate-value-type';
import { isString } from '@shared-services/utilities/validate-value-type';

function filterDescriptions({ flavorTextEntries, selectedLanguage = 'en' }) {
	const unknown = 'Unknown Pokémon Description!';

	if (!isArrayObject({ object: flavorTextEntries })) {
		return unknown;
	}

	const filterDescriptions = flavorTextEntries.filter(flavorTextEntrie => {
		const { language } = flavorTextEntrie;
		if (!isJsonObject({ object: language })) {
			return false;
		}

		const { name } = language;
		if (isString({ value: name })) {
			return (name === selectedLanguage);
		}

	});

	if (!filterDescriptions.length) {
		return unknown;
	}

	const { flavor_text: flavorText } = filterDescriptions[0];
	const description = isString({ value: flavorText })
		? flavorText.trim().replace(/\n/g, ' ')
		: unknown;

	return description;
}

export { filterDescriptions };
