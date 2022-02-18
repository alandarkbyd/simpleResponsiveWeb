
function show(argument) {
	var element = document.getElementById("float");
	element.style.visibility = "visible";
}

function hide(argument) {
	var element = document.getElementById("float");
	element.style.visibility = "hidden";
}

function mac() {
	var element = document.getElementById("float");
	if(element.style.visibility == "hidden"){
		show()
	}
	else{
		hide()
	}
}