

// Oppgave: lage en while loop, som er sant  så lange variabel "count" er indre enn 20. I hver itersjon av loopen , skal det logges i console "Telling har nådd" + count, og skal count pluss med 1.//
let count= 0;
while (count < 20) {
    console.log("Telling har nådd " + count);
count++;
  }


  // Oppgave 2: Lag samme loop, men som en for loop. 

  for (let count = 0; count < 20; count++) {
    console.log("Telling har nådd " + count);
}

  
//oppgave 3: Do while loop

let count3= 0;

do {
    text += "Telling har nådd " + count + " ";  // legg til melding i text-strengen
    count++;
} while (count < 20);

console.log(text);  // logg hele meldingen etter loopen


// ForEach
const fruits = ["Eple", "Banan", "MAngo", "Ananas"];

function fruitPrinterr(fruit){
    console.log(fruits.forEach(fruitPrinter()));
}

// Map

const numbers = [3, 7, 13, 2, 5];
let numbersDoubled = numbers.map(function(num) {
    return num * 2;
});
console.log(numbersDoubled);

