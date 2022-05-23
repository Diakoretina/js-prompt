let nome = prompt("Inserisci il tuo nome.");
let cognome = prompt("Inserisci il tuo cognome.");
let dataNascita = prompt("Inserisci la tua data di nascita.");
let segnoZodiacale = prompt("Inserisci il tuo segno zodiacale.");

document.getElementById(
  "base"
).innerText = `Nome: ${nome}\nCognome: ${cognome}\nData di nascita: ${dataNascita}\nSegno zodiacale: ${segnoZodiacale}.`;