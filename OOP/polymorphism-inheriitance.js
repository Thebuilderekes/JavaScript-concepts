// @ts-nocheck
class Player {
  constructor(name, mp, hp, weapon) {
    this.name = name;
    this.mp = mp;
    this.hp = hp;
    this.weapon = weapon;
  }

  speak(phrase) {
    console.log(`${this.name} says ${phrase}`);
  }

  walk(style) {
    console.log(`${this.name} walks with a ${style}`);
  }
}

class Warrior extends Player {
  constructor(name, mp, hp, weapon, magic) {
    super(name, mp, hp, weapon);
    this.magic = magic;
    super.speak("rowr!");
  }
}
//the "extend" keyword tells the Warrior subclass to take in all the arguments in the super-class "Player" and the "super" keyword points to the exact arguments which have bbeen taken from the super-class "Player". The "this" keyword is uses to initialize whatever argument that is unique to it, which is the "magic" in the case of this example.

// ===Always use "super" before "this" keyword=== //

const player = new Player("ghost", 500, 100, "sword");
const warrior = new Warrior("talib", 600, 200, "knife", "shazam");
const wizard = new Warrior("Dumbledore", 600, 200, "wand", "shazam");
const bartender = new Warrior("jason", 600, 200, "mug", "bottleSpin");
warrior.speak("hello");
console.log(warrior);

// for plyumorphism, we can give all the instances that we create a mthod with the syntax below

const players = [warrior, wizard, bartender];
for (const player of players) player.walk();
