function GetDistanceBetweenPoints(v1, v2) {
  let dx = v1.x - v2.x;
  let dy = v1.y - v2.y;
  let dz = v1.z - v2.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function GetDistanceBetweenPointsXZ(v1, v2) {
  let v13f = new Vector3f(v1.x, 0.0, v1.z);
  let v14f = new Vector3f(v2.x, 0.0, v2.z);
  return GetDistanceBetweenPoints(v13f, v14f);
}

function GetDistanceBetweenPointsXY(v1, v2) {
  let v13f = new Vector3f(v1.x, v1.y, 0.0);
  let v14f = new Vector3f(v2.x, v2.y, 0.0);
  return GetDistanceBetweenPoints(v13f, v14f);
}
