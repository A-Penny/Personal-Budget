
class Envelope {
    constructor (budget) {
        this._budget = budget;
        this._balance = budget;
        this._spent = 0;
    }

    get balance() {
        return this._balance
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

let housing = new Envelope (2000);
let food = new Envelope(1500);
let transportation = new Envelope(600);
let entertainment = new Envelope(300);

let envelopes = [housing, food, transportation, entertainment];

const getAllEnvelopes =() => {
    return envelopes;
}

const exportedObjects = {getAllEnvelopes}

module.exports = exportedObjects;


