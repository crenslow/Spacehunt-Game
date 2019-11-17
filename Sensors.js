<!-- SH-6 Sensors High-->
<!-- I want to see what located at nearby Celectial Points,so I Know where things are -->

<!-- IN PROGRESS>

function Sensors(currX,currY,supplies, sensors_tpye, Celestial_Map)
{
	alert("you deploys sensors for current cp");
	supplies = supplies*0.8; <!-- consumed 2% ?  -->

	if(sensors_type == 1)  <!-- basic -->
	{
		if(currX+2>=celestialX && CurrX-2<=celestialX && currY+2>=celestialY &&currY-2<=celestialY)
		{
			//check if (celestialX,celestialY) in Celestial_map
			//add all new (celestialX,celestialY) in Celestial_Map
		}

	}
	else if(sensors_tpye == 2) <!-- enhanced -->
	{
		if(currX+5>=celestialX && CurrX-5<=celestialX && currY+5>=celestialY &&currY-5<=celestialY)
		{
			//check if (celestialX,celestialY) in Celestial_map
			//add all new (celestialX,celestialY) in Celestial_Map
		}
	}
}

//how to get celestialX,celestialY form map
//how to check in celestial map
