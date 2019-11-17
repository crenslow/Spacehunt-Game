/* 2d array */
class GameMap {
    constructor(size) {
        this.size = size;
        this.map = new Array( size );
        for (var i = 0; i < size; ++i) {     
            this.map[i] = new Array(size);
        }
    }

    /* not yet implemented */
    add(object, x, y) {
        return true;
    }

    /* not yet implemented */
    remove(x, y) {
        return true;
    }

    /* contents of cell at (x, y) */
    contents ( x, y ) {
        let max = this.map.length;
        if ( x >= max || y >= max || x < 0 || y < 0 ) return null;
        return this.map[x][y];
    }
   
    /* does the cell have any objects check */
    hasObject ( x, y ) {
        let max = this.map.length;
        if ( x >= max || y >= max || x < 0 || y < 0 ) return false;
        return Boolean( this.map[x][y] );
    }
    
    /* build 128 x 128 map */
    renderMap ( shipX, shipY ) {
        var outer = document.querySelector( '#map-wrapper' );

        this.mapContainer = document.createElement( 'table' );

        outer.appendChild( this.mapContainer );
        this.mapContainer.className = 'map-table table table-bordered';

        for ( var row = ( this.size - 1 ); row >= 0; --row ) {
            var mapRow = document.createElement( "tr" );
            mapRow.className = 'map-row';
            mapRow.setAttribute( 'id', 'row-' + row );
            for ( var col = 0; col < this.size; ++col ) {
                var mapCell = document.createElement( 'td' ),
                    mapObj = document.createElement( 'div' );
                mapCell.className = 'map-cell';
                mapCell.setAttribute( 'id', 'c' + col + '-' + row );
                mapObj.className = 'map-obj';
                mapCell.appendChild( mapObj );
                mapRow.appendChild( mapCell );

            }
            this.mapContainer.appendChild( mapRow );
        }

        if ( shipX != undefined ) {
            this.move( shipX, shipY, null, true );
        }
    }

   /* map moves with the ship */
    move ( x, y, callB, noAnimate ) {
        if ( !this.mapCellSize ) {
            this.mapCellSize = document.querySelector( '#c0-0' ).offsetWidth;
        }

        var targetX = -1 * x * this.mapCellSize,
            targetY = 1 * y * this.mapCellSize;

        if ( noAnimate || noAnimate == 1 ) { // without animate
            this.mapContainer.style.transition = 'none'
        }
        else {
            this.mapContainer.style.transition = ''
        }

        this.mapContainer.style.transform = 'translate(' + targetX + 'px,' + targetY + 'px)';

        if ( typeof callB == 'function' ) {
            setTimeout( () => {
                callB();
            }, 1000 );
        }
    }

    /* not implemented yet, check for asteroid function maybe? */
    checkAsteroidOnWay ( startX, startY, endX, endY ) {
        return true;
    }
}
