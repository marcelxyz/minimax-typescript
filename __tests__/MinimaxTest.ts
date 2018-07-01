import {minimax} from "../src/Minimax"
import {Leaf, Node} from "../src/Tree"

it('should find optimal solution for min and max', function () {
	const tree = new Node([
		new Node([new Leaf(3), new Leaf(12), new Leaf(8)]),
		new Node([new Leaf(2), new Leaf(4), new Leaf(6)]),
		new Node([new Leaf(14), new Leaf(5), new Leaf(2)]),
	])

	expect(minimax(tree, true)).toBe(3)
	expect(minimax(tree, false)).toBe(6)
});

it('should perform alpha-beta pruning', function () {
	const four = new Leaf(4)
	const six = new Leaf(6)

	const tree = new Node([
		new Node([new Leaf(3), new Leaf(12), new Leaf(8)]),
		new Node([new Leaf(2), four, six]),
		new Node([new Leaf(14), new Leaf(5), new Leaf(2)]),
	])

	const result = minimax(tree, true)

	expect(result).toBe(3)
	expect(four.wasVisited).toBe(false)
	expect(six.wasVisited).toBe(false)
});