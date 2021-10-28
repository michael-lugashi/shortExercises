'use strict';

class ClassicGuitar {
  #id;
  constructor(
    manufactureYear,
    brand,
    price,
    numOfString = 6,
    used = false,
    id
  ) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numOfString = numOfString;
    this.used = used;
    this.#id = id;
  }
  get displayId(){
      return `your id is ${this.#id}`
  }
  get yearsOld() {
    return 2021 - this.manufactureYear;
  }
  get brandName() {
    return `the brand of the guitar is ${this.brand}`;
  }
  play() {
    this.used = true;
    this.price *= 0.9;
    console.log('🎶🎶🎶');
    return '🎶🎶🎶';
  }
  static detectSound() {
       
  }
}
let myGuitar = new ClassicGuitar(1998, 'zipper', 400, 6, false, 10);

console.log(myGuitar);
myGuitar.play();
console.log(myGuitar.yearsOld);
console.log(myGuitar.brandName)
console.log(myGuitar.displayId);
console.log(myGuitar);
