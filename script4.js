// const user = "dorian";
// const password = 1234;

// let i = 0;
// while (i < 3) {
//   i += 1;
//   let userAttempt = prompt("Inserta usuario");
//   let passwordAttempt = prompt("Inserta password");

//   if (userAttempt == user && passwordAttempt == password) {
//     alert("contraseña y usuario correcto, puedes pasar");
//   } else {
//     if (i == 3) {
//       alert("demasiadas veces");
//     } else {
//       alert("incorrecto, intentalo de nuevo");
//     }
//   }
// }

//second attempt

// let loggedIn = false;
// let attempt = 3;

// while (!loggedIn && attempt > 0) {
//   let userName = prompt("insertar usuario", "");
//   let passWord = prompt("insertar contraseña", "");
//   if (userName + passWord == "dorian1234") {
//     loggedIn = true;
//     alert("Has entrado");
//   } else {
//     attempt--;
//     alert(`Incorrecto. Te quedan ${attempt} intentos`);
//     if (attempt == 0) {
//       alert("Has sido bloqueado");
//     }
//   }
// }

//third attempt with do while

const USER = "dorian";
const PASS = "12345";
let attempts = 3;
let inputuser;
let inputpass;

do {
  inputuser = prompt("Escribe tu usuario");
  inputpass = prompt("Escribe tu contraseña");
  attempts--;
} while ((inputuser != USER || inputpass != PASS) && attempts > 0);
