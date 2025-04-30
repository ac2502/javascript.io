let arvottuLuku = Math.floor(Math.random() * 100) + 1;
let yritysLkm = 0;

function tarkistaArvaus() {
  const syote = document.getElementById("arvaus").value;
  const arvaus = parseInt(syote);
  yritysLkm++;

  const vihje = document.getElementById("vihje");
  const yritykset = document.getElementById("yritykset");

  if (isNaN(arvaus) || arvaus < 1 || arvaus > 100) {
    vihje.textContent = "Syötä numero väliltä 1–100.";
    return;
  }

  if (arvaus < arvottuLuku) {
    vihje.textContent = "Luku on suurempi!";
  } else if (arvaus > arvottuLuku) {
    vihje.textContent = "Luku on pienempi!";
  } else {
    vihje.textContent = `Oikein! Arvasit luvun ${arvottuLuku} ${yritysLkm} yrityksellä. 🎉`;
  }

  yritykset.textContent = `Arvausyrityksiä: ${yritysLkm}`;
}
