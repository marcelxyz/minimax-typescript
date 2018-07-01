import {Leaf, Node} from "../src/Tree"

it('Marks leaf as visited when getting its value', () => {
	const leaf = new Leaf(1)
	leaf.value
	expect(leaf.wasVisited).toBe(true)
})

it('Marks node as visited when getting its children', () => {
	const node = new Node([])
	node.children
	expect(node.wasVisited).toBe(true)
})