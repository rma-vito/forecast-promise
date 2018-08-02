const stringifyDates = require('./stringifyDates');

jest.mock('./toDateString', () => args => args);

describe('stringifyDates', () => {
	it('returns input as-is', () => {
		expect(stringifyDates({})).toEqual({});
	});

	it('converts the start date', () => {
		expect(stringifyDates({ startDate: 'someValue' })).toMatchObject({
			start_date: 'someValue',
		});
	});

	it('converts the end date', () => {
		const output = stringifyDates({ endDate: 'someValue' });

		expect(output).toMatchObject({
			end_date: 'someValue',
		});

		expect(Object.keys(output).length).toBe(1);
	});
});
