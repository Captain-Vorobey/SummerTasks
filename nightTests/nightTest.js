let obj = {cheese: 0, meat: 1, bacon: 2, salad: 0};
let result = Object.keys(obj).map((item) => {
	return new Array(obj[item]).fill(0);
});

//console.log(obj['meat']);
//console.log(result);

let result2 = [0, 0, 0, 0].map((el,i,array) => {
	console.log(el +'-' + i);
	return 1;
})

// function Animal(name, voice) {
// 	this.name = name;
// 	this.voice = voice;
// }

// Animal.prototype.say = function () {
// 	console.log(this.name + ' goes ' + this.voice);
// }

// const dog = new Animal('Dog', 'woof');
// const cat = new Animal('Cat', 'meow');

// dog.say();
// cat.say();

class Animal {
	constructor(name, voice) {
		this.name = name;
		this.voice = voice;
	}

	say() {
		console.log(this.name + ' goes ' + this.voice);
	}
}

class Bird extends Animal {
	constructor(name, voice, canFly) {
		super(name, voice);
		this.say();
		this.canFly;
	}

	say() {
		console.log('Birds dont like to talk');
	}
}

const duck = new Bird('Duck', 'quack', true);
