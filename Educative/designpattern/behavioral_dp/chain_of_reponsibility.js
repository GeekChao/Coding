/**
 * The example above implements the chain of responsibility pattern to check if a given number is a multiple of two, three, or five.
 */

class HandlerChain {
  setNextObj(nextObjInChain) {}
  processMultiple(req) {
    console.log("No multiple for: " + req.getMultiple());
  }
}

class Multiple {
  constructor(multiple) {
    this.multiple = multiple;
  }

  getMultiple() {
    return this.multiple;
  }
}

class MultipleofTwoHandler extends HandlerChain {
  constructor() {
    super();
    this.nextObjInChain = new HandlerChain();
  }

  setNextObj(nextObj) {
    this.nextObjInChain = nextObj;
  }

  processMultiple(req) {
    if (req.getMultiple() % 2 == 0) {
      console.log("Multiple of 2: " + req.getMultiple());
    } else {
      this.nextObjInChain.processMultiple(req);
    }
  }
}

class MultipleofThreeHandler extends HandlerChain {
  constructor() {
    super();
    this.nextObjInChain = new HandlerChain();
  }

  setNextObj(nextObj) {
    this.nextObjInChain = nextObj;
  }

  processMultiple(req) {
    if (req.getMultiple() % 3 == 0) {
      console.log("Multiple of 3: " + req.getMultiple());
    } else {
      this.nextObjInChain.processMultiple(req);
    }
  }
}

class MultipleofFiveHandler extends HandlerChain {
  constructor() {
    super();
    this.nextObjInChain = new HandlerChain();
  }

  setNextObj(nextObj) {
    this.nextObjInChain = nextObj;
  }

  processMultiple(req) {
    if (req.getMultiple() % 5 == 0) {
      console.log("Multiple of 5: " + req.getMultiple());
    } else {
      this.nextObjInChain.processMultiple(req);
    }
  }
}

//configuring the chain of handler objects
var c1 = new MultipleofTwoHandler();
var c2 = new MultipleofThreeHandler();
var c3 = new MultipleofFiveHandler();
c1.setNextObj(c2);
c2.setNextObj(c3);

//the chain handling different cases
c1.processMultiple(new Multiple(95));
c1.processMultiple(new Multiple(50));
c1.processMultiple(new Multiple(9));
c1.processMultiple(new Multiple(4));
c1.processMultiple(new Multiple(21));
c1.processMultiple(new Multiple(23));
