var userNumber = prompt("I am thinking of a number from 1 to 100. Make a guess.")
var computerNumber = Math.floor((Math.random() *50) +1);

if (userNumber < computerNumber);
{
	alert("Your guess was too low");
}
if (userNumber > computerNumber);
{
	alert("Your guess was too high");
}