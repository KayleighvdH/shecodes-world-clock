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
