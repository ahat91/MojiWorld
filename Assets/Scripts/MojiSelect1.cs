using UnityEngine;
using System.Collections;

public class MojiSelect1 : MonoBehaviour {

	void OnClick()
	{
		PlayerPrefs.SetString ("SelectedMoji", "Moji1");
		Application.LoadLevel("Level01");
	}
}
