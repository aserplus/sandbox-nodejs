const should = require('should');
const Queue = require('../../../app/dataStructures/queue/index');

describe('dataStructure/queue', () => {
    let objectUnderTest;
    const provided = [1, 2, 3];

    beforeEach(() => {
        objectUnderTest = new Queue();
    });

    describe('enqueue()', () => {
        it('should add items to end of queue', () => {
            /* arrange */
            const expected = [];

            provided.forEach((item) => {
                /* act */
                objectUnderTest.enqueue(item);

                expected.push(item);

                /* assert */
                objectUnderTest.items.should.deepEqual(expected);
            });
        });
    });

    describe('dequeue()', () => {
        it('should throw "Underflow" error', () => {
            should(() => objectUnderTest.dequeue()).throw('Underflow');
        });

        it('should remove first item from queue', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.enqueue(item));
            const expected = [provided[1], provided[2]];

            /* act */
            objectUnderTest.dequeue();

            /* assert */
            objectUnderTest.items.should.deepEqual(expected);
        });

        it('should return first item from queue', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.enqueue(item));
            const expected = provided[0];

            /* act */
            const result = objectUnderTest.dequeue();

            /* assert */
            result.should.equal(expected);
        });
    });

    describe('front()', () => {
        it('should return undefined if queue is empty', () => {
            /* arrange */
            const expected = undefined;

            /* act */
            const result = objectUnderTest.front();

            /* assert */
            should.equal(result, expected);
        });

        it('should return first item from queue', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.enqueue(item));
            const expected = provided[0];

            /* act */
            const result = objectUnderTest.front();

            /* assert */
            result.should.equal(expected);
        });
    });

    describe('rear()', () => {
        it('should return undefined if queue is empty', () => {
            /* arrange */
            const expected = undefined;

            /* act */
            const result = objectUnderTest.rear();

            /* assert */
            should.equal(result, expected);
        });

        it('should return last item from queue', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.enqueue(item));
            const expected = provided[2];

            /* act */
            const result = objectUnderTest.rear();

            /* assert */
            result.should.equal(expected);
        });
    });

    describe('isEmpty()', () => {
        it('should return true', () => {
            /* arrange */
            const expected = true;

            /* act */
            const result = objectUnderTest.isEmpty();

            /* assert */
            result.should.equal(expected);
        });

        it('should return false', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.enqueue(item));
            const expected = false;

            /* act */
            const result = objectUnderTest.isEmpty();

            /* assert */
            result.should.equal(expected);
        });
    });
});
