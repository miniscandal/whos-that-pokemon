import { expect, test } from 'vitest';

import { createElementNameList } from '.';

const elements = ['electric', 'ice'];
const types = [
	{
		type: {
			name: elements[0]
		}
	},
	{
		type: {
			name: elements[1]
		}
	}
];
const message = `should return list with [electric,  ice] for specific input types`;

test(message, () => {
	const result = createElementNameList({ types });
	const expected = elements;
	expect(result).toStrictEqual(expected);
});
