class Ship {
    constructor(xi, yi, energy, supplies, credit, engineLv, isDamaged, normalPlay) {
        this.x = xi;
        this.y = yi;
        this.energy = energy;
        this.supplies = supplies;
        this.credit = credit;
        this.engineLv = engineLv;         
        this.isDamaged = isDamaged;
        this.normalPlay = normalPlay;
        this.recipe = false;
        this.sensor = new Sensor( this, window.gameMap );
        this.sensorDOM = document.querySelector( '#sensor' );
        this.shipIcon = document.querySelector( '.old-spice' );
        this.shipWrapper = document.querySelector( '#ship-wrapper' );
        this.messageBoard = document.querySelectorAll( "#message-board" )[0];
    }
    
    move(distance, degrees) {
        let radians = degrees * ( Math.PI / 180 ),
            mapsize = window.gameMap.size,
            oldX = this.x,
            oldY = this.y,
            midwayAsteroid;

        this.x += Math.round( distance * Math.cos( radians ) );
        this.y += Math.round( distance * Math.sin( radians ) );

        this.supplies -= 2;

        switch ( this.engineLv ) {
            case 1:
                this.energy -= ( this.isDamaged ) ? 50 * distance : 10 * distance;
                break;
            case 2:
                this.energy -= ( this.isDamaged ) ? 25 * distance : 5 * distance;
                break;
            case 3:
                this.energy -= ( this.isDamaged ) ? 5 * distance : distance;
                break;
        }

        // update screen new heading and levels before checking game ove or collision
        // so user can see current status before game over
        updateHeading();
        updateLevels();

        this.updateShipHeading(degrees);
        window.gameMap.move(this.x, this.y);

        setTimeout(function () {
            if ((window.oldSpice.energy <= 0 && window.oldSpice.normalPlay)) {
                gameObj.GameOver("Your ship has run out of energy and is now adrift in space!");
            }
            else if (window.oldSpice.supplies <= 0 && window.oldSpice.normalPlay) {
                gameObj.GameOver("Your crew has run out of supplies and have died!" );
            }
            else if (window.oldSpice.x >= mapsize || window.oldSpice.y >= mapsize || window.oldSpice.x < 0 || window.oldSpice.y < 0) {
                window.boundary.Collide();
                updateHeading();
                updateLevels();
                window.oldSpice.hide();
                setTimeout(() => {
                    window.gameMap.move(window.oldSpice.x, window.oldSpice.y, (( s ) => {
                        return () => { s.show(); };
                    } )(window.oldSpice));
                }, 200 );
            }

            // check out any objects events
            if(!gameObj.isGameover) {
                ctrecipe.tick();
                updateHeading();
                updateLevels();
            }
        }, 1000 );
    }

    hide() {
    
    }

    show() {
     
    }

    updateShipHeading(degree) {
     
    }

    scan() {
      
    }

    getEngineInfo() {
        switch (this.engineLv) {
            case 1:
                return "Basic";
            case 2:
                return "DeNiro";
            case 3:
                return "Mucho-DeNiro";
            default:
                return "No Engine";
        }
    }

    //Returns a string with the resource lacking or return “OK” if the levels are not empty
    checkLevels() {
        if ( this.credits < 1 ) {
            return "Credits depleted.";
        }
        else if ( this.energy < 1 && normalPlay ) {
            return "Energy depleted, game over!";
        }
        else if ( this.supplies < 1 && normalPlay ) {
            return "Supplies depleted, game over!";
        }
        else {
            return "Levels are sufficient.";
        }
    }

    logLevels () {
       
    }
    
    fixEngine() {
       
    }
}
