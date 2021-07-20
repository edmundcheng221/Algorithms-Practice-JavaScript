// Binding allows for the borrowing of a method from another object without making a copy of it

const sendMsg = () => {
	let receiver = "Hi";
	console.log(receiver);
}


let bound = sendMsg.bind(sendMsg);
bound();
console.dir(this);
