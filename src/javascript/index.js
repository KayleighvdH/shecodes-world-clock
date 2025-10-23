// Amsterdam
setInterval(function () {
	let amsterdamElement = document.querySelector("#amsterdam");
	let amsterdamDateElement = amsterdamElement.querySelector(".date");
	let amsterdamTimeElement = amsterdamElement.querySelector(".time");

	amsterdamDateElement.innerHTML = moment().format("dddd, DD MMMM YYYY");
	amsterdamTimeElement.innerHTML = moment()
		.tz("Europe/Amsterdam")
		.format("HH:mm:ss");
}, 1000);

function updateCity(event) {
	let cityTimeZone = event.target.value;
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
	<div class="city" id="amsterdam">
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

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
