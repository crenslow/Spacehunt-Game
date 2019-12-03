/* add celestial objects to the map */
function PopulateMap(gameMap) {
    generateEniac(gameMap);
    generateRyzen(gameMap);
    generateCeleron(gameMap);
    generateXeon(gameMap);
	for(let i = 0; i < 7; ++i){
		generatePentium(gameMap);
	}
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
    saveMap( window.gameData, mapObj, objCoordX, objCoordY );
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
    if ( window.gameData.ryzenX || window.gameData.ryzenX === 0 )
        ryzenCoordX = window.gameData.ryzenX;
    if ( window.gameData.ryzenY || window.gameData.ryzenY === 0 )
        ryzenCoordY = window.gameData.ryzenY;
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
    if ( window.gameData.celeronX || window.gameData.celeronX === 0 )
        celeronCoordX = window.gameData.celeronX;
    if ( window.gameData.celeronY || window.gameData.celeronY === 0 )
        celeronCoordY = window.gameData.celeronY;
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
    if (window.gameData.xeonX || window.gameData.xeonX === 0)
        xeonCoordX = window.gameData.xeonX;
    if (window.gameData.xeonY || window.gameData.xeonY === 0)
        xeonCoordY = window.gameData.xeonY;
    mapObj.x = xeonCoordX;
    mapObj.y = xeonCoordY;
    updateLogs(gameMap, mapObj, xeonCoordX, xeonCoordY);
    gazePopulate(mapObj, xeonCoordX, xeonCoordY);
}
function generatePentium (gameMap) {
    let randomPentX = Math.ceil(Math.random() * (gameMap.size));
    let randomPentY = Math.ceil(Math.random() * (gameMap.size));
    generatePentiumAtLocation(gameMap, randomPentX, randomPentY);
}
function generatePentiumAtLocation(gameMap, pentCoordX, pentCoordY) {
    mapObj = new Pentium();
    if (window.gameData.pentX || window.gameData.pentX === 0)
        pentCoordX = window.gameData.pentX;
    if (window.gameData.pentY || window.gameData.pentY === 0)
        pentCoordY = window.gameData.pentY;
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
    if (window.gameData.pentrX || window.gameData.pentrX === 0)
        pentrCoordX = window.gameData.pentrX;
    if (window.gameData.pentrY || window.gameData.pentrY === 0)
        pentrCoordY = window.gameData.pentrY;
    mapObj.x = pentrCoordX;
    mapObj.y = pentrCoordY;
    updateLogs(gameMap, mapObj, pentrCoordX, pentrCoordY);
    //gazePopulate(mapObj, pentrCoordX, pentrCoordY);
}
