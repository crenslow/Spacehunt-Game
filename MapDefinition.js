/*
    MapDefinition.js - Team GG

    This file defines the map object, which contains locations of 
    celestial locations in and around the pentium system.
    TODO: positions are currently placeholders
    TODO: add methods: 
    TODO: add asteroids, space stations
*/

var maxX = 128;
var maxY = 128;
var OldSpice = { x : 64, y : 64 };

var artifacts = { //artifacts here are "bodies on the board that the OldSpice can collide with"
                  //including planets, asteroids, etc.
    //parameters  
    
    Pentium_1 : { x : 4, y : 64 },
    Pentium_2 : { x : 11, y : 11 },
    Pentium_3 : { x : 11, y : 11 },
    Pentium_4 : { x : 11, y : 11 }, 
    Pentium_5 : { x : 11, y : 11 },
    Pentium_6 : { x : 11, y : 11 },
    Pentium_7 : { x : 11, y : 11 },

    Ryzen :     { x : 64, y : 64 },
    Xeon :      { x : 82, y : 82 },
    Celeron :   { x : 12, y : 12 },
    
    // Methods:

    // Returns the first object in artifacts with x,y coords matching spaceObj
    collision( spaceObj )
    {
        for(A in artifacts)
        {
            if(spaceObj.x == artifacts[A].x && spaceObj.y == artifacts[A].y)
                return A;
        }
        return false;
    }

    //method to add asteroids
    //t

};

console.log( artifacts.collision(OldSpice) );
console.log(OldSpice.x);
console.log( artifacts.Pentium_1.x );
