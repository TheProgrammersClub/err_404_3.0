function countDownTimer() {

	var event_date = new Date(2020, 01, 29, 15, 00, 00);
	var curr_date = new Date();
	var t1 = event_date.getTime();
	var t2 = curr_date.getTime();

	var day = Math.floor((t1 - t2) / (24 * 60 * 60 * 1000));
	t1 = t1 - day * 24 * 60 * 60 * 1000;
	var hour = Math.floor((t1 - t2) / (60 * 60 * 1000));
	t1 = t1 - hour * 60 * 60 * 1000;
	var min = Math.floor((t1 - t2) / (60 * 1000));
	t1 = t1 - min * 60 * 1000;
	var sec = Math.floor((t1 - t2) / (1000));

	document.getElementById('day').innerHTML = day;
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = min;
	document.getElementById('sec').innerHTML = sec;

	// console.log(event_date + "\n" + curr_date + "\n" + diff);
	// console.log(day + "\n" + hour + "\n" + min + "\n" + sec);
}

setInterval(countDownTimer, 1000);