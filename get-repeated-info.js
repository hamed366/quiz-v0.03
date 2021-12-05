

export function getRepeatedInfo(number) {
    let result = {};
    let temp = 0;
    let countDigits = 0;
    let number2 = number;


    while (number2 >= 1) {
        countDigits++;
        number2 /= 10;
    }
    for (let i = 0; i < countDigits; i++) {

        temp = number % 10;
        number = Math.floor(number / 10);
        temp += '';
        for (let j = temp; j >= 1; j--) {

            result[temp] += temp;

        }

    }
    return result
}


getRepeatedInfo(2125);