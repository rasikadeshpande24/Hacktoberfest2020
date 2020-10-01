var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var t1 = document.getElementById("t1");
canvas.addEventListener("click", mouseclick, false);
var circlecontainer = [];
var geo = true;
function mouseclick(e) {
    var p1 = new Geometry.Point(e.clientX, e.clientY);
    if (geo) {
        t1.value = p1.x + "," + p1.y;
        var c = new Geometry.Circle(p1, 24, context);
        c.color = "pink";
        c.draw();
        circlecontainer.push(c);
    }
    else {
        for (var i = 0; i < circlecontainer.length; i++) {
            if (circlecontainer[i].isInside(p1)) {
                circlecontainer[i].colour = "blue";
                break;
            }
        }
    }
    draw();
    /*t1.value=p1.x+","+p1.y;
    var c:Geometry.Circle= new Geometry.Circle(p1,24,context);
    c.color="pink";
    c.draw();*/
}
function mousemove(e) {
    var p1 = new Geometry.Point(e.clientX, e.clientY);
    t1.value = p1.x + "," + p1.y;
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circlecontainer.length; i++) {
        circlecontainer[i].draw();
    }
}
//# sourceMappingURL=app.js.map