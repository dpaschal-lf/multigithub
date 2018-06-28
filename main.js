function doMath(op, num1, num2){
	var opDictionary = {
		'+': add,
		'-': subtract,
		'*': multiply,
		'/': divide
	}
	opDictionary['X'] = opDictionary['x'] = opDictionary['*'];
	return opDictionary[op](num1, num2);
}

function add(n1, n2){
   return n1+n2;
}

function subtract(n1, n2){
   return n1-n2;
}
