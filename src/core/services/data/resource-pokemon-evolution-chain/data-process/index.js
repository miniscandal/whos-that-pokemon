import { urlParse } from '@shared-services/utilities/url-parse/url-parse';
import { isArrayObject } from '@shared-services/utilities/validate-value-type';
import { isJsonObject } from '@shared-services/utilities/validate-value-type';
import { isNumber } from '@shared-services/utilities/validate-value-type';
import { isString } from '@shared-services/utilities/validate-value-type';

function createEvolutionData({ name, url }) {
	const id = +urlParse(url, 2);
	const isValidData = isNumber({ value: id }) && isString({ value: name });

	return isValidData ? [{ name, id }] : [];
}

function retrieveEvolutionChain(chain) {
	const evolutions = chain.flatMap(evolution => {
		const { species } = evolution;

		if (!isJsonObject({ object: species })) {
			return;
		}

		const { name, url } = species;
		let evolutionData = createEvolutionData({ name, url });
		const { evolves_to: evolvesTo } = evolution;

		if (isArrayObject({ object: evolvesTo }) && evolvesTo.length) {
			evolutionData = [...evolutionData, ...retrieveEvolutionChain(evolvesTo)];
		}

		return evolutionData;
	});

	return evolutions;
}

function createEvolutionList({ chain }) {
	const evolutionList = isJsonObject({ object: chain })
		? retrieveEvolutionChain([chain])
		: [];

	return evolutionList;
}

export { createEvolutionList };
