# JSON Loop
JSON Loop is a super easy to use tool class helping you explore the structure details from any child node of a JSON object.


##Classic Usage
Note: Here I don't provide API specification because the following code snippets are demonstractive enough.


#####Sample Data
	var obj = {
	  'id': '1', 'name': 'renyang', 'birth': 1985, 'role': 'manager',
	  'member': [
	    {
	      'id': '2', 'name': 'huangfan', 'birth': 1983, 'role': 'manager',
	      'member': [
	        {'id': '3', 'name': 'chenxiong', 'birth': 1984, 'role': 'engineer'}
	      ]
	    },
	    {
	      'id': '4', 'name': 'yuguang', 'birth': 1981, 'role': 'engineer manager',
	      'member': [
	        {'id': '5', 'name': 'chenjian', 'birth': 1985, 'role': 'engineer'}
	      ]
	    },
	    {
	      'id': '6', 'name': 'deshi', 'birth': 1980, 'role': 'engineer manager',
	      'member': [
	        {'id': '7', 'name': 'haibo', 'birth': 1983, 'role': 'engineer'},
	        {'id': '8', 'name': 'weitao', 'birth': 1987, 'role': 'engineer'},
	        {'id': '9', 'name': 'liuzheng', 'birth': 1986, 'role': 'engineer'},
	        {'id': '10', 'name': 'xiaoxue', 'birth': 1988, 'role': 'engineer'},
	        {'id': '11', 'name': 'xuebin', 'birth': 1982, 'role': 'engineer',
	          'member': [
	            {'id': '12', 'name': 'sam', 'birth': 1980, 'role': 'engineer'},
	            {'id': '13', 'name': 'loklaan', 'birth': 1990, 'role': 'engineer'}
	          ]
	        }
	      ]
	    }
	  ]
	};
	
	
#####First of all, create a json loop object with required params
	// the first param is the name of 'Id' property of JSON object and the second one
	// is 'children' property name
	var jsonloop = new JSONLoop(obj, 'id', 'member');
	
#####Find one node based on unique id
	// node is what we are looking for
	jsonloop.findNodeById(obj, '11', function(err, node) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.dir(node);
	  }
	});
	
#####Find the nodes based on conditions
	// find our uE engineer with her name
	jsonloop.findNodes(obj, {'name': 'xiaoxue'}, function(err, nodes) {
	  nodes.forEach(function(node) {
	    console.dir(node);
	  });
	});
	// find young engineers in our team. Here, nodes is an array of node.
	jsonloop.findNodes(obj, {'role': /engineer/i, 'birth': {'>=': 1985, '<': 1990}},
	  function(err, nodes) {
	    nodes.forEach(function(node) {
	      console.dir(node);
	    });
	});

#####Find a parent node based on a given node
	jsonloop.findNodeById(obj, '11', function(err, node) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.clear();
	    jsonloop.findParent(obj, node, function(err, node) {
	      console.clear();
	      if (err) {
	        console.log(err);
	      } else {
	        console.dir(node);
	      }          
	    });
	  }
	});

#####Find sibling nodes based on a given node
	jsonloop.findNodeById(obj, '11', function(err, node) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.clear();
	    jsonloop.findSiblings(obj, node, function(err, siblings) {
	      console.clear();
	      if (err) {
	        console.log(err);
	      } else {
	        siblings.forEach(function(item) {
	          console.dir(item);
	        });
	      }          
	    });
	  }
	});

#####Find ancestor nodes based on a given node
	jsonloop.findNodeById(obj, '12', function(err, node) {
	  console.clear();
	  if (err) {
	    console.log(err);
	  } else {
	    jsonloop.findAncestors(obj, node, function(err, ancestors) {
	      console.clear();
	      if (err) {
	        console.log(err);
	      } else {
	        ancestors.forEach(function(item) {
	          console.dir(item);
	        });
	      }          
	    });
	  }
	});


## Circle of Competence
The following are posts related to loop through nested json object where JOSN Loop can work best:
* [\[Stack Overflow\] How do I loop through deeply nested properties of a json object?](http://stackoverflow.com/questions/5189387/how-do-i-loop-through-deeply-nested-properties-of-a-json-object)
