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

//generates 4 random numbers for the 4 buttons
while (crystalNum.length < 4) {
    var randomNum = Math.floor(Math.random() * 12) + 1;
    if (crystalNum.indexOf(randomNum) === -1) crystalNum.push(randomNum);
}

//functions to reduce and add array
function addTotal(total, num) {
    return total + num;
}
function updateTotal(e) {
    document.getElementById("yourNum").innerHTML = totalNum.reduce(addTotal);
}

//decides if the game is won yet
function gameState() {
    if (compareNum === eggmanNum) {
        console.log("win");
    }
    else if (compareNum > eggmanNum) {
        console.log("lose");
    }
    else {
        console.log("not yet");
    }
}

var lockGame = false;

$(document).ready(function () {

    eggmanThink.append(eggmanNum);

    $("#wins").append(wins);
    $("#losses").append(losses);

    // console.log("eggman num: " + eggmanNum);
    console.log("emeralds: " + crystalNum);
    console.log("current array" + totalNum);

    $(".emerald1").on("click", function () {
        totalNum.push(crystalNum[0]);
        compareNum += crystalNum[0];
        updateTotal();
        console.log(compareNum);
        gameState();
    })

    $(".emerald2").on("click", function () {
        totalNum.push(crystalNum[1]);
        compareNum += crystalNum[1];
        updateTotal();
        console.log(compareNum);
        gameState();
    })

    $(".emerald3").on("click", function () {
        totalNum.push(crystalNum[2]);
        compareNum += crystalNum[2];
        updateTotal();
        console.log(compareNum);
        gameState();
    })

    $(".emerald4").on("click", function () {
        totalNum.push(crystalNum[3]);
        compareNum += crystalNum[3];
        updateTotal();
        console.log(compareNum);
        gameState();
    })


})