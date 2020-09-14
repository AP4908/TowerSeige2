class Box{
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;

      
    }
    display(){
      
      if(this.body.speed<5){
        var angle = this.body.angle;
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);

      fill("aqua");
      
      rect(0, 0, 30, 40);
      pop();
      
      

        
        


      } else {

        World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility-2;
         tint(255, this.Visibility);
         pop();
      }
      
      
      
    }
  }