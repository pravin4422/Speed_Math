export function generateQuestion() {
  const types = ['multiply11', 'square', 'multiply'];
  const type = types[Math.floor(Math.random() * types.length)];

  switch (type) {
    case 'multiply11': {
      const num = Math.floor(Math.random() * 90) + 10; // 10-99
      return {
        text: `${num} × 11`,
        answer: num * 11
      };
    }

    case 'square': {
      const num = Math.floor(Math.random() * 40) + 11; // 11-50
      return {
        text: `${num}²`,
        answer: num * num
      };
    }

    case 'multiply': {
      const num1 = Math.floor(Math.random() * 90) + 10; // 10-99
      const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
      return {
        text: `${num1} × ${num2}`,
        answer: num1 * num2
      };
    }

    default:
      return {
        text: '12 × 11',
        answer: 132
      };
  }
}
