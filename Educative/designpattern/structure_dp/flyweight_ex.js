class Dress {
  constructor(serialNumber, type, color, designer, availability) {
    this.serialNumber = serialNumber;
    this.type = type;
    this.color = color;
    this.designer = designer;
    this.availability = availability;
    this.price = 0;
  }
  dressPrice() {
    if (this.type == "maxi") {
      this.price = 1000;
    }
    if (this.type == "gown") {
      this.price = 2000;
    }
    if ((this.type = "skirt")) {
      this.price = 500;
    }
    return this.price;
  }
}

class DressFactory {
  constructor() {
    this.existingDresses = {};
  }

  createDress(serialNumber, type, color, designer, availability) {
    var exists = this.existingDresses[serialNumber];

    if (!!exists) {
      return this.existingDresses[serialNumber];
    } else {
      var dress = new Dress(serialNumber, type, color, designer, availability);
      this.existingDresses[serialNumber] = dress;
      return dress;
    }
  }
}

const dressFactory = new DressFactory();
const pinkdress1 = dressFactory.createDress(
  "#123",
  "skirt",
  "pink",
  "Zara",
  "yes"
);
const pinkdress2 = dressFactory.createDress(
  "#123",
  "skirt",
  "pink",
  "Zara",
  "yes"
);
console.log(pinkdress1 === pinkdress2);
