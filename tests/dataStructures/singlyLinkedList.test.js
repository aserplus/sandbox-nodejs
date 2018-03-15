const should = require('should');
const Node = require('../../dataStructures/linkedList/node');
const SinglyLinkedList = require('../../dataStructures/linkedList/singlyLinkedList');

describe('dataStructure/singlyLinkedList', function () {
	let objectUnderTest;

	beforeEach(() => {
		objectUnderTest = new SinglyLinkedList();
	});

	describe('insertFirst()', function () {
		it('should add nodes at start', function () {
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

	describe('insertLast()', function () {
		it('should add nodes at end', function () {
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

	describe('removeFirst()', function () {
		it('should remove node at start', function () {
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

		it('should remove all nodes', function () {
			/* arrange */
			objectUnderTest.insertLast(1);
			const expected = null;

			/* act */
			objectUnderTest.removeFirst();

			/* assert */
			should.deepEqual(objectUnderTest.head, expected);
		});
	});

	describe('removeLast()', function () {
		it('should remove node at end', function () {
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

		it('should remove all nodes', function () {
			/* arrange */
			objectUnderTest.insertLast(1);
			const expected = null;

			/* act */
			objectUnderTest.removeLast();

			/* assert */
			should.deepEqual(objectUnderTest.head, expected);
		});
	});
	
	describe('isEmpty()', function () {
		it('should return true', function () {
			/* arrange */
			const expected = true;

			/* act */
			const result = objectUnderTest.isEmpty();

			/* assert */
			result.should.be.equal(expected);
		});

		it('should return false', function () {
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