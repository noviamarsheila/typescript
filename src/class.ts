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

	getRole(): { read: boolean; write: boolean } {
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
