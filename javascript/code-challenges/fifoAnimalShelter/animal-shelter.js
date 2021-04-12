const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');
const Node = require('../Data-Structures/linkedList/node.js')

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class AnimalShelter {
    constructor() {
        this.cats = new Queue();
        this.dogs = new Queue();
    }

    enqueue(Animal) {
        if (Animal.type == "cat") {
            this.cats.enqueue(Animal.name);
        } else {
            this.dogs.enqueue(Animal.name);
        }
    }

    dequeue(pref) {
        if (this.cats.isEmpty() && pref == 'cat')
            return 'no cats';
        else if (this.dogs.isEmpty() && pref == 'dog')
            return 'no dogs';
        else if (pref == 'dog')
            return this.dogs.dequeue();
        else if (pref == 'cat')
            return this.cats.dequeue();
        else return null;
    }
}

module.exports = {AnimalShelter , Animal };

// const newAnimalShelter = new AnimalShelter();

// const cat = new Animal('caty', "cat");
// const dog = new Animal('boby', "dog");
// const cat1 = new Animal('caty1', "cat");
// const dog1 = new Animal('boby1', "dog");

// newAnimalShelter.enqueue(dog);
// newAnimalShelter.enqueue(cat);
// newAnimalShelter.enqueue(dog1);
// newAnimalShelter.enqueue(cat1);

// console.log(newAnimalShelter.cats.toString());
// console.log(newAnimalShelter.dogs.toString());

//   console.log(newAnimalShelter.dequeue("cat"));
//   console.log(newAnimalShelter.dequeue("dog"));
//   console.log(newAnimalShelter.dequeue("cat"));
//   console.log(newAnimalShelter.dequeue("cat"));
//   console.log(newAnimalShelter.dequeue("dog"));
//   console.log(newAnimalShelter.dequeue("bbb"));

//   console.log(newAnimalShelter.cats.toString());
