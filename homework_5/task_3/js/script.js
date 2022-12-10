let victoryCount = 0;
let loseCount = 0;
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index){
	let id = "hole"+index;
	return document.getElementById(id);
};

function zeroCounts(isVictory=true){
	victoryCount = 0;
	loseCount = 0;
	if (isVictory == true)
	{
		alert("Вы выиграли");
	}
	else
	{
		alert("Вы проиграли");
	}
};

for (let i = 1; i <10; i++){
	let h = getHole(i);
	if (h != null)
		h.onclick = () =>{
			if (h.className=='hole')
			{
				loseCount += 1;
				if (loseCount >=5)
				{
					zeroCounts(false);
				}
			}
			else{
				victoryCount += 1;
				if (victoryCount >= 10)
				{
					zeroCounts(true);
				}
			}
			dead.textContent = victoryCount;
			lost.textContent = loseCount;
		};
};
