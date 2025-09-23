
export function sumNumbers(...nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}


console.log("Tổng:", sumNumbers(1, 2, 3, 4, 5)); // 15
