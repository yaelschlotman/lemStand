"use strict";
//set daily sales adjustmentsfunction setPricePoints{
function getUserData(message){
    var userData;
    userData = window.prompt(message);
    return userData;
}
function randomizeTemperature() {
    var temperature = Math.floor((Math.random() * 50) + 49);
    return temperature;
}
function getWeather() {
    var weather;
    var n;
    var weatherChoice;
    weather = ["Sunny", "Partly Cloudy", "Mostly Cloudy", "Overcast", "Raining"];
    n = Math.floor(Math.random() * 5) + 0;
    weatherChoice = weather[n];
    return weatherChoice;
}

function actualSales() {
    var seedMoney = 98;
    var temperature = randomizeTemperature();
    var weather = getWeather();
    var pricePoints = [];
    var cupBuy = 2;
    var cupSell = parseInt(getUserData("The temperature today is " + temperature + ", and it's " + weather + "." + "\nHow much do you want to charge per cup today in cents?"));
    var potentialCustomers;
    var dailyCustomers;
    //var actual sales;

        if (temperature >=90 && temperature <99) {
            potentialCustomers = 200;
        }else if (temperature >=80 && temperature <89) {
            potentialCustomers = 180;
        }else if (temperature >=70 && temperature <79) {
            potentialCustomers = 160;
        }else if (temperature >=60 && temperature <69) {
            potentialCustomers = 140;
        }else {
            potentialCustomers = 120;
        }

        if (weather === "Raining") {
            dailyCustomers = (potentialCustomers * 0.5);
        }
        else if (weather === "Overcast") {
            dailyCustomers = (potentialCustomers * 0.7);
        }
        else if (weather === "Mostly Cloudy") {
            dailyCustomers = (potentialCustomers * 0.8);
        }
        else if (weather === "Partly Cloudy") {
            dailyCustomers = (potentialCustomers * 0.9);
        }
        else {
            dailyCustomers = (potentialCustomers);
        }
    console.log("It's " + temperature + " and " + weather);
    console.log("Unfortunately, you didn't remember the bully down the block.");
    console.log("When you set up for business, he came around and dumped out your lemonade and stole all your money.");
    console.log("It's the backyard sprinkler for you, my friend.  Have a great summer.  Life is still good.");
    //return actual sales;

}
actualSales();
