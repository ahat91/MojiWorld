
var num1: int = 0;
var num2: int = 1;
var alphaX: double = .5;
var Distance;
var moveSpeed : float = .10;
var turnSpeed : float = 50;
/*
var randomX = Random.RandomRange(0,1);
var randomZ = Random.RandomRange(0,1);
var randomRotation = Random.RandomRange(0,100);
var randomRot: int;
*/

function Update () 
{
/*
randomRotation = Random.RandomRange(0,100);
randomX = Random.RandomRange(-4,4);
randomZ = Random.RandomRange(0,4);
if (randomRotation <= 5)
	randomRot = 20;
else
	randomRot = 0;
	*/
	
animation.Play("Walk");
var position: Vector3 = Vector3(0, 0, 3);
   transform.Translate(position * moveSpeed * Time.deltaTime);
 //transform.rotation = Quaternion.RotateTowards(transform.rotation, target.rotation, step);



//   Attack();
  // yield WaitForSeconds(2.0);



   
}

function Attack()
{

num1 = Random.Range(-10.0, 10.0);
num2 = Random.Range(-10.0, 10.0);


}