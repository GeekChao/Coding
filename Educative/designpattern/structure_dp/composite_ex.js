//Component
class Directory {
  constructor(name, lastModified, size) {
    this.name = name;
    this.lastModified = lastModified;
    this.size = size;
  }
  getLastmodified() {}
  getSize() {}
  getName() {}
}

//Leaf subclass
class File extends Directory {
  constructor(name, lastModified, size) {
    super(name, lastModified, size);
  }
  getLastmodified() {
    return this.lastModified;
  }
  getSize() {
    return this.size;
  }
  getName() {
    return this.name;
  }
}

//Composite subclass
class Folder extends Directory {
  constructor(name) {
    super(name);
    this.lastModified = 0;
    this.size = 0;
    this.files = [];
  }
  addFile(file) {
    this.files.push(file);
    this.size += file.getSize();
  }

  removeFile(file) {
    for (var i = 0; i < this.files.length; i++) {
      if (this.files[i] == file) {
        this.files.splice(i, 1);
        this.size -= file.getSize();
      }
    }
  }

  getLastmodified() {
    var times = [];
    if (this.size == 0) {
      return this.lastModified;
    } else {
      for (var i = 0; i < this.files.length; i++) {
        times[i] = this.files[i].lastModified;
      }
      this.lastModified = Math.min(...times);
      return this.lastModified;
    }
  }

  getSize() {
    return this.size;
  }

  getName() {
    var names = [];
    for (var i = 0; i < this.files.length; i++) {
      names[i] = this.files[i].name;
    }
    return names;
  }
}

const file1 = new File("dogo.png", 2, 45);
const file2 = new File("catty.png", 4, 32);
const folder = new Folder("Pictures");
folder.addFile(file1);
folder.addFile(file2);
console.log(folder.getLastmodified());
console.log(folder.getSize());
console.log(folder.getName());
folder.removeFile(file2);
console.log(folder.getName());
console.log(folder.getSize());
const file = new File("penguiny.png", 6, 12);
console.log(file.getName());
