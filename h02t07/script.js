const concertDiv = document.getElementById("concert");

// Näytä ensimmäinen viesti heti
const startText = document.createElement("p");
startText.textContent = "OMG - Lady Gaga start singing!";
concertDiv.appendChild(startText);

// Asetetaan montako kertaa "NICE - fireworks!" näytetään
const fireworksCount = 3;
let shownFireworks = 0;

const fireworksInterval = setInterval(() => {
  shownFireworks++;
  const fireworks = document.createElement("p");
  fireworks.textContent = "UUU fireworks!";
  concertDiv.appendChild(fireworks);

  if (shownFireworks === fireworksCount) {
    clearInterval(fireworksInterval);

    // Viimeinen viesti 2 sekuntia viimeisestä ilotulituksesta
    setTimeout(() => {
      const finalMessage = document.createElement("p");
      finalMessage.textContent = "OMG I love LADY GAGA <3 !";
      concertDiv.appendChild(finalMessage);
    }, 2000);
  }
}, 1000); // 1 sekunnin välein
