function Update() {
    var level = Mathf.Abs(Mathf.Sin(Time.time * 0.5)) * 0.3;
    camera.backgroundColor = Color(level, level, level);
}
