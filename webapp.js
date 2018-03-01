// JavaScript Document

// global variables
var score= 0;
var grill = 0;
var chef = 0;
var trap = 0;
var cat = 0;
var poison= 0;
var catcher = 0;
var factory = 0;
var planet = 0;
var jesus = 0;

window.onload = function() {
	loadCookies();
	update_values();
	// add event listeners
	document.getElementById("grillButton").addEventListener("click", function() {
		shop("grill");
	});
	document.getElementById("chefButton").addEventListener("click", function() {
		shop("chef");
	});
		document.getElementById("trapButton").addEventListener("click", function() {
		shop("trap");
	});
		document.getElementById("catsButton").addEventListener("click", function() {
		shop("cat");
	});
		document.getElementById("poisonButton").addEventListener("click", function() {
		shop("poison");
	});
	document.getElementById("catcherButton").addEventListener("click", function() {
		shop("catcher");
	});
	document.getElementById("factoryButton").addEventListener("click", function() {
		shop("factory");
	});
	document.getElementById("planetButton").addEventListener("click", function() {
		shop("planet");
	});
	document.getElementById("jesusButton").addEventListener("click", function() {
		shop("jesus");
	});
	document.getElementById("reset").addEventListener("click", function() {
		clear_score();
	});

};

function update_values() {
	document.getElementById("score").value=score;        
	document.getElementById("grill").value=grill;   
	document.getElementById("chef").value=chef;  
	document.getElementById("trap").value=trap;     
	document.getElementById("cat").value=cat;    
	document.getElementById("poison").value=poison;
	document.getElementById("catcher").value=catcher;
	document.getElementById("factory").value=factory;   
	document.getElementById("planet").value=planet;
	document.getElementById("jesus").value=jesus;
}

function cookie_clicker() {
	if( grill >= 0 ) {
		score+= 1+grill;
	} else {
		score++;
	}
	update_values();                           
}

// for buying items
function shop(sel) {
	switch(sel) {
		case "grill":
			if( score >= 100 ) {
				score-=100;
				grill++;
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "chef":
			if(score >= 150) {
				score-=150;
				chef++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "trap":
			if(score >= 250) {
				score-=250;
				trap++;
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "cat":
			if(score >= 1000) {
				score-=1000;
				cat++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "poison":
			if(score >= 1500) {
				score-=1500;
				poison++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "catcher":
			if(score >= 5000) {
				score -= 5000;
				catcher++;
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "factory":
			if(score >= 10000) {
				score -= 10000;
				factory++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "planet":
			if(score >= 50000) {
				score -= 50000;
				planet++;	
				update_values(); 
				
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "jesus":
			if(score >= 25000000) {
			score -= 25000000;
			jesus++;	
			update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
	}
	update_values(); 
}

/*function saveCookies() {
	var exdays = 100000;
	var date = new Date();
	date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = "score=" + score + ";" + expires;
	document.cookie = "grills=" + grill + ";" + expires;
	document.cookie = "chefs=" + chef + ";" + expires;
	document.cookie = "trap=" + trap + ";" + expires;
	document.cookie = "cats=" + cat + ";" + expires;
	document.cookie = "poison=" + poison + ";" + expires;
	document.cookie = "catchers=" + catcher + ";" + expires;
	document.cookie = "factories=" + factory + ";" + expires;
	document.cookie = "planets=" + planet + ";" + expires;
	document.cookie = "jesus=" + jesus + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadCookies() {
	if( getCookie("score") !== "" ) {
		score = Number(getCookie("score"));
	}
	if( getCookie("grill") !== "" ) {
		grill = Number(getCookie("grill"));
	}
	if( getCookie("chef") !== "" ) {
		chef = Number(getCookie("chef"));
	}
	if( getCookie("trap") !== "" ) {
		trap = Number(getCookie("trap"));
	}
	if( getCookie("cat") !== "" ) {
		cat = Number(getCookie("cat"));
	}
	if( getCookie("poison") !== "" ) {
		poison = Number(getCookie("poison"));
	}
	if( getCookie("catcher") !== "" ) {
		catcher = Number(getCookie("catcher"));
	}
	if( getCookie("factory") !== "" ) {
		factory = Number(getCookie("factory"));
	}
	if( getCookie("planet") !== "" ) {
		planet = Number(getCookie("planet"));
	}
	if( getCookie("jesus") !== "" ) {
		jesus = Number(getCookie("jesus"));
	}
}
*/

// dispense bonuses every second
setInterval(bonus, 1000);
function bonus() {
	score+=chef*1;
	score+=trap*2.5;
	score+=cat*10;
	score+=poison*20;
	score+=catcher*50;
	score+=factory*125;
	score+=planet*750;
	score+=jesus*380000;
	update_values(); 
	saveCookies();
}

function clear_score() {
	score = 0;
	grill = 0;
	chef = 0;
	trap = 0;
	cat = 0;
	poison = 0;
	catcher = 0;
	factory = 0;
	planet = 0;
	jesus = 0;
}



