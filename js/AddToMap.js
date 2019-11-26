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
            generateCelestialObjects(gameMap, 6, objCoordx, objCoordy); 
        }
    } else {
        for(let coords of window.gameData.meteors) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 6, objCoordx, objCoordy);
        }
    }
    
    // * FREIGHTERS *
    if (window.gameData.freighterRandom) {
        for(let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 5, objCoordx, objCoordy);
        }
    } else {
        for(let coords of window.gameData.freighters) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 5, objCoordx, objCoordy);
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

}

/* generates celestial objects */
function generateCelestialObjects (gameMap, type, celestX, celestY) {
   switch(type) {
       case 0:
            mapObj = new Asteroid();
            break;
       case 1: 
            mapObj = new AbFreighter();
            break;
       case 2: 
            mapObj = new MeteorShower();
            break;
       case 3: 
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new RepairDepot, new MiniMart()]);
            break;
       case 4: 
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new RepairDepot()]);
            break;
       case 5: 
            mapObj = new SpaceStation([new MuskTesla( 100, 1000 ), new MiniMart()]);
            break;
       case 6: 
            mapObj = new SpaceStation([new MuskTesla( 100, 1000 )]);
            break;
   }
   updateLogs(gameMap, mapObj, celestX, celestY);
}

/* save the current state of the game */
function updateLogs ( gameMap, mapObj, objCoordX, objCoordY ) {
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordX + ' ' + objCoordY );
    gameMap.add( mapObj, objCoordX, objCoordY );
    saveMap( gameData, mapObj, objCoordX, objCoordY );
}

// * CELERON *
// generate celeron at a random x and y position, call the
// generateCeleronAtLocation function to actually place Celeron 
// on the map
function generateCeleron( gameMap ) {
    let randomCellX = Math.ceil(Math.random() * (gameMap.size));
    let randomCellY = Math.ceil(Math.random() * (gameMap.size));
    generateCeleronAtLocation(gameMap, randomCellX, randomCellY);
}

// places Celeron on the map
function generateCeleronAtLocation(gameMap, celeronCoordX, celeronCoordY) {
    // if the location has nothing, add Celeron to the map
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
// generate eniac at a random x and y position, call the
// generateEniacAtLocation function to actually place eniac 
// on the map
function generateEniac (gameMap) {
    generateEniacAtLocation(gameMap, 0, 0);
}

// places Eniac on the map
function generateEniacAtLocation(gameMap, eniacCoordX, eniacCoordY) {
    mapObj = new Eniac();
    mapObj.x = eniacCoordX;
    mapObj.y = eniacCoordY;
    updateLogs( gameMap, mapObj, eniacCoordX, eniacCoordY );
}

// * XEON *
// generate xeon at a random x and y position, call the
// generateXeonAtLocation function to actually place Xeon 
// on the map
function generateXeon(gameMap) {
    let randomXeonX = Math.ceil(Math.random() * (gameMap.size));
    let randomXeonY = Math.ceil(Math.random() * (gameMap.size));
    generateXeonAtLocation(gameMap, randomXeonX, randomXeonY);
}

// places Xeon on the map
function generateXeonAtLocation(gameMap, xeonCoordX, xeonCoordY) {
    mapObj = new Xeon();
    if (gameData.xeonX || gameData.xeonX === 0)
        xeonCoordX = gameData.xeonX;
    if (gameData.xeonY || gameData.xeonY === 0)
        xeonCoordY = gameData.xeonY;
    mapObj.x = xeonCoordX;
    mapObj.y = xeonCoordY;
    updateLogs(gameMap, mapObj, xeonCoordX, xeonCoordY);
    gazePopulate(mapObj, xeonCoordX, xeonCoordY);
}

// * RYZEN *
// generate ryzen at a random x and y position, call the
// generateRyzenAtLocation function to actually place Ryzen 
// on the map
function generateRyzen ( gameMap ) {
    let randRyzenX = Math.ceil(Math.random() * (gameMap.size));
    let randRyzenY = Math.ceil(Math.random() * (gameMap.size));
    generateRyzenAtLocation(gameMap, randRyzenX, randRyzenY)
}

// places Ryzen on the map
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
// not implemented yet, but essentially follows the same idea as generating the planets
function generateRecipe ( gameMap ) {
   
}

// not implemented yet, but essentially follows the same idea as generating the planets
function generateRecipeAtLoation(gameMap, recipeCoordX, recipeCoordY){

}

// BAD MAX; generate Bad Max at a random location 
// not implemented yet, but essentially follows the same idea as generating the planets
function generateBadMax ( gameMap ) {
   
}

// not implemented yet, but essentially follows the same idea as generating the planets
function generateBadMaxAtLocation(gameMap, badMaxCoordX, badMaxCoordY){

}
