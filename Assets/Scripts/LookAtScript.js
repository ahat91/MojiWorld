#pragma strict

public var target : Transform;
private var goToPlayer : boolean = true;
public var Spider : Spider;
public var Action : String;

Action = "Walk";
function OnTriggerExit (other : Collider)
{
if (other.name == "Player1")
Action = "Walk";
}
function OnTriggerEnter(other : Collider)
{
   if (other.name == "Player1")
   {
   Action = "Attack";
   goToPlayer = false;
   Debug.Log("I am happy you are here");
   }
   if (other.name == "SideWall")
   {
   Debug.Log("It hit the wall");
   var relativePos : Vector3 = target.position - transform.position;
    transform.rotation = Quaternion.LookRotation(relativePos);
  //Vector3 relativePos =  transform.position ;
   //transform.RotateAround(transform.position, 75);
}
}
function Update () 
{
   if (goToPlayer)
   {
   //Spider = GetComponent("Spider");
   
   Spider.moveSpeed = 7;
   Debug.Log(Spider.moveSpeed);
    var relativePos : Vector3 = target.position - transform.position;
    transform.rotation = Quaternion.LookRotation(relativePos);
    }
    else
    Spider.moveSpeed = 3;
    Debug.Log(Spider.moveSpeed);

    
}