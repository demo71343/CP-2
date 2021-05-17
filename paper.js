class Paper {  
    constructor(x, y, radius){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, 20, options);

        this.image = loadImage("paper.png");

	    World.add(world, this.body);
       
        
   }
   display(){

    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x, this.body.position.y, 20);

    var pos = this.body.position;
    
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,55,55);

   }

}