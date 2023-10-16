export default class Person {

  _firstName = "";
  _lastName = "";
  _hobbies = [];

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName.toUpperCase();
  }

  get lastName() {
    return this._lastName.toUpperCase();
  }

  set firstName(newName) {
    if (newName.length >= 2) {
      this._firstName = newName;
    } else {
      console.log("Ett nytt namn måste innehålla minst 2 symboler!");
    }
  }

  set lastName(newName) {
    if (newName.length >= 3) {
      this._lastName = newName;
    } else {
      console.log("Ett nytt namn måste innehålla minst 3 symboler!");
    }
  }

}