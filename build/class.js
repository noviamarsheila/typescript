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
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("0823746736748", "Sheila", 19);
// admin.getName();
admin.getRole();
// admin.setName("Novia");
admin.phone;
admin.email = "noviasheila123@gmail.com";
console.log(admin.email);
