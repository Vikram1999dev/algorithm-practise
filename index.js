function balancedBracket(expression) {
    var stack = [];
    var openingExpressions = ['{', '[', '('];
    var matchingBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    for (var i = 0; i < expression.length; i++) {
        if (openingExpressions.indexOf(expression[i]) !== -1)
            stack.push(expression[i]);
        if (expression[i] in matchingBrackets) {
            var matchBrac = stack.pop();
            if (matchBrac !== matchingBrackets[expression[i]])
                return false;
        }
    }
    return stack.length === 0;
}
var targetExpression = '([{}])]';
console.log(balancedBracket(targetExpression));
