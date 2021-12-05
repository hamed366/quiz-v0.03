

export function encoder({ inputString, repeatCount }) {
    let result = null;
    let temp = "";
    result = inputString.split("");
    for (let i = 0; i < repeatCount; i++) {

        temp = result[result.length - 1];
        for (let k = result.length - 1; k > 0; k--) {

            result[k] = result[k - 1];
            

        }

        result[0] = temp;

        for (let j = 0; j < result.length; j++) {


            let asciCode = result[j].charCodeAt();
            asciCode++;

            if (asciCode == 123) {
                asciCode = 97;
            }

            result[j] = String.fromCharCode(asciCode);


        }


    }

    result=result.join("");
    console.log(result);
    return result
}

encoder({ inputString: "abz", repeatCount: 2 });