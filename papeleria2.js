let papers = window.prompt("Tipo de papel");
let sheets = window.prompt("cantidad de papel");
let paperSize = window.prompt("Medida de papel");
let numberSheets = window.prompt("cantidad de hojas por juego");
let chemicalPrice = 0.01;
let halfChemPrice = 0.005;
let bondPrice = 0.011;
let halfBondPrice = 0.0055;
let gain = 2.5;
let copies;
let totalSheets;
//agregar costos operacionales a las variables para aumentar precios y tambien IVA

if (papers.toLowerCase() == "quimico" && paperSize.toLowerCase() == "media carta") {
  const result = (sheets*numberSheets) * (halfChemPrice*gain);
  console.log(result);// multiplicar por iva
} else if (papers.toLowerCase() == "bond" && paperSize.toLowerCase() == "media carta") {
  const result = (sheets*numberSheets) * (halfBondPrice*gain);
  console.log(result);// multiplicar por iva
} else {
  console.log("introduzca datos");
}