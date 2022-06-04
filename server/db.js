
class Envelope {
    constructor (budget) {
        this.id = null;
        this.name = ''
        this._budget = budget;
        this._balance = budget;
        this._spent = 0;
    }

    get budget () {
        return this._budget;
    }

    get balance() {
        return this._balance
    }

    get spent () {
        return this._spent;
    }

    set addSpend(amount) {
        this._spent += amount;
        this.newBalance();
    }

    newBalance() {
        this._balance -= this._spent;
        return this._balance;
    }
};

let idCounter = 1;

// starting envelopes
let housing = new Envelope (0);
housing.name = 'housing';
housing.id = idCounter++;
let food = new Envelope(0);
food.name = 'food';
food.id = idCounter++;
let transportation = new Envelope(0);
transportation.name = 'transportation';
transportation.id = idCounter++;
let entertainment = new Envelope(0);
entertainment.name = 'entertainment';
entertainment.id = idCounter++;

let envelopes = [housing, food, transportation, entertainment];

// function to GET all envelopes
const getAllEnvelopes =() => {
    return envelopes;
}

// function to update spent amount (or remove spent). Argument is the envelope to be updated
const updateSpend = (env, amt) => {
    env.addSpend = amt;
    return env.balance
}

const createNewEnvelope = (name, budg) => {
    let env = new Envelope (budg);
    env.name = name;
    env.id = idCounter++;

}

const exportedObjects = {getAllEnvelopes}

module.exports = exportedObjects;


