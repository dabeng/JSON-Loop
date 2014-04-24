function JSONLoop (obj, idPropertyName, childrenPropertyName) {
  this.id = idPropertyName;
  this.children = childrenPropertyName;
  this.count = 0;
  this.countNodes(obj);
  this.total = this.count + 0;
}

JSONLoop.prototype = {
  constructor: JSONLoop,
  isEmpty: function(obj) {
    for(var property in obj) {
      return false;
    }
    return true;
  },
  countNodes: function(obj) {
    var that = this;
    this.count++;
    return function() {
      if (!obj || that.isEmpty(obj)) {
        return false;
      } else {
        if (obj[that.children]) {
          obj[that.children].forEach(function(child) {
            that.countNodes(child);
          });
        }
      }
    }();
  },
  findNodeById: function(obj, id, callback) {
    if (obj[this.id] === id) {
      this.count = this.total + 0;
      callback(null, obj);
    } else {
      if (this.count === 1) {
        this.count = this.total + 0;
        callback('the node does not exist', null);
      }
      this.count--;
      if (obj[this.children]) {
        var that = this;
        obj[this.children].forEach(function(node) {
          that.findNodeById(node, id, callback);
        });
      }
    }
  },
  findNodes: function(node)  {
    return ;
  },
  findParent: function(node)  {
    return ;
  },
  findSiblings: function(node)  {
    return ;
  },
  findAncestors: function(node)  {
    return ;
  },
  findDescenents: function(node)  {
    return ;
  }
}