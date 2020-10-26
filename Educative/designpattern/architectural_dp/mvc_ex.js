/**
 * In this challenge, you have to implement the MVC pattern to display the items in a shopping cart.
 */

class ShoppingCartModel {
  constructor(itemNumber, itemName, itemQuantity, itemPrice) {
    this.itemNumber = itemNumber
    this.itemName = itemName
    this.itemQuantity = itemQuantity
    this.itemPrice = itemPrice
  }

  getItemNumber() {
    return this.itemNumber
  }

  getItemName() {
    return this.itemName
  }

  getItemPrice() {
    return this.itemPrice
  }
}

class ShoppingCartView {
  constructor() {
    this.controller = null
  }
  registerWith(controller) {
    this.controller = controller
    this.controller.addView(this)
  }

  displayItem({ itemNumber, itemName, itemQuantity, itemPrice }) {
    console.log(
      `Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`
    )
  }

  buyItem(itemName, itemNumber, itemPrice) {
    this.controller.buyItem(itemName, itemNumber, itemPrice)
  }

  changeItemQuantity(itemNumber, newQuantity) {
    this.controller.changeItemQuantity(itemNumber, newQuantity)
  }
}

class ShoppingCartController {
  constructor() {
    this.model = null
    this.view = null
    this.itemList = []
  }

  addView(view) {
    this.view = view
  }
  addModel(model) {
    this.model = model
  }

  buyItem(itemName, itemNumber, itemPrice) {
    const item = new ShoppingCartModel(itemNumber, itemName, 1, itemPrice)
    this.itemList.push(item)

    this.view.displayItem(item)
  }

  changeItemQuantity(itemNumber, newQuantity) {
    const item = this.itemList.find((item) => item.itemNumber == itemNumber)
    item.itemQuantity = newQuantity

    this.view.displayItem(item)
  }
}

var view = new ShoppingCartView()
var controller = new ShoppingCartController()

view.registerWith(controller)
view.buyItem("Popcorn", 0, 2.5)
view.changeItemQuantity(0, 6)
