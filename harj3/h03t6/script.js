// Person-funktio (konstruktori)
function Person(name, age, phone, email) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.email = email;

  this.addAge = function() {
    this.age++;
  };
}

// Luodaan kolme Person-oliota
var person1 = new Person("Kalle kimalainen", 1, "0401234567", "kalleK@....");
var person2 = new Person("Minna muurahainen", 2, "0507654321", "minnaM@..");
var person3 = new Person("Anni ampiainen", 5, "0441237890", "anniA@...");

// Käytetään addAge-metodia
person1.addAge();
person2.addAge();
person2.addAge();
person3.addAge();

// Tulostetaan henkilöiden tiedot konsoliin
console.log("Person 1:", person1);
console.log("Person 2:", person2);
console.log("Person 3:", person3);
