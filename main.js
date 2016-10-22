var clock = $('#clock');
var container = $('.container');

// function setTime () {
// 	var today = new Date();
// 	var hours = today.getHours();
// 	var minutes = today.getMinutes();
// 	var seconds = today.getSeconds();
// 	hours = (hours < 10 ? '0' : '') + hours
// 	minutes = (minutes < 10 ? '0' : '') + minutes;
// 	seconds = (seconds < 10 ? '0' : '') + seconds;
// 	var time = (hours + ':' + minutes + ':' + seconds);
// 	clock.html(time);
// };

// setInterval(setTime, 1000);

// ----------------------------------------------

// function setValue () {
// 	var today = new Date();
// 	var hours = today.getHours();
// 	var minutes = today.getMinutes();
// 	var seconds = today.getSeconds();
// 	hours = (hours < 10 ? '0' : '') + hours
// 	minutes = (minutes < 10 ? '0' : '') + minutes;
// 	seconds = (seconds < 10 ? '0' : '') + seconds;
// 	var hexCode = ('#' + hours + minutes + seconds);
// 	clock.html(hexCode);
// 	container.css('background-color', hexCode);
// };

// setInterval(setValue, 1000);

// ------------------------------------------------

function setValue () {
	var today = new Date();
	var hours = today.getHours().toString(16);
	var minutes = today.getMinutes().toString(16);
	var seconds = today.getSeconds().toString(16);
	hours = hours.length === 1 ? '0' + hours : hours;
	minutes = minutes.length === 1 ? '0' + minutes : minutes;
	seconds = seconds.length === 1 ? '0' + seconds : seconds;
	var hexCode = ('#' + hours + minutes + seconds);
	clock.html(hexCode);
	container.css('background-color', hexCode);
};

setInterval(setValue, 1000);












