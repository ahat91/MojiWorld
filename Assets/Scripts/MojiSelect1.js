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
PlayerPrefs.SetInt("Moji", 1);
PlayerPrefs.Save();
//Load Level One
Application.LoadLevel(1);
}

}
