// let myString: string = "Programming Hero";
// let myNumber: number = 123;
// let myBoolean: boolean = false;
// let mySymbol: symbol = Symbol();
// let myBigint: bigint = 100n;

const addTwo = (a: number, b: number) => {
  return a + b;
};

console.log(addTwo(100, 200));

// array and tuple and readonly modifier

// const arr: Array<string> = ["Programming", "Hero"];
const arr: string[] = ["Programming", "Hero"];
const numArr: number[] = [1, 2, 3];

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];

// optional, default and rest parameters

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("Jahid"));

const greetings = (fullName: string, greeting = "Hello") => {
  console.log(greeting + " " + fullName);
};

greetings("Jahid");