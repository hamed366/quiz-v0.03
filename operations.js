

export function operations(ops) {
    let result = 0
    let arr = [];
    let op = 0;

    ops = ops.split(" ");


    for (let i = 0; i < ops.length; i++) {

        console.log(ops[i]);

        if (ops[i] == '-2') {
            arr.push(-2);
            console.log(arr);
        } else if (ops[i] == 5) {
            arr.push(5);
            console.log(arr);

        } else if (ops[i] == 'D') {
            op = arr[arr.length - 1] * 2;
            arr.push(op);
            console.log(arr);

        } else if (ops[i] == '+') {
            op = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(op);
            console.log(arr);

        } else if (ops[i] == 'R') {
            arr.pop();
            console.log(arr);
        }


    }
    for (let j = 0; j < arr.length; j++) {
        result = result + arr[j];

    }
    console.log(result);

    return result
}

operations('-2 5 D + R');
