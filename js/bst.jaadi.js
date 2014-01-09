// Generated by CoffeeScript 1.6.3
var BinarySearchTree,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

BinarySearchTree = (function(_super) {
  var Entry, Node, _insert;

  __extends(BinarySearchTree, _super);

  Entry = (function() {
    function Entry(key, value) {
      this.key = key;
      this.value = value;
    }

    Entry.prototype.hash = function() {
      return this.key;
    };

    return Entry;

  })();

  Node = (function() {
    function Node(left, right, value) {
      this.left = left != null ? left : null;
      this.right = right != null ? right : null;
      this.value = value != null ? value : null;
    }

    Node.prototype.hash = function() {
      return this.value;
    };

    return Node;

  })();

  function BinarySearchTree() {
    this.root = null;
  }

  _insert = function(node, entry) {
    if (entry.key < node.value.key) {
      if (node.left === null) {
        return node.left = new Node(null, null, entry);
      } else {
        return _insert(node.left, entry);
      }
    } else {
      if (node.right === null) {
        return node.right = new Node(null, null, entry);
      } else {
        return _insert(node.right, entry);
      }
    }
  };

  BinarySearchTree.prototype.put = function(key, value) {
    if (this.root === null) {
      return this.root = new Node(null, null, new Entry(key, value));
    } else {
      return _insert(this.root, new Entry(key, value));
    }
  };

  BinarySearchTree.prototype.get = function(key) {
    var dfs, val;
    val = null;
    dfs = function(node, search) {
      if (node === null) {
        return null;
      }
      if (node.value.key === search.key) {
        return node.value;
      } else if (search.key < node.value.key) {
        return dfs(node.left, search);
      } else {
        return dfs(node.right, search);
      }
    };
    val = dfs(this.root, new Entry(key, null));
    return val.value;
  };

  BinarySearchTree.prototype.remove = function(index) {
    throw "Not impelemented";
  };

  BinarySearchTree.prototype.size = function() {
    var count, dfs;
    count = 0;
    dfs = function(node) {
      if (node === null) {
        return;
      }
      dfs(node.left);
      count++;
      return dfs(node.right);
    };
    dfs(this.root);
    return count;
  };

  BinarySearchTree.prototype.items = function() {
    var dfs, _items;
    _items = [];
    dfs = function(node) {
      if (node === null) {
        return;
      }
      dfs(node.left);
      _items.push([node.value.key, node.value.value]);
      return dfs(node.right);
    };
    dfs(this.root);
    return _items;
  };

  BinarySearchTree.prototype.dfs = function(fn) {
    var _dfs,
      _this = this;
    _dfs = function(node, fn) {
      if (node === null) {
        return;
      }
      _dfs(node.left, fn);
      fn.call(_this["this"], node);
      return _dfs(node.right, fn);
    };
    return _dfs(this.root, fn);
  };

  return BinarySearchTree;

})(JaadiPlugin);

Jaadi.plugins.add("bst", BinarySearchTree);