//Decorator pattern is often used to extend the functionality of
// classes without creating numerous subclasses. It works by creating a set
// of wrappers (decorators) around the core object.
class TextComponent {
    constructor(text) {
        this.text = text;
    }

    format() {
        return this.text;
    }
}

// Decorator for adding bold formatting
class BoldDecorator {
    constructor(textComponent) {
        this.textComponent = textComponent;
    }

    format() {
        return `<b>${this.textComponent.format()}</b>`;
    }
}

// Decorator for adding italics formatting
class ItalicsDecorator {
    constructor(textComponent) {
        this.textComponent = textComponent;
    }

    format() {
        return `<i>${this.textComponent.format()}</i>`;
    }
}

// Create a text component and apply decorators
const plainText = new TextComponent("Hello, World!");
const boldText = new BoldDecorator(plainText);
const italicBoldText = new ItalicsDecorator(boldText);

console.log("Plain Text: " + plainText.format()); // "Hello, World!"
console.log("Bold Text: " + boldText.format()); // "<b>Hello, World!</b>"
console.log("Italic Bold Text: " + italicBoldText.format()); // "<i><b>Hello, World!</b></i>"
