class Command {
  execute(args) {}
}

//Withdraw command
class WithDrawAmount extends Command {
  constructor(bankaccount) {
    super()
    this.bankaccount = bankaccount
  }

  execute(args) {
    this.bankaccount.withdrawMoney(args)
  }
}

//CheckAmount command
class CheckAmount extends Command {
  constructor(bankaccount) {
    super()
    this.bankaccount = bankaccount
  }

  execute() {
    this.bankaccount.checkAmount()
  }
}

//DepositAmount command
class DepositAmount extends Command {
  constructor(bankaccount) {
    super()
    this.bankaccount = bankaccount
  }

  execute(args) {
    this.bankaccount.depositAmount(args)
  }
}

//Invoker
class AccountManager {
  request(command, args) {
    command.execute(args)
  }
}

//Reciever:
class BankAccount {
  constructor(amount) {
    this.amount = amount
  }

  checkAmount() {
    console.log(this.amount)
  }

  withdrawMoney(withdrawamount) {
    if (withdrawamount > this.amount) {
      console.log("Not enough money")
    } else {
      this.amount -= withdrawamount
    }
  }
  depositAmount(money) {
    this.amount += money
  }
}

const manager = new AccountManager()

const account = new BankAccount(100)

const check = new CheckAmount(account)
manager.request(check)

const withdraw = new WithDrawAmount(account)
const deposit = new DepositAmount(account)
manager.request(withdraw, 10)
manager.request(check)
manager.request(deposit, 50)
manager.request(check)
