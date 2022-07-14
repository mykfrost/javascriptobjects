
// Object Literal to describe an object
const circle1 = {
    radius : 1,
    location :{
        x: 1,
        y: 1
    },

    draw: function(){
        console.log('draw');
    }
};

//console.log('Circle 1',circle1);
//using factory methods to describe an object



function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(11);
//circle.draw();
// creating an object using  a constructor fucntion

function Circle(radius){
    this.radius = radius ;
    this.draw = function(){
        console.log('draw');
    }
}

const anotherCircle = new Circle(1);
//console.log('Another Circle',anotherCircle);

//Constructors in JS Objects

//Enumerating an object

function Circle2(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Circle 2');
    }
}
const circle2 = new Circle2(23);

for ( let key in circle2){
    //console.log('Enum',key);
    console.log(key , circle2[key]);
}