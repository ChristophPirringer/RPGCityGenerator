// Declare the Object of Villager with attributes
function Villager(race, age, firstName, lastName, profession, characterClass, level, bodyHeight, sizeCategory, hd, hp, initiative, speed, ac, attackMelee, attackRanged, fortSave, refSave, willSave, alignment, str, dex, con, intl, wis, cha, gp ) {
  this.race = race;
  this.age = age;
  this.firstName = firstName;
  this.lastName = lastName;
  this.profession = profession;
  this.characterClass = characterClass;
  this.level = level;
  this.bodyHeight = bodyHeight;
  this.sizeCategory = sizeCategory;
  this.hd = hd;
  this.hp = hp;
  this.initiative = initiative;
  this.speed = speed;
  this.ac = ac;
  this.attackMelee = attackMelee;
  this.attackRanged = attackRanged;
  this.fortSave = fortSave;
  this.refSave = refSave;
  this.willSave = willSave;
  this.alignment = alignment;
  this.str = str;
  this.dex = dex;
  this.con = con;
  this.wis = wis;
  this.intl = intl;
  this.cha = cha;
  this.gp = gp;
};
Villager.prototype.race = function() {
  return this.race;
};
Villager.prototype.age = function() {
  return this.age;
};
Villager.prototype.firstName = function() {
  return this.firstName;
};
Villager.prototype.firstName = function() {
  return this.firstName;
};
Villager.prototype.lastName = function() {
  return this.lastName;
};
Villager.prototype.profession = function() {
  return this.profession;
};
Villager.prototype.characterClass = function() {
  return this.characterClass;
};
Villager.prototype.level = function() {
  return this.level;
};
Villager.prototype.bodyHeight = function() {
  return this.bodyHeight;
};
Villager.prototype.sizeCategory = function() {
  return this.sizeCategory;
};
Villager.prototype.hd = function() {
  return this.hd;
};
Villager.prototype.hp = function() {
  return this.hp;
};
Villager.prototype.initiative = function() {
  return this.initiative;
};
Villager.prototype.speed = function() {
  return this.firstName;
};
Villager.prototype.ac = function() {
  return this.ac;
};
Villager.prototype.attackMelee = function() {
  return this.attackMelee;
};
Villager.prototype.attackRanged = function() {
  return this.attackRanged;
};
Villager.prototype.fortSave = function() {
  return this.fortSave;
};
Villager.prototype.refSave = function() {
  return this.refSave;
};
Villager.prototype.willSave = function() {
  return this.willSave;
};
Villager.prototype.alignment = function() {
  return this.alignment;
};
Villager.prototype.str = function() {
  return this.str;
};
Villager.prototype.dex = function() {
  return this.dex;
};
Villager.prototype.con = function() {
  return this.con;
};
Villager.prototype.intl = function() {
  return this.intl;
};
Villager.prototype.wis = function() {
  return this.wis;
};
Villager.prototype.cha = function() {
  return this.cha;
};
Villager.prototype.gp = function() {
  return this.gp;
};

//create array with racial numbers to later create villagers with




//function displayVillagers () {
 //   for (var index = 0; index <= newVillage.villagersList.lenth; index += 1) {
 //     $("ul#villagers_names").append("<li><span class='villager'>" + newVillage.villagersList[index]["race"] + "</span></li>");
//    }
//};


// the function fillRandomName(villagersAmount) creates the correct number of random names between 3 and 6 syllables long.

var vowels = new Array(
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["a", 7], ["e", 7], ["i", 7], ["o", 7], ["u", 7],
  ["ae", 7], ["ai", 7], ["ao", 7], ["au", 7], ["aa", 7],
  ["ea", 7], ["eo", 7], ["eu", 7], ["ee", 7],
  ["ia", 7], ["io", 7], ["iu", 7], ["ii", 7],
  ["oa", 7], ["oe", 7], ["oi", 7], ["ou", 7], ["oo", 7],
  ["eau", 7],
  ["'", 4],
  ["y", 7]
)

// List of possible consonants.

