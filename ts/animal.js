var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "hello";
        this.age = 5;
    }
    return Cat;
}());
var a = new Cat();
function printCat(animal) {
    console.log(animal);
}
printCat(a);
