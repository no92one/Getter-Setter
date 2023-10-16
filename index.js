import PromptSync from "prompt-sync";
import Person from "./person.js";

const prompt = PromptSync({ sigint: true })

const person = new Person("Li", "Svensson");


while (true) {
  console.log(`Meny - ${person.firstName} ${person.lastName}
  
1. Ändra förnamn
2. Ändra efternamn
  
val -> `);
  const choice = prompt()

  switch (choice.trim()) {
    case "1":
      const newFirstName = prompt(`Skriv in ditt nya förnamn -> `)
      person.firstName = newFirstName;
      break;

    case "2":
      const newLastName = prompt(`Skriv in ditt nya efternamn -> `)
      person.lastName = newLastName;
      break;

    default:
      console.log("Du måste välja 1 eller 2!");

  }
}


// const something = {
//   _amount: 25,
//   get amount() {
//     return this._amount;
//   },
//   set amount(newAmount) {
//     if (newAmount >= 0) {
//       this._amount = newAmount;
//     } else {
//       console.log("Den nya mängden måste vara ett positivt nummer!");
//     }
//   }
// }

// console.log(something.amount);
// something.amount = -2;
// console.log(something.amount);
// something.amount = 10;
// console.log(something.amount);