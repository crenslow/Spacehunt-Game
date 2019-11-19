<!-- SH-10 Encountering an Abandoned Freighter  Low  -->
<!-- Storys: As a player, I want to encounter an abandoned
        Freighter drifting in space so I can take on additional supplies and energy  -->

function Freighter(energy,supplies)
{
	energy = energy + 10;
	supplies = supplies + 10;
	return {a1:energy,b1:supplies};
}

<!-- call fucntion -->
//var obj = Freighter(energy,supplies)
//energy = obj.a1;
//supplies = obj.b1;
//energy and supplies is global variable