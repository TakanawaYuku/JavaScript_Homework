let timer = 59;

let myTimer = setInterval(() => {

	if(timer > 0) {
		timer = timer - 1;
		document.getElementById("timer").innerHTML = timer
	}

	if (timer == 0) {
		clearInterval(myTimer);
		document.getElementById("timer").innerHTML = alert("Вы победили в конкурсе");
        // document.getElementById("timer").innerHTML = "Вы победили в конкурсе";
	}

}, 1000);
