
(function(window) {
  var nodes = [];
window.JSONLoop = function(obj, idPropertyName, childrenPropertyName) {
  this.id = idPropertyName;
  this.children = childrenPropertyName;
  this.count = 0;
  this.countNodes(obj);
  this.total = this.count + 0;
}

window.JSONLoop.prototype = {
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
  generateClone: function(obj) {
   var target = {};
   for (var i in obj) {
     if (i !== this.children) {
       target[i] = obj[i];
     }
   }
   return target;
  },
  findNodeById: function(obj, id, callback) {
    if (obj[this.id] === id) {
      this.count = this.total + 0;
      callback(null, this.generateClone(obj));
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
  matchConditions: function(obj, conditions) {
    var flag = true;
    Object.keys(conditions).forEach(function(item) {
      if (typeof conditions[item] === 'string' || typeof conditions[item] === 'number') {
        if (obj[item] !== conditions[item]) {
          flag = false;
          return false;
        }
      } else if (conditions[item] instanceof RegExp) {
        if (!conditions[item].test(obj[item])) {
          flag = false;
          return false;
        }
      } else if (typeof conditions[item] === 'object') {
        Object.keys(conditions[item]).forEach(function(subitem) {
          switch (subitem) {
            case '>': {
              if (!(obj[item] > conditions[item][subitem])) {
                flag = false;
                return false;
              }
              break;
            }
            case '<': {
              if (!(obj[item] < conditions[item][subitem])) {
                flag = false;
                return false;
              }
              break;
            }
            case '>=': {
              if (!(obj[item] >= conditions[item][subitem])) {
                flag = false;
                return false;
              }
              break;
            }
            case '<=': {
              if (!(obj[item] <= conditions[item][subitem])) {
                flag = false;
                return false;
              }
              break;
            }
            case '!==': {
              if (!(obj[item] !== conditions[item][subitem])) {
                flag = false;
                return false;
              }
              break;
            }
          }
        });
        if (!flag) {
          return false;
        }
      }
    });
    if (!flag) {
      return false;
    }
    return true;
  },
  findNodes: function(obj, conditions, callback)  {
    var that = this;
    var copy = []; // ths shallow copy of nodes array
    return function(obj, conditions, callback) {
      if (that.matchConditions(obj, conditions)) {
        nodes.push(obj);
        if (that.count === 1) {
          that.count = that.total + 0;
          copy = nodes.slice(0);
          nodes = [];
          callback(null, copy);
        }
        that.count--;
      } else {
        if (that.count === 1) {
          that.count = that.total + 0;
          copy = nodes.slice(0);
          nodes = [];
          callback(null, copy);
        }
        that.count--;
        if (obj[that.children]) {

          obj[that.children].forEach(function(child) {
            that.findNodes(child, conditions, callback);
          });
        }
      }
    }(obj, conditions, callback);
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
}(window));