<!-- SH-6 Sensors High-->
<!-- I want to see what located at nearby Celectial Points,so I Know where things are -->

<!-- IN PROGRESS>

function Sensors(currX,currY,supplies, sensors_tpye, Celestial_Map)
{
	alert("you deploys sensors for current cp");
	supplies = supplies*0.8; <!-- consumed 2% ?  -->

	if(sensors_type == 1)  <!-- basic -->
	{
		for X in range(currX-2,currX+2):
			for Y in range(currY-2,currY+2):
				if (X == celestialX && Y == celestialY):
					//check if (celestialX,celestialY) in Celestial_map
					//add all new (celestialX,celestialY) in Celestial Map

	}

	else if(sensors_tpye == 2) <!-- enhanced -->
	{
		for X in range(currX-5,currX+5):
			for Y in range(currY-5,currY+5):
				if (X == celestialX && Y == celestialY):
					//check if (celestialX,celestialY) in Celestial_map
					//add all new (celestialX,celestialY) in Celestial Map		
	}
}

//how to get celestialX,celestialY form map
//how to check in celestial map
//consider different direction(if direction is 30,45,60 degree have one node shouldn't be search)
//every direction search 5 ,like a circle
