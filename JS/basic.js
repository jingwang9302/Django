var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var age = prompt("How old are you?");
var height = prompt("Enter your height in cm:");
var petName = prompt("Enter your pet name:");

var nameCondition = false;
var ageCond = false;
var heightCond = false;
var petCond = false;

if (firstName[0] === lastName[0]){
    nameCondition = true;
}

if(age>20 && age<30){
    ageCond = true;
}

if (height >= 170){
    heightCond = true;
}

if (petName[petName.length-1] === 'y'){
    petCond = true;
}

if (nameCondition && ageCond && heightCond && petCond) {
    console.log("spy")
} else {
    console.log("Sorry, nothing to see here.")
}