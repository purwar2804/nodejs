var rect={
  perimeter: (x,y)=>(2*(x+y)),
  area: (x,y)=>(x*y)
}


let solverect=(l,b)=>{
  if(l<=0 && b<=0)
  {
    console.log('l and b should be greater then 0');
  }
  else{
    console.log('area of rectengle are:'+rect.area(l,b));
    console.log('perimeter of rectangle are:'+rect.perimeter(l,b));
  }

}
solverect(2,3);