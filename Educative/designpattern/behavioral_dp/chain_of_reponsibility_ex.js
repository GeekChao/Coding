class EmployeeChain {
  constructor(level) {
    this.level = level
  }

  setNextEmp(nextEmpInChain) {
    this.nextEmp = nextEmpInChain
  }

  assignWork(req) {
    console.log("This work can not be assigned to anyone!")
  }
}

class EasyLevelWorkHandler extends EmployeeChain {
  constructor() {
    super("Easy")
    this.nextEmp = new EmployeeChain()
  }

  assignWork(emp) {
    if (emp.level === this.level) {
      console.log(`${this.level} work is assigned to ${emp.name}`)
    } else {
      this.nextEmp.assignWork(emp)
    }
  }
}

class MediumLevelWorkHandler extends EmployeeChain {
  constructor() {
    super("Medium")
    this.nextEmp = new EmployeeChain()
  }

  assignWork(emp) {
    if (emp.level === this.level) {
      console.log(`${this.level} work is assigned to ${emp.name}`)
    } else {
      this.nextEmp.assignWork(emp)
    }
  }
}

class HardLevelWorkHandler extends EmployeeChain {
  constructor() {
    super("Hard")
    this.nextEmp = new EmployeeChain()
  }

  assignWork(emp) {
    if (emp.level === this.level) {
      console.log(`${this.level} work is assigned to ${emp.name}`)
    } else {
      this.nextEmp.assignWork(emp)
    }
  }
}

class Employee {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
}

var w1 = new EasyLevelWorkHandler()
var w2 = new MediumLevelWorkHandler()
var w3 = new HardLevelWorkHandler()
w1.setNextEmp(w2)
w2.setNextEmp(w3)

const emp1 = new Employee("Joe", "Easy")
const emp2 = new Employee("Anne", "Medium")
const emp3 = new Employee("Shawn", "Hard")
const emp4 = new Employee("Shawn1", "ExtraHard")

w1.assignWork(emp1)
w1.assignWork(emp2)
w1.assignWork(emp3)
w1.assignWork(emp4)
