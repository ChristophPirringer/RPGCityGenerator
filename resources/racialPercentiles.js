// Declare the Object of Race with input of percentile and designation from form 
function Race(percentile, number) {
  this.percentile = percentile;
  this.number = number;
};
Race.prototype.percentile = function() {
  return this.percentile;
};
Race.prototype.number = function() {
  return this.number;
};

var dwarf = 0, elf = 0, gnome = 0, orc = 0, halfling = 0, human = 0, other = 0;
var dwarvenPercentileOutput = 0, elvenPercentileOutput = 0, gnomishPercentileOutput = 0, orcishPercentileOutput = 0;
var halflingPercentileOutput = 0, humanPercentileOutput = 0, otherPercentileOutput = 0;

function percentileCalculation () {

	dwarf = parseInt($("#dwarven_percentile").val());
	elf = parseInt($("#elven_percentile").val());
	gnome = parseInt($("#gnomish_percentile").val());
	orc = parseInt($("#orcish_percentile").val());
	halfling = parseInt($("#halfling_percentile").val());
	human = parseInt($("#human_percentile").val());
	other = 100 - (dwarf + elf + gnome + orc + halfling + human);
	dwarvenPercentileOutput = Math.floor(villagersAmountCalculation() * (dwarf/100));
	elvenPercentileOutput = Math.floor(villagersAmountCalculation() * (elf/100));
	gnomishPercentileOutput = Math.floor(villagersAmountCalculation() * (gnome/100));
	orcishPercentileOutput = Math.floor(villagersAmountCalculation() * (orc/100));
	halflingPercentileOutput = Math.floor(villagersAmountCalculation() * (halfling/100));
	humanPercentileOutput = Math.floor(villagersAmountCalculation() * (human/100));
	otherPercentileOutput = Math.floor(villagersAmountCalculation() * (other/100));
	
	var races = {"dwarves": dwarf, "elves": elf, "gnomes": gnome, "orcs": orc, "halflings": halfling, "humans": human, "others": other};
	return races;

};

function percentileOutput () {
	$("#dwarven_percentile_output").text(dwarvenPercentileOutput);
	$("#elven_percentile_output").text(elvenPercentileOutput);
	$("#gnomish_percentile_output").text(gnomishPercentileOutput);
	$("#orcish_percentile_output").text(orcishPercentileOutput);
	$("#halfling_percentile_output").text(halflingPercentileOutput);
	$("#human_percentile_output").text(humanPercentileOutput);
	$("#other_percentile_output").text(otherPercentileOutput);

}

//creates array with racial numbers to later create villagers with
function shuffle(o){
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
}
	
function racialArray () {
	var raceList = [dwarf, elf, gnome, orc, halfling, human, other];
	var villageRacialArray = [];
	var races = percentileCalculation();

	for(var i=0; i < 7; i++){
        var currentRace = raceList[i];
    for(var j=0; j<= _.values(races)[j]; j++) {
    	villageRacialArray.push(_.keys(races)[j]);
    }
	}
	var randomRacialArray = shuffle(villageRacialArray);
	return randomRacialArray;
}
