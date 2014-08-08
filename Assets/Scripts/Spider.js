
//vartest
var num1: int = 0;
var num2: int = 1;
var alphaX: double = .5;
var Distance;
public var moveSpeed : float = 3;
var turnSpeed : float = 50;
public var Look : LookAtScript;
/*
var randomX = Random.RandomRange(0,1);
var randomZ = Random.RandomRange(0,1);
var randomRotation = Random.RandomRange(0,100);
var randomRot: int;
*/
function Start()
{
var pos: Vector3 =  new Vector3 (Random.Range(0, 20),1,Random.Range(0, 20));  // Randomize the spawnPoints to instantiate enemy at next.
 
      transform = pos; 
}
function Update () 
{

Look = GetComponent("LookAtScript");

/*
randomRotation = Random.RandomRange(0,100);
randomX = Random.RandomRange(-4,4);
randomZ = Random.RandomRange(0,4);
if (randomRotation <= 5)
	randomRot = 20;
else
	randomRot = 0;
	*/
	
animation.Play(Look.Action);
var position: Vector3 = Vector3(0,0,moveSpeed);
   transform.Translate(position * Time.deltaTime);
 //transform.rotation = Quaternion.RotateTowards(transform.rotation, target.rotation, step);



//   Attack();
  // yield WaitForSeconds(2.0);



   
}

function Attack()
{

//num1 = Random.Range(-10.0, 10.0);
//num2 = Random.Range(-10.0, 10.0);


}