
export function isBalanced(input) {
    let result = null;
    let parts = input.split('');
    let openBraces = /{|\[|\(/;
    let closeBraces = /}|\]|\)/;
    let stack = [];

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].match(openBraces)) {
            stack.push(parts[i]);
            result = true;
        } else if (parts[i].match(closeBraces)) {
            let lastChar = stack[stack.length - 1];
            if (parts[i] === '}' && lastChar !== '{') {
                result = false;
            } else if (parts[i] === ']' && lastChar !== '[') {
                result = false;
            } else if (parts[i] === ')' && lastChar !== '(') {
                result = false;
            } else {
                stack.pop();
            }
        }
    }
    console.log(result);
    return result;
}

isBalanced('{[()]}');
isBalanced('{[{}][()]}');
isBalanced('{]}');
isBalanced('()');
isBalanced('{}');
isBalanced('[]');
