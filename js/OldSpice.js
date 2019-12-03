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
    damaged.) If distance is 0 or less, the function returns without doing anything*/

	let startX = this.x;
	let startY = this.y;

        if (distance <= 0) return;
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

        if (direction == 'N' && !window.gameMap.asteroidCheck(this, this.y+eval(distance),'Y')) this.y += eval(distance);
        else if (direction == 'W' && !window.gameMap.asteroidCheck(this, this.x-eval(distance),'X')) this.x -= eval(distance);
        else if (direction == 'E' && !window.gameMap.asteroidCheck(this, this.x+eval(distance),'X')) this.x += eval(distance);
        else if (direction == 'S' && !window.gameMap.asteroidCheck(this, this.y-eval(distance),'Y')) this.y -= eval(distance);

	if (direction == 'N')
		window.gameMap.meteorCheck(this, startY,'Y');
        else if (direction == 'W')
		window.gameMap.meteorCheck(this, startX,'X');
        else if (direction == 'E')
		window.gameMap.meteorCheck(this, startX,'X');
        else if (direction == 'S')
		window.gameMap.meteorCheck(this, startY,'Y');

		let max = window.gameData.mapSize;
		if (!window.gameData.randomWormhole) {  //If wormhole behavior is set to fixed, the ship just flips to the
			if (this.y >= max) this.y = 0;      //opposite border
			else if (this.y < 0) this.y = eval(max-1);
			else if (this.x >= max) this.x = 0;
			else if (this.x < 0) this.x = (max - 1);
		}
		else {    //If wormhole behavior is set to random, the ship's x and y coordinates are set randomly
            if (this.y >= max || this.y < 0 || this.x >= max || this.x < 0) {
                this.y = Math.ceil(Math.random() * max);
                this.x = Math.ceil(Math.random() * max);
                alert("You've been caught in a wormhole and ended up somewhere random!");
            }
		}
	   var BadMaxret = BadMax(this.supplies, this.credit);
	   this.supplies = BadMaxret[0];
	   this.credit = BadMaxret[1];
		checkLocation();
	    
    var Fret = Freighter(this.energy, this.supplies);
	if(Fret != undefined){
		this.energy = Fret[0];
		this.supplies = Fret[1];
	}
	  
	/*
        updateHeading();
        updateLevels();
	*/
	    
    // check for space stations
    var Stat1 = Station1(this.credit); 
    this.credit = Stat1[0]; 
	    
    var Stat2 = Station2(this.credit); 
    this.credit = Stat2[0]; 
	    
    var Stat3 = Station3(this.credit);
    this.credit = Stat3[0];
	    
	updateHeading();
        updateLevels();


		//Check game over conditions
	   if(this.supplies < 1){
	       gameObj.GameOver("Your supplies have run dry.");
	   }
	   if(this.energy < 1){
	       gameObj.GameOver("Your energy has run out.");
       }

        window.gameMap.move(this.x, this.y);
    }

    hide() {

    }

    show() {

    }


    scan() {
		setTimeout( ( ( s ) => {
            return () => {
                s.sensor.use();
            };
        } )( this ), 500 );


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
