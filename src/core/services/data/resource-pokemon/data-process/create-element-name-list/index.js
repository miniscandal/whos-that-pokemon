import { isArrayObject } from "@shared-services/utilities/validate-value-type";
import { isJsonObject } from "@shared-services/utilities/validate-value-type";
import { isString } from "@shared-services/utilities/validate-value-type";

function createElementNameList({ types = [] }) {
	if (!isArrayObject({ object: types }) || !types.length) {
		return [];
	}

	const elements = types.reduce((accumulator, { type: element }) => {
		if (!isJsonObject({ object: element })) {
			return;
		}

		const { name } = element;
		if (isString({ value: name })) {
			accumulator.push(name)
		}

		return accumulator;
	}, []);

	return elements;
}

export { createElementNameList };
