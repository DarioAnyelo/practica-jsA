const pet = { name: "Simba", age: 8, address: { street:" hakuna matata"} };

Object.freeze(pet);

pet.address.street = "Hakuna Matata 2";
console.log(pet);


// Ejemplo 2

const dog = { name: "leon", age: 5 };

Object.freeze(dog);

const petThisYear = { ...dog, age: 8 };

console.log(dog === petThisYear);
console.log(petThisYear);

