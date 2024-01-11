import { describe, it, expect, vi, beforeEach } from 'vitest';

import { findEvolutionId } from '.';

describe('test for findEvolutionId function', () => {
	const test = {
		backwardEvolution: 'should return id 172 with the current id being 25',
		forwardEvolution: 'should return id 26 with the current id being 25',
		finalBackwardEvolution: 'should return id 172, current id is 172 and since previous id does not exist',
		finalForwardEvolution: 'should returnn id 26, current id is 26 and since the next id does not exist'
	};

	let currentId;
	let evolutionList = [
		{
			name: 'pichu',
			id: 172
		},
		{
			name: 'pikachu',
			id: 25
		},
		{
			name: 'raichu',
			id: 26
		}
	];

	it(test.backwardEvolution, () => {
		currentId = 25;
		const result = findEvolutionId({ evolutionList, currentId, transition: false });
		const expected = 172;

		expect(result).toBe(expected);
	});

	it(test.forwardEvolution, () => {
		currentId = 25;
		const result = findEvolutionId({ evolutionList, currentId, transition: true });
		const expected = 26;

		expect(result).toBe(expected);
	});

	it(test.finalBackwardEvolution, () => {
		currentId = 172;
		const result = findEvolutionId({ evolutionList, currentId, transition: false });
		const expected = 172;

		expect(result).toBe(expected);
	});

	it(test.finalBackwardEvolution, () => {
		currentId = 26;
		const result = findEvolutionId({ evolutionList, currentId, transition: true });
		const expected = 26;

		expect(result).toBe(expected);
	});
});
