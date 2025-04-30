// Haetaan lomake ja ostoslistan alue
const form = document.getElementById('form');
const productInput = document.getElementById('product');
const shoppingList = document.getElementById('shoppingList');

// Kun lomake lähetetään (tuote lisätään)
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Estetään sivun uudelleenlataus

  const productName = productInput.value.trim(); // Haetaan syötetty teksti

  if (productName === '') return; // Ei lisätä tyhjää

  // Luodaan uusi div ja poistopainike
  const itemDiv = document.createElement('div');
  itemDiv.textContent = productName;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Poista';
  removeBtn.className = 'remove-btn';

  // Kun poistopainiketta klikataan, poistetaan tuote
  removeBtn.addEventListener('click', function() {
    shoppingList.removeChild(itemDiv);
  });

  itemDiv.appendChild(removeBtn); // Lisätään nappi tuotteen viereen
  shoppingList.appendChild(itemDiv); // Lisätään tuote listaan

  productInput.value = ''; // Tyhjennetään syöttökenttä
});
