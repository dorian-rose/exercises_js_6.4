//1. Solicita al usuario tres números enteros e indícale cuál es el menor.

var n1 = parseInt(prompt("Inserta un número entero: "));
var n2 = parseInt(prompt("Inserta otro número entero: "));
var n3 = parseInt(prompt("Inserta un ultimo número entero: "));

if (n1 < n2 && n1 < n3) {
  alert(`The lowest number is ${n1}`);
} else if (n2 < n1 && n2 < n3) {
  alert(`The lowest number is ${n2}`);
} else if (n3 < n1 && n3 < n2) {
  alert(`The lowest number is ${n3}`);
}
//can delete las if (leave as else)
