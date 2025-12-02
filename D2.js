/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
let prompt1 = window.prompt("scegli un numero");
let numero1 = parseInt(prompt1);
let prompt2 = window.prompt("scegli un'altro numero");
let numero2 = parseInt(prompt2);
if (numero1 > numero2) {
  console.log(numero1 + " è più grande di " + numero2);
} else if (numero2 > numero1) {
  console.log(numero2 + " è più grande di " + numero1);
} else if (numero1 === numero2) {
  console.log(numero1 + " è uguale a " + numero2);
} 
  */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
 let prompt1 = window.prompt("scegli un numero");
let numero1 = parseInt(prompt1);
const numero2 = 5;
if (numero1 !== numero2) {
  console.log("not equal");
} else {
  console.log("equal");
}
  */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* 
let prompt1 = window.prompt("scegli un numero");
let numero1 = parseInt(prompt1);
const numero2 = 5;
if (numero1 % numero2 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
} 
  */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
let prompt1 = window.prompt("scegli un numero");
let numero1 = parseInt(prompt1);
let prompt2 = window.prompt("scegli un'altro numero");
let numero2 = parseInt(prompt2);

if (numero1 === 8 || numero2 === 8) {
  console.log("un numero è 8");
} else if (numero1 + numero2 === 8) {
  console.log("sommando " + numero1 + " + " + numero2 + " il risultato è = a 8");
} else if (numero1 - numero2 === 8) {
  console.log("sottraendo a " + numero1 + " - " + numero2 + " il risultato è = a 8");
} else if (numero2 - numero1 === 8) {
  console.log("sottraendo a " + numero2 + " - " + numero1 + " il risultato è = a 8");
} else {
  console.log("nessuno dei due numeri da 8");
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let prompt1 = window.prompt("scrivi il saldo totale");
let totalShoppingCart = parseInt(prompt1);
if (totalShoppingCart > 50) {
  console.log("avrai la spedizione gratuita");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("devi pagare in totale con spedizione inclusa = " + totalShoppingCart);
} 
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* 
let prompt1 = window.prompt("scrivi il saldo totale");
let totalShoppingCart = parseInt(prompt1);
let sconto = (totalShoppingCart * 20) / 100;
totalShoppingCart = totalShoppingCart - sconto;
if (totalShoppingCart > 50) {
  console.log("avrai la spedizione gratuita");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("devi pagare in totale con spedizione inclusa = " + totalShoppingCart);
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* 
let prompt1 = window.prompt("scegli un numero");
let numero1 = parseInt(prompt1);
let prompt2 = window.prompt("scegli un numero");
let numero2 = parseInt(prompt2);
let prompt3 = window.prompt("scegli un numero");
let numero3 = parseInt(prompt3);
if (numero1 >= numero2 && numero2 >= numero3) {
  console.log(numero1 + " " + numero2 + " " + numero3);
} else if (numero1 >= numero3 && numero3 >= numero2) {
  console.log(numero1 + " " + numero3 + " " + numero2);
} else if (numero2 >= numero1 && numero1 >= numero3) {
  console.log(numero2 + " " + numero1 + " " + numero3);
} else if (numero2 >= numero3 && numero3 >= numero1) {
  console.log(numero2 + " " + numero3 + " " + numero1);
} else if (numero3 >= numero1 && numero1 >= numero2) {
  console.log(numero3 + " " + numero1 + " " + numero2);
} else if (numero3 >= numero2 && numero2 >= numero1) {
  console.log(numero3 + " " + numero2 + " " + numero1);
} 
  */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* 
const numero1 = "ciao";
if (typeof numero1 === "number") {
  console.log("corretto grazie");
} else {
  window.alert("dovevi passarmi un numero");
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* 
const numero1 = 8;
if (numero1 % 2 === 0) {
  console.log("il numero è un numero pari");
} else {
  console.log("il numero non è pari");
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* 
let val = 11;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";
console.log(me); 
 */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* 
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";
delete me.lastName;
console.log(me);
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* 
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.skills.pop();
console.log(me.skills);
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array.splice(9, 1, 100);
console.log(array);

/* SCRIVI QUI LA TUA RISPOSTA */
