// Henkilö-olio
const person = {
  firstName: "Heli",
  lastName: "Pudas",
  age: 30,
  isStudent: false
};

// Päivitetään objektia
person.age = 35; 
person.address = "jyväskylä";  // Lisätään ominaisuus "address"
delete person.isStudent;  // Poistetaan isStudent-ominaisuus

// Tulostetaan
console.log(person.firstName); 
console.log(person.lastName);   
console.log(person.age);       
console.log(person.address);    

// Käydään läpi objektin ominaisuudet ja tulostetaan ne
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
