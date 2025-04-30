function getInputValue() {
  return parseFloat(document.getElementById("alvitonHinta").value);
}

function laskeALV(alviton = getInputValue(), veroprosentti = 25.5) {
  if (isNaN(alviton)) {
    document.getElementById("tulos").innerText = "Huom! syötä hinta.";
    return;
  }

  const alvMaara = alviton * (veroprosentti / 100);
  const verollinen = alviton + alvMaara;

  document.getElementById("tulos").innerText =
    `ALV (${veroprosentti}%): ${alvMaara.toFixed(2)} €\nVerollinen hinta: ${verollinen.toFixed(2)} €`;
}