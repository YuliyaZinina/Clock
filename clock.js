const secondHand = document.querySelector('.second-hand'),
	minuteHand = document.querySelector('.minute-hand'),
	hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds(),
		secondsDegrees = seconds * 6 + 90, // seconds / 60 * 360
		minutes = now.getMinutes(),
		minutesDegrees = minutes * 6 + 90,
		hours = now.getHours(),
		hoursDegrees = hours / 12 * 360 + minutes / 60 * 30 + 90;

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	
}

setInterval(setDate, 1000);