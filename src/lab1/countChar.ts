
export function countChar(str: string, char: string): number {
  let count = 0;
  for (const c of str) {
    if (c === char) count++;
  }
  return count;
}

// Ví dụ chạy thử
console.log("Số lần xuất hiện:", countChar("hello world", "l")); // 3
