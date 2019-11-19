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
    
    move(direction, distance) {	/*This function moves the ship in one of the four
    cardinal directions (by inputting N, S, E, or W in the direction argument) a
    number of units equal to distance, and decreases the ship's energy and supply
    levels. If the edge of the map is hit, the ship warps to the other edge of
    the map and stops moving. It consumes 2% supplies no matter what and consumes
    a different amount of energy depending on the ship's engine: 10 * distance for
    a basic engine, 5 * distance for a medium engine, and 1 * distance for an
    advanced engine. (It consumes 5 times the amount of energy if the ship is
    damaged) */
    
        if (direction == 'N') this.y += eval(distance);
        else if (direction == 'W') this.x -= eval(distance);
        else if (direction == 'E') this.x += eval(distance);
        else this.y -= eval(distance);
        
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

		let max = window.gameData.mapsize;
		if (!window.gameData.randomWormhole) {
			if (this.y >= max) this.y = 0;
			else if (this.y < 0) this.y = eval(max-1);
			else if (this.x >= max) this.x = 0;
			else if (this.x < 0) this.x = (max - 1);
		}
		else { //This will be for when we integrate random wormhole behavior
			
		}

        updateHeading();
        updateLevels();
	if(this.supplies < 1){
		gameObj.GameOver("Your supplies have run dry.");	
	}
	if(this.energy < 1){
		gameObj.GameOver("Your energy has run out.");
        }
        window.gameMap.move(this.x, this.y);
		
		/*I (Josh) am temporarily putting this block of code in comments to
		discuss it during tomorrow's meeting (11/19/19)
        setTimeout(function () {
           if ((this.energy <= 0 && this.normalPlay)) {
                gameObj.GameOver("Your ship has run out of energy and is now adrift in space!");
            }
            else if (this.supplies <= 0 && this.normalPlay) {
                gameObj.GameOver("Your crew has run out of supplies and have died!" );
            }

            // check out any objects events
            if(!gameObj.isGameover) {
                ctrecipe.tick();
                updateHeading();
                updateLevels();
            }
        }, 1000 ); */
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

	

    logLevels () {
       
    }
    
    fixEngine() {
       
    }
}
