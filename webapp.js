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
	document.getElementById("grillbuyButton").addEventListener("click", function() {
		shop("grillbuy");
	});
	document.getElementById("chefbuyButton").addEventListener("click", function() {
		shop("chefbuy");
	});
		document.getElementById("trapbuyButton").addEventListener("click", function() {
		shop("trapbuy");
	});
		document.getElementById("catsbuyButton").addEventListener("click", function() {
		shop("catbuy");
	});
		document.getElementById("poisonbuyButton").addEventListener("click", function() {
		shop("poisonbuy");
	});
	document.getElementById("catcherbuyButton").addEventListener("click", function() {
		shop("catcherbuy");
	});
	document.getElementById("factorybuyButton").addEventListener("click", function() {
		shop("factorybuy");
	});
	document.getElementById("planetbuyButton").addEventListener("click", function() {
		shop("planetbuy");
	});
	document.getElementById("jesusbuyButton").addEventListener("click", function() {
		shop("jesusbuy");
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
		case "grillbuy":
			if( score >= 100 ) {
				score-=100;
				grill++;
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "grillsell":
			grill -= 1;
			score += 50;
			break;
		case "chefbuy":
			if(score >= 150) {
				score-=150;
				chef++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "chefsell":
			chef -= 1;
			score += 75;
			break;
		case "trapbuy":
			if(score >= 250) {
				score-=250;
				trap++;
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "trapsell":
			trap -= 1;
			score += 125;
			break;
		case "catbuy":
			if(score >= 1000) {
				score-=1000;
				cat++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "catsell":
			cat -= 1;
			score += 500;
			break;
		case "poisonbuy":
			if(score >= 1500) {
				score-=1500;
				poison++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "poisonsell":
			poison -= 1;
			score += 750;
			break;
		case "catcherbuy":
			if(score >= 5000) {
				score -= 5000;
				catcher++;
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "catchersell":
			catcher -= 1;
			score += 2500;
			break;
		case "factorybuy":
			if(score >= 10000) {
				score -= 10000;
				factory++;	
				update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "factorysell":
			factory -= 1;
			score += 5000;
			break;
		case "planetbuy":
			if(score >= 50000) {
				score -= 50000;
				planet++;	
				update_values(); 
				
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "planetsell":
			planet -= 1;
			score += 25000;
			break;
		case "jesusbuy":
			if(score >= 25000000) {
			score -= 25000000;
			jesus++;	
			update_values(); 
			}
			else {
				alert( "You don't have enough rats!");
			}
			break;
		case "jesussell":
			jesus -= 1;
			score += 12500000;
			break;
	}
	update_values(); 
}

function saveCookies() {
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



