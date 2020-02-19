// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    return radius*2;
  }
  get circumference(){
    return radius*2*Math.PI;
  }
  get area(){
    return radius*radius*2*Math.PI;
  }
}