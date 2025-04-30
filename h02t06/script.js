function paivitaAika() {
  const nyt = new Date();
  const viikonpaivat = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
  const viikonpaiva = viikonpaivat[nyt.getDay()];
  const paivays = nyt.toLocaleDateString('fi-FI');
  const kellonaika = nyt.toLocaleTimeString('fi-FI');
  
  document.getElementById("kello").innerHTML = `${viikonpaiva} ${paivays} <br> ${kellonaika}`;
}

setInterval(paivitaAika, 1000);
paivitaAika(); // näytä heti ekalla kerralla

