"use strict";
//appendChild method
for (var i=0; i<100; i++) {
	var elems = document.createElement ("li");
	var content = document.createTextNode ("li#"+(i+1));
	var methodOne = document.getElementById ("methodOne");
    elems.appendChild (content);
    methodOne.appendChild (elems);
}
//simple innerHTML method
for (var i=0; i<100; i++) {
	var methodTwo = document.getElementById ("methodTwo");
    methodTwo.innerHTML += "<li> li#" + (i+1) + "</li>"
}
//fragmentDocument method
var fragment = document.createDocumentFragment();
for (var i=0; i<100; i++) {
	var elems = document.createElement ("li");
	var content = document.createTextNode ("li#"+(i+1));
	var methodThre = document.getElementById ("methodThre");
    elems.appendChild (content);
    fragment.appendChild (elems);
    methodThre.appendChild (fragment);
}
//insertAdjacent method
for (var i=0; i<100; i++) {
	var methodFour = document.getElementById ("methodFour");
    methodFour.insertAdjacentHTML ("beforeEnd", "<li> li#" + (i+1) + "</li>");
}
//.join() + innerHTML method 
var methodFive = document.getElementById ("methodFive");
var lis = [];
for (var i=0; i<100; i++) {
	lis.push ("<li>li#"+(i+1)+"</li>")
}
var elems = lis.join('');
methodFive.innerHTML += elems;