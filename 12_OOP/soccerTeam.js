'use strict';
class Person {
  #id;

  constructor(firstName, sureName, salary, age, id) {
    this.firstName = firstName;
    this.sureName = sureName;
    this.salary = salary;
    this.age = age;
    this.#id = id;
  }

  get showId() {
    return this.#id;
  }
  get fullName() {
    return `${this.firstName} ${this.sureName}`;
  }
  set ageUpdate(num) {
    this.age = num;
  }
  set salaryChanage(num) {
    this.salary = num;
  }
}
let bob = new Person('Bob', 'Johns', 50000, 24, 1);
console.log(bob);
console.log(bob.fullName);
bob.ageUpdate = 25;
bob.salaryChanage = 60000;
console.log(bob);

class Player extends Person {
  constructor(
    firstName,
    sureName,
    salary,
    age,
    id,
    strongLeg,
    position,
    celebrationSentence
  ) {
    super(firstName, sureName, salary, age, id);
    this.strongLeg = strongLeg;
    this.position = position;
    this.celebrationSentence = celebrationSentence;
  }
  goalCelebration() {
    this.salary *= 1.025;
    return this.celebrationSentence;
  }
}

const carlos = new Player(
  'Carlos',
  'Garcia',
  50000,
  25,
  2,
  'right',
  'striker',
  'oh yeah'
);
console.log(carlos);
console.log(carlos.goalCelebration());
console.log(carlos);

class GoalKeeper extends Person {
  constructor(
    firstName,
    sureName,
    salary,
    age,
    id,
    isLeftHanded,
    lastGoalConceded = new Date(Date.now())
  ) {
    super(firstName, sureName, salary, age, id);
    this.isLeftHanded = isLeftHanded;
    this.lastGoalConceded = lastGoalConceded;
  }
  goalConceded() {
    this.lastGoalConceded = new Date(Date.now());
    this.salary *= 0.975;
  }
}
const Peanut = new GoalKeeper('Peanut', 'Butter', 50000, 25, 2, true, undefined);
console.log(Peanut)
Peanut.goalConceded()
console.log(Peanut)