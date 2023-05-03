export class User {
	public name: string;
	public age: number;

	constructor(name: string, public age: number) {
		this.name = name;
		this.age = age;
	}
}

let user = new User("Sheila", 19);
console.log(user);

// public = bisa diakses disemua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan class turunannya
// privat = hanya bisa diakses diclass itu sendiri

class Admin extends User {
	read: boolean = true;
	write: boolean = true;
	phone: string;
	private _email: string = "";

	constructor(phone: string, name: string, age: number) {
		super(name, age);
		this.phone = phone;
	}

	getRole(): { read: boolean; write: boolean } {
		return {
			read: this.read,
			write: this.write,
		};
	}

	set email(value: string) {
		if (value.length < 5) {
			this._email = "email salah";
		} else {
			this._email = value;
		}
	}
	get email(): string {
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
