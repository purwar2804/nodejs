var rect=require('./rectangle.js')
var solverect=function(l,b){
	rect(l,b,(err,rectangle)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log(rectangle.area())
			console.log(rectangle.perimeter())
		}
	})
}
solverect(2,3);