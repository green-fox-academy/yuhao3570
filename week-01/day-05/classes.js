class Animal {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    sayHello() {
      return `${this.color} ${this.name} says hello.`
    }
  
    eat() {
      console.log('eating');
    }
  }
  
  class Zebra extends Animal {
    constructor(color) {
      super('sadsa', color);
      this.weight = 88;
    }
  
    run() {
      console.log('Running away from a lion.');
    }
  
    sayHello() {
      return 'hi.';
    }
  }
  
  class StripedZebra extends Zebra {
    constructor(stripes) {
      super('black');
      this.stripes = stripes;
    }
  
    sayHello() {
      return 'striving a hello from ' + super.sayHello();
    }
  }
  
  let animal = new Animal('zebra', 'black');
  console.log(animal.sayHello());
  let zebra = new Zebra('black');
  console.log(zebra.sayHello());
  
  zebra.stripes = 5;
  
  console.log(zebra);
  
  let stripedZebra = new StripedZebra(5);
  console.log(stripedZebra.sayHello());
  stripedZebra.eat();
  console.log(stripedZebra.__proto__);