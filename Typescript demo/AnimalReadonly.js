var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalReadonly = (function () {
    function AnimalReadonly(name) {
        this.name = name;
    }
    AnimalReadonly.prototype.sayHello = function () {
        return 'Hello from ' + this.name;
    };
    return AnimalReadonly;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + ' the cat';
    };
    return Cat;
}(AnimalReadonly));
var cat = new Cat('Pesho');
var hello = cat.sayHello();
console.log(hello);
