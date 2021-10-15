function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}


function Japanese(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);
Japanese.prototype.hello = function() {
  console.log('konnnitiha ' + this.name);
}
Japanese.prototype.bye = function() {
  console.log('sayounara ' + this.name);
}

const taro = new Japanese('Taro', 20, "Male");
console.log(taro);
taro.hello();
taro.bye();