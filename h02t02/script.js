function laskeSumma(a, b) {
  return parseInt(a) + parseInt(b);
}

function tulostaSumma(a, b) {
  const summa = laskeSumma(a, b);
  document.getElementById("results").innerText = `Summa on: ${summa}`;
}
