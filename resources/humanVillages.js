var humanSyllables = ["human", "human", "human", "human", "human", "human", "human", "human"];

function CreateNewHumanCityName()
{
    //Creates a first name with 1-3 syllables
    var firstName = "";
    var numberOfSyllablesInFirstName = Math.floor(getRandom(2, 5));
    for (var i = 0; i < numberOfSyllablesInFirstName; i++)
    {
        firstName += humanSyllables[Math.floor(getRandom(0, (humanSyllables.length + 1)))]; 
    }
 
    var firstNameLetter = firstName[0];
    firstName = firstName.slice(1);
    firstNameLetter = firstNameLetter.toUpperCase();
    firstName = firstNameLetter + firstName;

    //Creates a second name with 2-4 syllables
    var secondName = "";
    var numberOfSyllablesInSecondName = Math.floor(getRandom(4, 6));
    for (var i = 0; i < numberOfSyllablesInSecondName; i++)
    {
        secondName += humanSyllables[Math.floor(getRandom(0, (humanSyllables.length + 1)))];
    }

    var secondNameLetter = secondName[0];
    secondName = secondName.slice(1);
    secondNameLetter = secondNameLetter.toUpperCase();
    secondName = secondNameLetter + secondName;

    var completeName = firstName + " " + secondName;
    return completeName;
}