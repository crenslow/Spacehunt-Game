const nameInput = document.querySelector( '#playerName' );

// MAIN VARIABLES; (globals, in a sense)
window.gameData = {
    mapsize: 128,
    celeron: null,
    xeon: null,
    ryzen: null,
    eniac: null,
    badMax: new Array(2),
    recipe: new Array(2),
    abFreighter: [],
    asteroid: [],
    meteorShower: [],
    asteroidRandom: true,
    meteorRandom: true,
    freighterRandom: true,
    stationRandom: true,
    gaze: { length: 0 },
    msgs: [],
    savedGamed: false,
    shipX: 0,
    shipY: 0,
    shipEnergy: 1000,
    shipSupplies: 100,
    shipCredit: 1000,
    shipEngineLv: 1,
    shipDamaged: false,
    shipNormalPlay: 1,
};

window.onload = function() {
    // populate the map
    populateSavedGameList();

    // start the game
    let setupPage = document.querySelectorAll('.setup-game')[0];

    // initializes default settings
    document.querySelectorAll('.game-start-btn')[0].onclick = function() {
        initGame();
        setupPage.attributes.class.value += ' hide';
    };

    // initializes map and ship from previous game if the previous game exists
    document.querySelectorAll('.game-cont-btn')[0].onclick = function() {
        if (contGame()) {
            setupPage.attributes.class.value += ' hide';
        }
    };
};

// initializes the game
function initGame () {
    if (window.gameData != undefined) {
        window.gameMap = new GameMap(window.gameData.mapsize);
        window.oldSpice = new Ship(
            window.gameData.shipX,
            window.gameData.shipY,
            window.gameData.shipEnergy,
            window.gameData.shipSupplies,
            window.gameData.shipCredit,
            window.gameData.shipEngineLv,
            window.gameData.shipDamaged,
            window.gameData.shipNormalPlay
        );

    } else { // default settings
        window.gameMap = new GameMap(128);
        window.oldSpice = new Ship(0, 0, 1000, 100, 1000, 1, false, true);
    }

    // setup game effect
    gameSetSave();

    // render map
    window.gameMap.renderMap(window.oldSpice.x, window.oldSpice.y);

    // update screen data
    updateHeading();
    updateLevels();
    
    PopulateMap(window.gameMap);

    ctrecipe.tickObjects.push(function() { HitObj(window.oldSpice.x, window.oldSpice.y); } );
    ctrecipe.tick();
}

// continues a saved game
function contGame () {
   
}

// set up the game; save the game
function gameSetSave () {

}

// add planet locations
function gazePopulate ( obj, objX, objY, isToSave ) {
   
}

// add planet locations to the saved game
function populateSavedGaze ( gaze ) {
    
}

// save the message board
function saveMessageBoard(newMessage) {
    let msgIndex = window.gameData.msgs.length;
    window.gameData.msgs[msgIndex] = newMessage;
}

// populates message board
function populateMessageBoard(savedMessages) {
    for (const msg of savedMessages)
        addMessage(msg);
}

// shows saved games
function populateSavedGameList () {

}

// update the player name input box when a past game has been selected
function updatePlayerNameField ( selectedGamed ) {
   
}
