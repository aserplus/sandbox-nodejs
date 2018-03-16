const should = require('should');
const Stack = require('../../../dataStructures/stack/index');

describe('dataStructure/stack', () => {
    let objectUnderTest;
    const provided = [1, 2, 3];

    beforeEach(() => {
        objectUnderTest = new Stack();
    });

    describe('push()', () => {
        it('should add items to end of stack', () => {
            /* arrange */
            const expected = [];

            provided.forEach(item => {
                /* act */
                objectUnderTest.push(item);

                expected.push(item);

                /* assert */
                objectUnderTest.items.should.deepEqual(expected);
            });
        });
    });

    describe('pop()', () => {
        it('should throw "Underflow" error', () => {
            should(() => objectUnderTest.pop()).throw('Underflow')
        });
        
        it('should remove last item from stack', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.push(item));
            const expected = [provided[0], provided[1]];

            /* act */
            const result = objectUnderTest.pop();

            /* assert */
            objectUnderTest.items.should.deepEqual(expected);
        });

        it('should return last item from stack', () => {
             /* arrange */
             provided.forEach(item => objectUnderTest.push(item));
             const expected = provided[2];

             /* act */
             const result = objectUnderTest.pop();
 
             /* assert */
             result.should.equal(expected);
        });
    });

    describe('peek()', () => {
        it('should return undefined if stack is empty', () => {
            /* arrange */
            const expected = undefined;

            /* act */
            const result = objectUnderTest.peek();

            /* assert */
            should.equal(result, expected);
        });

        it('should return last item from stack', () => {
            /* arrange */
            provided.forEach(item => objectUnderTest.push(item));
            const expected = provided[2];

            /* act */
            const result = objectUnderTest.peek();

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
            provided.forEach(item => objectUnderTest.push(item));
            const expected = false;

            /* act */
            const result = objectUnderTest.isEmpty();

            /* assert */
            result.should.equal(expected);
        });
    });
});