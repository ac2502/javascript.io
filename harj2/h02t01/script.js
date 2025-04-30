// Funktio, joka laskee kahden luvun summan ja palauttaa sen kokonaislukuna
function laskeSumma(a, b) {
  return parseInt(a) + parseInt(b);
}

// Funktio, joka näyttää summan sivulla
function tulostaSumma(a, b) {
  let summa = laskeSumma(a, b);
  document.getElementById("results").innerText = "Lukujen summa on: " + summa;
}
