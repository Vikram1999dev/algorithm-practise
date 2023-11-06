function balancedBracket(expression: string): boolean {
  const stack: string[] = [];
  let openingExpressions: string[] = ['{', '[', '('];
  let matchingBrackets: Record<string, string> = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  for (let i: number = 0; i < expression.length; i++) {
    if (openingExpressions.indexOf(expression[i]) !== -1)
      stack.push(expression[i]);
    if (expression[i] in matchingBrackets) {
      const matchBrac = stack.pop();
      if (matchBrac !== matchingBrackets[expression[i]]) return false;
    }
  }

  return stack.length === 0;
}

const targetExpression: string = '([{}])]';
console.log(balancedBracket(targetExpression));
