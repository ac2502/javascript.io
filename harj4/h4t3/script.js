document.addEventListener("DOMContentLoaded", () => {
  const lisaaBtn = document.getElementById("lisaa");
  const tyhjennaBtn = document.getElementById("tyhjenna");
  const lista = document.getElementById("lista");
  const tehtavaKentta = document.getElementById("tehtava");

//funktio luo uuden tehtävän ja tulostaa listalle
  lisaaBtn.addEventListener("click", () => {
    const teksti = tehtavaKentta.value.trim(); //hakee txt:n ja poistaa
    if (teksti !== "") {
      const uusiLi = document.createElement("li");
      uusiLi.textContent = teksti;

      // Poista tehtävä klikkaamalla
      uusiLi.addEventListener("click", () => {
        lista.removeChild(uusiLi);
      });
      //lisää tehtävän
      lista.appendChild(uusiLi);
      tehtavaKentta.value = "";
    }
  });

  tyhjennaBtn.addEventListener("click", () => {
    lista.innerHTML = "";
  });
});
