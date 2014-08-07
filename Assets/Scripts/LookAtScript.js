#pragma strict

public var target : Transform;
private var goToPlayer : boolean = true;
private var Spider : Spider;

function OnTriggerEnter(other : Collider)
{
   if (other.name == "Player1")
   {
   goToPlayer = false;
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
   Spider = GetComponent(Spider);
   Spider.moveSpeed = 7;
   Debug.Log(goToPlayer);
    var relativePos : Vector3 = target.position - transform.position;
    transform.rotation = Quaternion.LookRotation(relativePos);
    }
    else
    Spider.moveSpeed = 3;

    
}