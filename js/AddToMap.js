/* add celestial objects to the map */
function PopulateMap(gameMap) {
    generateEniac(gameMap);
    generateRyzen(gameMap);
    generateCeleron(gameMap);
    generateXeon(gameMap);
	//for(let i = 0; i < 7; ++i){
		generatePentium(gameMap);
	//}
	generatePentiumR(gameMap);


    // load celestial objects
    // i < 100; this allows for more objects to be added to the map

    /* ASTEROID */
    if (window.gameData.asteroidRandom) {
        for (let i = 0; i < 100; ++i) {
            let x = Math.ceil(Math.random() * (gameMap.size));
            let y = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 4, x, y);
        }
    } else {
        for (let coords of window.gameData.asteroids) {
            let x = coords[0];
            let y = coords[1];
            generateCelestialObjects(gameMap, 4, x, y);
        }
    }

    /* FRIEGHTER */
    if (window.gameData.freighterRandom) {
        for (let i = 0; i < 100; ++i) {
            let x = Math.ceil(Math.random() * (gameMap.size));
            let y = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 5, x, y);
        }
    } else {
        for (let coords of window.gameData.freighters) {
            let x = coords[0];
            let y = coords[1];
            generateCelestialObjects(gameMap, 5, x, y);
        }
    }

    /* METEOR */
    if (window.gameData.meteorRandom) {
        for (let i = 0; i < 100; ++i) {
            let x = Math.ceil(Math.random() * (gameMap.size));
            let y = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, 6, x, y);
        }
    } else {
        for (let coords of window.gameData.meteors) {
            let x = coords[0];
            let y = coords[1];
            generateCelestialObjects(gameMap, 6, x, y);
        }
    }

    /* SPACE STATION */
    if (window.gameData.stationRandom) {
        for (let i = 0; i < 100; ++i) {
            let x = Math.ceil(Math.random() * (gameMap.size));
            let y = Math.ceil(Math.random() * (gameMap.size));
            generateCelestialObjects(gameMap, (i % 4), x, y);
        }
    } else {
        for (let coords of window.gameData.stations) {
            let x = coords[0];
            let y = coords[1];
            let stationType = Math.floor(Math.random() * 4);
            generateCelestialObjects(gameMap, stationType, x, y);
        }
    }
}

/* populate the save game map */
function PopulateSavedMap (gameMap, savedMapArr) {

    //loop through all items in savedMapArr and call apropriate generate at functions
    for( A in savedMapArr )
    {
        let artifact = savedMapArr[A];
        console.log(artifact.name + " "+ artifact.type);
        switch(artifact.type){
            case "Planet":
               switch(artifact.name){
                   case "Celeron":
                       generateCeleronAtLocation( gameMap, artifact.x, artifact.y);
                       break;
                   case "Xeon":
                       generateXeonAtLocation( gameMap, artifact.x, artifact.y);
                       break;
                   case "Ryzen":
                       generateRyzenAtLocation( gameMap, artifact.x, artifact.y);
                       break;
                   case "Eniac":
                       generateEniacAtLocation( gameMap, artifact.x, artifact.y);
                       break;
                   default:
                       generatePentiumAtLocation(gameMap, artifact.x, artifact.y);
                }
                break;
            case "Asteroid":
               generateCelestialObjects(gameMap, 4, artifact.x, artifact.y);
                break;
            case "AbFreighter":
                generateCelestialObjects(gameMap, 5, artifact.x, artifact.y);
                break;
            case "MeteorShower":
                generateCelestialObjects(gameMap, 6, artifact.x, artifact.y);
                break;
            case "Stationundefinedundefinedundefined":
                generateCelestialObjects(gameMap, 0, artifact.x, artifact.y);
                break;
            case "Stationundefinedundefined":
                generateCelestialObjects(gameMap, 1, artifact.x, artifact.y);
                break;
            case "Stationundefined":
                generateCelestialObjects(gameMap, 2, artifact.x, artifact.y);
                break;
            default:
                console.log("error generating " + artifact.type );
                break;
        }
    }
}

