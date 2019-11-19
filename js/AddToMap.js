/* Add items to the map */

function PopulateMap(gameMap) {
    generateCeleron(gameMap);
    generateXeon(gameMap);
    generateRyzen(gameMap);
    generateEniac(gameMap);
    generateBadMax(gameMap);
    generateRecipe(gameMap);

    // load objects; asteroid, stations, freighters, other celestial objects
    
    // * ASTEROID *
    if (window.gameData.asteroidRandom) {
        for(let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    } else {
        for(let coords of window.gameData.asteroids) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    }

    // * METEOR SHOWERS *
    if(window.gameData.meteorRandom) {
        for(let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy); 
        }
    } else {
        for(let coords of window.gameData.meteors) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    }
    
    // * FREIGHTERS *
    if (window.gameData.freighterRandom) {
        for(let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    } else {
        for(let coords of window.gameData.freighters) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    }

    // * STATIONS *
    if (window.gameData.stationRandom) {
        for(let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, (i % 4), objCoordx, objCoordy);
        }
    } else {
        for(let coords of window.gameData.stations) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            let stationType = Math.floor(Math.random() * 4);
            generateCelestialObjects(gameMap, stationType, objCoordx, objCoordy);
        }
    }
}

/* populates a saved map with the state it was left in */
function PopulateSavedMap ( gameMap, savedMap ) {
/*
    // load planets
    if(savedMap.celeron)
        generateCeleronAtLocation(gameMap, savedMap.celeron.x, savedMap.celeron.y);
    else
        generateCeleronAtLocation(gameMap, savedMap.celeronX, savedMap.celeronY);
    if(savedMap.xeon)
        generateXeonAtLocation(gameMap, savedMap.xeon.x, savedMap.xeon.y);
    else
        generateXeonAtLocation(gameMap, savedMap.xeonX, savedMap.xeonY);
    if(savedMap.ryzen)
        generateRyzenAtLocation(gameMap, savedMap.ryzen.x, savedMap.ryzen.y);
    else
        generateRyzenAtLocation(gameMap, savedMap.ryzenX, savedMap.ryzenY);

    generateEniacAtLocation(gameMap, savedMap.eniac.x, savedMap.eniac.y);
    generateBadMaxAtLocation(gameMap, savedMap.badMax[0], savedMap.badMax[1]);
    generateRecipeAtLoation(gameMap, savedMap.recipe[0], savedMap.recipe[1]);


    // load celestial objects
    for ( const coords of savedMap.asteroid ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.abFreighter ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 5, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.meteorShower ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 6, objCoordx, objCoordy);
        }
    }
    */
}

/* generate celetial objects */
function generateCelestialObjects ( gameMap, type, celestX, celestY ) {
    /*
    switch ( type ) {
        case 0:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 ), new RepairDepot, new MiniMart()] );
            break;

        case 1:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 ), new RepairDepot()] );
            break;

        case 2:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 ), new MiniMart()] );
            break;

        case 3:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 )] );
            break;

        case 4:
            mapObj = new Asteroid();
            break;

        case 5:
            mapObj = new AbFreighter();
            break;

        case 6:
            mapObj = new MeteorShower();
            break;
    }
    updateLogs( gameMap, mapObj, celestX, celestY );
    */
}

/* save the current state of the game */
function updateLogs ( gameMap, mapObj, objCoordX, objCoordY ) {
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordX + ' ' + objCoordY );
    gameMap.add( mapObj, objCoordX, objCoordY );
    saveMap( gameData, mapObj, objCoordX, objCoordY );
}

// * CELERON *
function generateCeleron( gameMap ) {
    let randomCelX = Math.ceil(Math.random() * (gameMap.size));
    let randomCelY = Math.ceil(Math.random() * (gameMap.size));
    generateCeleronAtLocation(gameMap, randomCelX, randomCelY);
}

function generateCeleronAtLocation(gameMap, celeronCoordX, celeronCoordY) {
    mapObj = new Celeron();
    if (gameData.celeronX || gameData.celeronX === 0)
        celeronCoordX = gameData.celeronX;
    if (gameData.celeronY || gameData.celeronY === 0)
        celeronCoordY = gameData.celeronY;
    mapObj.x = celeronCoordX;
    mapObj.y = celeronCoordY;
    updateLogs(gameMap, mapObj, celeronCoordX, celeronCoordY);
    gazePopulate(mapObj, celeronCoordX, celeronCoordY);
}

// * ENIAC *
function generateEniac ( gameMap ) {
    generateEniacAtLocation(gameMap, 0, 0);
}

function generateEniacAtLocation(gameMap, eniacCoordX, eniacCoordY) {
    mapObj = new Eniac();
    mapObj.x = eniacCoordX;
    mapObj.y = eniacCoordY;
    updateLogs( gameMap, mapObj, eniacCoordX, eniacCoordY );
}

// * XEON *
function generateXeon(gameMap) {
    let randomXeonX = Math.ceil(Math.random() * (gameMap.size));
    let randomXeonY = Math.ceil(Math.random() * (gameMap.size));
    generateXeonAtLocation(gameMap, randomXeonX, randomXeonY)
}

function generateXeonAtLocation(gameMap, xeonCoordX, xeonCoordY) {
    mapObj = new Xeon();
    if ( gameData.xeonX || gameData.xeonX === 0 )
        xeonCoordX = gameData.xeonX;
    if ( gameData.xeonY || gameData.xeonY === 0 )
        xeonCoordY = gameData.xeonY;
    mapObj.x = xeonCoordX;
    mapObj.y = xeonCoordY;
    updateLogs(gameMap, mapObj, xeonCoordX, xeonCoordY);
    gazePopulate(mapObj, xeonCoordX, xeonCoordY);
}

// * RYZEN *
function generateRyzen ( gameMap ) {
    let randomRyzenX = Math.ceil(Math.random() * (gameMap.size));
    let randomRyzenY = Math.ceil(Math.random() * (gameMap.size));
    generateRyzenAtLocation(gameMap, randomRyzenX, randomRyzenY)
}

function generateRyzenAtLocation(gameMap, ryzenCoordX, ryzenCoordY) {
    mapObj = new Ryzen();
    if(gameData.ryzenX || gameData.ryzenX === 0)
        ryzenCoordX = gameData.ryzenX;
    if(gameData.ryzenY || gameData.ryzenY === 0)
        ryzenCoordY = gameData.ryzenY;
    mapObj.x = ryzenCoordX;
    mapObj.y = ryzenCoordY;
    updateLogs(gameMap, mapObj, ryzenCoordX, ryzenCoordY);
    gazePopulate(mapObj, ryzenCoordX, ryzenCoordY);
}

// RECIPE; generate recipe at a random location
function generateRecipe ( gameMap ) {
   
}

function generateRecipeAtLoation(gameMap, recipeCoordX, recipeCoordY){

}

// BAD MAX; generate Bad Max at a random location 
function generateBadMax ( gameMap ) {
   
}

function generateBadMaxAtLocation(gameMap, badMaxCoordX, badMaxCoordY){

}
