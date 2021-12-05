
export function removerRepetitive(string) {
    let result = null
    result = string.split("");
    result = Array.from(new Set(result));
    result = result.join("");
    console.log(result);
    return result
}

removerRepetitive("abbbbbbbbbccccdwwwwwwwww");