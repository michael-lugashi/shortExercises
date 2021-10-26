'use strict'

/* Completed with Quaka */

// Constructor Function
function Cat(tiredness, hunger, loneliness, happiness) {
    this.tiredness = tiredness
    this.hunger = hunger
    this.loneliness = loneliness
    this.happiness = happiness

}

// methods
Cat.prototype.feed = function() {
    this.hunger -= randomAmount()
}

Cat.prototype.sleep = function() {
    this.tiredness -= randomAmount()
}

Cat.prototype.pet = function() {
    if (randomAmount() === 1) {
        console.log('cat does not want to be pet')
        return
    }
    this.loneliness -= randomAmount()
    this.happiness += randomAmount()
}

Cat.prototype.status = function(){
    console.log(this)
    // for (const property in Object.keys(this)) {
    //     console.log(property)
    // }
}
// new Cat or new Object
let fred = new Cat(5, 9, 2, 6)

// cat before methods
console.log(fred)

fred.sleep()
fred.feed()
fred.pet()

// cat after methods
console.log(fred)

// print status method

fred.status()
console.log(Object.keys(fred))

// returns a random amount between 1 and 3 inclusive
function randomAmount(){
    return Math.floor(Math.random()*3+1)
}