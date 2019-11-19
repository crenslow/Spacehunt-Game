//<!-- SH-6 Sensors High-->
//<!-- I want to see what located at nearby Celectial Points,so I Know where things are -->

//<!-- IN PROGRESS>
function Sensors2(Ship, Celestial_Map)
{
    let sensorText = document.getElementById("sensor_message").textContent;
    sensorText = null;
    for(obj in Celestial_Map)
    {
        if (distance(Ship, Celestial_Map[obj]) < 100)
        {
            sensorText += Celestial_Map[obj].name;
        }
    }
}


function distance(obj1, obj2)
{
    let dist_sq = Math.abs(obj1.x - obj2.x) + Math.abs(obj1.y - obj2.y);
    return Math.sqrt(dist_sq);
}
function Sensors(currX,currY,supplies, sensors_tpye, Celestial_Map)
{
	alert("you deploys sensors for current cp");
	supplies = supplies-2;
	if(sensors_type == 1)//  <!-- basic -->
	{
		var i;
		var j;
		for(i=currX-2;i<currX+2;i++){
			for(j=currY-2;j<currY+2;j++){
				if(i==celestialX && j==celestialY){
					//check if (celestialX,celestialY) in Celestial_map
					//add all new (celestialX,celestialY) in Celestial Map
				}
				else
					break;
			}
		}

	}

	else if(sensors_tpye == 2)// <!-- enhanced -->
	{
		var i;
		var j;
		for(i=currX-5;i<currX+5;i++){
			for(j=currY-5;j<currY+5;j++){
				if(i==currX-5 && j==currY+4)
					continue;
				if(i==currX-5 &&j==currY+5)
					continue;
				if(i==currX-5 &&j==currY-4)
					continue;
				if(i==currX-5 &&j==currY-5)
					continue;
				if(i==currX+5 && j==currY+4)
					continue;
				if(i==currX+5 &&j==currY+5)
					continue;
				if(i==currX+5 &&j==currY-4)
					continue;
				if(i==currX+5 &&j==currY-5)
					continue;
				if(i==currX-4 &&j==currY+5)
					continue;
				if(i==currX-4 &&j==currY-5)
					continue;
				if(i==currX+4 &&j==currY+5)
					continue;
				if(i==currX+4 &&j==currY-5)
					continue;

				if(i==celestialX && j==celestialY){

					//check if (celestialX,celestialY) in Celestial_map
					//add all new (celestialX,celestialY) in Celestial Map
				}
				else 
					break;
			}
		}		
	}
}

//how to get celestialX,celestialY form map
//how to check in celestial map
//consider different direction
//every direction search 5 ,like a circle
