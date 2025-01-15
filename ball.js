class Ball {
    //properties of ball 
    constructor(track, radius, speed) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        // offset is uesd for setting position of the ball(initallly it is zero)
        this.offset = 0;
        this.direction = 1;
        // as center of the ball lies over the track 
        this.center = this.track.getPosition(this.offset)

    }

    move() {
        this.offset += this.speed * this.direction;
        this.center = this.track.getPosition(this.offset)
        //bounding the ball withn 180 deg
        if (this.center.y > this.track.center.y) {
            this.direction = this.direction * -1;
            play
        }
    }
    draw(ctx) {
        ctx.beginPath()
        //using arc method to draw circle
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = "white";
        ctx.stroke();

    }
}