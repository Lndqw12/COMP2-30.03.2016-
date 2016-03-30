(function() {

	var div = document.getElementsByClassName('classUL');
		style = div[0].style;
		style.color = "green";
		style.background = "#948192";
		div.className = "classUL";
})();


function change_font() {
var par = document.getElementById('par');
var color = 'white';
 var c = setInterval ( function() {
 for (i = 0; i < 1000; i++) {
 
 if ( par.style.color == 'black') {
 color = 'white'; 
 } else if (par.style.color == 'white') {
 color = 'black'};
 }
 par.style.color = color;
 },1000);
 }
 change_font();