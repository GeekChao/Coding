class HR {
  constructor() {
    this.employeeList = []
  }

  registerEmployee(employee) {
    this.employeeList[employee.name] = employee
  }

  scheduleRaise(raise, worker, manager) {
    manager.receiveMessage(worker, raise)
    var ans = manager.finalizeRaise(worker, raise)
    if (ans) {
      worker.receiveRaise(raise)
    }
  }
}

class Employee {
  constructor(hr, name, position, pay) {
    this.hr = hr
    this.name = name
    this.position = position
    this.pay = pay
  }
}

class Manager extends Employee {
  constructor(hr, name, position, pay) {
    super(hr, name, position, pay)
    this.hr.registerEmployee(this)
  }
  receiveMessage(worker, raise) {
    console.log(`${worker.name} should get ${raise} dollar raise`)
  }
  finalizeRaise(worker, raise) {
    console.log(`${worker.name}'s ${raise} dollar raise is approved`)
    return true
  }
}

class Worker extends Employee {
  constructor(hr, name, position, pay) {
    super(hr, name, position, pay)
    this.hr.registerEmployee(this)
  }
  receiveRaise(raise) {
    this.pay += raise
    console.log(`My new pay is ${this.pay} dollars`)
  }
}

var hr = new HR()
var employee = new Worker(hr, "Joe", "Developer", 1400)
var manager = new Manager(hr, "Allen", "Team Lead", 3000)
hr.scheduleRaise(200, employee, manager)
