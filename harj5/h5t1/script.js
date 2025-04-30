// Hakee JSON-tiedoston ja palauttaa sen taulukkona
async function getHouses() {
  const response = await fetch("talo.json");
  const data = await response.json();
  return data;
}

// Luo ja näyttää talo-ilmoitukset näytölle
async function renderHouses() {
  let houses = await getHouses();
  let housediv = document.getElementById("houses");

  houses.forEach(house => {
    // Talo-div
    let housecontainer = document.createElement('div');
    housecontainer.className = 'houseContainer';

    // Kuva
    let image = document.createElement('img');
    image.src = house.image;
    image.className = 'houseImage';

    // Osoite
    let header = document.createElement('p');
    header.className = 'header';
    header.innerHTML = house.address;

    // Koko
    let koko = document.createElement('p');
    koko.innerHTML = "Koko: " + house.size + " m²";

    // Hinta
    let hinta = document.createElement('p');
    let numberstr = new Intl.NumberFormat('fi-FI').format(house.price);
    hinta.innerHTML = "Hinta: " + numberstr + " €";

    // Kuvausteksti
    let teksti = document.createElement('p');
    teksti.className = 'text';
    teksti.innerHTML = house.text;

    // Liitetään elementit talodiviin
    housecontainer.appendChild(image);
    housecontainer.appendChild(header);
    housecontainer.appendChild(koko);
    housecontainer.appendChild(hinta);
    housecontainer.appendChild(teksti);

    // Lisätään talodivi sivulle
    housediv.appendChild(housecontainer);
  });
}

// Käynnistetään kun sivu on valmis
renderHouses();
