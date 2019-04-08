const HashMap       = require('./HashMap');
const BetterHashMap = require('./BetterHashMap');

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

function removeDuplicates(str) {
  let strMap = new Map();
  let outputStr = '';
  for (let i = 0; i < str.length; i++) {
    strMap.set(1, str[i]);
  }
  console.log(strMap);
  strMap.forEach((letter) => {
    if (!outputStr.includes(letter)) {
      outputStr += letter;
    }
  })
  return outputStr;
}

function isPalindrome(str) {
  let strMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!strMap.has(str[i])) {
      strMap.set(str[i], 'unmatched')
    } else {
      strMap.set(str[i], 'matched')
    }
  }

  const allowedChars = str.length % 2;
  let unmatchCount = 0;
  strMap.forEach(value => {
    if (value === 'unmatched') {
      unmatchCount++;
    }
  })
    // if more than one character is unmatched return false
  if (unmatchCount > allowedChars) {
    return false;
  }

  return true;
}


function drillsMain() {
  //console.log(removeDuplicates("google"));
  //console.log(isPalindrome("acecarr"));
}
drillsMain();

// main();


// WhatDoesThisDo
// This code demonstrates that multiple set()'s to the same key will overwrite
// any previously set() values

// interview question
function flightTimeMovieCal(flightTime, movieLengthList) {
  let moviesLength = new Map();
  let secondMovie = 0;

  for (let i = 0; i < movieLengthList.length; i++) {
    try {
      secondMovie = flightTime - movieLengthList[i]
      moviesLength.get(secondMovie)
      return true
    }
    catch {
    moviesLength.set(movieLengthList[i], '')
    }
  }
  return false;
}

//console.log(flightTimeMovieCal(100, [120, 90]));


// Anagram grouping


const groupAnagrams = function (words) {

  const obj = {};

  words.forEach((word) => {

    let hash = 0;

    for (let i = 0; i < word.length; i++) {
      hash += word.charCodeAt(i);
    }


    if (obj[hash]) {
      obj[hash].push(word);
    } else {
      obj[hash] = [ word ];
    }

  });

  return Object.values(obj);
}

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))


// Testing BetterHashMap

BetterHashMap.MAX_LOAD_RATIO = 0.5;
BetterHashMap.SIZE_RATIO     = 3;

let tMap = new BetterHashMap(1);
tMap.set('east', 'foo');
tMap.set('teas', 'bar');
tMap.set('eats', 'buzz');
tMap.set('xxxxxxx', 'zzzzzzzzz');

// console.log(tMap);
