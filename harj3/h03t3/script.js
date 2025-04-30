// Student-olio
const student = {
  name: "Heli Pudas",   
  age: 35,               
  address: {               
    street: "Palokka",  
    city: "Jyväskylä",       
    zipCode: "40270"      
  }
};

// Tulosta
console.log(student.name);       
console.log(student.age);        
console.log(student.address.street);  
console.log(student.address.city);  
console.log(student.address.zipCode); 

// Käydään läpi student-olion ominaisuudet ja tulostetaan ne
for (let key in student) {
  if (typeof student[key] === 'object') {
    console.log(`${key}:`);
    for (let subKey in student[key]) {
      console.log(`  ${subKey}: ${student[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${student[key]}`);
  }
}
