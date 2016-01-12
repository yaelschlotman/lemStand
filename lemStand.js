"use strict";
//criteria for game:
//wholesale w/variable prices
//weather system
//way to predict weather
//weather affects sales
//player decides price/how many to make each day
//price affects sales 
//______________________________________________

//Everything from here...
function randomizeTemperature() {
	var temperature = Math.floor((Math.random() * 50) + 49);
	return temperature;
}

function getDailyCustomerMax() {
	var ninetiesMax;
	var eightiesMax;
	var seventiesMax;
	var sixtiesMax;
	var fiftiesMax;
    var dailyCustomerMax;  
    var temperature;
    ninetiesMax = 200;
    eightiesMax = 175;
    seventiesMax = 150;
    sixtiesMax = 125;
    fiftiesMax = 100;
    temperature = randomizeTemperature(); 

	if (temperature >=90 && temperature <99) {
		dailyCustomerMax = ninetiesMax;
	}else if (temperature >=80 && temperature <89) {
        dailyCustomerMax = eightiesMax;
	}else if (temperature >=70 && temperature <79) {
        dailyCustomerMax = seventiesMax;
	}else if (temperature >=60 && temperature <69) { 
        dailyCustomerMax = sixtiesMax;
	}else {
        dailyCustomerMax = fiftiesMax;
	}
	console.log("The temperature today is:  " + temperature);
	return dailyCustomerMax;
} 

function randomizeWeather() {
	var weather;
	var n;
	var weatherChoice;
	weather = ["Sunny", "Partly Cloudy", "Mostly Cloudy", "Overcast", "Rainy"];
	n = Math.floor(Math.random() * 5) + 0;
	weatherChoice = weather[n];
	console.log(weatherChoice);
	return weatherChoice; 
}

function setDailyCustomerNumber() {
	var potentialCustomers;
	var dailyCustomerMax;
	var weatherChoice;
    dailyCustomerMax = getDailyCustomerMax();
	weatherChoice = randomizeWeather();
	if (weatherChoice === "Rainy") {
		potentialCustomers = dailyCustomerMax * 0.5;  
	}  
	else if (weatherChoice === "Overcast") {
		potentialCustomers = (dailyCustomerMax * 0.7);
	}
	else if (weatherChoice === "Mostly Cloudy") {
		potentialCustomers = (dailyCustomerMax * 0.8);
	}
	else if (weatherChoice === "Partly Cloudy") {
		potentialCustomers = (dailyCustomerMax * 0.9);
	}
	else {
		potentialCustomers = dailyCustomerMax;
	}
	console.log("Daily Customer Max is " + dailyCustomerMax + "\nAdjusted for weather, today's potential customer total will be. " + potentialCustomers + ". " );
	return potentialCustomers;

}
//setDailyCustomerNumber();

//...to here, works.
//-------------------------------------
//figure out inventory system:
function getCups() {
    var cups;
    cups = {onHand:0, packCost:2.42, packQuant:100, pitchQuant:10, cupQuant:1};
    console.log(cups.onHand,  cups.packCost,  cups.packQuant,  cups.pitchQuant, cups.cupQuant);
    return cups;
}
function getLemons() {
	var lemons;
	lemons = {onHand:0, packCost:2.21, packQuant:15, pitchQuant:5, cupQuant:0.5};
	console.log(lemons.onHand, lemons.packCost, lemons.packQuant, lemons.pitchQuant, lemons.cupQuant);
	return  lemons;
}
function getSugar() {
	var sugar;
	sugar = {onHand:0, packCost:2.04, packQuant:15, pitchQuant:5, cupQuant:0.5};
	console.log(sugar.onHand, sugar.packCost, sugar.packQuant, sugar.cupQuant);
	return sugar;
}
function getIce(){
	var ice;
	ice = {onHand:0, packCost:1.36, packQuant:15, pitchQuant:5, cupQuant:0.5};
	console.log(ice.onHand, ice.packCost, ice.packQuant, ice.pitchQuant, ice.cupQuant);
	return ice;
}
getCups();
getLemons();
getSugar();
getIce();












