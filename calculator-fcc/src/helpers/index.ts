export const isStart = (expression: string) => {
  return expression === '0' || expression === '' || expression === 'Error';
};

export const isFloat = (num: string) => +num % 1 !== 0;

export const toFixed = (num: string, len: number = 5): string => {
  if (isFloat(num)) {
    const numAfterDot = num.slice(num.indexOf('.') + 1).length;
    return numAfterDot > len ? Number(num).toFixed(len) : num;
  }
  return num;
};
