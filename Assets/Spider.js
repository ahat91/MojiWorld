﻿var Distance;
var moveSpeed : float = .10;
var num1: int = 0;
var num2: int = 1;

function Update () 
{




//   Attack();
  // yield WaitForSeconds(2.0);

var position: Vector3 = Vector3(num1, 0, 1);
   Debug.Log(position);
   transform.Translate(position * moveSpeed * Time.deltaTime);
   
}

function Attack()
{

num1 = Random.Range(-10.0, 10.0);
num2 = Random.Range(-10.0, 10.0);


}