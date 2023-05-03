"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
let user = new User("Sheila", 19);
console.log(user);
// public = bisa diakses disemua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan class turunannya
// privat = hanya bisa diakses diclass itu sendiri
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin("Sheila", 19);
// admin.getName();
admin.getRole();
// admin.setName("Novia");
