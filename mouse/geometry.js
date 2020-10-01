var Geometry;
(function (Geometry) {
    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        get x() {
            return (this._x);
        }
        get y() {
            return (this._y);
        }
    }
    Geometry.Point = Point;
    class Circle {
        constructor(ctpt, radius, context) {
            this._ctpt = ctpt;
            this._radius = radius;
            this.context = context;
        }
        set color(colorstring) {
            this._color = colorstring;
        }
        get color() {
            return (this._color);
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this._ctpt.x, this._ctpt.y, this._radius, 0, 2 * Math.PI);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 3;
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
        set colour(value) {
            this._color = value;
        }
        isInside(pt) {
            let r = Math.sqrt(Math.pow(pt.x - this._ctpt.x, 2)) + Math.sqrt(Math.pow(pt.y - this._ctpt.y, 2));
            if (r < this._radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
    }
    Geometry.Circle = Circle;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=geometry.js.map