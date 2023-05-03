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
