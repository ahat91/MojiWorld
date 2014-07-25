var isChoice=false;

function OnMouseEnter(){
//change text color
renderer.material.color=Color.gray;
}

function OnMouseExit(){
//change text color
renderer.material.color=Color.white;
}

function OnMouseUp(){

if (isChoice==true) {
PlayerPrefs.SetString("Moji","Moji2");
//Load Level One
Application.LoadLevel(1);
}

}
