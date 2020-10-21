/**
 * Object.create takes an object as a parameter (car in our case) and returns an object whose prototype property points to this object (car).
 * As you can see, the prototype property of both car1 and car2 accessed using __proto__ is car.
 */
var car = {
    drive(){
        console.log("Started Driving")
        },
    brake(){
        console.log("Stopping the car")
    },
    numofWheels : 4  
} 

//defining the extra property color with value red
const car1 = Object.create(car,{color :{value: "red"}});
console.log(car1.color, car1.numofWheels, Object.getOwnPropertyNames(car1))

//defining the extra property color with value red black
const car2 = Object.create(car, {color : {value: "red black"}});
console.log(car2.color, car2.numofWheels)

console.log(car1.__proto__ === car2.__proto__)