class Hero{
  constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/Superhero-01.png");
    World.add(world,this.body);  
  }  
  display(){
   var pos = this.body.position;
   imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.width,this.height);
  }
}