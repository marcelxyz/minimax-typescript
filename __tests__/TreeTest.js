"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = require("../src/Tree");
var Leaf = Tree_1.Minimax.Leaf;
var Node = Tree_1.Minimax.Node;
it('Marks leaf as visited when getting its value', function () {
    var leaf = new Leaf(1);
    leaf.value;
    expect(leaf.wasVisited).toBe(true);
});
it('Marks node as visited when getting its children', function () {
    var node = new Node([]);
    node.children;
    expect(node.wasVisited).toBe(true);
});
