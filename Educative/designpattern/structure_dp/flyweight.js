class CodeFile {
  constructor(codefileName) {
    this.codefileName = codefileName;
  }
}

class Formatter {
  format(codefile) {}
}

class PythonFormatter extends Formatter {
  constructor() {
    super();
    console.log("Python Formatter instance created");
  }

  format(codefileName) {
    console.log(`"Formatting the Python ${codefileName} file you uploaded.`);
  }
}

class JavaFormatter extends Formatter {
  constructor() {
    super();
    console.log("Java Formatter instance created");
  }

  format(codefileName) {
    console.log(`"Formatting the Java ${codefileName} file you uploaded.`);
  }
}

class FormatterFactory {
  constructor() {
    this.myFormatterMap = new Map();
  }

  createFormatter(formatterType) {
    let formatter = this.myFormatterMap.get(formatterType);
    if (formatter == null) {
      if (formatterType == "Python") {
        formatter = new PythonFormatter();
      } else if (formatterType == "Java") {
        formatter = new JavaFormatter();
      }
      this.myFormatterMap.set(formatterType, formatter);
    }
    return formatter;
  }
}

const codefile1 = new CodeFile("helloworld.py");
let formatter = new FormatterFactory();
const pythonFormatter = formatter.createFormatter("Python");
pythonFormatter.format(codefile1.codefileName);
//uploading new codefile Python file
const codefile2 = new CodeFile("test.py");
const anotherPythonFormatter = formatter.createFormatter("Python");
anotherPythonFormatter.format(codefile2.codefileName);
console.log(
  "Both Python Formatter instances are the same? " +
    (anotherPythonFormatter === pythonFormatter)
);
//uploading a Java file
const codefile3 = new CodeFile("myfile.java");
const javaFormatter = formatter.createFormatter("Java");
javaFormatter.format(codefile3.codefileName);
