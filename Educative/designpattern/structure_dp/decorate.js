class FrozenYoghurt {
    constructor(flavor, price) {
      this.flavor = flavor
      this.price = price
    }
  
    orderPlaced() {
      console.log(`The ${this.flavor} flavor will cost you ${this.price} dollars`);
    }
  }
  
  // decorator 1
  function addFlavors(froyo) {
    froyo.addStrawberry = true;
    froyo.addVanilla = true;
    froyo.price += 20;
    froyo.updatedInfo = function(){
      console.log(`The updated price after adding flavors is ${froyo.price} dollars`)
    }
    return froyo;
  }
  
  // decorator 2
  function addToppings(froyo) {
    froyo.hasSprinkles = true;
    froyo.hasBrownie =  true;
    froyo.hasWafers = true;
    froyo.allToppings = function(){
      console.log("Your froyo has sprinkles, brownie, and wafers")
    }
    return froyo;
  }
  
  //using decorators
  //creating a froyo
  const froyo = new FrozenYoghurt("chocolate",10)
  froyo.orderPlaced()
  //adding flavors
  var froyowithFlavors = addFlavors(froyo)
  froyowithFlavors.updatedInfo()
  //adding toppings
  var froyoWithToppings = addToppings(froyo)
  froyoWithToppings.allToppings()