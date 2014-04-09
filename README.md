JSONLoop
========

How to get a parent node if I have gotten a child node reference in a JOSN object? JSONLoop will provide you with a child.parent() method.


##Classic Usage
Note: Here I don't provide API specification because the following code snippets are demonstractive enough.


#####Sample Data
	var obj = {
	  'id': '1', 'name': 'renyang', 'birth': 1985, 'role': 'manager'
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
	        {'id': '11', 'name': 'xuebin', 'birth': 1982, 'role': 'engineer'
	          'member': [
	            {'id': '12', 'name': 'mike', 'birth': 1980, 'role': 'engineer'},
	            {'id': '13', 'name': 'mike', 'birth': 1990, 'role': 'engineer'}
	          ]
	        }
	      ]
	    }
	  ]
	};
	
	
#####First of all, create a json loop object with required params
	// the first param is the name of 'Id' property of JSON object and the second one is 'children' property name
	var jsonloop = new JSONLoop('id', 'member');
	
#####Find one node based on unique id
	jsonloop.findNodeById(1);
	
#####Find the nodes based on conditions
	// named mike and born after 1985
	jsonloop.findNodes({ 'name': 'mike', 'birth': { '>': 1985 }});
	// named mike and born after 1985 passing results to callback
	jsonloop.findNodes({ 'name': 'mike', 'birth': { '>': 1985 }}, function(err, nodes) {});

#####Find a parent node based on a given node

#####Find sibling nodes based on a given node

#####Find ancestor nodes based on a given node

#####Find descendent nodes based on a given node



