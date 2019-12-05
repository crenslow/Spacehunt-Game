/* MapDefinition.js - Team GG This file defines the map object, which contains locations of 
    celestial locations in and around the pentium system.
    TODO: positions are currently placeholders
    TODO: add methods: 
    TODO: add asteroids, space stations
*/
var MIN_X = 1;
var MIN_Y = 1;
var MAX_X = 128;
var MAX_Y = 128;

//functions
//redefine gamedata since main functions can't be used
window.gameData = {
   mapSize: 128,
   //map: 0,
    asteroidRandom: true,
    meteorRandom: true,
    freighterRandom: true,
    station1Random: true,
    station2Random: true, 
    station3Random: true,
    savedGamed: false,
    shipX: 0,
    shipY: 0,
    gaze: {length: 0},
    shipEnergy: 1000,
    shipSupplies: 100,
    shipCredit: 1000,
    shipEngineLv: 1,
    shipDamaged: false,
    shipNormalPlay: 1,
    shipHasRecipe: 0,
    randomWormhole: false,
    artifactArr : []
};

function writeDataToFile( filename )
{
    var gameDataJSON = JSON.stringify(window.gameData);
    console.log(gameDataJSON);
    localStorage.setItem(filename, gameDataJSON);
}
function collision( spaceObj )
{
    //checks through list of artifacts to see if spaceObj collides (shares x,y values)
    //with any celestial artifacts
    for(A in artifacts)
    {

        if(spaceObj.x == artifacts[A].x && spaceObj.y == artifacts[A].y)
            return A;
    }
    return false;
}

function setSelectArtifactOptions()
{

    var to_select = document.getElementById("selectArtifact");


    for(var A in window.gameData.artifactArr)
    {
        var art = window.gameData.artifactArr[A];
        var el = document.createElement("option");
        el.textContent = art.name;
        el.value = A;
        to_select.appendChild(el);
    }
}
function sanitizeIntValues( someInt )
{
    if(someInt < MIN_X)
        someInt = MIN_X;
    if(someInt > MAX_X)
        someInt = MAX_X;

    return someInt;

}
function changeArtifactProperties()
{
    var to_update = document.getElementById("selectArtifact").value;
    window.gameData.artifactArr[to_update].x = sanitizeIntValues(document.getElementById("artifactX").value);
    window.gameData.artifactArr[to_update].y = sanitizeIntValues(document.getElementById("artifactY").value);

}

function changeOldSpiceProperties()
{
   let osX = document.getElementById("OldSpiceX").value;
   let osY = document.getElementById("OldSpiceY").value;
   let osSupplies = document.getElementById("SUPPLIES").value;
   let osEnergy = document.getElementById("ENERGY").value;
   let osCredits = document.getElementById("CREDITS").value;
   window.gameData.shipX = osX;
   window.gameData.shipY = osY;
   window.gameData.shipEnergy = osEnergy;
   window.gameData.shipSupplies = osSupplies;
   window.gameData.shipCredit = osCredits;
   
}

function loadArtifactValuesOnChange()
{
    var to_update = document.getElementById("selectArtifact").value;
    console.log(to_update);
    console.log(window.gameData.artifactArr[to_update]);
    var x = document.getElementById("artifactX");
    x.value = window.gameData.artifactArr[to_update].x;
    var y = document.getElementById("artifactY");
    y.value = window.gameData.artifactArr[to_update].y;
 
}
function gazePopulate (obj, objX, objY, toSave) {}

function initPage() {
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
    
    // add objects to the map 
    //PopulateMap( window.gameMap );

    let filename = document.getElementById("saveFileName").value;
    let save = JSON.parse(localStorage.getItem(filename));
    if(save != undefined){
        window.oldSpice.x = save.shipX;
        window.oldSpice.y = save.shipY;
        window.oldSpice.energy = save.shipEnergy;
        window.oldSpice.supplies = save.shipSupplies;
        window.oldSpice.credits = save.shipCredit;
        window.oldSpice.engineLv = save.shipEngineLv;
        window.oldSpice.isDamaged = save.shipDamaged;
        window.oldSpice.normalPlay = save.shipNormalPlay;
        //window.gameMap = save.map;
        //PopulateMap(window.gameMap);
        //populateSavedGaze(save.gaze);
        PopulateSavedMap( window.gameMap, save.artifactArr);
        window.gameMap.artifactArr = save.artifactArr.slice(0);
        gameData.artifactArr = save.artifactArr.slice(0);
        //alert("Save game: " + name + " loaded!");
    }
    else{
        alert("No save file of that name or no save files exist. Creating new save.");

        PopulateMap( window.gameMap );

    }
    document.getElementById("OldSpiceX").value = window.oldSpice.x;
    document.getElementById("OldSpiceY").value = window.oldSpice.y;
    document.getElementById("SUPPLIES").value = window.oldSpice.supplies;
    document.getElementById("ENERGY").value = window.oldSpice.energy;
    document.getElementById("CREDITS").value = window.oldSpice.credits;
}

//tests

