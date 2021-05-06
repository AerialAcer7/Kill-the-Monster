class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);  
  }  
  attach(body){
    this.body.bodyA = body;
}

fly(){
    this.body.bodyA = null;
}

display(){
  if(this.body.bodyA != null){
    var pointA = this.body.bodyA.position;
    var pointB = this.body.pointB;  
    strokeWeight(10);
    stroke(0)
    line(pointA.x,pointA.y,pointB.x,pointB.y); 
  } 

 }
}