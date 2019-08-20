class Person {
	name: string;
	age: number;
	iq: number;

	constructor(name, age, iq) {
		this.name = name;
		this.age = age;
		this.iq = iq;
	}
}

class Bird {
	name: string;
	age: number;
	honour: number;

	constructor(name, age, honour) {
		this.name = name;
		this.age = age;
		this.honour = honour;
	}
}

function printPersonInfo(person: Bird) {
	console.log(person.name, person.age, person.honour);
}

let a = new Person("Shef", 17, -150);
let b = new Bird("Sparrow", 19, 28);
printPersonInfo(b);
console.log(a);