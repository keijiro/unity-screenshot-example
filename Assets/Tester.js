#pragma strict

function OnGUI() {
    if (GUI.Button(Rect(0, 0, Screen.width / 2, 50), "Screenshot")) {
        Screenshot.Capture();
    }
}
