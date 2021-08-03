var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverWidth = 100;
var roverHeight = 90;
var roverX = 10;
var roverY = 10;
var BGimg = "mars.jpg";
var rover_img = "rover.png";
function upload_BG(){
 ctx.drawImage(BGimg,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,roverX,roverY,roverWidth,roverHeight);
}
function add(){
BGimg_imgTag = new Image();
BGimg_imgTag.onLoad = upload_BG();
BGimg_tag.src= BGimg;
//space
rover_img_imgTag = new Image();
rover_img_imgTag.onLoad =uploadRover();
rover_img_tag.src= rover_img;
}
window.addEventListener("keydown",keydown);
function keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38') {
        up();
        console.log("up");
    }
    if (keyPressed=='40') {
        down();
        console.log("down");
    }
    if (keyPressed=='37') {
        left();
        console.log("left");
    }
    if (keyPressed=='39') {
        right();
        console.log("right");
    }
}