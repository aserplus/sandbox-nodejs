const should = require('should');
const { mergeSort } = require('../../../app/algorithms/sort/mergeSort.js');

describe('algorithms/sort/mergeSort', () => {
    it('should update array as expected for all scenarios', () => {
        /* arrange */
        const scenarios = [
            {
                description: '1) should not update array when null provided',
                provided: {
                    data: null,
                },
                expected: null,
            }, {
                description: '2) should not update array when empty array provided for data',
                provided: {
                    data: [],
                },
                expected: [],
            }, {
                description: '3) should not update array when single array item provided',
                provided: {
                    data: [1],
                },
                expected: [1],
            }, {
                description: '4) should update array accordingly',
                provided: {
                    data: [123123, 9, 8, 4, 3, 1, -1, 3, -3, 4, 6, 1, 1111, 234234, 2, 0],
                },
                expected: [-3, -1, 0, 1, 1, 2, 3, 3, 4, 4, 6, 8, 9, 1111, 123123, 234234],
            }];

        scenarios.forEach((scenario) => {
            /* act */
            mergeSort(scenario.provided.data);

            /* assert */
            should.deepEqual(scenario.provided.data, scenario.expected, scenario.description);
        });
    });
});
