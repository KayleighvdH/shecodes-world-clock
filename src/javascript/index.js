function updateTime() {
	// Amsterdam
	let amsterdamElement = document.querySelector("#amsterdam");
	if (amsterdamElement) {
		let amsterdamDateElement = amsterdamElement.querySelector(".date");
		let amsterdamTimeElement = amsterdamElement.querySelector(".time");

		amsterdamDateElement.innerHTML = moment().format("dddd, DD MMMM YYYY");
		amsterdamTimeElement.innerHTML = moment()
			.tz("Europe/Amsterdam")
			.format("HH:mm:ss");
	}

	// London
	let londonElement = document.querySelector("#london");
	if (londonElement) {
		let londonDateElement = londonElement.querySelector(".date");
		let londonTimeElement = londonElement.querySelector(".time");

		londonDateElement.innerHTML = moment().format("dddd, DD MMMM YYYY");
		londonTimeElement.innerHTML = moment()
			.tz("Europe/London")
			.format("HH:mm:ss");
	}

	// Tokyo
	let tokyoElement = document.querySelector("#tokyo");
	if (tokyoElement) {
		let tokyoDateElement = tokyoElement.querySelector(".date");
		let tokyoTimeElement = tokyoElement.querySelector(".time");

		tokyoDateElement.innerHTML = moment().format("dddd, DD MMMM YYYY");
		tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
	}

	// New York
	let newYorkElement = document.querySelector("#new-york");
	if (newYorkElement) {
		let newYorkDateElement = newYorkElement.querySelector(".date");
		let newYorkTimeElement = newYorkElement.querySelector(".time");

		newYorkDateElement.innerHTML = moment().format("dddd, DD MMMM YYYY");
		newYorkTimeElement.innerHTML = moment()
			.tz("America/New_York")
			.format("HH:mm:ss");
	}
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
	<div class="city">
		<div>
			<h2>${cityName}</h2>
				<p class="date">${cityTime.format("dddd, DD MMMM YYYY")}</p>
		</div>
		<div class="current-time">
			<p class="time">${cityTime.format("HH:mm:ss")}</p>
		</div>
	</div>
	`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
