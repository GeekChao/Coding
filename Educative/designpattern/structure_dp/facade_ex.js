class Inventory{
    constructor(){
      this.shampoosAmount = 20
      this.conditionersAmount = 20
      this.hairSerumsAmount = 1000
  
    }
    checkInventory(product){
        let available = true;
        if(product.productName == "shampoo" && product.amount > this.shampoosAmount){
            available = false
            return available
        }
        else if(product.productName == "conditioner" && product.amount > this.conditionersAmount){
            available = false
            return available
        }
        else if(product.productName == "hair serum" && product.amount > this.hairSerumsAmount){
            available = false
            return available
        }
        return available
    }
  }
  
  class BuyingProduct extends Inventory {
    buyProduct(product) {
      let order;
      if(this.checkInventory(product)){
        order = new BuyProduct()
      }else{
        order = new PreOrderProduct()
      }
      return order.showDetails(product)
  }
  
  }
  
  class BuyProduct{
    showDetails(product){
      console.log(`${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`)
    }
  }
  
  class PreOrderProduct{
    showDetails(product){
      console.log(`${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`)
    }
  }
  
  var customer = new BuyingProduct()
  customer.buyProduct({productName: "shampoo", amount: 2})
  customer.buyProduct({productName: "hair serum", amount: 2000})