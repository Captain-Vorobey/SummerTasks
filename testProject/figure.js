function createSquare(config) {
    config.colour = 'red';
    config.name = 'rectangle';
    console.log(config);
}
var isEven = function (a) {
    return a % 2 == 0;
};
function call(callable) {
    console.log(callable(10));
}
createSquare({ colour: "s", width: 5, name: 'square' });
