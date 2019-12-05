class Sensor {
	constructor( ship, map ) {
        	this.ship = ship;           //ship
        	this.map = map;             //gameMap 
		this.level = 1;             // sensor level
        	
    	}
    	getInfo () {
        	if ( this.level == 1 ) {
	        	return 'Basic Sensor';
        	}
        	else {
            		return 'Enhanced Sensor';
        	}
    	}
    	upgrade () {
    		if ( this.level == 1 && this.ship.credit > 100 ) {
       		this.ship.credit -= 100;
            		this.level = 2;
            	}
        	else
            		alert("you cannot update");  
    	}
    	use(){
    		this.ship.supplies -= 2; //every time use 2 supplies
    		if(this.level == 1){
       		var i,j,k;

        		var nearCP = []; //put all the cp will scan
        		var count = 0;
       		var anyFound = 0;
			var found = this.map.map[this.ship.x][this.ship.y]; //object

        		for(i=this.ship.x-2;i<=this.ship.x+2;i++){
		  		for(j=this.ship.y-2;j<=this.ship.y+2;j++){
					if(i>=0 && j>=0 &&i<=127 &&i<=127){
          		  			nearCP[count++] = {
           			   			x: i,
           			   			y: j
           		 			}     
					}
       		  	}

			}

       		for(k = 0;k<nearCP.length;++k){  //display if nearcp have celestial objects
         			var searchX = nearCP[k].x;
          			var searchY = nearCP[k].y;
				//alert("x = "+searchX +"y= "+ searchY);//just try
          			var duplicate = false;  //cheack if already found
        	        	found = this.map.map[searchX][searchY];
				
				if(found){
					anyFound =1; //found one
                                                          					                         gazePopulate(found,searchX,searchY,true); //add location to Celestial Gazetteer

					alert("found "+found.objType);
					if(found.objType === 'Planet'){
						alert("planet "+ found.name + " at (" + searchX + ", " + searchY + ") " );
					}
					else{
						alert( found.objType + " at (" + searchX + ", " + searchY + ") ");
						
						CelestialVisility(this.map,found,searchX,searchY); //make HIdden celestial become vistity
											}
					
				}

		 	}//end of for loop

                 	if(!anyFound){
                      	alert("There is nothing found in the current CP!");
                 	}
                 	return this.map;


      		}//end of if level==1

      		if(this.level == 2){
       		var i,j,k;
        		var nearCP = [];
        		var count= 0;
       		var anyFound = 0;
     			for(i=ship.x-5;i<ship.x+5;i++){
                    	for(j=ship.y-5;j<ship.y+5;j++){
             		  		if(i==ship.x-5 && j==ship.y+4)
						continue;
			  		if(i==ship.x-5 &&j==ship.y+5)
						continue;
			  		if(i==ship.x-5 &&j==ship.y-4)
						continue;
			  		if(i==ship.x-5 &&j==ship.y-5)
						continue;
			  		if(i==ship.x+5 && j==ship.y+4)
						continue;
			  		if(i==ship.x+5 &&j==ship.y+5)
						continue;
			  		if(i==ship.x+5 &&j==ship.y-4)
						continue;
			  		if(i==ship.x+5 &&j==ship.y-5)
						continue;
			  		if(i==ship.x-4 &&j==ship.y+5)
						continue;
			  		if(i==ship.x-4 &&j==ship.y-5)
						continue;
			  		if(i==ship.x+4 &&j==ship.y+5)
						continue;
			  		if(i==ship.x+4 &&j==ship.y-5)
						continue;
					if(i>=0 && j>=0 &&i<=127 &&i<=127){

             	          			nearCP[count++] = {
           		  				x: i,
          						y: j
          		 			}      
					}
		  		}
              		}
              	for(k =0;k<nearCP.length;k++){
         			var searchX = nearCP[k].x;
          			var searchY = nearCP[k].y;
          			var duplicate = false;
        	        	var found = this.map.map[searchX][searchY];
        							
				if(found){
					anyFound =1; //found one
					gazePopulate(found,searchX,searchY,true); //add location to Celestial Gazetteer

					alert("found "+found.objType);
					if(found.objType === 'Planet'){
						alert("planet "+ found.name + " at (" + searchX + ", " + searchY + ") " );
					}
					else{
						alert( found.objType + " at (" + searchX + ", " + searchY + ") ");
						
						CelestialMap(found); //add to map
						
					}

				}
				
				
		 	}//end of for loop


                 	if(!anyFound){
                      		alert("There is nothing found in the current CP!");
                 	}
                 	return nearCP;
	  	}//end of level==2


 	}//end of use() function
 }//end of class

