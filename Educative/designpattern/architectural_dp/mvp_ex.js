/**
 * In this challenge, you need to implement sending and displaying a sent email using the MVP pattern
 */

class Model {
  constructor() {
    this.senderName = ""
    this.receiverName = ""
    this.emailTitle = ""
  }

  setSenderName(senderName) {
    this.senderName = senderName
  }

  getSenderName() {
    return this.senderName
  }

  setReceiverName(receiverName) {
    this.receiverName = receiverName
  }

  getReceiverName() {
    return this.receiverName
  }

  setEmailTitle(emailTitle) {
    this.emailTitle = emailTitle
  }

  getEmailTitle() {
    return this.emailTitle
  }
}

class View {
  constructor() {
    this.presenter = null
  }

  registerWith(presenter) {
    this.presenter = presenter
  }

  sendEmail(to, fromWhom, emailTitle) {
    this.presenter.sendEmail(to, fromWhom, emailTitle)
  }

  displayEmailInfo(senderName, receiverName, emailTitle) {
    console.log(
      "Email From: " +
        senderName +
        " To: " +
        receiverName +
        " Title: " +
        emailTitle
    )
  }
}

class Presenter {
  constructor(view) {
    this.view = view
    this.model = null
  }

  setModel(model) {
    this.model = model
  }

  getView() {
    return this.view
  }

  sendEmail(to, fromWhom, emailTitle) {
    this.model.setEmailTitle(emailTitle)
    this.model.setSenderName(fromWhom)
    this.model.setReceiverName(to)
    this.view.displayEmailInfo(
      this.model.getSenderName(),
      this.model.getReceiverName(),
      this.model.getEmailTitle()
    )
  }
}
