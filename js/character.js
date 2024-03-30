export default class Character {
  constructor(name, type) {
    if(name.length < 2 || name.length > 10) {
      throw new Error('incorrect name');
    } else {
      this.name = name;
    }
    
    const types = [
      "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
    ];
    if(types.indexOf(type) === -1) {
      throw new Error('incorrect type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  levelUp() {
    if(this.health > 0) {
      this.level +=1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Could not be able to level up - character is dead');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if(this.health < 0) {
      this.health = 0;
    }
  }
}

