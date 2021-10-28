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
  set newPrice(newPrice) {
    this.price = newPrice;
    return this.price;
  }
  get displayPrice() {
    return `the price of this guitar is ${this.price}`;
  }
  get displayId() {
    return `your id is ${this.#id}`;
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
  static detectSound(sound) {
    let type = 'ClassicGuitar';
    switch (sound) {
      case '🎸':
        type = 'ElectricGuitar';
        break;
      case '🔊':
        type = 'BassGuitar';
        break;
    }
    return type;
  }
}
let myGuitar = new ClassicGuitar(1998, 'zipper', 400, 6, false, 10);

console.log(myGuitar);
myGuitar.play();
console.log(myGuitar.yearsOld);
console.log(myGuitar.brandName);
console.log(myGuitar.displayId);
myGuitar.newPrice = 300;
console.log(myGuitar.displayPrice);
console.log(myGuitar);
console.log(ClassicGuitar.detectSound('🎸'));

class ElectricGuitar extends ClassicGuitar {
  #id;
  constructor(manufactureYear, brand, price, numOfStrings = 6, used, id) {
    super(manufactureYear, brand, price, numOfStrings, used, id);
    this.longNeck = true;
  }
  play() {
    console.log('🎸🎸🎸');
    this.price *= 0.9;
    this.used = true;
  }
}
let myElecGuitar = new ElectricGuitar(
  1998,
  'zipperElec',
  400,
  undefined,
  false,
  10
);

console.log(myElecGuitar);
myElecGuitar.play();
console.log(myElecGuitar);

this.price *= 0.9;

class BassGuitar extends ClassicGuitar {
  #id;
  constructor(manufactureYear, brand, price, used, id) {
    super(manufactureYear, brand, price, 4,used, id);
  }
  play() {
    console.log('🔊🔊🔊');
    this.price *= 0.9;
    this.used = true;
  }
  playSolo() {
    this.used = true;
    this.price *= 0.9;
    console.log('💥', '🤘', '🎵', '📢', '💢', '🕺');
  }
}

let myBassGuitar = new BassGuitar(2017, 'Bran', 3000, true, 3);
console.log(myBassGuitar)
myBassGuitar.playSolo()
console.log(myBassGuitar)