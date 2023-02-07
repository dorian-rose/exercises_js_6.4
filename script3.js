//Suma o resta (según elija el usuario) dos números reales

var sumarRestar = prompt("Quieres sumar or restar?");
var n1 = parseFloat(
  prompt(`inserta el primer numero real del que quieres ${sumarRestar}`)
);
var n2 = parseFloat(
  prompt(`inserta el numero real que quieres ${sumarRestar}`)
);

if (sumarRestar == "sumar") {
  alert(n1 + n2);
} else {
  if (sumarRestar == "restar") {
    alert(n1 - n2);
  } else {
    alert("not valid");
  }
}
