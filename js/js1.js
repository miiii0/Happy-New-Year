timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	// timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
	// document.getElementById('t').innerHTML=timestr;
    document.getElementById('day').innerHTML = today + 'дней  ';
	document.getElementById('hour').innerHTML = thour + 'часов  ';
	document.getElementById('min').innerHTML = tmin + 'минут  ';
	document.getElementById('sec').innerHTML = tsec + 'секунд';
	window.setTimeout("time()",1000);
}


let a = document.querySelectorAll(".card");
let b = document.querySelector(".butshuf");
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function shuffle() {	
	if (b.classList.contains("butshufnow")) {
		for (i = 0; i < a.length; i++) {
			if (a[i].classList.contains("nowcard")) {
				a[i].classList.toggle("nowcard");
				a[getRandomInt(3)].classList.toggle("nowcard");
				// console.log(a[i]);
				break;
			}
			else {
				continue;
			}
		}
	}
	else {
		a[getRandomInt(3)].classList.toggle("nowcard");
		b.classList.toggle("butshufnow");
		b.innerHTML = "Ещё";
	}
}

function snow() {
	let a = document.querySelector(".snowblock");
	a.classList.toggle("snowon");
	if (a.classList.contains("snowon")) {
		document.querySelector(".snowbut").innerHTML = "Убрать снег";
	}
	else {
		document.querySelector(".snowbut").innerHTML = "Включить снег";
	}
}

function gir() {
	let nums = document.getElementById('gir').className; 
	if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
	if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
	if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
}  
setInterval(gir, 500);	


function lights() {
	document.getElementById("gir").classList.toggle("gir_1");
	document.querySelector(".girsh").classList.toggle("girshan");
	setTimeout('lights2()', 3000);
};

function lights2() {
	document.querySelector(".girsh").classList.toggle("girshan");
}