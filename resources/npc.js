var npcs = {
	"Barbarian": ( Math.floor(Math.random() * 3) + 1 + villageSizeModifier),
	"Bard": ( Math.floor(Math.random() * 5) + 1 + villageSizeModifier),
	"Cleric": ( Math.floor(Math.random() * 5) + 1 + villageSizeModifier),
	"Druid": ( Math.floor(Math.random() * 5) + 1 + villageSizeModifier),
	"Fighter": ( Math.floor(Math.random() * 7) + 1 + villageSizeModifier),
	"Monk": ( Math.floor(Math.random() * 3) + 1 + villageSizeModifier),
	"Paladin": ( Math.floor(Math.random() * 2) + 1 + villageSizeModifier),
	"Ranger": ( Math.floor(Math.random() * 2) + 1 + villageSizeModifier),
	"Rogue": ( Math.floor(Math.random() * 7) + 1 + villageSizeModifier),
	"Sorcerer": ( Math.floor(Math.random() * 3) + 1 + villageSizeModifier),
	"Wizard": ( Math.floor(Math.random() * 3) + 1 + villageSizeModifier),
	"Other": ( Math.floor(Math.random() * 7) + 2 + villageSizeModifier)
};

var npcnpcs = {
	"Adept": ( Math.floor(Math.random() * 5) + 1 + villageSizeModifier),
	"Aristocrat": ( Math.floor(Math.random() * 3) + 1 + villageSizeModifier),
	"Commoner": ( Math.floor(Math.random() * 15) + 4 + villageSizeModifier),
	"Expert": ( Math.floor(Math.random() * 11) + 1 + villageSizeModifier),
	"Warrior": ( Math.floor(Math.random() * 7) + 2 + villageSizeModifier)
};

var "Adepts" = {}, "Aristocrats" = {}, "Barbarians" = {}, "Bards" = {}, "Clerics" = {}, "Commoners" = {}, "Druids" = {}, "Experts" = {}, "Fighters" = {};
var "Monks" = {}, "Paladins" = {}, "Rangers" = {}, "Rogues" = {}, "Sorcerers" = {}, "Warriors" = {}, "Wizards"= {}, "Others" = {};

function npcPlayerClassCalculation () {
	var highestLevelBarbarian = npcs["Barbarian"];
	var BarbarianAmount = 0;
  if (villageSizeModifier > 5 && (Math.random() > 0.6 ) ) {
  	Barbarians.highestLevelBarbarian = ( Math.floor(Math.random() * 3) + 1 )
  	BarbarianAmount = ( Math.floor(Math.random() * 3) + 1 )
  };	   
	for (var index = highestLevelBarbarian; index >= 1; index = Math.ceil(index / 2)) {
		BarbarianAmount = BarbarianAmount * 2;
		Barbarians.index = BarbarianAmount; 
  };
	return Barbarians;
};