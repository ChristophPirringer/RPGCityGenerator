// Declare the Object of Race with input of percentile and designation from form 
var dwarvenPercentile = 0, elvenPercentile = 0, orcishPercentile = 0, gnomishPercentile = 0, halflingPercentile = 0, humanPercentile = 0, otherPercentile = 0;

function Race(percentile, number) {
  this.percentile = percentile;
};
Race.prototype.percentile = function() {
  return this.percentile;
};
Race.prototype.number = function() {
  return this.number;
};

Race.prototype.percentileCalculation = function() {

	var dwarf = parseInt($("#dwarven_percentile").val());
	var elf = parseInt($("#elven_percentile").val());
	var gnome = parseInt($("#gnomish_percentile").val());
	var orc = parseInt($("#orcish_percentile").val());
	var halfling = parseInt($("#halfling_percentile").val());
	var human = parseInt($("#human_percentile").val());
	var other = parseInt($("#other_percentile").val());
	var dwarvenPercentileOutput = Math.floor(villagersAmount * (dwarvenPercentile/100));
	var elvenPercentileOutput = Math.floor(villagersAmount * (elvenPercentile/100));
	var gnomishPercentileOutput = Math.floor(villagersAmount * (gnomishPercentile/100));
	var orcishPercentileOutput = Math.floor(villagersAmount * (orcishPercentile/100));
	var halflingPercentileOutput = Math.floor(villagersAmount * (halflingPercentile/100));
	var humanPercentileOutput = Math.floor(villagersAmount * (humanPercentile/100));
	var otherPercentileOutput = Math.floor(villagersAmount * (otherPercentile/100));
	
	//return var races = {"dwarves": dwarvenPercentileOutput, "elves": elvenPercentileOutput, "gnomes": gnomishPercentileOutput, "orcs": orcishPercentileOutput, "halflings": halflingPercentileOutput, "humans": humanPercentileOutput, "others": otherPercentileOutput}
	var races = {"dwarves": dwarvenPercentile, "elves": elvenPercentile, "gnomes": gnomishPercentile, "orcs": orcishPercentile, "halflings": halflingPercentile, "humans": humanPercentile, "others": otherPercentile}
	return races;

};

Race.prototype.percentileOutput = function() {
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
	var raceList = ["dwarf", "elf", "gnome", "orc", "halfling", "human", "other"];
	var villageRacialArray = [];

	for(var i=0; i < 7; i++){
        var currentRace = raceList[i];
    for(var j=0; j<= eval(raceList[i]); j++) {
    	villageRacialArray.push(raceList[i]);
    }
	}
	var randomRacialArray = shuffle(villageRacialArray);
	return randomRacialArray;
}
