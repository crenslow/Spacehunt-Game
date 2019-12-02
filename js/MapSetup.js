class GameMap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        for(var i = 0; i < size; ++i) {      
            this.map[i] = new Array(size);
        }
    }

    add(object, x, y) {
        let max = this.map.length;
        
        // if the coordinates are out of bounds, don't add the object
        if(x >= max || y >= max || x < 0 || y < 0) 
            return false;
        
        // if the cell already has an object, don't add the new object
        if(this.contents(x, y)) 
            return false;
        
        // otherwise, add the object
        if(this.contents(x,y)) 
            return false; 
        this.map[x][y] = object; 
        
        if(!object.isHidden) {
            var objDOM = document.querySelector('#c' + x + '-' + y + ' .map-obj'),
                objName = (object.name != undefined ) ? object.name : object.objType;
            objDOM.className += ' showed-obj ' + object.objType;
            objDOM.setAttribute( 'alt', objName );
        }

        return true;
    }

    remove(x, y) {
        if(this.hasObject(x, y)) {
            delete this.map[x][y];
            document.querySelector( '#c' + x + '-' + y + ' .map-obj' ).className = 'map-obj';
            return true;
        }
        return false;
    }

    contents(x, y) {
        let max = this.map.length;
        if(x >= max || y >= max || x < 0 || y < 0) 
            return null;
        return this.map[x][y];
    }
    
    hasObject(x, y) {
        let max = this.map.length;
        if(x >= max || y >= max || x < 0 || y < 0) 
            return false;
        return Boolean(this.map[x][y]);
    }
    
    /* build 128 x 128 map */
    renderMap(shipX, shipY) {
        var outer = document.querySelector('#map-wrapper');

        this.mapContainer = document.createElement('table');

        outer.appendChild(this.mapContainer);
        this.mapContainer.className = 'map-table table table-bordered';

        for(var row = (this.size - 1); row >= 0; --row) {
            var mapRow = document.createElement("tr");
            mapRow.className = 'map-row';
            mapRow.setAttribute('id', 'row-' + row);
            for(var col = 0; col < this.size; ++col) {
                var mapCell = document.createElement('td'),
                    mapObj = document.createElement('div');
                mapCell.className = 'map-cell';
                mapCell.setAttribute('id', 'c' + col + '-' + row);
                mapObj.className = 'map-obj';
                mapCell.appendChild(mapObj);
                mapRow.appendChild(mapCell);
            }
            this.mapContainer.appendChild(mapRow);
        }

        if(shipX != undefined) {
            this.move( shipX, shipY, null, true );
        }
    }

   /* map moves with the ship; that way we don't have a tiny ship and a big map 
   taking up the whoel screen; tutorial also found online */
    move(x, y, callB, noAnimate) {
        // more info: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        // more info: https://www.youtube.com/watch?v=JlgLDfINXvY
        if (!this.mapCellSize) 
        {
            this.mapCellSize = document.querySelector('#c0-0').offsetWidth;
        }

        var targetX = -1 * x * this.mapCellSize,
            targetY = 1 * y * this.mapCellSize;

        if (noAnimate || noAnimate == 1) { 
            this.mapContainer.style.transition = 'none'
        }
        else {
            this.mapContainer.style.transition = ''
        }

        this.mapContainer.style.transform = 'translate(' + targetX + 'px,' + targetY + 'px)';
    }

    /*This function checks for asteroids between start and end when the ship moves.
    theShip is the OldSpice (used to change its position and damage values in the event that
    there IS an asteroid), theShip.x or y is the ship's starting coordinate, end is the ship's
    ending coordinate, and xy is either 'X' if the ship is moving along the x-axis
    or 'Y' if it's moving along the y-axis. This function will automatically update the
    ship's damage value to damaged if it wasn't before (and will end the game if it's
    already damaged), change the ship's position to that of the first asteroid it hits, and
    removes that asteroid from the map. Returns true if an asteroid was hit and false if not*/
        //WIP
        asteroidCheck(theShip, end, xy) {
            if (xy == 'X' && theShip.x < end) {
                for (let i = theShip.x; i <= end && i < this.size; ++i) {
                    if (this.contents(i, theShip.y) != undefined && this.contents(i, theShip.y).objType == "Asteroid") {
                        if (theShip.isDamaged) {
                            gameObj.GameOver("Your ship hit an asteroid and exploded into bits!");
                            return true;
                        }
                        alert("Your ship hit an asteroid and took damage!");
                        theShip.isDamaged = true;
                        theShip.x = i;
                        this.remove(i, theShip.y);
                        return true;
                    }
                }
            }
            else if (xy == 'X' && end < theShip.x) {
                for (let i = theShip.x; i >= end && i >= 0; --i) {
                    if (this.contents(i, theShip.y) != undefined && this.contents(i, theShip.y).objType == "Asteroid") {
                        if (theShip.isDamaged) {
                            gameObj.GameOver("Your ship hit an asteroid and exploded into bits!");
                            return true;
                        }
                        alert("Your ship hit an asteroid and took damage!");
                        theShip.isDamaged = true;
                        theShip.x = i;
                        this.remove(i, theShip.y);
                        return true;
                    }
                }
            }
            else if (xy == 'Y' && theShip.y < end) {
                for (let i = theShip.y; i <= end && i < this.size; ++i) {
                    if (this.contents(theShip.x, i) != undefined && this.contents(theShip.x, i).objType == "Asteroid") {
                        if (theShip.isDamaged) {
                            gameObj.GameOver("Your ship hit an asteroid and exploded into bits!");
                            return true;
                        }
                        alert("Your ship hit an asteroid and took damage!");
                        theShip.isDamaged = true;
                        theShip.y = i;
                        this.remove(theShip.x, i);
                        return true;
                    }
                }
            }
            else if (xy == 'Y' && end < theShip.y) {
                for (let i = theShip.y; i >= end && i >= 0; --i) {
                    if (this.contents(theShip.x, i) != undefined && this.contents(theShip.x, i).objType == "Asteroid") {
                        if (theShip.isDamaged) {
                            gameObj.GameOver("Your ship hit an asteroid and exploded into bits!");
                            return true;
                        }
                        alert("Your ship hit an asteroid and took damage!");
                        theShip.isDamaged = true;
                        theShip.y = i;
                        this.remove(theShip.x, i);
                        return true;
                    }
                }
            }

            return false;
        }
}
