// Variables
var cash = 200;
var oneDollarChip = 1;
var tenDollarChip = 10;
var hundredDollarChip = 100;
var thousandDollarChip = 1000;
var betAmount = 0;

//	//Setting bet amount - start
//Bet one dollar chip
function bet_oneDollarChip() {
	if (cash == 0 || betAmount >= cash) {
		alert("You do not have enough cash to place this bet.");
} else {
	betAmount++;
	document.getElementById("bet").innerHTML = "$" + betAmount;    
}
}
//Bet ten dollar chip
function bet_tenDollarChip() {
	if (cash <= 9 || betAmount >= cash) {
		alert("You do not have enough cash to place this bet.");
} else {
	document.getElementById("bet").innerHTML = "$" + (betAmount = betAmount + 10);    
}
}
//Bet hundred dollar chip
function bet_hundredDollarChip() {
	if (cash <= 99 || betAmount >= cash) {
		alert("You do not have enough cash to place this bet.");
} else {
	document.getElementById("bet").innerHTML = "$" + (betAmount = betAmount + 100);    
}
}
//Bet thousand dollar chip
function bet_thousandDollarChip() {
	if (cash <= 999 || betAmount >= cash) {
		alert("You do not have enough cash to place this bet.");
} else {
	document.getElementById("bet").innerHTML = "$" + (betAmount = betAmount + 1000);    
}
}
//Clear the bet amount
function clearBet() {
	betAmount = 0;
	document.getElementById("bet").innerHTML = "$" + betAmount;
}
//	//Setting bet amount - end
