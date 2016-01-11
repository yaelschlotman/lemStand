"use strict";
//criteria for game:
//wholesale w/variable prices
//weather system
//way to predict weather
//weather affects sales
//player decides price/how many to make each day
//price affects sales 
//______________________________________________
//Create potential customers number baseline:

function getRandomTemp(number) {
	var temperature = Math.floor((Math.random() * 50) + 49);
	console.log("The temperature today is:  " + temperature);
	return temperature;
}

getRandomTemp();

function setDailyCustomerMax(argument) {
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
    temperature = getRandomTemp();

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

//setDailyCustomerMax();

//______________________________________________
//1) Randomize Daily Weather 
//2) Set Daily Customer number

function randomizeWeather(something) {
	var weather;
	var n;
	var weatherChoice;
	weather = ["Sunny", "Partly Cloudy", "Mostly Cloudy", "Overcast", "Rainy"];
	n = Math.floor(Math.random() * 5) + 0;
	weatherChoice = weather[n];
	console.log("The weather today is:  " + weatherChoice);
	return weatherChoice;
}

randomizeWeather();











