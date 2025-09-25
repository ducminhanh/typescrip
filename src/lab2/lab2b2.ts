
let numbers: number[] = [1, 2, 3, 4];
let tupleExample: [number, string] = [1, "Hello"];
let something: any = "Hello"; 
enum Role {
  Admin,
  User,
  Guest,
}

console.log("Numbers:", numbers);
console.log("Tuple:", tupleExample);
console.log("Something:", something);
console.log("Enum Role:", Role.Admin, Role.User, Role.Guest);

type Status = "success" | "error" | "pending";
let currentStatus: Status = "success";

console.log("Current status:", currentStatus);

let myValue: string | null = null;
let myScore: number | undefined = undefined;
console.log("myValue:", myValue, "myScore:", myScore);

let input: unknown = "Hello TS";
if (typeof input === "string") {
  console.log("Length of input:", input.length);
}

let anything: any = 123;
console.log("Anything:", anything);
