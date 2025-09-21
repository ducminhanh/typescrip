// rectangle.ts

export interface RectangleResult {
  perimeter: number;
  area: number;
}

export function calculateRectangle(width: number, height: number): RectangleResult {
  const perimeter = 2 * (width + height);
  const area = width * height;

  return { perimeter, area };
}

// Ví dụ chạy thử
const result = calculateRectangle(5, 10);
console.log(`Chu vi: ${result.perimeter}, Diện tích: ${result.area}`);
