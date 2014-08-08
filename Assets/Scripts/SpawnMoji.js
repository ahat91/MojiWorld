#pragma strict


var spawnMoji: GameObject;
var moji1: GameObject;
var moji2: GameObject;
var mojiChoice: String;


function Start () {

mojiChoice = PlayerPrefs.GetString ("SelectedMoji");

if (mojiChoice == "Moji1"){
spawnMoji = Instantiate(moji1, transform.position, transform.rotation);
}
if (mojiChoice == "Moji2"){
spawnMoji = Instantiate(moji2, transform.position, transform.rotation);
}

	
}

function Update () {

}