var isQuit=false;

function OnMouseEnter(){
//change text color
renderer.material.color=Color.gray;
}

function OnMouseExit(){
//change text color
renderer.material.color=Color.white;
}

function OnMouseUp(){
//is this quit
if (isQuit==true) {
//quit the game
Application.Quit();
}
else {
//load level
Application.LoadLevel(1);
}
}
