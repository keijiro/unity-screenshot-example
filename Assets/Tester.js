#pragma strict

function Update() {
    if (Input.GetMouseButtonDown(0)) Screenshot.Capture();
}

function OnGUI() {
    GUI.Label(Rect(0, 0, Screen.width, Screen.height), "Tap screen to take a screenshot.");
}
