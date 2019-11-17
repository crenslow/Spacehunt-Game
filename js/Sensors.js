  class Sensor {
    constructor( ship, map ) {
        this.map = map;
        this.ship = ship;
        this.level = 1;            
        this.ScanCP = 2;
    }
    
    use () {
        this.ship.supplies -= 2;        // consume 2% of supplies
        
    }

    getInfo () {
     
    }
    
    upgrade () {
        if ( this.level == 1 && this.ship.credit > 100 ) {
            this.ship.credit -= 100;
            this.level = 2;
            this.ScanCP = 5;
        }
    }
}
