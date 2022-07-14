
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
    };
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

//to enumerate all the properties use for in
for ( let key in circle2){
    //console.log('Enum',key);

    if( typeof circle2[key] !== 'function')
    console.log(key , circle2[key]);
}

///another approach of displaying the keys in an object
// To get all keys in an object use Object method
const keys = Object.keys(circle2);
console.log(keys);
//to check if some properties are in a method

if('radius' in circle2)
console.log('Circle has a radius');


//Introducing some complexity in our circle object
// This is where we introduce abstraction to our implemmentation

function Circle3(radius){
    this.radius = radius ;

 let defaultLocation ={
      x : 0,
      y : 0
    };

  let computeOptimumLocation = function(factor){

    };

    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const anotherCircle2 = new Circle3(1);

//Getters & Setters
function Circle4(radius){
    this.radius = radius ;

 let defaultLocation = {
      x : 0,
      y : 0
    };

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){
 
        console.log('draw');
    };

    Object.defineProperty(this,'defaultLocation',{
    get : function(){
        return defaultLocation;
    },
    set : function(value){
        if(!value.x || value.y)
        throw new Error('Invlid Location');

        defaultLocation = value;
    }
  });
}

const anotherCircle3 = new Circle4(12);

anotherCircle3.defaultLocation = 1;