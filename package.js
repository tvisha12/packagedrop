class Package{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.5,
        
        }

        this.pagkage=Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.box);
}
}