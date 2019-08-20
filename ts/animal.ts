interface Animal {
	name: string;
	age: number;
}

class Cat implements Animal {
	name = "hello";
	age = 5;
}

let a = new Cat();

function printCat(animal: Animal) {
	console.log(animal);
}

printCat(a);