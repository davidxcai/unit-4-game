//wins/losses counter variables
var wins = 0;
var losses = 0;

//this var holds the value for each button
var crystalNum = [];
var eggmanThink = $("#eggNum");
var sonicNum = $("#yourNum");
// var totalNum = +totalNum + +pastNum;

//this var holds the sum of every number
var totalNum = [];

//generates 4 random numbers for the 4 buttons
while (crystalNum.length < 4) {
    var randomNum = Math.floor(Math.random() * 12) + 1;
    if (crystalNum.indexOf(randomNum) === -1) crystalNum.push(randomNum);
}

function addTotal(total, num) {
    return total + num;
}

function updateTotal(e) {
    document.getElementById("yourNum").innerHTML = totalNum.reduce(addTotal);
}

var eggmanNum = Math.floor(Math.random() * 120) + 19;

var lockGame = false;

$(document).ready(function () {
    eggmanThink.append(eggmanNum);
    console.log(eggmanNum);
    console.log(crystalNum);
    console.log(totalNum);
    if (parseInt(totalNum) === parseInt(eggmanNum)) {
        console.log("win");
    }
    $(".emerald1").on("click", function () {
        totalNum.push(crystalNum[0]);
        updateTotal();
    })
    $(".emerald2").on("click", function () {
        totalNum.push(crystalNum[1]);
        updateTotal();
    })
    $(".emerald3").on("click", function () {
        totalNum.push(crystalNum[2]);
        updateTotal();
    })
    $(".emerald4").on("click", function () {
        totalNum.push(crystalNum[3]);
        updateTotal();
    })
       
})