class User {
  constructor(name, userId) {
    this.name = name
    this.userId = userId
    this.chatbox = null
  }
  sendMessage(message, sendTo) {
    this.chatbox.send(message, this, sendTo)
  }
  receiveMessage(message, receiveFrom) {
    console.log(`${receiveFrom.name} sent the message: ${message}`)
  }
}

class ChatBox {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.userId] = user
    user.chatbox = this
  }

  send(message, receiveFrom, sendTo) {
    sendTo.receiveMessage(message, receiveFrom)
  }
}

var chatbox = new ChatBox()
var joey = new User("Joey", 1)
var phoebe = new User("Phoebe", 2)
chatbox.register(joey)
chatbox.register(phoebe)
joey.sendMessage("Hey, how you doing?", phoebe)
phoebe.sendMessage("Smelly Cat, Smelly Cat..", joey)
joey.sendMessage("I love this song!", phoebe)
