class GetCapital {
  getMycapital(country) {
    if (country === "Pakistan") {
      return "Islamabad";
    } else if (country === "India") {
      return "New Delhi";
    } else if (country === "Canada") {
      return "Ottawa";
    } else if (country === "Egypt") {
      return "Cairo";
    } else {
      return "";
    }
  }
}

class ProxyGetCapital {
  constructor() {
    this.capital = new GetCapital();
    this.cache = {};
  }

  getMycapital(country) {
    if (!this.cache[country]) {
      var value = this.capital.getMycapital(country);
      this.cache[country] = value;
      return `${value}--Returning From GetCapital`;
    } else {
      return `${this.cache[country]}--Returning from Cache`;
    }
  }
}

var capital = new ProxyGetCapital();

console.log(capital.getMycapital("Pakistan"));
console.log(capital.getMycapital("India"));
console.log(capital.getMycapital("Canada"));
console.log(capital.getMycapital("Egypt"));
console.log(capital.getMycapital("Egypt"));
console.log(capital.getMycapital("Egypt"));
console.log(capital.getMycapital("Pakistan"));
console.log(capital.getMycapital("Pakistan"));
console.log(capital.getMycapital("Canada"));
