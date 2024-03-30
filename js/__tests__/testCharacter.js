import Character from "../character";
test("name should be no less 2", () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error ('incorrect name'));
});

test("name should be no more 10 words", () => {
  expect(() => new Character('antropologist', 'Bowman')).toThrowError(new Error ('incorrect name'));
});

test('type should be as types', () => {
  expect(() => new Character('Player', 'Hero')).toThrowError(new Error('incorrect type'));
});

test('the right name length', () => {
  const character = new Character('Player', 'Magician');
  expect(character.name).toBe('Player');
});

test('the right type', () => {
  const character = new Character('Player', 'Magician');
  expect(character.type).toBe('Magician');
});

test('the right name length and the right type', () => {
  const character = new Character('Player', 'Magician');
  const result = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('levelUp do not work - health <= 0', () => {
  const character = new Character('Player', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Could not be able to level up - character is dead'));
});

test('levelUp is working', () => {
  const character = new Character('Player', 'Magician');
  character.attack = 25;
  character.defence = 25;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
  expect(character.level).toBe(2);
});

test('the character is damaged by points', () => {
  const character = new Character('Player', 'Magician');
  character.defence = 20;
  character.health = 80;
  character.damage(40);
  expect(character.health).toBe(48);
});

test('the character is damaged by points mote than health', () => {
  const character = new Character('Player', 'Magician');
  character.defence = 20;
  character.health = 80;
  character.damage(400);
  expect(character.health).toBe(0);
});