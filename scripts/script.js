/*-------------------*/
/*Clock Functionality*/

//Selectors
let numSecond_DigitOne = document.querySelectorAll('.num-second .digit1 .line');
let numSecond_DigitTwo = document.querySelectorAll('.num-second .digit2 .line');

let numMinute_DigitOne = document.querySelectorAll('.num-minute .digit1 .line');
let numMinute_DigitTwo = document.querySelectorAll('.num-minute .digit2 .line');

let numHour_DigitOne = document.querySelectorAll('.num-hour .digit1 .line');
let numHour_DigitTwo = document.querySelectorAll('.num-hour .digit2 .line');

timer();
setInterval(timer, 1000);

function timer(){

	const now = new Date();

	//Get seconds, minute, an hours from Date.
	const seconds = now.getSeconds(),
	      minutes = now.getMinutes(),
	      hours = now.getHours();

	//Make the values always double-digit
	const secondsDbl = ("0" + seconds).slice(-2),
	      minutesDbl = ("0" + minutes).slice(-2),
	      hoursDbl   = ("0" + hours).slice(-2);

	//Seperate the two seconds digits into an array
	const secondsOutput = [],
	      stringNumber = secondsDbl.toString();

	for (let i = 0, len = stringNumber.length; i < len; i += 1){
		secondsOutput.push(+stringNumber.charAt(i));
	}

	console.log(secondsOutput);
	
}


