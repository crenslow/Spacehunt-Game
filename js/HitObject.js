/* sees if OldSpice encounters any objects */
var Collision = function (x, y) {
    if (Collision.caller) {
        let colObjCheck = window.gameMap.contents( x, y );
        if (colObjCheck) {
            colObjCheck.Collide();
        }
    }
}
