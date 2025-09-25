
export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Ví dụ 
console.log("5 là số nguyên tố?", isPrime(5));   // true
console.log("10 là số nguyên tố?", isPrime(10)); // false
