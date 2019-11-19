function Sensors(ship,supplies, sensors_tpye, gameMap)
{
	supplies = supplies-2;
	len sensorText = document.getElementById("sensor_message").textContext
	sensorText = null;
	if(sensors_type == 1)  <!-- basic -->
	{
		var i;
		var j;
		for(obj in  gameMap){
			for(i=ship.x-2;i<ship.x+2;i++){
				for(j=ship.y-2;j<ship.y+2;j++){
					if(i==gameMap[obj].x && j==gameMap[obj].y){
						sensorText += gameMap[obj].name;
					}
					else
						break;
				}
			}
		}

	}
	else if(sensors_tpye == 2)// <!-- enhanced -->
	{
		var i;
		var j;
		for(obj in gameMap){
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

					if(i==gameMap[obj].x && j==gameMap[obj].y){
						sensorText += gameMap[obj].name;
					}
					else 
						break;
				}
			}
		}		
	}
}