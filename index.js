function add(a, b) {
	return a + b;
}

function log(params) {
	console.log(params);
}

function helloword() {
	log('Hello World')
}

module.exports = {
	log,
	add,
	helloword
}