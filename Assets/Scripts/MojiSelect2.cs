using UnityEngine;
using System.Collections;

public class MojiSelect2 : MonoBehaviour {

	void OnClick()
	{
		PlayerPrefs.SetString ("SelectedMoji", "Moji2");
		Application.LoadLevel("Level01");
	}
}
