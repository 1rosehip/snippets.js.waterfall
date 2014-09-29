'use strict';

/**
* helper function
* @param {Array.<Function>} functions - list of function to execute
* @param {number} index - function index
* @param {*} args
* @param {Function} callback - last callback
*/
var waterfallHelper = function(functions, index, args, callback){
	
	var currentFunction;
	
	if(index < functions.length){
		
		//get the given function
		currentFunction = functions[index];
		
		//combine callback function and arguments
		args.unshift(function(){
			
			//get function arguments as array
			var argsArray = [].slice.call(arguments).sort();
			
			//run next function
			waterfallHelper(functions, index + 1, argsArray, callback);
		});
				
		//run current function with combined arguments (callback + args)
		currentFunction.apply(null, args);
	}
	else{
		callback.apply(null, args);
	}
};

/**
* waterfall
* @param {Array.<Function>} functions - list of function to execute
* @param {Function} callback - last callback
*/
exports.waterfall = function(functions, callback){
		
	if(functions){
	
		//start from index 0
		waterfallHelper(functions, 0, [], callback);
	}
	else{
		//execute last allback
		callback.apply(null, null);
	}
};
	