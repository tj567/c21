class Walls{
    constructor(x,y,w,h){
        var wallOptions = {isStatic: true}
        this.bodies = Bodies.rectangle(x,y,w,h,wallOptions)
        this.w = w
        this.h = h
        World.add(world,this.bodies)
    }
    display(){
        var pos = this.bodies.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill('red')
        stroke('white')
        strokeWeight(4)
        rect(0,0,this.w,this.h)
        pop()
    }
}