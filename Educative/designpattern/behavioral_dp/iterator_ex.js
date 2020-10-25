//  reverse iterate a simple hashmap and display its key values

class ReverseIterator {
  constructor(items) {
    const values = Object.values(items)
    this.index = values.length - 1
    this.items = items
    this.values = values
  }

  hasprevElement() {
    return this.index >= 0
  }

  previous() {
    return this.values[--this.index]
  }

  last() {
    this.index = this.values.length - 1
    return this.values[this.index]
  }
}

const iterator = new ReverseIterator({
  name: "Anne",
  age: "23",
  gender: "Female",
  Occupation: "Engineer"
})

for (
  let i = iterator.last();
  iterator.hasprevElement();
  i = iterator.previous()
) {
  console.log(i)
}