var consonants = new Array(
  ["b", 7],  ["c", 7],  ["d", 7],  ["f", 7],  ["g", 7],  ["h", 7], 
  ["j", 7],  ["k", 7],  ["l", 7],  ["m", 7],  ["n", 7],  ["p", 7], 
  ["qu", 6],  ["r", 7], ["s", 7],  ["t", 7],  ["v", 7],  ["w", 7],
  ["x", 7],  ["y", 7],  ["z", 7], 
  // Blends, sorted by second character:
  ["sc", 7],
  ["ch", 7],  ["gh", 7],  ["ph", 7], ["sh", 7],  ["th", 7], ["wh", 6],
  ["ck", 5],  ["nk", 5],  ["rk", 5], ["sk", 7],  ["wk", 0],
  ["cl", 6],  ["fl", 6],  ["gl", 6], ["kl", 6],  ["ll", 6], ["pl", 6], ["sl", 6],
  ["br", 6],  ["cr", 6],  ["dr", 6],  ["fr", 6],  ["gr", 6],  ["kr", 6], 
  ["pr", 6],  ["sr", 6],  ["tr", 6],
  ["ss", 5],
  ["st", 7],  ["str", 6],
  // Repeat some entries to make them more common.
  ["b", 7],  ["c", 7],  ["d", 7],  ["f", 7],  ["g", 7],  ["h", 7], 
  ["j", 7],  ["k", 7],  ["l", 7],  ["m", 7],  ["n", 7],  ["p", 7], 
  ["r", 7], ["s", 7],  ["t", 7],  ["v", 7],  ["w", 7],
  ["b", 7],  ["c", 7],  ["d", 7],  ["f", 7],  ["g", 7],  ["h", 7], 
  ["j", 7],  ["k", 7],  ["l", 7],  ["m", 7],  ["n", 7],  ["p", 7], 
  ["r", 7], ["s", 7],  ["t", 7],  ["v", 7],  ["w", 7],
  ["br", 6],  ["dr", 6],  ["fr", 6],  ["gr", 6],  ["kr", 6]
)


// Return a random value between minvalue and maxvalue, inclusive,
// with equal probability.

function rolldie(minvalue, maxvalue) {
  var result;
  while (1) {
    result = Math.floor(Math.random() * (maxvalue-minvalue+1)+minvalue);
    if ((result >= minvalue) && (result <= maxvalue)) { return result;}
  }
}

// Create a random name.  It must have at least between minsyl and maxsyl
// number of syllables (inclusive).

function RandomName(minsyl, maxsyl) {
  var data = "";
  var genname = "";         // this accumulates the generated name.
  var leng = rolldie(minsyl, maxsyl); // Compute number of syllables in the name
  var isvowel = rolldie(0, 1); // randomly start with vowel or consonant
  for (var i = 1; i <= leng; i++) { // syllable #. Start is 1 (not 0)
    do {
      if (isvowel) {
        data = vowels[rolldie(0, vowels.length - 1)];
      } else {
        data = consonants[rolldie(0, consonants.length - 1)];
      }
       if ( i == 1) { // first syllable.
        if (data[1] & 2) {break;}
      } else if (i == leng) { // last syllable.
        if (data[1] & 1) {break;}
      } else { // middle syllable.
        if (data[1] & 4) {break;}
      }
    } while (1)
  genname += data[0];
    isvowel = 1 - isvowel; // Alternate between vowels and consonants.
  }
  // Initial caps:
  genname = (genname.slice(0,1)).toUpperCase() + genname.slice(1);
  return genname;
}

// Create Array with number of names equal to number of Villagers.



function fillRandomName(villagersAmount) {
  var nameArray = [];
  var finalvalue = "";
  var minsyl = 3;
  var maxsyl = 6;

  for (var i = 0; i < villagersAmount; i++) {
    finalvalue += RandomName(minsyl,maxsyl);
    nameArray.push(finalValue);
  }
  return nameArray;
}

var nameArray = fillRandomName(villagersAmount);

//fill newVillagers with hashes of each villagers with set race and name
function createVillagers () {
  //create empty array for villager Objects
  var villagersByRace = racialArray();
  var newVillagers = [];
  for (var i = 0; i <= villagersAmount; i++) {
    newVillager = new Villager(villagersByRace[0], "age", nameArray[0], "profession", "characterClass", "level", "bodyHeight", "sizeCategory", "hd", "hp", "initiative", "speed", "ac", "attackMelee", "attackRanged", "fortSave", "refSave", "willSave", "alignment", "str", "dex", "con", "intl", "wis", "cha", "gp")
    newVillagers.push(newVillager);
    villagersByRace.shift();  
    nameArray.shift();  
  }
 
  //creates random ages for the villagers depending on their races, still todo: age distribution
  var adulthood = {"dwarves": 40, "elves": 110, "gnomes": 40, "orcs": 14, "halflings": 20, "humans": 15, "others": 20}

  var randomAgeSeed = {"dwarves": 5, "elves": 6, "gnomes": 6, "orcs": 1, "halflings": 3, "humans": 1, "others": 3}

  newVillagers.forEach(function(entry) {
    var randomAge = adulthood[entry["race"]] + rolld(6) * randomAgeSeed[entry["race"]];
    entry["age"] = randomAge;
  });

   for (var index = 0; index <= newVillagers.length; index += 1) {
      $("ul#villagers_names").append("<li><span class='villager'>" + newVillagers[index]["race"] + "  " + newVillagers[index]["firstName"]+ " " + newVillagers[index]["age"] + "</span></li>");
  }
  return newVillagers;
  //should return an array of hashes of the villagers
};



