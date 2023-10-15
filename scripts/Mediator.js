// The Mediator pattern is used to reduce the coupling between multiple
// objects or components by introducing a mediator object that coordinates
// communication between them. This pattern is especially useful when you have a
// complex system where many objects need to interact, and you want to avoid direct
// connections between them

class Mediator {
    constructor() {
        this.colleagues = [];
    }

    addColleague(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }

    send(message, sender) {
        // Send a message to all colleagues except the sender
        this.colleagues.forEach(colleague => {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        });
    }
}

class Colleague {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    receive(message) {
        console.log(`${this.name} received: ${message}`);
    }
}

const mediator = new Mediator();

const colleague1 = new Colleague("Colleague 1");
const colleague2 = new Colleague("Colleague 2");
const colleague3 = new Colleague("Colleague 3");

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
mediator.addColleague(colleague3);

colleague2.send("Hello, everyone!");
