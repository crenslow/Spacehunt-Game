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

function readDataFromFile( filename )
{
    var art_JSON = localStorage.getItem(filename);
    window.gameData = JSON.parse(art_JSON);
    console.log(window.gameData);
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

//tests

