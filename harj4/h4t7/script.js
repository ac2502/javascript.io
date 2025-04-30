// Haetaan säiliö, johon pallot lisätään
const container = document.getElementById("container");

// Luodaan taulukko, johon tallennetaan pallot
let pallot = [];

// Luodaan 5 palloa
for (let i = 0; i < 100; i++) {
  let pallo = document.createElement("div");
  pallo.className = "ball";

  // Asetetaan aloitussijainti ja liikesuunta
  let x = 50 + i * 30;
  let y = 50 + i * 30;
  let dx = 2;
  let dy = 2;

  // Asetetaan pallon paikka
  pallo.style.left = x + "px";
  pallo.style.top = y + "px";

  // Lisätään pallo ruutuun
  container.appendChild(pallo);

  // Tallennetaan pallo ja sen tiedot
  pallot.push({ element: pallo, x: x, y: y, dx: dx, dy: dy });
}

// Funktio liikuttaa palloja
function liiku() {
  for (let p of pallot) {
    // Liikutetaan palloja
    p.x += p.dx;
    p.y += p.dy;

    // Jos osuu reunaan, kimpoa
    if (p.x < 0 || p.x > window.innerWidth - 20) p.dx = -p.dx;
    if (p.y < 0 || p.y > window.innerHeight - 20) p.dy = -p.dy;

    // Päivitetään sijainti
    p.element.style.left = p.x + "px";
    p.element.style.top = p.y + "px";
  }

  // Toistetaan liike
  requestAnimationFrame(liiku);
}

// Käynnistetään liike
liiku();
