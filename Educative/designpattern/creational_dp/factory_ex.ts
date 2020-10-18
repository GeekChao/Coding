/**
 * In this problem, you need to implement a factory ToyFactory that can create a toy duck and a toy car object using either the ToyDuck or ToyCar function constructor.
 */

enum ToyType {
    Duck = 'Duck',
    Car = 'Car'
}

interface Toy {
    color: string
    price: number
    name?: string
}

class ToyDuck {
    color: string
    price: number

    public constructor({ color, price} : Toy){
        this.color = color
        this.price = price
    }
}

class ToyCar {
    color: string
    price: number
    name?: string

    public constructor({ color, price, name } : Toy) {
        this.color = color
        this.price = price
        this.name = name 
    }
}

class ToyFactory {
    createFactory(toyType: ToyType, toy: Toy) {
        if (toyType === ToyType.Car) return new ToyDuck(toy)

        if (toyType === ToyType.Duck) return new ToyCar(toy)
    }
}

const toyFactory = new ToyFactory()

const duck = toyFactory.createFactory(ToyType.Duck, { color: "blue", price : 12, name: "hsdf" })

console.log(duck)