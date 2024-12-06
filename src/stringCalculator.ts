export const stringCalculator = (input: string) => {
  if (input === "") return 0;

  const numbers = input.split(/[\n,]/).map((num) => {
    const n = parseInt(num, 10);
    if (isNaN(n)) {
      throw new Error("Invalid input");
    }
    return n;
  });

  return numbers.reduce((sum, num) => sum + num, 0);
};
