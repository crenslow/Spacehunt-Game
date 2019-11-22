/* Information for the objects that the game has */

// MAP OBJECT
function MapObject(type, radius) {
  this.objType = type; 
  this.radius = radius; 
  this.isHidden = false; 
}

MapObject.prototype.Collide = function() {
  console.log("collision noted"); 
}

// ASTEROID
function Asteroid() {

}

Asteroid.prototype = new MapObject('Asteroid', 0); 

Asteroid.prototype.DamageShip = function() {
  alert("OldSpice bare missed an asteroid! Damage occurred!"); 
  oldSpice.isDamaged = true; 
}

Asteroid.prototype.DestroyShip = function() {
  oldSpice.energy = 0; 
  ctrecipe.GameOver("OldSpice hit an asteroid! You blew up!");
}

Asteroid.prototype.Collide = function() {
  MapObejct.prototype.Collide.call(this); 
  let eventDecider = Math.random(); 
  if(eventDecider < 0.9) {
    this.DamageShip(); 
  }
  else {
    this.DestroyShip(); 
  }
}

// METEOR SHOWER
function MeteorShower() {

}

MeteorShower.prototype = new MapObject("MeteorShower", 0);

MeteorShower.prototype.Collide = function() {
    MapObject.prototype.Collide.call(this);
    alert("You flew into a meteor shower and OldSpice is damaged!");
    oldSpice.isDamaged = true;
}

// ABANDONED FREIGHTER
function AbFreighter() { 

}

AbFreighter.prototype = new MapObject("AbFreighter", 0);

AbFreighter.prototype.Loot = function() {
    let maxEnergy = 1000;
    let maxSupply = 100;
    let retEnergy;
    let retSupply;

    let roll = Math.random();
    if (roll < 0.75) {
        retEnergy = 0.1 * maxEnergy;
        retSupply = 0.1 * maxSupply;
    }
    else if (roll < 0.90) {
        retEnergy = 0.5 * maxEnergy;
        retSupply = 0.5 * maxSupply;
    }
    else {
        retEnergy = maxEnergy;
        retSupply = maxSupply;
    }
    return [retEnergy, retSupply];
}

AbFreighter.prototype.Collide = function() {
    MapObject.prototype.Collide.call(this);
    let loot = this.Loot();
    lootEnergy = parseInt(loot[0]);
    lootSupply = parseInt(loot[1]);
    
    alert("You came across an abandoned freighter and collected " + lootEnergy + " energy and " + lootSupply + " supply from the remains!" );

    oldSpice.energy += lootEnergy;
    if (oldSpice.supplies + lootSupply <= 100)
        oldSpice.supplies += lootSupply;
    else
        oldSpice.supplies = 100;

    updateLevels(); // display new supply and energy gained from the freighter
    gameMap.remove(oldSpice.x, oldSpice.y); // remove the freighter from the map since it was already used
}

// WORMHOLE
function WormHole() {

}

WormHole.prototype = new MapObject("Wormhole", 0); 

WormHole.prototype.Collide = function() {
  MapObject.prototype.Collide.call(this); 
  alert("You hit a wormhole!"); 
  
  if(ctrecipe.WormholeFixed) {
    oldSpice.x = ctrecipe.WormholeX;
    oldSpice.y = ctrecipe.WormholeY;
  }
  // relocate after falling into a wormhole
  else {
    xrand = Math.ceil(Math.random() * (gameMap.size - 2)); 
    yrand = Math.ceil(Math.random() * (gameMap.size - 2)); 
    oldSpice.x = xrand; 
    oldSpice.y = yrand; 
  }
}

// PLANET
function Planet(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
}

Planet.prototype = new MapObject('Planet', 1);

Planet.prototype.Collide = function() {

}

Planet.prototype.EnterOrbit = function() {
   
}

// ENIAC
function Eniac () { 

};

Eniac.prototype = new Planet('Eniac', -1, -1);

Eniac.prototype.Collide = function() {
    MapObject.prototype.Collide.call(this);
    if(oldSpice.recipe) {
        ctrecipe.GameWinner("You got the KokaKola Recipe!" );
    }
    else {
        this.EnterOrbit();
    }
}

// CELERON
function Celeron() { 

};

