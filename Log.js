class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution : 0.5,
            density : 1,
            friction : 0.8
        }

        this.body = Bodies.rectangle(x,y,15,height,options);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body, angle);
        this.height = height;
        this.width = 15;
    }
    display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(3);
            stroke("red");
            fill(255);
            rect(0, 0, this.width, this.height);
            pop();
    }
}