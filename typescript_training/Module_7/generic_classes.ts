class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];

  }                                                   
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Swaraj");
textStorage.addItem("Abhi");
console.log(textStorage.getItems());
textStorage.removeItem("Abhi");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(10);
numberStorage.addItem(100);
numberStorage.addItem(1000);
console.log(numberStorage.getItems());
numberStorage.removeItem(10);
console.log(numberStorage.getItems());
