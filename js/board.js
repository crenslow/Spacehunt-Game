<!-- //draws the map grid -->

var BOARD_CANVAS_CONTEXT = null; 

function initBoard() {
  var canvas = document.getElementById('canvas-board');
  canvas.setAttribute('width', '550'); 
  canvas.setAttribute('height', '550');
  if(canvas.getContext) {
    BOARD_CANVAS_CONTEXT = canvas.getContext('2d');
  }
}

function getBoardCanvasContext() {
  return BOARD_CANVAS_CONTEXT; 
}

function drawBoard() {

}
