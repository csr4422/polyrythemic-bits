class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    //returning position according to angle offset(getting the coodinates values)
    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.sin(offset) * this.radius
        };

    }
    draw(ctx) {
        ctx.beginPath();
        //formula for setting the track 
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}