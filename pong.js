var ctx = document.getElementById("myCanvas");
var c = ctx.getContext("2d");
//
//
//
var width = myCanvas.width/56;
var height = myCanvas.height/6;
var x1 = 5;
var x2 = myCanvas.width-5-width;
var y1 = myCanvas.height/2-height/2;
var y2 = myCanvas.height/2-height/2;
var bsize = myCanvas.width/40;
var bx = myCanvas.width/2-bsize/2;
var by = myCanvas.height/2-bsize/2;
var oxm = myCanvas.width/263;
var oym = myCanvas.width/299;
//original
var xm = oxm;
var ym = oym;
var p1 = 0;
var p2 = 0;
//points
var tw = myCanvas.width/80;
//textwidth
var tlt = myCanvas.width/16;
//textlenght
//
//
document.onkeydown = function(event) {myFunction(event);};
function myFunction(event) {
  if (event.key === "w") {
    y1 = y1 - height/2;
  }
  if (event.key === "s") {
    y1 = y1 + height/2;
  }
  if (y1 < 0) {
    y1 = 0;
  }
  if (y1 + height > myCanvas.height) {
    y1 = myCanvas.height - height;
  }
}
//
//
//
function text(x, y, t, tl, tr, m, bl, br, b) {
  if (t === 1) {
    c.clearRect(x, y, tlt, tw);
  }
  if (tl === 1) {
    c.clearRect(x, y, tw, tlt);
  }
  if (tr === 1) {
    c.clearRect(x+tlt-tw, y, tw, tlt);
  }
  if (m === 1) {
    c.clearRect(x, y+tlt-tw, tlt, tw);
  }
  if (bl === 1) {
    c.clearRect(x, y+tlt-tw, tw, tlt);
  }
  if (br === 1) {
    c.clearRect(x+tlt-tw, y+tlt-tw, tw, tlt);
  }
  if (b === 1) {
    c.clearRect(x, y+(tlt-tw)*2, tlt, tw);
  }
}
//
//
//
function drawp(x, y, num) {
  if (num === 0) {
    text(x, y, 1, 1, 1, 0, 1, 1, 1);
  }
  if (num === 1) {
    text(x, y, 0, 0, 1, 0, 0, 1, 0);
  }
  if (num === 2) {
    text(x, y, 1, 0, 1, 1, 1, 0, 1);
  }
  if (num === 3) {
    text(x, y, 1, 0, 1, 1, 0, 1, 1);
  }
  if (num === 4) {
    text(x, y, 0, 1, 1, 1, 0, 1, 0);
  }
  if (num === 5) {
    text(x, y, 1, 1, 0, 1, 0, 1, 1);
  }
  if (num === 6) {
    text(x, y, 1, 1, 0, 1, 1, 1, 1);
  }
  if (num === 7) {
    text(x, y, 1, 0, 1, 0, 0, 1, 0);
  }
  if (num === 8) {
    text(x, y, 1, 1, 1, 1, 1, 1, 1);
  }
  if (num === 9) {
    text(x, y, 1, 1, 1, 1, 0, 1, 1);
  }
}
//
//
//
function bat(x, y, sizex, sizey) {
  c.clearRect(x, y, sizex, sizey);
}
function ball(x, y, size,) {
  c.clearRect(x, y, size, size);
}
function moveball() {
  if (bx+bsize > myCanvas.width-5-width) {
    if (by > y2) {
      if (by + bsize < y2 + height) {
        xm = xm * -1;
      }
    }
  }
 
  if (bx < 5+width) {
    if (by > y1) {
      if (by + bsize < y1 + height) {
        xm = xm * -1;
      }
    }
  }
 
   
//   if (bx < 0) {
//     xm = xm * -1;
//   }
 
// 
// 
  if (by+bsize > myCanvas.height) {
    ym = ym*-1;
  }
 
  if (by < 0) {
    ym = ym*-1;
  }
 
  //moving
  bx = bx + xm;
  by = by + ym;
 
  //reset:
 
  if (bx>myCanvas.width) {
    bx = myCanvas.width/2-bsize/2;
    by = myCanvas.height/2-bsize/2;
    xm = oxm;
    ym = oym;
    p1 = p1 + 1;
  }
  if (bx+bsize < 0) {
    bx = myCanvas.width/2-bsize/2;
    by = myCanvas.height/2-bsize/2;
    xm = oxm;
    ym = oym;
    p2 = p2 + 1;
  }
}
function movep2() {
  if (by + bsize < myCanvas.height + height/2) {
    if (by + bsize/2 > y2 + height/2) {
      y2 = y2 + myCanvas.height/250;
    }
    if (by + bsize/2 < y2 + height/2) {
      y2 = y2 - myCanvas.height/250;
    }
  }
}
function draw() {
  c.fillRect(0, 0, myCanvas.width, myCanvas.height);
 
  drawp(myCanvas.width/4*1.5-tlt, 10, p1);
  drawp(myCanvas.width/4*2.5, 10, p2);
 
  bat(x1, y1, width, height);
 
  bat(x2, y2, width, height);
 
  moveball();
 
  movep2();
 
  ball(bx, by, bsize);
}
//
//
//
setInterval(draw, myCanvas.width/50);

