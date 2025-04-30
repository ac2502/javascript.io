// Pudotusvalikon ja muiden elementtien haku
var colorSelect = document.getElementById('colorSelect');
var colorCode = document.getElementById('colorCode');
var eventText = document.getElementById('eventText');
var eventOutput = document.getElementById('eventOutput');
var changeBgButton = document.getElementById('changeBgButton');
var resultArea = document.getElementById('resultArea');

// Väri päivitetään heti, kun valitsee uuden värin
colorSelect.onchange = function() {
  colorCode.innerHTML = 'Valittu väri: ' + colorSelect.value;
}

// Teksti päivittyy reaaliajassa, ja numerot poistetaan
eventText.oninput = function() {
  var text = eventText.value;
  eventText.value = text.replace(/[0-9]/g, ''); // Poistetaan numerot
  eventOutput.innerHTML = 'Juhlan nimi: ' + eventText.value;
}

// Vaihda taustaväri painikkeella
changeBgButton.onclick = function() {
  resultArea.style.backgroundColor = colorSelect.value;
}
