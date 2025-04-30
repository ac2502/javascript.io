// Luodaan fruits-olio, jossa on hedelmiä ja niiden määrät
const fruits = {
  Apple: 3,
  Banana: 5,
  Orange: 2,
  Grape: 1
};

// Lasketaan hedelmien kokonaismäärä
let totalCount = 0;
for (let fruit in fruits) {
  totalCount += fruits[fruit];  // Lisää jokaisen hedelmän määrän kokonaislukuun
}

// Tulostetaan hedelmien kokonaismäärä konsoliin
console.log(`Hedelmiä on yhteensä:  ${totalCount}`); 
