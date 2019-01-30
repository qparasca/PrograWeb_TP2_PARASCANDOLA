intervalID = window.setInterval(affiche,1000);

function affiche() { 
	var timer = document.getElementById("timer");
    time = timer.innerText;
    if (time > 0) {
    	timer.innerText = time - 1;
    }
    else {
    	clearInterval(intervalID);
    }
}