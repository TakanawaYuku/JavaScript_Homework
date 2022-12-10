let clickNumber = 0;
let clickPerSec = 0;

const objCookie = document.getElementById("cookie");
const objCounter = document.getElementById("clicker__counter");
const objCSC = document.getElementById("clicker_sec__counter");

objCookie.onclick = () => {
	clickNumber += 1;
	objCounter.textContent = clickNumber;
	if (clickNumber %2 == 0)
		objCookie.width += 20;
	else
		objCookie.width -= 20;

	if (clickNumber % 5 == 0)
		objCookie.height += 4;
	else
		objCookie -= 1;

}

setInterval (()=>{
	clickPerSec += 1;
	objCSC.textContent = clickNumber/clickPerSec;
	},1000);
