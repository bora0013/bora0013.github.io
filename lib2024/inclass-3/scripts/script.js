// document.querySelector('#color-1').style.backgroundColor="green";

// window is the keyword targeting current browser
// window.onload asks the browser to wait for the page to load and then run the function(called init in this case)
window.onload = init;
// this is done to avoid complications of function running without having the elements ready and rendered

// function name-of-function will create a function in js file
// function must have a opening curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()
function init() {

	// document is the keyword to target the current webpage
	// with queryselecotr we are asking the document to find an element that matches the CSS selector defined in the brackets 
	// here we target #color-1 i.e. element with id color-1
	// onclick is telling the browser to fire the function "changeColor" when the selected element is clicked 
	document.querySelector('#color-1').onclick = changeColor;
	document.querySelector('#color-2').onclick = changeColor;
	document.querySelector('#color-3').onclick = changeColor;

	document.querySelector('#loadTable').onclick = createTableFromJSON;


	
	document.querySelector('.reset').onclick = colorReset;
	
	document.querySelector('.ham').onclick = showHideMobileMenu;

function onchangeInput() {
    var value = this.value;
    if (value && value.length > 0) {
        // Exist text in your input
        document.getElementById("show").style.visibility = "visible";
    } else {
        document.getElementById("hide").style.visibility = "hidden";
    }
}