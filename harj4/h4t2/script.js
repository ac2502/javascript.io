var hcpdata = [
  { "name": "Ari", "hcp": 54 },
  { "name": "Pasi", "hcp": 5 },
  { "name": "Seppo", "hcp": 20 }
];

var tulostettu = false;

function tulostaTasoitukset() {
  if (tulostettu) return; // Estetään tuplalisäys

  var lista = document.getElementById("hcplist");

  for (var i = 0; i < hcpdata.length; i++) {
    var pelaaja = hcpdata[i];
    var li = document.createElement("li");
    li.textContent = pelaaja.name + " " + pelaaja.hcp;
    lista.appendChild(li);
  }

  tulostettu = true;
}
