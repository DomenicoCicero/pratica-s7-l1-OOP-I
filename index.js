class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static moreOld(user1, user2) {
    if (user1.age > user2.age) {
      return `${user1.firstName} ${user1.lastName} è più vecchio di ${user2.firstName} ${user2.lastName}`;
    } else {
      return `${user2.firstName} ${user2.lastName} è più vecchio di ${user1.firstName} ${user1.lastName}`;
    }
  }
}

const user1 = new User("Mario", "Rossi", 26, "Roma");
const user2 = new User("Luigi", "Verdi", 31, "Milano");

console.log(User.moreOld(user1, user2));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwnerName(owner1, owner2) {
    return owner1.ownerName === owner2.ownerName;
  }
}

const pet1 = new Pet("Fuffy", "Sam", "Cat", "Persian");
const pet2 = new Pet("Willy", "Sam", "Dog", "Labrador");

console.log(Pet.sameOwnerName(pet1, pet2));

const petN = document.querySelector("#petName");
const ownerN = document.querySelector("#ownerName");
const specie = document.querySelector("#species");
const razza = document.querySelector("#breed");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", e => {
  e.preventDefault();
  const pet = new Pet(petN.value, ownerN.value, specie.value, razza.value);
  console.log(pet);
  const li = document.createElement("li");
  li.innerText = `name: ${pet.petName}, owner: ${pet.ownerName}, species: ${pet.species}, breed: ${pet.breed}`;
  ul.appendChild(li);
  form.reset();
});
