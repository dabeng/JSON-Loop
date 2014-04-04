JSONLoop
========

How to get a parent node if I have gotten a child node reference in a JOSN object? JSONLoop will provide you with a child.parent() method.


##Classic Usage
Note: Here I don't provide API specification because the following code snippets are demonstractive enough.


#####Sample Data
	var obj = {
	  'id': '1',
	  'name': 'renyang',
	  'member': [
	    {
	      'id': '2',
	      'name': 'huangfan',
	      'member': [
	        {'id': '3', 'name': 'chenxiong'}
	      ]
	    },
	    {
	      'id': '4',
	      'name': 'yuguang',
	      'member': [
	        {'id': '5', 'name': 'chenjian'}
	      ]
	    },
	    {
	      'id': '6',
	      'name': 'deshi',
	      'member': [
	        {'id': '7', 'name': 'haibo'},
	        {'id': '8', 'name': 'weitao'},
	        {'id': '9', 'name': 'liuzheng'},
	        {'id': '10', 'name': 'xiaoxue'},
	        {'id': '11', 'name': 'xuebin',
	          'member': [
	            {'id': '12', 'name': 'sam'},
	            {'id': '13', 'name': 'loklaan'}
	          ]
	        }
	      ]
	    }
	  ]
	};
	
	
#####first of all, create a json loop object with required params

#####find a parent node based on a given node



#####find sibling nodes based on a given node



#####find ancestor nodes based on a given node



#####find descendent nodes based on a given node



#####find the nodes based on property value

