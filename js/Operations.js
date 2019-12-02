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
    if (window.gameMap != undefined && event.key === 'g' && event.ctrlKey)
        fillGazetteer();
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
     document.getElementById("damageValue").innerHTML = window.oldSpice.isDamaged ? "Systems Critical" : "Undamaged";
}

function createNewLog() {

}

function addMessage(message) {
    
}

function addMessageForm (message, message_res_ok, message_res_cancel) {

}

function fillGazetteer() { /*This function combs through every single space on the game map and adds the location and type
of each celestial object it finds to the celestial gazetteer. It is activated by pushing ctrl+g after the map loads.*/
    
    max = window.gameMap.size;
    for (i = 0; i <= max; ++i) {
        for (n = 0; n <= max; ++n) {
            if (window.gameMap.contents(i, n) != undefined) {
                gazePopulate (window.gameMap.contents(i, n), i, n, true);
            }
        }
    }

}