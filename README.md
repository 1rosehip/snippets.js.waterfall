## Waterfall

Small NodeJS waterfall module.

**Usage Example:**

	var waterfall = require('./waterfall.js').waterfall;

	waterfall([
		
		function(callback){
			
			//first function
			console.log('1:', '\n-------------------------');
			
			//pass params to the second function
			callback('a1', 'a2', 'a3');
		}
		,function(callback, param1, param2, param3){
		
			//print params
			console.log('2:', param1, param2, param3, '\n-------------------------');
			
			//pass params to the third function
			callback('b1', 'b2');
		}
		,function(callback, param1, param2){
							
			//print params
			console.log('3:', param1, param2, '\n-------------------------');
			
			//pass params to the last function
			callback('c1', 'c2' ,'c3', 'c4', 'c5');
		}
	]
	,function(param1, param2, param3, param4, param5){
		
		//print params
		console.log('4:', param1, param2, param3, param4, param5);
	});