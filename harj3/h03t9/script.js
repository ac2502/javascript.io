class Elevator {
  constructor() {
    this.currentFloor = 1; // Alkuperäinen kerros
  }

  // Funktio, joka liikuttaa hissin haluttuun kerrokseen
  moveToFloor(floor) {
    this.currentFloor = floor; // Asetetaan hissin nykykerrokseksi valittu kerros
    this.updateDisplay();
  }

  // Funktio, joka päivittää hissin näyttöä
  updateDisplay() {
    document.getElementById('display').innerText = `Hissi on kerroksessa ${this.currentFloor}`;
  }
}

// Luodaan uusi Elevator-olio
const elevator = new Elevator();

// Lisätään tapahtumakuuntelijat painikkeille
document.querySelectorAll('.floor-button').forEach(button => {
  button.addEventListener('click', () => {
    // Otetaan painikkeelta valittu kerros
    const targetFloor = parseInt(button.getAttribute('data-floor'));
    elevator.moveToFloor(targetFloor);  // Liikutetaan hissi valittuun kerrokseen
  });
});
