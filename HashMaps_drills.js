const HashMap = require('./HashMap');

const main = function () {

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO     = 3;

  const lotr = new HashMap();

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragon');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr);

  // Multiple sets to the same key will replace any existing value with the most
  // recent value.
  // console.log(lotr.get('Maiar'));
  // console.log(lotr.get('Hobbit'));


  // Capacity
  // Capacity starts at 8. When length exceeds capacity/2 we will resize. So
  // when the 5th item is added capacity is rez=sized to 24
};

main();
