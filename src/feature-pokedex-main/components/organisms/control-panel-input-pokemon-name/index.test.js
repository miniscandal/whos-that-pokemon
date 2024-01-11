import { describe, it, expect, vi, beforeEach } from 'vitest';

import { updateInputAndCheckEquality } from '.';

import { MAGIC_WORD_SOLVE } from '../../../constants/index';

describe('test for updateInputAndCheckEquality function', () => {
	const test = {
		equalsName: 'should call setIsInputEqualsPokemonName with true if event value equals name',
		equalsMagicWordSave: 'should call setIsInputEqualsPokemonName with true if event value equals MAGIC_WORD_SOLVE',
		equalsEventValue: 'should call setInputValue with value of event if not name equals MAGICAL_WORD_SOLVE'
	};

	let event;
	let name;
	let setInputValue;
	let setIsInputEqualsPokemonName;

	beforeEach(() => {
		event = {
			target: {
				value: ''
			}
		};
		name = 'pikachu';
		setInputValue = vi.fn();
		setIsInputEqualsPokemonName = vi.fn();
	});

	it(test.equalsName, () => {
		const result = 'pikachu';
		const expected = true;

		event.target.value = result;
		updateInputAndCheckEquality({ event, name, setInputValue, setIsInputEqualsPokemonName });

		expect(setIsInputEqualsPokemonName).toHaveBeenCalledWith(expected)
	});

	it(test.equalsMagicWordSave, () => {
		const result = MAGIC_WORD_SOLVE;
		const expected = true;

		event.target.value = result;
		updateInputAndCheckEquality({ event, name, setInputValue, setIsInputEqualsPokemonName });

		expect(setIsInputEqualsPokemonName).toHaveBeenCalledWith(expected)
	});

	it(test.equalsEventValue, () => {
		const result = 'charmander';
		const expected = 'charmander';

		event.target.value = result;
		updateInputAndCheckEquality({ event, name, setInputValue, setIsInputEqualsPokemonName });

		expect(setInputValue).toHaveBeenCalledWith(expected);
	});

});
