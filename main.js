var lastX,lastY;
var colour = "violet";
var widthed = 2;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var screenwidth = screen.width;
var new_screenwidth = screen.width - 76;
var new_screenheight = screen.height - 360;

if (screenwidth<992)
{
    document.getElementById("myCanvas").width = new_screenwidth;
    document.getElementById("myCanvas").height = new_screenheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",mytouchstart);

function mytouchstart(e)
{
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove",mytouchmove);

function mytouchmove(e)
{
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = widthed;

    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
}
