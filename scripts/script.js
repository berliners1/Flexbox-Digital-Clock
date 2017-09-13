/*-------------------*/
/*Clock Functionality*/

//Selectors
const numSecond_Digit1 = document.querySelectorAll('.num-second .digit1')[0];
const numSecond_Digit2 = document.querySelectorAll('.num-second .digit2')[0];
const numSecondArray = [numSecond_Digit1, numSecond_Digit2];

const numMinute_Digit1 = document.querySelectorAll('.num-minute .digit1')[0];
const numMinute_Digit2 = document.querySelectorAll('.num-minute .digit2')[0];
const numMinuteArray = [numMinute_Digit1, numMinute_Digit2];

const numHour_Digit1 = document.querySelectorAll('.num-hour .digit1')[0];
const numHour_Digit2 = document.querySelectorAll('.num-hour .digit2')[0];
const numHourArray = [numHour_Digit1, numHour_Digit2];

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

	//Seperate the two digits of each into an array
	const secondsOutput = [],
	      stringNumberSeconds = secondsDbl.toString();

	const minutesOutput = [],
	      stringNumberMinutes = minutesDbl.toString();

	const hoursOutput = [],
	      stringNumberHours = hoursDbl.toString();

	for (i = 0; i < 2; i++){
		secondsOutput.push(+stringNumberSeconds.charAt(i));
		minutesOutput.push(+stringNumberMinutes.charAt(i));
		hoursOutput.push(+stringNumberHours.charAt(i));
	}

	for(i = 0; i < 10; i++){

		//I may find a better way to do this later, but this works for now.
		for (j = 0; j < 2; j++){
			if (secondsOutput[j] == i){
				numSecondArray[j].classList.add('num'+i);
			} else {
				numSecondArray[j].classList.remove('num'+i);
			}

			if (minutesOutput[j] == i){
				numMinuteArray[j].classList.add('num'+i);
			} else {
				numMinuteArray[j].classList.remove('num'+i);
			}

			if (hoursOutput[j] == i){
				numHourArray[j].classList.add('num'+i);
			} else {
				numHourArray[j].classList.remove('num'+i);
			}
		}

	}
	
}










