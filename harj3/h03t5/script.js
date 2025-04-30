// Luodaan circle-olio
const circle = {
  radius: 5,
  color: "red",

  // Metodi ympyrän alan laskemiseksi
  getArea: function() {
    return Math.PI * Math.pow(this.radius, 2); // Pi * radius^2
  },

  // Metodi ympyrän piirin laskemiseksi
  getCircumference: function() {
    return 2 * Math.PI * this.radius; // 2 * Pi * radius
  }
};

// Tulostetaan ympyrän tiedot ja laskelmat konsoliin
console.log(`Circle radius is ${circle.radius} and it's color is ${circle.color}`);
console.log(`Area: ${circle.getArea().toFixed(2)}`);  // Pyöristetään alue kahteen desimaaliin
console.log(`Circumference: ${circle.getCircumference().toFixed(2)}`);  // Pyöristetään piiri kahteen desimaaliin
