/**
 * Implement linked list.
 * Implement classes Node and Linked Lists
 *
 * NODE CLASS
 * Creates a class instance to represent a node. The node should have two properties, 
 * 'data' and 'next'. Accept both of these as arguments to the 'Node' constructor, 
 * then assign them to the instance as properties 'data' and 'next'. If 'next' 
 * is not provided to the constructor, then default its value to be 'null'.
 * --- Examples
 *	const n = new Node('There');
 *	n.data // 'Hi'
 * 	n.next // null
 *	const n2 = new Node('Hi', n);
 *	n.next // returns n
 * ****************************************************
 *
 * LINKED LIST CLASS
 * Create a class to represent a linked list. When created, a linked list 
 * should have *no* head node associated with it. The LinkedList instance will 
 * have one property, 'head', which is a reference to the first node of the linked 
 * list. By default 'head' should be 'null'.
 * const list = new LinkedList();
 * --- Examples
 * 	list.head // null
 *
 * insertFirst(data)
 * Creates a new Node from argument 'data' and assigns the resulting node 
 * to the 'head' property. Make sure to handle the case in which the linked 
 * list already has a node assigned to the 'head' property.
 * --- Examples
 *	const list = new LinkedList();
 *	list.insertFirst('Hi There'); // List has one node
 *
 * size()
 * Returns the number of nodes in the linked list.
 * --- Examples
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.insertFirst('c');
 *	list.size(); // returns 3
 *
 * getFirst()
 * Returns the first node of the linked list.
 * --- Examples
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.getFirst(); // returns Node instance with data 'b'
 *
 * getLast()
 * Returns the last node of the linked list
 * --- Examples
 *	Returns the last node of the linked list
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 * 	list.insertFirst('b');
 *	list.getLast(); // returns node with data 'a'
 *
 * clear()
 * Empties the linked list of any nodes.
 * --- Examples
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.clear();
 *	list.size(); // returns 0
 *
 * removeFirst()
 * Removes only the first node of the linked list. The list's head should now 
 * be the second element.
 * --- Examples
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.removeFirst();
 *	list.getFirst(); // returns node with data 'a'
 *
 * removeLast()
 * Removes the last node of the chain
 * --- Examples
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.removeLast();
 *	list.size(); // returns 1
 *	list.getLast(); // returns node with data of 'b'
 *
 * insertLast()
 * 	Inserts a new node with provided data at the end of the chain
 * --- Examples
 * 	const list = new LinkedList();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 * 	list.insertLast('c');
 *	list.getLast(); // returns node with data 'C'
 * 
 * getAt()
 * Returns the node at the provided index
 * --- Examples
 * 	const list = new List();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.insertFirst('c');
 *	list.getAt(1); // returns node with data 'b'
 *
 * removeAt()
 * Removes node at the provided index
 * --- Examples
 * 	const list = new List();
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.insertFirst('c');
 *	list.removeAt(1);
 *	list.getAt(1); // returns node with data 'a'
 *
 * insertAt()
 * Create an insert a new node at provided index. 
 * If index is out of bounds, add the node to the end of the list.
 * const list = new List();
 * --- Examples
 *	list.insertFirst('a');
 *	list.insertFirst('b');
 *	list.insertFirst('c');
 *	list.insertAt('Hi', 1)
 *	list.getAt(1); // returns node with data 'Hi'
 */

class Node {
	constructor(data, next=null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}


	insertFirst(data) {
		this.head = new Node(data, this.head);
	}


	size() {
		let counter = 0;

		let node = this.head;
		while(node) {
			counter++;
			node = node.next;
		}

		return counter;
	}


	getFirst() {
		return this.head;
	}


	getLast() {
		if(!this.head) {
			return null;
		}

		let node = this.head;
		while(node) {
			if(!node.next) {
				return node;
			}
			node = node.next;
		}
	}


	clear() {
		this.head = null;
	}


	removeFirst() {
		if(!this.head) return;

		this.head = this.head.next;
	}


	removeLast() {
		if(!this.head || !this.head.next) {
			return this.head = null;;
		}

		let node = this.head;
		while(node) {
			if(node.next && !node.next.next) {
				node.next = null;
				return;
			}

			node = node.next;
		}
	}


	insertLast(data) {
		const last = this.getLast();

		if(last) {
			last.next = new Node(data);
		}
		else {
			this.head = new Node(data);
		}
	}


	getAt(index) {
		let counter = 0;
		let node = this.head;
		while(node) {
			if(index === counter) return node;
			node = node.next;
			counter++;
		}

		return null;
	}


	removeAt(index) {
		if(index === 0) return this.removeFirst();

		const previous = this.getAt(index - 1);
		if(!previous || !previous.next) {
			return;
		}

		previous.next = previous.next.next;
	}


	insertAt(data, index) {
		if(!this.head || index === 0) return this.insertFirst(data);

		const previous = this.getAt(index-1);
		if(!previous || !previous.next) {
			return this.insertLast(data);
		}

		const node = new Node(data, previous.next);
		previous.next = node;
	}


	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while(node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
