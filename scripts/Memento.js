//The Memento Pattern is a behavioral design pattern that allows you
// to capture and externalize an object's internal state so that the object
// can be restored to this state later.

// Originator: The object whose state needs to be saved
class Editor {
    constructor() {
        this.content = '';
    }

    type(text) {
        this.content += text;
    }

    save() {
        return new EditorMemento(this.content);
    }

    restore(memento) {
        this.content = memento.getState();
    }

    showContent() {
        console.log(`Current Content: ${this.content}`);
    }
}

// Memento: Represents the state of the Originator
class EditorMemento {
    constructor(content) {
        this.content = content;
    }

    getState() {
        return this.content;
    }
}

// Caretaker: Manages and keeps track of the mementos
class History {
    constructor() {
        this.mementos = [];
    }

    push(memento) {
        this.mementos.push(memento);
    }

    pop() {
        return this.mementos.pop();
    }
}

// Using the Memento Pattern
const editor = new Editor();
const history = new History();

editor.type('This is the first sentence. ');
editor.type('This is the second sentence. ');

history.push(editor.save()); // Save the state

editor.type('This is the third sentence. ');

editor.showContent(); // Current Content: This is the first sentence. This is the second sentence. This is the third sentence.

editor.restore(history.pop()); // Restore the state

editor.showContent(); // Current Content: This is the first sentence. This is the second sentence.
