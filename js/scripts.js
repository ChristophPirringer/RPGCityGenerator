// Declare the Object of Village, with name, 
// number of villagers and array of villager objects 
function Village(villageName, villagersAmount, villagersList, villageSizeDescriptor) {
  this.villageName = villageName;
  this.villagersAmount = villagersAmount;
  this.villagersList = villagersList;
  this.villageSizeDescriptor = villageSizeDescriptor;
};

Village.prototype.villageName = function() {
  return this.villageName;
};
Village.prototype.villagersAmount = function() {
  return this.villagersAmount;
};
Village.prototype.villagersList = function() {
  return this.villagersList;
};
Village.prototype.villageSize = function() {
  return this.villageSize;
};
console.log("Village created correctly");


// Declare the Object of Villager, with preset first_name, 
function Villager(firstName) {
  this.firstName = firstName;
};
Villager.prototype.firstName = function() {
  return this.firstName;
};
console.log("Villager created correctly");

// Random Number Generator for incremental village size choices
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
};


$(document).ready(function() {
  $("form#create_village").submit(function(event) {
    event.preventDefault();
// Gather input for Village Creation
    var villageSizeInput = parseInt($("#size").val());
    var villagersAmount = 0;
    var villageSizeDescriptor = "";
// Use manual input for amount of villagers if selected and input is given
// Otherwise take villageSizeInput to switch to right random number range
    if (villageSizeInput == 0 && $("input#amount").val() == "") {
      alert("Please enter a value if you choose manual input!")
    } else if (villageSizeInput == 0 ) {
      villagersAmount = parseInt($("input#amount").val());
    } else if (villageSizeInput == 1){
      villagersAmount = Math.floor(getRandom(0, 50000));
    } else {
      switch (villageSizeInput) {
        case 2:
          villagersAmount = Math.floor(getRandom(0, 100));          
          break;
        case 3:
          villagersAmount = Math.floor(getRandom(100, 500));         
          break;
        case 4:
          villagersAmount = Math.floor(getRandom(500, 1000));          
          break;
        case 5:
          villagersAmount = Math.floor(getRandom(1000, 2000));
          break;
        case 6:
          villagersAmount = Math.floor(getRandom(1000, 5000));
          break;
        case 7:
          villagersAmount = Math.floor(getRandom(5000, 10000));
          break;
        case 8:
          villagersAmount = Math.floor(getRandom(10000, 25000));
          break;
        case 9:
          villagersAmount = Math.floor(getRandom(25000, 50000));          
          break;
      }
    }
// Take villagersAmount to set corresponding verbal size descriptor
    if (villagersAmount < 100)  {
      villageSizeDescriptor = "Thorp";
    } else if (villagersAmount < 500) {
      villageSizeDescriptor = "Hamlet";
    }else if (villagersAmount < 1000) {
      villageSizeDescriptor = "Village";
    }else if (villagersAmount < 2000) {
      villageSizeDescriptor = "Small Town";
    }else if (villagersAmount < 5000) {
      villageSizeDescriptor = "Large Town";
    }else if (villagersAmount < 10000) {
      villageSizeDescriptor = "Small City";
    }else if (villagersAmount < 25000) {
      villageSizeDescriptor = "Large City";
    }else {
      villageSizeDescriptor = "Metropolis";
    }
//create instance of Village and Villager
    //call on function in humanVillages.js to randomly create a villageName
    var villageName = CreateNewHumanName();
    var newVillage = new Village(villageName, villagersAmount, [], villageSizeDescriptor)
    var newVillager = new Villager("Bob");
// Create output of Village
    $("#villageType").text(newVillage.villageSizeDescriptor);
    $("#villagersAmount").text(newVillage.villagersAmount);
    $("#villageName").text(newVillage.villageName);
// Random creation of Villagers
    for (var index = 0; index < villagersAmount; index += 1) {
      newVillage.villagersList.push(newVillager.firstName);
      $("ul#villagers_names").append("<li><span class='villager'>" + newVillager.firstName + "</span></li>");
    }
// Reset manual Input Value
    $("input#amount").val("");
  });
});
