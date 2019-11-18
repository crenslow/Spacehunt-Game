// go North
function submitNorthHeading() {
    let direction_value = 90;
    let magnitude_value = parseInt( document.getElementById("movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

// go East
function submitEastHeading() {
    let direction_value = 0;
    let magnitude_value = parseInt(document.getElementById("movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

// go South
function submitSouthHeading() {
    let direction_value = 270;
    let magnitude_value = parseInt(document.getElementById( "movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

// go West
function submitWestHeading() {
    let direction_value = 180;
    let magnitude_value = parseInt(document.getElementById( "movement-magnitude" ).value);
    submitHeading(direction_value, magnitude_value);
}

function submitHeading(direction_value, magnitude_value) {
    window.oldSpice.move(magnitude_value, direction_value );
}

// template obtained from event listener tutorial
// allows the user to use their keyboard and mouseclicks to move
window.addEventListener("keydown", event => {
    let distance = document.getElementById("movement-magnitude").value;
    let nextInput = document.getElementById("movement-magnitude");
    let keyPressed = event.keyCode;

    // checks to make sure the ship has been created, that the game has started
    // will only move the ship if it is within the bounds of the map
    if (window.oldSpice != undefined && distance > 0 && distance < gameData.mapsize) {
        if (keyPressed === 38 || event.key === 'w') {
            submitHeading(90, distance);
        } else if (keyPressed === 37 || event.key === 'a') {
            submitHeading(180, distance);
        } else if (keyPressed === 40 || event.key === 's') {
            submitHeading(270, distance);
        } else if (keyPressed === 39 || event.key === 'd') {
            submitHeading(0, distance);
        } else if (keyPressed === 32) {
            oldSpice.scan();
        } else if (keyPressed === 49 || keyPressed === 50 ||
            keyPressed === 51 || keyPressed === 52 ||
            keyPressed === 53 || keyPressed === 54 ||
            keyPressed === 55 || keyPressed === 56 ||
            keyPressed === 57 || keyPressed === 58) {
            nextInput.focus();
        }
    }
} );


function savedGameDisplay(savedGameMode) {
    
}

function updateHeading() {

}

function updateLevels() {

}

function createNewLog() {

}

function addMessage(message) {
    
}

function addMessageForm (message, message_res_ok, message_res_cancel) {

}
