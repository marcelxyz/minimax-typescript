import {Leaf, Node, Tree} from './Tree'

function _minimax(tree: Tree<number>, isMaxPlayer: boolean, alpha: number, beta: number): number {
	if (tree instanceof Leaf) {
		return tree.value
	}

	let best: number = isMaxPlayer ? -Infinity : Infinity

	for (let childNode of (<Node<number>>tree).children) {
		const val: number = _minimax(childNode, !isMaxPlayer, alpha, beta)

		if (isMaxPlayer) {
			if (val > best) {
				best = val
			}
			if (val >= beta) {
				break
			}
			if (val > alpha) {
				alpha = val
			}
		} else {
			if (val < best) {
				best = val
			}
			if (val <= alpha) {
				break
			}
			if (val < beta) {
				beta = val
			}
		}
	}

	return best
}

export function minimax(tree: Tree<number>, isMaxPlayer: boolean): number {
	return _minimax(tree, isMaxPlayer, -Infinity, Infinity)
}