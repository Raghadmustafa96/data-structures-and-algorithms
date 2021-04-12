'use strict';
const {AnimalShelter} = require('../animal-shelter.js');
const {Animal} = require('../animal-shelter.js');

describe('First-in, First out Animal Shelter', () => {
  it('should insert correct animal in AnimalShelter', () => {
    let animalShelter = new AnimalShelter();
    let cat1 = new Animal('caty', 'cat');
    let dog1 = new Animal('boby', 'dog');

    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog1);

    expect(animalShelter.cats.front.data).toEqual('caty');
    expect(animalShelter.dogs.front.data).toEqual('boby');
  });

  it('should remove correct animal from AnimalShelter', () => {
    let animalShelter = new AnimalShelter();
    let cat1 = new Animal('caty', 'cat');
    let dog1 = new Animal('boby', 'dog');

    let cat2 = new Animal('caty2', 'cat');
    let dog2 = new Animal('boby2', 'dog');

    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat2);
    animalShelter.enqueue(dog2);

    expect(animalShelter.dequeue('cat')).toEqual('caty');
    expect(animalShelter.dequeue('dog')).toEqual('boby');
  });

  it('should return null If pref is not "dog" or "cat"', () => {
    let animalShelter = new AnimalShelter();
    let cat1 = new Animal('caty', 'cat');

    animalShelter.enqueue(cat1);
   
    expect(animalShelter.dequeue('bird')).toEqual(null);
  });
  
  it('should return no cat or no dog if Shelter do not have', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('cat')).toEqual('no cats');
    expect(animalShelter.dequeue('dog')).toEqual('no dogs');
  });
});
