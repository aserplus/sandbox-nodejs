const should = require('should');
const Node = require('../../../dataStructures/linkedList/node');
const SinglyLinkedList = require('../../../dataStructures/linkedList/singlyLinkedList');

describe('dataStructure/linkedList/singlyLinkedList', () => {
	let objectUnderTest;

	beforeEach(() => {
		objectUnderTest = new SinglyLinkedList();
	});

	describe('insertFirst()', () => {
		it('should add nodes at start', () => {
			/* arrange */
			const expected = new Node(3);
			expected.next = new Node(2);
			expected.next.next = new Node(1);

			/* act */
			objectUnderTest.insertFirst(1);
			objectUnderTest.insertFirst(2);
			objectUnderTest.insertFirst(3);

			/* assert */
			objectUnderTest.head.should.be.deepEqual(expected);
		});
	});

	describe('insertLast()', () => {
		it('should add nodes at end', () => {
			/* arrange */
			const expected = new Node(1);
			expected.next = new Node(2);
			expected.next.next = new Node(3);

			/* act */
			objectUnderTest.insertLast(1);
			objectUnderTest.insertLast(2);
			objectUnderTest.insertLast(3);

			/* assert */
			objectUnderTest.head.should.be.deepEqual(expected);
		});
	});

	describe('removeFirst()', () => {
		it('should remove node at start', () => {
			/* arrange */
			objectUnderTest.insertLast(1);
			objectUnderTest.insertLast(2);
			objectUnderTest.insertLast(3);

			const expected = new Node(2);
			expected.next = new Node(3);

			/* act */
			objectUnderTest.removeFirst();

			/* assert */
			objectUnderTest.head.should.be.deepEqual(expected);
		});

		it('should remove all nodes', () => {
			/* arrange */
			objectUnderTest.insertLast(1);
			const expected = null;

			/* act */
			objectUnderTest.removeFirst();

			/* assert */
			should.deepEqual(objectUnderTest.head, expected);
		});
	});

	describe('removeLast()', () => {
		it('should remove node at end', () => {
			/* arrange */
			objectUnderTest.insertLast(1);
			objectUnderTest.insertLast(2);
			objectUnderTest.insertLast(3);

			const expected = new Node(1);
			expected.next = new Node(2);

			/* act */
			objectUnderTest.removeLast();

			/* assert */
			objectUnderTest.head.should.be.deepEqual(expected);
		});

		it('should remove all nodes', () => {
			/* arrange */
			objectUnderTest.insertLast(1);
			const expected = null;

			/* act */
			objectUnderTest.removeLast();

			/* assert */
			should.deepEqual(objectUnderTest.head, expected);
		});
	});
	
	describe('isEmpty()', () => {
		it('should return true', () => {
			/* arrange */
			const expected = true;

			/* act */
			const result = objectUnderTest.isEmpty();

			/* assert */
			result.should.be.equal(expected);
		});

		it('should return false', () => {
			/* arrange */
			const expected = false;
			
			objectUnderTest.insertLast(1);

			/* act */
			const result = objectUnderTest.isEmpty();

			/* assert */
			result.should.be.equal(expected);
		});
	});
});