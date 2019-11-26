// saves the player's name
const nameInput = document.querySelector('#playerName');

// MAIN VARIABLES; (globals, in a sense)
window.gameData = {
    mapSize: 128,
    celeron: null,
    xeon: null,
    ryzen: null,
    eniac: null,
    badMax: new Array( 2 ),
    recipe: new Array( 2 ),
    stationTRM: [],
    stationTR: [],
    stationTM: [],
    stationT: [],
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
    /*
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
    shipNormalPlay: true,
    randomWormhole: false,
    */
};

// when the window intially opens, this is what happens
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

    // setup + save game
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

// continues a saved game; Sprint 2
function contGame () {
   
}

// set up the game; save the game; could be discarded; Sprint 2
function gameSetSave () {

}

// add planet locations to the left panel on the main game playing page
function gazePopulate ( obj, objX, objY, isToSave ) {
   
}

// add planet locations to the saved game; adds to the list which is to 
// be displayed on the left panel on the main game playing page
function populateSavedGaze ( gaze ) {
    
}

// save the message board; used to save alerts for the game to be played
// at a later time
function saveMessageBoard(newMessage) {
    let msgIndex = window.gameData.msgs.length;
    window.gameData.msgs[msgIndex] = newMessage;
}

// populates message board; shows the alerts that are generated
function populateMessageBoard(savedMessages) {
    for (const msg of savedMessages)
        addMessage(msg);
}

// shows saved games on the main menu screen
function populateSavedGameList () {

}

// update the player name input box when a past game has been selected
function updatePlayerNameField(selected) {
   nameInput.value = localStorage.key(selected);
}
