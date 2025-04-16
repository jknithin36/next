const strArray = ["a", "b", "c", "d", "e"];
const numArray = [1, 2, 3, 4, 5];
const boolArray = [true, false];
const mixed = ["a", 1, true, { name: "Nithin" }, [1, 2, 3, 4]];
console.log(mixed);

// to create a own array

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop(item) {
    const lastItem = this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  get(index) {
    return this.data[index];
  }

  shift() {
    const firstElement = this.data[0];

    // re-indexing

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const myNewArray = new myArray();
console.log(myNewArray.push(true));
myNewArray.push("Apple");
console.log(myNewArray);
console.log(myNewArray[0]);
console.log(myNewArray.pop());
// shift
