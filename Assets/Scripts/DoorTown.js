function OnTriggerEnter (other : Collider)
{
	if (other.name == "Player1")
		Application.LoadLevel("Level02"); 
	

}