/* generate celestial objects */
function generateCelestialObjects(gameMap, type, celestX, celestY) {
    switch (type) {
        case 0:
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new RepairDepot, new MiniMart()]);
            break;

        case 1:
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new RepairDepot()]);
            break;

        case 2:
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new MiniMart()]);
            break;

        case 3:
            mapObj = new SpaceStation([new MuskTesla(100, 1000)]);
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

/* update logs in the console */
function updateLogs (gameMap, mapObj, objCoordX, objCoordY) {
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordX + ' ' + objCoordY );
    gameMap.add( mapObj, objCoordX, objCoordY );
    saveMap( gameData, mapObj, objCoordX, objCoordY );
}

function generateEniac (gameMap) {
    generateEniacAtLocation(gameMap, 0, 0);
}

function generateEniacAtLocation(gameMap, eniacCoordX, eniacCoordY) {
    mapObj = new Eniac();
    mapObj.x = eniacCoordX;
    mapObj.y = eniacCoordY;
    updateLogs( gameMap, mapObj, eniacCoordX, eniacCoordY );
}

function generateRyzen (gameMap) {
    let randomRyzenX = Math.ceil(Math.random() * (gameMap.size));
    let randomRyzenY = Math.ceil(Math.random() * (gameMap.size));
    generateRyzenAtLocation(gameMap, randomRyzenX, randomRyzenY)
}

function generateRyzenAtLocation(gameMap, ryzenCoordX, ryzenCoordY) {
    mapObj = new Ryzen();
    if ( gameData.ryzenX || gameData.ryzenX === 0 )
        ryzenCoordX = gameData.ryzenX;
    if ( gameData.ryzenY || gameData.ryzenY === 0 )
        ryzenCoordY = gameData.ryzenY;
    mapObj.x = ryzenCoordX;
    mapObj.y = ryzenCoordY;
    updateLogs(gameMap, mapObj, ryzenCoordX, ryzenCoordY );
    gazePopulate( mapObj, ryzenCoordX, ryzenCoordY );
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
    updateLogs(gameMap, mapObj, celeronCoordX, celeronCoordY);
    gazePopulate(mapObj, celeronCoordX, celeronCoordY);
}

function generateXeon (gameMap) {
    let randomXeonX = Math.ceil(Math.random() * (gameMap.size));
    let randomXeonY = Math.ceil(Math.random() * (gameMap.size));
    generateXeonAtLocation(gameMap, randomXeonX, randomXeonY);
}

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
function generatePentium (gameMap) {
    for(let i = 1; i < 7; ++i){
      let randomPentX = Math.ceil(Math.random() * (gameMap.size));
      let randomPentY = Math.ceil(Math.random() * (gameMap.size));
      var pentName = "Pentium " + i;
      generatePentiumAtLocation(gameMap, randomPentX, randomPentY, pentName);
    }
}
function generatePentiumAtLocation(gameMap, pentCoordX, pentCoordY, pentName) {
    mapObj = new Pentium();
    mapObj.name = pentName;
    if (gameData.pentX || gameData.pentX === 0)
        pentCoordX = gameData.pentX;
    if (gameData.pentY || gameData.pentY === 0)
        pentCoordY = gameData.pentY;
    mapObj.x = pentCoordX;
    mapObj.y = pentCoordY;
    updateLogs(gameMap, mapObj, pentCoordX, pentCoordY);
    //gazePopulate(mapObj, pentCoordX, pentCoordY);
}
function generatePentiumR (gameMap) {
    let randomPentrX = Math.ceil(Math.random() * (gameMap.size));
    let randomPentrY = Math.ceil(Math.random() * (gameMap.size));
    generatePentiumRAtLocation(gameMap, randomPentrX, randomPentrY);
}
function generatePentiumRAtLocation(gameMap, pentrCoordX, pentrCoordY) {
    mapObj = new PentiumR();

    if (gameData.pentrX || gameData.pentrX === 0)
        pentrCoordX = gameData.pentrX;
    if (gameData.pentrY || gameData.pentrY === 0)
        pentrCoordY = gameData.pentrY;
    mapObj.x = pentrCoordX;
    mapObj.y = pentrCoordY;
    updateLogs(gameMap, mapObj, pentrCoordX, pentrCoordY);
    //gazePopulate(mapObj, pentrCoordX, pentrCoordY);
}
