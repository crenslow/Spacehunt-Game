/*The following adds an event handler for keypresses to check for WASD or arrow
keys so that the user can navigate using the keyboard. Additionally, spacebar
activates the scan function and inputting a number will automatically highlight
the movement magnitude form. -Josh */
window.addEventListener("keydown", event => {
    let distance = document.getElementById("movement-magnitude").value;
    let magnitudeBox = document.getElementById("movement-magnitude");

    //Checks to make sure the ship has been created before trying to move it
    if (window.oldSpice != undefined) {
        if (event.key === 'ArrowUp' || event.key === 'w') {
            window.oldSpice.move('N', distance);
        } else if (event.key === 'ArrowLeft' || event.key === 'a') {
            window.oldSpice.move('W', distance);
        } else if (event.key === 'ArrowDown' || event.key === 's') {
            window.oldSpice.move('S', distance);
        } else if (event.key === 'ArrowRight' || event.key === 'd') {
            window.oldSpice.move('E', distance);
        } else if (event.key === ' ') {  //The scan functionality
            oldSpice.scan();
        } else if (event.key === '0' || event.key === '1' ||  //
            event.key === '2' || event.key === '3' ||
            event.key === '4' || event.key === '5' ||
            event.key === '6' || event.key === '7' ||
            event.key === '8' || event.key === '9') {
            magnitudeBox.focus();
        }
    }
} );

function savedGameDisplay(savedGameMode) {
    
}

function updateHeading() {
	document.getElementById("heading").innerHTML = window.oldSpice.x + ', ' + window.oldSpice.y;
}

function updateLevels() { /*This function updates the display statistics for
credits, energy, and supplies to ship's current value.*/

	 document.getElementById("creditValue").innerHTML = window.oldSpice.credit;
	 document.getElementById("energyValue").innerHTML = window.oldSpice.energy;
	 document.getElementById("supplyValue").innerHTML = window.oldSpice.supplies;
     if (window.oldSpice.isDamaged) document.getElementById("damageValue").innerHTML = "Systems Critical";
     else document.getElementById("damageValue").innerHTML = "Undamaged";
}

function createNewLog() {

}

function addMessage(message) {
    
}

function addMessageForm (message, message_res_ok, message_res_cancel) {

}
