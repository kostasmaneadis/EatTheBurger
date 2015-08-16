//arxiki thesi panagiotas
var i=50;
var j=100;
var imgar=1;
//arxiki thesi burger
var leftb;
var topb;
//login(textbox kai koumpi)
function login(){
	document.getElementById("login").value="";
}
function loginb(){
	
}

// gia na ksekinaei to paixnidi kai energopoihsh twn koumpion 
function start(){
	timer=window.setInterval("myfunr()",50000);
	document.getElementById("butu").disabled = false;
	document.getElementById("butd").disabled = false;
	document.getElementById("butr").disabled = false;
	document.getElementById("butl").disabled = false;
	document.getElementById("buts").disabled = false;
	document.getElementById("label").innerHTML = "To paixnidi ksekinise!!" ;
	}
//gia na megalosoun oi odigies
function megalo(){
	document.getElementById("mydiv").style.width = "400px"; 
	document.getElementById("mydiv").innerHTML = '<b><u>Odigies</u></b>';
	document.getElementById("mydiv").innerHTML += '<ul><li>Gia na pas deksia pata "Right"</li></ul>';
	document.getElementById("mydiv").innerHTML += '<ul><li>Gia na pas aristera pata "Left"</li></ul>';
	document.getElementById("mydiv").innerHTML += '<ul><li>Gia na pas panw pata "Up"</li></ul>';
	document.getElementById("mydiv").innerHTML += '<ul><li>Gia na pas katw pata "Down"</li></ul>';
	document.getElementById("mydiv").innerHTML += '<ul><li>Gia na stamatisete patiste "Stop"</li></ul>';
}
//gia na mikrinoun pali oi odigies
function mikro(){
	document.getElementById("mydiv").style.width = "50px";
	document.getElementById("mydiv").innerHTML = 'O<br>D<br>I<br>G<br>I<br>E<br>S';
}
//gia de3ia
function timerr(){
	clearInterval(timer);
	timer=window.setInterval("myfunr()",25);
	}
function myfunr(){
	i++;
	k= document.getElementById("myimg").style.left = i+"px"; 
	r= document.getElementById("myimg").style.right = i+"px";
	document.getElementById("myimg").src = "image/"+imgar+".png";
	imgar++;
	if (imgar==5) {imgar=1;}
	if (i==790){
		document.getElementById("body").style.backgroundColor= "red";
		window.alert("Exases");
		clearInterval(timer);
    }		
}
//gia aristera
function timerl(){
	clearInterval(timer);
	timer=window.setInterval("myfunl()",25);
}
function myfunl(){
	i--;
	k = document.getElementById("myimg").style.left = i+"px"; 
	document.getElementById("myimg").src = "image/"+imgar+".png";
	imgar++;
	if (imgar==5) {imgar=1;}			
    if (i==40){
		document.getElementById("body").style.backgroundColor= "red";
		window.alert("Exases");
		clearInterval(timer);
    }
}
//gia panw
function timeru(){
	clearInterval(timer);
	timer=window.setInterval("myfunu()",25);
}
function myfunu(){
	j--;
	k= document.getElementById("myimg").style.top = j+"px"; 
	document.getElementById("myimg").src = "image/"+imgar+".png";
	imgar++;
	if (imgar==5) {imgar=1;}
	 if (j==90){
		document.getElementById("body").style.backgroundColor= "red";
		window.alert("Exases");
		clearInterval(timer);
	}
}
//gia katw
function timerd(){
	clearInterval(timer);
	timer=window.setInterval("myfund()",25);
}
function myfund(){
	j++;
	k= document.getElementById("myimg").style.top = j+"px"; 
	document.getElementById("myimg").src = "image/"+imgar+".png";
	imgar++;
	if (imgar==5) {imgar=1;} 
	 if (j==590){
		document.getElementById("body").style.backgroundColor= "red";
		window.alert("Exases");
		clearInterval(timer);
	}
}
//topothetisi burger se random thesi
function putRandom(){
	var leftb = Math.floor((Math.random() * 700) + 40);
	var topb = Math.floor((Math.random() * 480) + 90);
	l= document.getElementById("goal").style.left = leftb+"px"; 
	t= document.getElementById("goal").style.top = topb+"px"; 
}
//gia stop
function stop(){
	clearInterval(timer);
}