Celeron.prototype = new Planet('Celeron', -1, -1);

Celeron.prototype.Collide = function() {
    alert("Collided with Celeron!");
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}

// RYZEN
function Ryzen() { 

};

Ryzen.prototype = new Planet('Ryzen', -1, -1);

Ryzen.prototype.Collide = function() {
    alert("Collided with Ryzen!");
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}

// XEON
function Xeon() { 

};

Xeon.prototype = new Planet('Xeon', -1, -1);

Xeon.prototype.Collide = function() {
    alert("Collided with Xeon");
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}

// BAD MAX
function BadMax () { }

BadMax.prototype = new MapObject("BadMax", 0);
BadMax.prototype.isHidden = true;

BadMax.prototype.Collide = function () {
    MapObject.prototype.Collide.call(this);
    let eventDecider = Math.random();
    // you escape
    if (eventDecider < 0.5) {
        this.Escape();
    }
    // you steal
    else if (eventDecider < 0.8) {
        this.Steal();
    }
    // your ship is destroyed
    else {
        this.DestroyShip();
    }
    //reposition badmax after encounter with OldSpice and delete previous BadMax from the map
    gameMap.remove( oldSpice.x, oldSpice.y ); // remove this BadMax from the map
    generateBadMax( gameMap ); //add a new badmax to the map
}

BadMax.prototype.Steal = function() {
    alert("BadMax has boarded your ship and stolen half your supplies and all your credits!");
    oldSpice.supplies /= 2;
    oldSpice.credit = 0;
}

BadMax.prototype.DestroyShip = function() {
    ctrecipe.GameOver("BadMax and his henchmen blasted your ship!");
}

BadMax.prototype.Escape = function() {
    alert("You come across BadMax but successfuly lose him and his henchmen!");
}

// RECIPE
function KokaKolaRecipe() { 

}

KokaKolaRecipe.prototype = new MapObject("Recipe", 0);
KokaKolaRecipe.prototype.isHidden = true;

KokaKolaRecipe.prototype.Collide = function() {
    MapObject.prototype.Collide.call(this);
    oldSpice.recipe = true;
    alert("You got the KokaKola recipe! Return to Eniac!");
    gameMap.remove(oldSpice.x, oldSpice.y); // remove the recipe from the map because user has obtained it
}

var playGameOfChance; // if the user wants to play the game of chance or not

// stationsType variable because there are multiple stations
function SpaceStation(stationsType) {
  this.stations = stationsType; 
  // go through the list of station types
  for(i = 0; i < this.stations.length; ++i) {
    this.objType += this.stations[i].type; 
  }
}

SpaceStation.prototype = new MapObject("Station", 0);

SpaceStation.prototype.Collide = function() {
  val i; 
  for(i = 0; i < this.stations.length; ++i) {
     if(this.stations[i].promptUser()) { 
      this.stations[i].purchase();
     }
  }
  gameOfChance();
}
  
// make sure the user has enough to buy the item
function CheckBalance(price) {
   if(price > oldSpice.credit)
     return false;
   else
     return true;
}

function gameOfChance () {
   if(playGameOfChance) {
     var playChance = Math.floor(Math.random() * Math.floor(4));
     if(playChance < 2) {
       if(confirm("Do you want to play a game of chance?")){
         PlayGameofChance();
       }
     }
}

// WINNINGS 
function PlayGameOfChance () {
   var winnings = Math.floor(Math.random() * Math.floor(100));
   oldSpice.credit += winnings;
   alert("You've won " + winnings + " credits!");
   updateLevels();  // update the ship level details to the user
}

// MUSKTESTA
function MuskTesla ( energyQuantity, energyPrice ) {
   
}

MuskTesla.prototype.MenuPrompt = function () {
  
}

MuskTesla.prototype.Purchase = function () {
   
}
  
// REPAIR DEPOT
function RepairDepot () {
   
}

RepairDepot.prototype.MenuPrompt = function () {
  
}

RepairDepot.prototype.Purchase = function () {
  
} 

// MINI MART
function MiniMart () {
   
}

MiniMart.prototype.MenuPrompt = function () {
   
}

MiniMart.prototype.Purchase = function () {
   
}
