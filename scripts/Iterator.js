//Iterator Pattern defines an object that represents the collection and encapsulates
// the iteration logic, allowing you to traverse the collection without
// having to know its internal structure.
class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        return this.hasNext() ? this.collection[this.index++] : null;
    }
}

// Concrete collection
class MyCollection {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    // Create an iterator for this collection
    createIterator() {
        return new Iterator(this.items);
    }
}

// Using the Iterator Pattern
const collection = new MyCollection();
collection.add("Item 1");
collection.add("Item 2");
collection.add("Item 3");

const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}
