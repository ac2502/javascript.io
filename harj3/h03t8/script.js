class Vauhtilaskin {
  constructor(tunnit, minuutit, sekunnit, kilometrit) {
      this.h = tunnit;
      this.min = minuutit;
      this.sec = sekunnit;
      this.km = kilometrit;
  }

  // km/h laskentametodi
  calcKmhPace() {
      let tunnit = this.h + (this.min * 60 + this.sec) / 3600;
      return (this.km / tunnit).toFixed(2);  // Pyöristää ja palautetaan tulos
  }

  // Getter-metodi vauhdin hakemiseen
  kmhpace() {
      return this.calcKmhPace();
  }
}

// Lomakkeen toiminnallisuus
document.getElementById('laske').addEventListener('click', function() {
  // Hakee syötetyt arvot lomakkeelta
  const tunnit = parseFloat(document.getElementById('n1').value);
  const minuutit = parseFloat(document.getElementById('n2').value);
  const sekunnit = parseFloat(document.getElementById('n3').value);
  const kilometrit = parseFloat(document.getElementById('n4').value);

  // Luodaan Vauhtilaskin-olio syötettyjen arvojen perusteella
  const vauhtilaskin = new Vauhtilaskin(tunnit, minuutit, sekunnit, kilometrit);

  // Lasketaan ja näytetään tulos
document.getElementById('tulos').innerHTML = "Vauhti: " + vauhtilaskin.kmhpace() + " km/h";
});
