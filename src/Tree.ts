export namespace Minimax {
	abstract class Tree<T> {
		protected _wasVisited: boolean = false;

		get wasVisited(): boolean {
			return this._wasVisited;
		}
	}

	export class Leaf<T> extends Tree<T> {
		constructor(readonly _value: T) {
			super();
		}

		get value(): T {
			this._wasVisited = true;
			return this._value;
		}
	}

	export class Node<T> extends Tree<T> {
		constructor(readonly _children: Tree<T>[]) {
			super();
		}

		get children(): Tree<T>[] {
			this._wasVisited = true;
			return this._children;
		}
	}
}