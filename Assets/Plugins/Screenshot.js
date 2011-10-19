#pragma strict

import System.Runtime.InteropServices;

#if UNITY_IPHONE && !UNITY_EDITOR

@DllImportAttribute("__Internal") static private function _ScreenshotWriteToAlbum(path : String) {}

static function Capture() {
    Application.CaptureScreenshot("screenshot.png");
    (new GameObject()).AddComponent.<Screenshot>();
}

function Start() {
    yield;
    _ScreenshotWriteToAlbum(Application.persistentDataPath + "/screenshot.png");
    Destroy(gameObject);
}

#else

static function Capture() {
    Application.CaptureScreenshot("screenshot.png");
}

#endif
