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

function dwarvenCalculation () {
	dwarvenPercentile = parseInt($("#dwarven_percentile").val());
	var dwarvenPercentileOutput = Math.floor(villagersAmount * (dwarvenPercentile/100));
	dwarves = new Race(dwarvenPercentile, dwarvenPercentileOutput);
	$("#dwarven_percentile_output").text(dwarvenPercentileOutput);
};
function elvenCalculation () {
	elvenPercentile = parseInt($("#elven_percentile").val());
	var elvenPercentileOutput = Math.floor(villagersAmount * (elvenPercentile/100));
	elves = new Race(elvenPercentile, elvenPercentileOutput);
	$("#elven_percentile_output").text(elvenPercentileOutput);
};
function gnomishCalculation () {
	gnomishPercentile = parseInt($("#gnomish_percentile").val());
	var gnomishPercentileOutput = Math.floor(villagersAmount * (gnomishPercentile/100));
	gnomes = new Race(gnomishPercentile, gnomishPercentileOutput);
	$("#gnomish_percentile_output").text(gnomishPercentileOutput);
};
function orcishCalculation () {
	orcishPercentile = parseInt($("#orcish_percentile").val());
	var orcishPercentileOutput = Math.floor(villagersAmount * (orcishPercentile/100));
	orcs = new Race(orcishPercentile, orcishPercentileOutput);
	$("#orcish_percentile_output").text(orcishPercentileOutput);
};
function halflingCalculation () {
	halflingPercentile = parseInt($("#halfling_percentile").val());
	var halflingPercentileOutput = Math.floor(villagersAmount * (halflingPercentile/100));
	halflings = new Race(halflingPercentile, halflingPercentileOutput);
	$("#halfling_percentile_output").text(halflingPercentileOutput);
};
function humanCalculation () {
	humanPercentile = parseInt($("#human_percentile").val());
	var humanPercentileOutput = Math.floor(villagersAmount * (humanPercentile/100));
	humans = new Race(humanPercentile, humanPercentileOutput);
	$("#human_percentile_output").text(humanPercentileOutput);
};
function otherCalculation () {
	otherPercentile = 100 -(dwarvenPercentile + elvenPercentile + gnomishPercentile + orcishPercentile + halflingPercentile + humanPercentile + otherPercentile);
	var otherPercentileOutput = Math.floor(villagersAmount * (otherPercentile/100));
	others = new Race(otherPercentile, otherPercentileOutput);
	$("#other_percentile_output").text(otherPercentileOutput);
};



//creates array with racial numbers to later create villagers with
function racialArray () {
	var racialArray = [dwarves, elves, gnomes, orcs, halflings, humans, others];
	var randomRacialArray = shuffle(racialArray);
};
