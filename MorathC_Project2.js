window.onload = writeMessage;
//alert("JavaScript works!");
//Cassandra Morath
//SDI 1304
//04/15/2013
//Project 2

//main
function writeMessage() {
var petSitter = "Aaron";
var vacationDays = 0; 
var pets = ["Angel", "Delilah", "Puddy", "Chester", "LaRita", "Einstien"];
var momOnVacation = true;
var poundsPerFeeding = 0;
var petsHappy = "";


console.log( petSitter + " needs to feed the pets." );
for( vacationDays = 1; vacationDays <= 6; vacationDays++ ){
	momOnVacation = isMomOnVacation( vacationDays, 5 );
	feedPets( vacationDays, pets );
	poundsPerFeeding = poundsOfPetFood( pets.length );
	petCleanUp( momOnVacation );
	if( momOnVacation ){
	   petsHappy = happyPet(petSitter, " made the pets fat and happy");
	}
	else{
		petsHappy = happyPet(petSitter, " moved out");
	}
	console.log("momOnVacation = " + momOnVacation);
	console.log("poundsPerFeeding = " + poundsPerFeeding);
	console.log("petsHappy = " + petsHappy);
}
	
};
//Procedure
function petCleanUp(sitterCleansUp){
	if(sitterCleansUp){
		console.log("The pet sitter cleans up after the pets.");
	}
	else{
		console.log("Mom is going to find a better pet sitter!");
	}
}
		

//Boolean Function
function isMomOnVacation(vacationDays, lengthOfVacation){
	if ( vacationDays <= lengthOfVacation ){
		console.log("This is day " + vacationDays + " of mom's vacaction.");
		return true;
	}
	else{
		console.log("Mom is back from vacation...");
		return false;
	}
}
//array function
function feedPets(vacationDays, pets){
	var numberOfPetsFed = 0;
	if( vacationDays >= 1 && vacationDays <= 5 )
	{
		for( var counter =0 ; counter < pets.length; counter++ ){
			numberOfPetsFed++;
			console.log( pets[ counter ] + " is being fed." );
		}
	}
	else{
		console.log("Mom can feed the pets herself!");
	}
	return pets;
}
//number Function
function poundsOfPetFood( numberOfPets ){
	var pounds = 0;
	var poundsPerPet = .25;
	var counter = 0;
	
	while(numberOfPets > counter){
		counter++;
		pounds += poundsPerPet;
	}
	return pounds;	
}
//String function
function happyPet ( petSitter, didWhat ){
	var happyPet = true;
	var fatPet = true;
	
	return petSitter + didWhat;
}



