// Alustetaan Leaflet-kartta
const map = L.map('map').setView([61.9241, 25.7482], 6); // Keskitetään kartta Suomeen

// Lisää kartan taustakartta (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Suosikkikaupungit (koordinaatit ja nimet)
const cities = [
  { name: 'Helsinki', lat: 60.1699, lon: 24.9384 },
  { name: 'Turku', lat: 60.4518, lon: 22.2666 },
  { name: 'Tampere', lat: 61.4978, lon: 23.7610 },
  { name: 'Oulu', lat: 65.0123, lon: 25.4682 },
  { name: 'Rovaniemi', lat: 66.5039, lon: 25.7294 },
  { name: 'Kolari', lat: 67.7192, lon: 23.2833 }, 
  { name: 'Ylläs', lat: 67.7294, lon: 23.7014 },  
  { name: 'Jyväskylä', lat: 62.2426, lon: 25.7471 }
];

// Lisää markkereita kaupungeille
cities.forEach(city => {
  L.marker([city.lat, city.lon])
    .addTo(map)
    .bindPopup(`<b>${city.name}</b>`)
    .openPopup();
});
