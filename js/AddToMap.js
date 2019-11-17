/* Add items to the map */

function PopulateMap(gameMap) {
    generateCeleron(gameMap);
    generateXeon(gameMap);
    generateRyzen(gameMap);
    generateEniac(gameMap);
    generateBadMax(gameMap);
    generateRecipe(gameMap);

    if (window.gameData.asteroidRandom) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * ( gameMap.size ));
            let objCoordy = Math.ceil(Math.random() * ( gameMap.size ));
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    } else {
        for (let coords of window.gameData.asteroids) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    }

    if (window.gameData.meteorRandom) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 6, objCoordx, objCoordy); 
        }
    } else {
        for (let coords of window.gameData.meteors) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 6, objCoordx, objCoordy);
        }
    }

    if (window.gameData.stationRandom) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, (i % 4), objCoordx, objCoordy);
        }
    } else {
        for (let coords of window.gameData.stations) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            let stationType = Math.floor (Math.random() * 4);
            generateCelestialObjects(gameMap, stationType, objCoordx, objCoordy);
        }
    }

    if (window.gameData.freighterRandom) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil(Math.random() * (gameMap.size));
            let objCoordy = Math.ceil(Math.random() * ( gameMap.size));
            generateCelestialObjects(gameMap, 5, objCoordx, objCoordy);
        }
    } else {
        for (let coords of window.gameData.freighters) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            generateCelestialObjects(gameMap, 5, objCoordx, objCoordy);
        }
    }
}

function PopulateSavedMap (gameMap, savedMap) {
  
}

function generateCelestialObjects (gameMap, type, celestX, celestY) {
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
    updateLogs(gameMap, mapObj, celestX, celestY);
}


function updateLogs (gameMap, mapObj, objCoordX, objCoordY) {
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordX + ' ' + objCoordY );
    gameMap.add(mapObj, objCoordX, objCoordY);
    saveMap( gameData, mapObj, objCoordX, objCoordY );
}

function generateEniac(gameMap) {
    generateEniacAtLocation(gameMap, 0, 0);
}

function generateEniacAtLocation(gameMap, eniacCoordX, eniacCoordY) {
    mapObj = new Eniac();
    mapObj.x = eniacCoordX;
    mapObj.y = eniacCoordY;
    updateLogs(gameMap, mapObj, eniacCoordX, eniacCoordY);
}

function generateCeleron(gameMap) {
    let randomCelX = Math.ceil(Math.random() * (gameMap.size));
    let randomCelY = Math.ceil(Math.random() * (gameMap.size));
    generateCeleronAtLocation(gameMap, randomCelX, randomCelY);
}

function generateCeleronAtLocation(gameMap, celeronCoordX, celeronCoordY) {
    mapObj = new Celeron();
    if ( gameData.celeronX || gameData.celeronX === 0 )
        celeronCoordX = gameData.celeronX;
    if ( gameData.celeronY || gameData.celeronY === 0 )
        celeronCoordY = gameData.celeronY;
    mapObj.x = celeronCoordX;
    mapObj.y = celeronCoordY;
    updateLogs( gameMap, mapObj, celeronCoordX, celeronCoordY );
    gazePopulate( mapObj, celeronCoordX, celeronCoordY );
}

function generateXeon(gameMap) {
    let randomXeonX = Math.ceil(Math.random() * (gameMap.size));
    let randomXeonY = Math.ceil(Math.random() * (gameMap.size));
    generateXeonAtLocation(gameMap, randomXeonX, randomXeonY )
}

function generateXeonAtLocation(gameMap, xeonCoordX, xeonCoordY) {
    mapObj = new Xeon();
    if ( gameData.xeonX || gameData.xeonX === 0 )
        xeonCoordX = gameData.xeonX;
    if ( gameData.xeonY || gameData.xeonY === 0 )
        xeonCoordY = gameData.xeonY;

    mapObj.x = xeonCoordX;
    mapObj.y = xeonCoordY;

    updateLogs( gameMap, mapObj, xeonCoordX, xeonCoordY );
    gazePopulate( mapObj, xeonCoordX, xeonCoordY );
}

function generateRyzen (gameMap) {
  
}

function generateRyzenAtLocation(gameMap, ryzenCoordX, ryzenCoordY) {

}

function generateRecipe (gameMap) {
 
}

function generateBadMax (gameMap) {
    
}

function generateBadMaxAtLocation(gameMap, badMaxCoordX, badMaxCoordY){

}


function generateRecipeAtLoation(gameMap, recipeCoordX, recipeCoordY){

}
