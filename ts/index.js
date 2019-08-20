var Person = /** @class */ (function () {
    function Person(name, age, iq) {
        this.name = name;
        this.age = age;
        this.iq = iq;
    }
    return Person;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age, honour) {
        this.name = name;
        this.age = age;
        this.honour = honour;
    }
    return Bird;
}());
function printPersonInfo(person) {
    console.log(person.name, person.age, person.honour);
}
var a = new Person("Shef", 17, -150);
var b = new Bird("Sparrow", 19, 28);
printPersonInfo(b);
console.log(a);
