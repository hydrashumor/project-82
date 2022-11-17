var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var radius = "20";
var width = "20";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_postition_of_mouse_x = e.clientX - canvas.offsetleft;
current_postition_of_mouse_y = e.clientY -canvas.offsetTop;

if(mouseEvent == "mousedown"){
    console.log("current position of x and y coordinates =");
    console.log("x ="+current_postition_of_mouse_x + "y="+current_postition_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_postition_of_mouse_x,current_postition_of_mouse_y,radius,0,2,Math.PI);
    ctx.stroke();
}
}
