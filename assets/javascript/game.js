//wins/losses counter variables
var wins = 0;
var losses = 0;

//this var holds the value for each button
var crystalNum = [];

//displays your number and eggman's number
var eggmanThink = $("#eggNum");
var sonicNum = $("#yourNum");

//this var holds the sum of every number
var totalNum = [];
var compareNum = 0;

//eggman random number
var eggmanNum = Math.floor(Math.random() * 120) + 19;

//creates a new random number
function newNum() {
    eggmanNum = Math.floor(Math.random() * 120) + 19;
    $("#eggNum").html(eggmanNum);
    $("#yourNum").html(compareNum);
}

function resetValues() {
    totalNum = [];
    compareNum = 0;
    crystalNum = [];
}

//generates 4 random numbers for the 4 buttons
function emeraldValue() {
    while (crystalNum.length < 4) {
        var randomNum = Math.floor(Math.random() * 12) + 1;
        if (crystalNum.indexOf(randomNum) === -1) crystalNum.push(randomNum);
    }
}

//functions to reduce and add array
function addTotal(total, num) {
    return total + num;
}
function updateTotal(e) {
    document.getElementById("yourNum").innerHTML = totalNum.reduce(addTotal);
}

$(document).ready(function () {
    emeraldValue();
    $("#yourNum").html(0);
    //decides if the game is won yet
    function gameState() {
        if (compareNum === eggmanNum) {
            wins++;
            $("#wins").html(wins);
            resetValues();
            emeraldValue();
            newNum();
            console.log("win");
            console.log(eggmanNum);
            console.log("emeralds: " + crystalNum);
        }
        else if (compareNum > eggmanNum) {
            losses++;
            $("#losses").html(losses);
            resetValues();
            emeraldValue();
            newNum();
            console.log("lose");
            console.log("emeralds: " + crystalNum);
            console.log(eggmanNum);
        }
    }
    eggmanThink.append(eggmanNum);

    $("#wins").html(wins);
    $("#losses").html(losses);

    console.log("emeralds: " + crystalNum);
    console.log("current array" + totalNum);

    //Emerald 1
    $("#emerald1").on("click", function () {
        totalNum.push(crystalNum[0]);
        compareNum += crystalNum[0];
        updateTotal();
        console.log(compareNum);
        gameState();
    })

    //Emerald 2
    $("#emerald2").on("click", function () {
        totalNum.push(crystalNum[1]);
        compareNum += crystalNum[1];
        updateTotal();
        console.log(compareNum);
        gameState();
    })

    //Emerald 3
    $("#emerald3").on("click", function () {
        totalNum.push(crystalNum[2]);
        compareNum += crystalNum[2];
        updateTotal();
        console.log(compareNum);
        gameState();
    })

    //Emerald 4
    $("#emerald4").on("click", function () {
        totalNum.push(crystalNum[3]);
        compareNum += crystalNum[3];
        updateTotal();
        console.log(compareNum);
        gameState();
    })


})