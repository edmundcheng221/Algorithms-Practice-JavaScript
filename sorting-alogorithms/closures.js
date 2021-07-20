// Implement a counter using a closure

const countClick = function() {
	let counterVar = 0;
	return function() {
		counterVar++;
		console.log(counterVar);
		return counterVar; 
	}
}

countClick();
countClick();
countClick();
countClick();
