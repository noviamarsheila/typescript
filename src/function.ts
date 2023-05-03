// tipe data pada balikan function

function getName(): string {
	return "Hello, My name is sheila";
}

console.log(getName());

function getAge(): number {
	return 20;
}

function printName(): void {
	console.log("Sheila");
}
printName();

//
function multiply(val1: number, val2: number): number {
	return val1 * val2;
}

const result = multiply(2, 3);
console.log(result);
