class Auctioneer {
  constructor() {
    this.winBidder = null
    this.bidderList = []
  }

  registerBidder(bidder) {
    this.bidderList.push(bidder)
  }

  notifyBidders() {
    this.bidderList.forEach((bidder) => bidder.update(this.winBidder))
  }

  announceNewBidderPrice(bidder) {
    if (this.winBidder && this.winBidder.bidPrice >= bidder.bidPrice) return

    this.winBidder = bidder
    this.notifyBidders()
  }
}

class Bidder {
  constructor(name) {
    this.name = name
    this.bidPrice = 0
  }

  setAuctioneer(autioneer) {
    this.autioneer = autioneer
  }

  update(bidder) {
    if (bidder == this) return

    if (bidder.bidPrice > 500) {
      console.log(`${this.name} :: Sold to ${bidder.name}`)
    } else {
      console.log(
        `${this.name} :: ${bidder.name} is offering ${bidder.bidPrice} dollars`
      )
    }
  }

  giveNewPrice(bidPrice) {
    this.bidPrice = bidPrice
    this.autioneer.announceNewBidderPrice(this)
  }
}

const auctioneer = new Auctioneer()
const bidder1 = new Bidder("Ross")
const bidder2 = new Bidder("Joey")

auctioneer.registerBidder(bidder1)
auctioneer.registerBidder(bidder2)
bidder1.setAuctioneer(auctioneer)
bidder2.setAuctioneer(auctioneer)

bidder1.giveNewPrice(400)
bidder2.giveNewPrice(550)
