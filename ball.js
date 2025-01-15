class Ball {
    //properties of ball 
    constructor(track, radius, speed, soundFrequency, hue) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.soundFrequency = soundFrequency
        this.hue = hue;
        // offset is uesd for setting position of the ball(initallly it is zero)
        this.offset = 0;
        this.round = 0;
        this.progress = 0;
        // as center of the ball lies over the track 
        this.center = this.track.getPosition(this.offset)

    }

    move() {
        this.offset += this.speed;
        const res = this.center = this.track.getPosition(this.offset);
        this.progress = res.progress;
        this.center = { x: res.x, y: res.y };
        this.progress = res.progress;
        //bounding the ball withn 180 deg
        if (res.round != this.round) {
            playSound(this.soundFrequency);
            this.round = res.round;
        }
    }
    draw(ctx) {

        ctx.beginPath()
        //using arc method to draw circle
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        const lightness = 100 - 50 * this.progress;
        ctx.fillStyle = `hsl(${this.hue},100%,${lightness}%)`;
        ctx.fill();
        ctx.stroke();


    }
}