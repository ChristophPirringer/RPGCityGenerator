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
  this.st = st;
  this.de = de;
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
var villagersByRace = racialArray();

//fill newVillagers with hashes of each villagers with set race
function createVillagers () {
	//create empty array for villager Objects
	var newVillagers = [];
	for (var i = 0; i <= villagersAmount; i++) {
		newVillager = new Villager(villagersByRace[0], "age", "firstName", "lastName", "profession", "characterClass", "level", "bodyHeight", "sizeCategory", "hd", "hp", "initiative", "speed", "ac", "attackMelee", "attackRanged", "fortSave", "refSave", "willSave", "alignment", "str", "dex", "con", "intl", "wis", "cha", "gp")
		newVillagers.push(newVillager);
		villagersByRace.shift();	
	}
	return newVillagers;
	//should return an array of hashes of the villagers
};