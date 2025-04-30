let balance = 100; // Pelissä alussa rahaa 100 €.
const fruits = ['apple', 'banana', 'cherry']; // Hedelmät, joita voidaan käyttää

// Funktio, joka arpoo satunnaisen hedelmän
function getRandomFruit() {
  const randomIndex = Math.floor(Math.random() * fruits.length);
  return fruits[randomIndex];
}

// Funktio, joka arpoo kolme hedelmää ja päivittää kuvat
function spin() {
  if (balance <= 0) {
    document.getElementById("result").textContent = "Sorry you don't have any euros left!";
    return;
  }

  balance--; // Vähennetään yksi euro pelistä.
  document.getElementById("balance").textContent = `Balance: ${balance} euros`; // Päivitetään rahamäärä.

  // Arvotaan kolme hedelmää
  const fruit1 = getRandomFruit();
  const fruit2 = getRandomFruit();
  const fruit3 = getRandomFruit();

  // Päivitetään kuvat
  document.getElementById("fruit1").src = fruit1 + ".png";
  document.getElementById("fruit2").src = fruit2 + ".png";
  document.getElementById("fruit3").src = fruit3 + ".png";

  // Tarkistetaan, kuinka monta samaa hedelmää on
  if (fruit1 === fruit2 && fruit2 === fruit3) {
    balance += 10; // Kolmella samalla hedelmällä voittaa 10 €
    document.getElementById("result").textContent = `WOHOO - You won 10 euros!`;
  } else if (fruit1 === fruit2 || fruit2 === fruit3 || fruit1 === fruit3) {
    balance += 2; // Kahdella samalla hedelmällä voittaa 2 €
    document.getElementById("result").textContent = `WOHOO - You won 2 euros!`;
  } else {
    document.getElementById("result").textContent = `Sorry - No win!`;
  }

  // Päivitetään rahamäärä
  document.getElementById("balance").textContent = `Balance: ${balance} euros`;

  // Jos rahaa ei ole enää jäljellä, peli loppuu
  if (balance <= 0) {
    document.getElementById("result").textContent = "Sorry you don't have any euros left!";
  }
}
