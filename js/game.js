<!-- //place global variables here if needed -->

<!-- //to be updated once graphics are up -->
function initGame(newgame) {
  if(newgame) {
    HOME = false; 
    GAMEOVER = false; 
    
    var ctx = null; 
    var canvas = document.getElementById('canvas-panel-title-spacehunt');
    canvas.setAttribute('width', '38'); 
    canvas.setAttribute('height', '32');
    if(canvas.getContext) {
      ctx = canvas.getContext('2d'); 
    }
 }
    

<!-- //place holder parameters until movement system known -->
function winthegame(currX, currY, kolaX, kolaY){
  if(currX == kolaX && currY == kolaY)
  { 
    alert("Congrats, you found the Koca-Kola recipe and won the game!"); 
  }
  else{
    return 0; 
  }
}

function pauseGame() {

}

function resumeGame() {

}

function gameOver() {

}
