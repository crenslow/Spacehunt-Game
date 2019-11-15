<!--- //Function to update energy after movement --->


function UpdateEnergy(energy, distance){
	
	var decrease = distance * 10;
	
	energy -= decrease;

	return energy;

}
