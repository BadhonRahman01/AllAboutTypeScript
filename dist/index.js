"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Steve', 1000);
account.deposite(2000);
console.log(account instanceof Account);
class SeatAssignment {
}
let seat = new SeatAssignment();
seat['34D'] = 'Steve';
seat.E34 = 'Rahman';
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('taking test');
    }
}
let student = new Student(1, 'Steve', 'Jobs');
class Teacher extends Person {
    get fullName() {
        return 'Professor' + super.fullName.toUpperCase();
    }
}
printNames([
    new Student(1, 'Bill', 'Gates'),
    new Teacher('Steve', 'Jobs')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map