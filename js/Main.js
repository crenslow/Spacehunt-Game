// to save the user's name so that they can access the game later
const nameInput = document.querySelector('#playerName');

//object to store persistent game data
window.gameData = {
   mapSize: 128,
   //map: 0,
    celeron: null,
    xeon: null,
    ryzen: null,
    eniac: null,
    badMax: new Array(2),
    recipe: new Array(2),
    stationTRM: [],
    stationTR: [],
    stationTM: [],
    stationT: [],
    abFreighter: [],
    asteroid: [],
    meteorShower: [],
    gaze: {length: 0},
    msgs: [],
    asteroidRandom: true,
    meteorRandom: true,
    freighterRandom: true,
    stationRandom: true,
    savedGamed: false,
    shipX: 0,
    shipY: 0,
    shipEnergy: 1000,
    shipSupplies: 100,
    shipCredit: 1000,
    shipEngineLv: 1,
    shipDamaged: false,
    shipNormalPlay: 1,
	shipHasRecipe: 0,
    randomWormhole: false
};

// function to load the main start up screen
window.onload = function() {
    let gameSet = document.querySelectorAll('.setup-game')[0];
    document.querySelectorAll('.game-start-btn')[0].onclick = function() {
        initGame();
        gameSet.attributes.class.value += ' hide';
    };

    // loads saved game data if the user is continuing a game
    document.querySelectorAll('.game-cont-btn' )[0].onclick = function() {
        //if(continueGame()) {
			initGame();
            gameSet.attributes.class.value += ' hide';

			loadGame(nameInput.value);
        //}
    };
};

function continueGame() {
    
}

// initialize the game
function initGame() {
   if (window.gameData != undefined) {
        window.gameMap = new GameMap( window.gameData.mapSize );
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
    } else { // By default
        window.gameMap = new GameMap( 128 );
        window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false, true );
    }

    // setup wormhole
    //window.boundary = new WormHole();

    // set up the scan button
    setupScanButton();
    
    // set up the save button
    setupSaveButton(); 
	
	 // set up the load button
    setupLoadButton();

    // render map
    window.gameMap.renderMap( window.oldSpice.x, window.oldSpice.y );

    // update ship levels
    updateLevels();

    // add objects to the map 
    PopulateMap( window.gameMap );

    // save last move to the console
    ctrecipe.tickObjects.push(function() {Collision(window.oldSpice.x, window.oldSpice.y);});
    ctrecipe.tick();
}

// set up the scan button
function setupScanButton() {
    document.querySelector('#sensor-scan').onclick = function() {
        window.oldSpice.scan();

    };
}

// set up the save button
function setupSaveButton() {
    document.querySelector('#game-save').onclick = function () {
        if (nameInput.value == '') {
            var playerName = prompt('Please enter player name: ', 'Default');
            if(playerName) {
                nameInput.value = playerName;
            }
        }
        if (nameInput.value !== '') {
            window.gameData.savedGamed = true;
            
            // store the ship's data
            saveShip( window.gameData, window.oldSpice );
   
            // store the map data
            //saveMap(window.gameData, window.gameMap )

            // save the game to local storage
            localStorage.setItem( nameInput.value, JSON.stringify( window.gameData ) );
            alert( "Game save " +nameInput.value+ " was saved" );
        }
    };
}
// set up the load button
function setupLoadButton() {
    document.querySelector('#game-load').onclick = function () {
		var playerName = prompt('Please enter save name to load: ', 'Default');
            if(playerName) {
                nameInput.value = playerName;
            }
		loadGame(nameInput.value);
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

// function for storing state upon tab close; stores the game in local storage
window.beforeunload = window.unload = window.onbeforeunload = function() {
    if (window.gameData.savedGamed) {
        saveShip(window.gameData, window.oldSpice);
        localStorage.setItem(nameInput.value, JSON.stringify(window.gameData));
    }
};

// load to the gazetteer if there is already data for it from a previous game
function populateSavedGaze ( gaze ) {
    for (var i = 0; i < gaze.length; ++i) {
        if (gaze[i] != undefined) {
            gazePopulate(window.gameMap.contents(gaze[i].x, gaze[i].y), gaze[i].x, gaze[i].y, 1);
        }
    }
}

// load to the alert board if there is already data for it from a previous game
function populateMessageBoard ( savedMessages ) {
    for ( const msg of savedMessages )
        addMessage( msg );
}

// save the alert board
function saveMessageBoard ( newMessage ) {
    let msgIndex = window.gameData.msgs.length;
    window.gameData.msgs[msgIndex] = newMessage;
}

// updates the player's name and saves it to local storage
function updatePlayerNameField ( selectedGamed ) {
    nameInput.value = localStorage.key( selectedGamed );
}
