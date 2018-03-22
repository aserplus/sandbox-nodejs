const { binarySearch } = require('../../../app/algorithms/search/binarySearch.js');

describe('algorithms/search/binarySearch', () => {
    it('should return expected results for all scenarios', () => {
        /* arrange */
        const scenarios = [{
            description: '1) should return -1 when null provided for data',
            provided: {
                data: null,
                target: 1,
            },
            expected: -1,
        }, {
            description: '2) should return -1 when empty array provided for data',
            provided: {
                data: [],
                target: 1,
            },
            expected: -1,
        }, {
            description: '3) should return -1 when target provided is empty',
            provided: {
                data: [1],
                target: null,
            },
            expected: -1,
        }, {
            description: '4) should return first index',
            provided: {
                data: [1, 2, 4, 5, 6, 7, 8, 9],
                target: 1,
            },
            expected: 0,
        }, {
            description: '5) should return last index',
            provided: {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                target: 9,
            },
            expected: 8,
        }, {
            description: '5) should return mid index',
            provided: {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                target: 5,
            },
            expected: 4,
        }];

        let result;
        scenarios.forEach((scenario) => {
            /* act */
            result = binarySearch(scenario.provided.data, scenario.provided.target);

            /* assert */
            result.should.equal(scenario.expected, scenario.description);
        });
    });
});
