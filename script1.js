window.addEventListener("load", onWindowLoad);

	function onWindowLoad(event) {
		var computerBtn = document.getElementById("computerBtn");
		computerBtn.addEventListener("click", onComputerBtnClick);
	
		var waterBtn = document.getElementById("waterBtn");
		waterBtn.addEventListener("click", onWaterBtnClick);
	
		var bedBtn = document.getElementById("bedBtn");
		bedBtn.addEventListener("click", onBedBtnClick);
		}


function onComputerBtnClick(event) {
	var textOne = document.createElement("h1");
	document.body.classList.add("textOne");
	
	var line = document.createTextNode(
	"While reaching for the computer,you tip over the water bottle and it spills on the power strip on the floor and you die.");
	
	textOne.appendChild(line);
	document.body.appendChild(textOne);
	}

function onWaterBtnClick(event) {
	var textTwo = document.createElement("h1");
	document.body.classList.add("textTwo");
	
	var line2 = document.createTextNode(
	"Good Job,Stay Hydrated!Unfortunatly the bottle contains poision and you die");
	
	textTwo.appendChild(line2);
	document.body.appendChild(textTwo);
	}

function onBedBtnClick(event) {
	var textThree = document.createElement("h1");
	document.body.classList.add("textThree");
	
	var line3 = document.createTextNode(
	"The bed in the While you are on theroom is one of bed, it sprang back upthose that ismagainst the wall and attached to the you die. wall, that you gotta pull down");
	
	textThree.appendChild(line3);
	document.body.appendChild(textThree);
	}