namespace Geometry {
    export class Point {
        private _x:number;
        private _y:number;
        constructor(x:number,y:number) {
            this._x=x;
            this._y=y;
        }
        get x():number {
            return(this._x);
        }
        get y():number {
            return (this._y);
        }
    }

    export class Circle {
        private _ctpt:Point;
        private _radius:number;
        private context:CanvasRenderingContext2D;
        private _color:string;
        constructor(ctpt:Point,radius:number,context:CanvasRenderingContext2D) {
            this._ctpt=ctpt;
            this._radius=radius;
            this.context=context;
        }

        set color(colorstring:string) {
            this._color=colorstring;
        }
        get color():string {
            return(this._color);
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this._ctpt.x,this._ctpt.y,this._radius,0,2*Math.PI);
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.lineWidth=3;
            this.context.strokeStyle="black";
            this.context.stroke();
        }
        set colour(value:string) {
            this._color=value;
        }
        isInside(pt:Point):boolean {
            let r = Math.sqrt(Math.pow(pt.x-this._ctpt.x,2))+Math.sqrt(Math.pow(pt.y-this._ctpt.y,2))
            if (r<this._radius) {
                return(true);
            } else {
                return(false);
            }
        }
    }
}