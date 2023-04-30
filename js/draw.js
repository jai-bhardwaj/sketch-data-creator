const draw = {};

draw.path = (ctx, path, color = "black") => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(...path[0]);
  for (const point of path) {
    const xMid = (point[0] + point[0]) / 2;
    const yMid = (point[1] + point[1]) / 2;
    const cpX1 = (xMid + point[0]) / 2;
    const cpX2 = (xMid + point[0]) / 2;
    ctx.quadraticCurveTo(cpX1, point[1], xMid, yMid);
    ctx.quadraticCurveTo(cpX2, point[1], point[0], point[1]);
  }
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
};

draw.paths = (ctx, paths, color = "black") => {
  for (const path of paths) {
    draw.path(ctx, path, color);
  }
};