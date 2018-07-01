import {minimax} from "../src/Minimax"
import {Leaf, Node} from "../src/Tree"

const tree = new Node([
	new Node([new Leaf(2), new Leaf(4)]),
	new Node([new Leaf(3), new Leaf(6)]),
])

const maxPlayerGoesFirst: boolean = true;

console.log('max player first:', maxPlayerGoesFirst)
console.log('result:', minimax(tree, maxPlayerGoesFirst))