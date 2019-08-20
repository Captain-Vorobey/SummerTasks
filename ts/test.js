// let a = 4;
// let b = 4.8;
																	
// console.log(typeof(a) + ' ' + typeof(b));

// let arr = [1, 3, 4, 7, 9];

// let f_arr = [function (argument) {
// 	console.log("Hello Dima");
// }, function (argument) {
// 	console.log("Hello Shef");
// }];

// const sum = function (a, b) {
// 	return a + b;
// };

// function mul(a, b) {
// 	console.log(arguments);
// 	return arguments[0] * arguments[1];	
// }

// let operations = [sum, mul];
// let differentArr = [1, 'g', function (a) {
// 	console.log(a);
// }]

function parametersOfMan(person) {
	console.log(person.name, person.age, person.iq);
}

parametersOfMan({name: "Shef", age: 3, price: 15});

// console.log(sum);
// console.log(sum(3, 4));

// console.log(operations[1](2, 23));