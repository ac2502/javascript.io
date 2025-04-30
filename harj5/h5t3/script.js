async function getBitcoinPrice() {
  try {
    const response = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=EUR");
    const data = await response.json();
    const price = data.BTC.EUR;
    document.getElementById("price").innerText = `Arvo: ${price} €`;
  } catch (error) {
    document.getElementById("price").innerText = "Virhe haettaessa tietoja.";
    console.error("Virhe:", error);
  }
}
