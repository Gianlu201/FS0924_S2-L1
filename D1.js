/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quando ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  string -> è una collezione di caratteri che viene passata ad una variabile, può anche essere una collezione vuota. Alla variabile la collezione di valori deve essere passata tra apici singoli o doppi (es "Ciao Mondo", '13')
  int -> alla variabile viene associato un numero intero, positivo, negativo o nullo (es 6)
  float -> alla variabile viene associato un numero con virgola mobile, ovvero un numero che presenta una parte decimale. Laddove la parte decimale fosse nulla verrà indicata con lo zero (es 11.0)
  bool -> la variabile accetta due soli tipi di valore, True o False, valori che permettono al programma a poter prendere decisioni o eseguire una parte di codice (es true, false)
  undefined -> la variabile è stata inizializzata ma non gli è stato attribuito alcun valore (es let name;)
  null -> alla variabile viene attribuito il valore nullo (es let age = null;)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  const myName = "Gianluca";
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  console.log(12 + 20);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  const x = 12;
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  // Caso di riassegnazione consentita
  let myName = "Gianluca";
  myName = "Di Diego"

  // Caso di riassegnazione impossibilitata
  const myName = "Gianluca";
  myName = "Di Diego"
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  const x = 12;
  console.log(4 - x);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA 
  const name1 = "john";
  const name2 = "John";
  console.log(name1 !== name2);

  console.log(name1.toLowerCase() === name2.toLowerCase());
*/
