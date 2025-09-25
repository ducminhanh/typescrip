// 1. Function không tham số
function sumNoParam(): number {
  const a = 5, b = 10;
  return a + b;
}

const sumNoParamArrow = (): number => {
  const a = 7, b = 3;
  return a + b;
};

console.log("sumNoParam:", sumNoParam());
console.log("sumNoParamArrow:", sumNoParamArrow());

// 2. Arrow function với default, optional, rest
const sumDefault = (a: number = 1, b: number = 2): number => a + b;

const sumOptional = (a: number, b?: number): number => a + (b ?? 0);

const sumRest = (...nums: number[]): number =>
  nums.reduce((total, num) => total + num, 0);

console.log("sumDefault():", sumDefault());
console.log("sumDefault(5):", sumDefault(5));
console.log("sumOptional(5):", sumOptional(5));
console.log("sumOptional(5,7):", sumOptional(5, 7));
console.log("sumRest(1,2,3,4,5):", sumRest(1, 2, 3, 4, 5));

// 3. Spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

console.log("Merged array:", activeHobbies);
