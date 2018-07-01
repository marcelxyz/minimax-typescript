"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Minimax;
(function (Minimax) {
    var Tree = /** @class */ (function () {
        function Tree() {
            this._wasVisited = false;
        }
        Object.defineProperty(Tree.prototype, "wasVisited", {
            get: function () {
                return this._wasVisited;
            },
            enumerable: true,
            configurable: true
        });
        return Tree;
    }());
    var Leaf = /** @class */ (function (_super) {
        __extends(Leaf, _super);
        function Leaf(_value) {
            var _this = _super.call(this) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(Leaf.prototype, "value", {
            get: function () {
                this._wasVisited = true;
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        return Leaf;
    }(Tree));
    Minimax.Leaf = Leaf;
    var Node = /** @class */ (function (_super) {
        __extends(Node, _super);
        function Node(_children) {
            var _this = _super.call(this) || this;
            _this._children = _children;
            return _this;
        }
        Object.defineProperty(Node.prototype, "children", {
            get: function () {
                this._wasVisited = true;
                return this._children;
            },
            enumerable: true,
            configurable: true
        });
        return Node;
    }(Tree));
    Minimax.Node = Node;
})(Minimax = exports.Minimax || (exports.Minimax = {}));
