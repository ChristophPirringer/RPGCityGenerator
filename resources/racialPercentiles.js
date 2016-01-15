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

	var dwarvenPercentile = parseInt($("#dwarven_percentile").val());
	var elvenPercentile = parseInt($("#elven_percentile").val());
	var gnomishPercentile = parseInt($("#gnomish_percentile").val());
	var orcishPercentile = parseInt($("#orcish_percentile").val());
	var halflingPercentile = parseInt($("#halfling_percentile").val());
	var humanPercentile = parseInt($("#human_percentile").val());
	var otherPercentile = parseInt($("#other_percentile").val());
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
function racialArray () {
	var racialArray = [dwarves, elves, gnomes, orcs, halflings, humans, others];
	var randomRacialArray = shuffle(racialArray);
};
