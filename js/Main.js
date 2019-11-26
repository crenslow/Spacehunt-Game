// to save the user's name so that they can access the game later
const nameInput = document.querySelector('#playerName');

//object to store persistent game data
window.gameData = {
    mapSize: 128,
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
    gaze: {length: 0},
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
    randomWormhole: false
};

// function to load the main start up screen
window.onload = function() {
    populateSavedGameList();
    let setupGame = document.querySelectorAll('.setup-game')[0];
    document.querySelectorAll('.game-start-btn')[0].onclick = function() {
        initGame();
        setupGame.attributes.class.value += ' hide';
    };

    document.querySelectorAll('.game-cont-btn')[0].onclick = function() {
        if(contGame()) {
            setupGame.attributes.class.value += 'hide';
        }
    };
};

// function for storing state upon tab close; stores the game in local storage
window.beforeunload = window.unload = window.onbeforeunload = function() {
    if (window.gameData.savedGamed) {
        // saves the ship and its status in the local storage
        saveShip(window.gameData, window.oldSpice);
        localStorage.setItem(nameInput.value, JSON.stringify(window.gameData));
    }
};

// continue a previously played game
// prevGame is a value used to add previously saved game data to the new map
function contGame() {
    let name = nameInput.value;
    let prevGame = JSON.parse(localStorage.getItem(name));
    if (prevGame != undefined) {

        // create a new game map to hold the state of a previously 
        // played game
        window.gameMap = new GameMap(prevGame.mapSize);

        // copy the information over
        window.oldSpice = new Ship(
            prevGame.shipX,
            prevGame.shipY,
            prevGame.shipEnergy,
            prevGame.shipSupplies,
            prevGame.shipCredit,
            prevGame.shipEngineLv,
            prevGame.shipDamaged,
            prevGame.shipNormalPlay
        );

        // render map
        window.gameMap.renderMap(window.oldSpice.x, window.oldSpice.y);

        // place map object from local storage into the empty map
        PopulateSavedMap(window.gameMap, prevGame);

        // log the game status in the console
        console.log(prevGame);
        
        // save the known planets/objects in the gazetteer
        populateSavedGaze(prevGame.gaze);

        // update screen data
        updateLevels();  // show the ship levels
        populateMessageBoard(prevGame.msgs);  // show the previous game alerts

        return true;
    } 
}

// initialize the game
function initGame() {
    // if the game is defined, then setup the game
    if (window.gameData != undefined) {
        window.gameMap = new GameMap(window.gameData.mapSize);
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

    } 
    else { 
        // default values
        window.gameMap = new GameMap(128);
        window.oldSpice = new Ship(0, 0, 1000, 100, 1000, 1, false, true);
    }

    // setup wormhole
    // window.boundary = new WormHole();
    
    // makes the save and scan buttons work
    saveButton();
    scanButton();

    // render map
    window.gameMap.renderMap(window.oldSpice.x, window.oldSpice.y);

    // update ship levels
    updateLevels();

    // add to the map
    PopulateMap(window.gameMap);

    // saves the last move to the console
    ctrecipe.tickObjects.push(function () { Collision( window.oldSpice.x, window.oldSpice.y); });
    ctrecipe.tick();
}

// makes the save button work according to its respective operation
function saveButton() {
    // what happens when you hit the save button
    document.querySelector('#game-save').onclick = function() {
        // ask for a name to save the game under
        if (nameInput.value == '') {
            var playerName = prompt('Please enter a player name: ', 'default');
            if (playerName) {
                nameInput.value = playerName;
            }
        }
        if (nameInput.value !== '') {
            window.gameData.savedGamed = true;

            // store the ship's data
            saveShip( window.gameData, window.oldSpice );
            
            // store the map data
            saveMap(window.gameData, window.gameMap )

            // save the game in local storage so the user can still access it after the 
            // browser is closed
            localStorage.setItem( nameInput.value, JSON.stringify( window.gameData ) );
            alert( "Game saved!\n" );
        }
    };
}

// makes the scan button work according to its respective operation
function scanButton () {
    // what happens when you hit the scan button
    document.querySelector('#sensor-scan').onclick = function () {
        window.oldSpice.scan();
    };
}

// add planets to the gazetteer
function gazePopulate (obj, objX, objY, toSave) {
    if (obj.addedToGazetteer == undefined) {
        var gazeList = document.querySelector('#gazetteer .gazetteer-list'),
            gazeWrapper = document.querySelector('#gazetteer-list-wrapper'),
            objName = (obj.name != undefined) ? obj.name : obj.objType,
            objIndex = (window.gameData.gaze.length++);

        obj.addedToGazetteer = 1;
        gazeList.innerHTML +=
            '<li class="list-group-item d-flex justify-content-between align-items-center">' +
            '<span class="gazetteer-obj-name">' + objName + '</span>' +
            '<span class="badge badge-primary badge-pill gazetteer-obj-coordinate">(' + objX + ', ' + objY + ')</span>' +
            '</li>';

        // scroll
        // gazeWrapper.scrollTo( 0, gazeList.offsetHeight );

        if (toSave == 1 || toSave == true) {
            window.gameData.gaze[objIndex] = {x: objX, y: objY};
        }
    }
}

// save the alert board
function saveMessageBoard ( newMessage ) {
    let msgIndex = window.gameData.msgs.length;
    window.gameData.msgs[msgIndex] = newMessage;
}

// adds to the list of saved games
function populateSavedGameList () {

}

// load to the alert board if there is already data for it from a previous game
function populateMessageBoard ( savedMessages ) {
    for ( const msg of savedMessages )
        addMessage( msg );
}

// load to the gazetteer if there is already data for it from a previous game
function populateSavedGaze ( gaze ) {
    for (var i = 0; i < gaze.length; ++i) {
        if (gaze[i] != undefined) {
            gazePopulate(window.gameMap.contents(gaze[i].x, gaze[i].y), gaze[i].x, gaze[i].y, 1);
        }
    }
}

// updates the player's name and saves it to local storage
function updatePlayerNameField ( selectedGamed ) {
    nameInput.value = localStorage.key( selectedGamed );
}
