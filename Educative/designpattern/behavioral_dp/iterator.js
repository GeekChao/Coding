class Iterator {
  constructor(elements) {
    this.index = 0
    this.elements = elements
  }
  next() {
    return this.elements[this.index++]
  }
  hasNextElement() {
    return this.index <= this.elements.length
  }
  first() {
    this.index = 0
    return this.next()
  }
  each(func) {
    for (var item = this.first(); this.hasNextElement(); item = this.next()) {
      func(item)
    }
  }
}

function iterate() {
  var items = ["Yellow", "Green", "Blue"]
  var iter = new Iterator(items)
  iter.each(function (item) {
    console.log(item)
  })
}

iterate()
