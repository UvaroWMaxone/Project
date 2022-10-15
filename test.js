let c = document.querySelector('canvas');
let ctx = c.getContext('2d');

// центровочка
ctx.translate(c.width/2, c.height/2)
   
// сетка
ctx.beginPath();
for (let x = -3; x <3; x++) {
  ctx.moveTo(x*z, -c.height/2);
  ctx.lineTo(x*z, c.height/2);
  ctx.moveTo(-c.width/2, x*z);
  ctx.lineTo(c.width/2, x*z);
}
ctx.stroke();
