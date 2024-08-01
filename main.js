function compareNumbers(a, b) {
    if (a > b) {
        return `${a} ${b} dan katta`;
    } else if (a < b) {
        return `${b} ${a} dan katta`;
    } else {
        return "Sonlar birxil";
    }
}

let num1 = parseFloat(prompt("1-sonni kiriting:"));
let num2 = parseFloat(prompt("2-sonni kiriting:"));
let result = compareNumbers(num1, num2);
alert(result);