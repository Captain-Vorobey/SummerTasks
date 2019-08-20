interface SquareConfig {
	colour?: string;
	width?: number;
	name: string;
}

function createSquare(config: SquareConfig) {
	config.colour = 'red';
	config.name = 'rectangle';
	console.log(config);
}

const isEven = function (a: number): boolean {
	return a % 2 == 0;
}

function call(callable: (x: number) => boolean) {
	console.log(callable(10));
}

createSquare({colour: "s", width: 5, name: 'square'});
