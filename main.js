class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }
  attacked(damage) {
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " a zburat");
        damage = 0;
      }
    }
    if (this.shield) {
      damage *= 0.8;
      console.log(this.name + " s-a  aparat cu scutul");
    }
    this.hp -= damage;
    console.log(
      this.name +
        " a fost atacat cu " +
        damage +
        " dmg." +
        " Hp ramas" +
        this.hp +
        "."
    );
  }
}

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " a atacat cu dmg " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Fairy extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 12;
    console.log(this.name + " a atacat cu dmg " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 5;
    console.log(this.name + " a atacat cu dmg " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }
  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }
  chnageTurn() {
    this.turn = 1 - this.turn;
  }
  findWinner() {
    if (this.hero1.hp > 0) {
      let showWinner = this.hero1.name + " cu " + this.hero1.hp + " Hp ramas.";
      console.log(showWinner);
      return showWinner;
    } else if (this.hero2.hp > 0) {
      let showWinner = this.hero2.name + " cu " + this.hero2.hp + " Hp ramas.";
      console.log(showWinner);
      return showWinner;
    } else {
      let showWinner = "Nici un erou ramas";
      console.log(showWinner);
      return showWinner;
    }
  }
  go() {
    do {
      this.performAttack();
      this.chnageTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);
    this.findWinner();
  }
}

let dwarf = new Dwarf("Bilbo Beghins", 50);
let fairy = new Fairy("Zana", 40);
let dragon = new Dragon("Ragnar", 60);
let epicfight = new Fight(dragon, fairy);
epicfight.go();
