import {Minimax} from "../src/Tree";
import Leaf = Minimax.Leaf;
import Node = Minimax.Node;

it('Marks leaf as visited when getting its value', () => {
	const leaf = new Leaf(1);
	leaf.value;
	expect(leaf.wasVisited).toBe(true);
});

it('Marks node as visited when getting its children', () => {
	const node = new Node([]);
	node.children;
	expect(node.wasVisited).toBe(true);
});