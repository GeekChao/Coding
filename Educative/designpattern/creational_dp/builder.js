//A customer can provide different builders, which gives him some control in the overall meal-building process

function Meal() {
    this.make = function(builder){
      builder.step1();
      builder.step2();
      builder.step3();
      builder.step4();
      return builder.get();
    }
  }
   
  function MealBuilder(pattie,side,soda) {
     this.meal = null;
     this.step1 = function() {
          this.meal = new Order();
      };
   
      this.step2 = function() {
          this.meal.addBurger(pattie);
      };
  
      this.step3 = function(){
        this.meal.addSide(side);
      }
      
      this.step4 = function(){
        this.meal.addSoda(soda);
      }
   
      this.get = function() {
          return this.meal;
      };
  }
   
  function Order() {
      this.burger = null;
      this.side = null;
      this.soda = null; 
   
      this.addBurger = function(pattie) {
          this.burger = pattie;
      };
   
      this.addSide = function(side) {
          this.side = side;
      };
  
      this.addSoda = function(soda){
        this.soda = soda;
      }
  
      this.display = function(){
        console.log(`You meal has a ${this.burger} burger, ${this.side} on the side, and a ${this.soda}.`)
      }
  }
   
  var meal = new Meal();
  var mealBuilder = new MealBuilder("chicken","curly fries","coke");
  var chickenBurgerMeal = meal.make(mealBuilder);
  chickenBurgerMeal.display();  