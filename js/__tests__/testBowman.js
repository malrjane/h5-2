import Character from '../bowman';

test('should check the class Bowerman', () => {
  const character = new Character('Player', 'Bowman');
  const result = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});