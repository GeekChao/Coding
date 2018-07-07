'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(name) {
    _classCallCheck(this, Node);

    this.name = name;
    this.visited = false;
    this.neighborhoods = [];
};

var Graph = function () {
    function Graph(edges) {
        _classCallCheck(this, Graph);

        this.edges = edges;
        this.nodes = {}; //key: name, value: node
        this.generateGraph();
    }

    _createClass(Graph, [{
        key: 'getNode',
        value: function getNode(name) {
            if (this.nodes.hasOwnProperty(name)) {
                return this.nodes[name];
            } else {
                this.nodes[name] = new Node(name);
                return this.nodes[name];
            }
        }
    }, {
        key: 'addNeighborHoods',
        value: function addNeighborHoods(nodeA, nodeB) {
            if (!nodeA.neighborhoods.includes(nodeB)) nodeA.neighborhoods.push(nodeB);
        }
    }, {
        key: 'generateGraph',
        value: function generateGraph() {
            if (!Array.isArray(this.edges)) throw 'an array of edges needed';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.edges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var a = _ref2[0];
                    var b = _ref2[1];

                    var nodeA = this.getNode(a);
                    var nodeB = this.getNode(b);
                    this.addNeighborHoods(nodeA, nodeB);
                    this.addNeighborHoods(nodeB, nodeA);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Graph;
}();

function babyName(names, synonyms) {
    if (!Array.isArray(names) || !Array.isArray(synonyms)) throw 'array only';
    var freq = new Map(),
        graph = new Graph(synonyms),
        result = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var obj = _step2.value;

            for (var _name in obj) {
                freq.set(_name, obj[_name]);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    function DFS(node) {
        var count = 0;
        function search(node) {
            node.visited = true;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = node.neighborhoods[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var neighbor = _step3.value;

                    if (!neighbor.visited) search(neighbor);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            count += freq.get(node.name) || 0;
        }
        search(node);
        return count;
    }

    for (var name in graph.nodes) {
        var node = graph.nodes[name];
        if (!node.visited) result.push(_defineProperty({}, '' + name, DFS(node)));
    }

    return result;
}

exports.default = babyName;