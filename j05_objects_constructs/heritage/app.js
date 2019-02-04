function Animal(p) {
  this.name = p.name;
}

Animal.prototype.move = function move() {
  return `${this.name} se déplace`;
};

Animal.prototype.speak = function speak() {
  // console.log("this@Animal.speak", this);
  if (this.sound) return console.log(`${this.sound}` || "");
};

function Cat(p) {
  if (!(this instanceof Cat))
    throw new Error("missing new keyword @Cat constructor");
  Animal.call(this, p);
  this.sound = "meoww";
  this.type = "cat";
}

function Dog(p) {
  Animal.call(this, p);
  this.sound = "waf waf";
  this.type = "dog";
}

function herite(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

herite(Animal, Dog);
herite(Animal, Cat);

const c1 = new Cat({ name: "berny" });
const d1 = new Dog({ name: "wako" });

console.log(c1);

d1.speak();

console.log(c1.move());
console.log(d1.sound + ", " + d1.move());


window.onload = function start() {
  document.getElementById("my_btn").onclick = c1.speak;
  // document.getElementById("my_btn").onclick = c1.speak.bind(c1);
};