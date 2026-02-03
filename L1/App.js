function add(num1, num2, printResult, sometext) {
    //
    if (printResult) {
        console.log("".concat(sometext, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 20;
var n2 = 940;
var printResult = true;
var sometext = "Sum of two numbers is=";
add(n1, n2, printResult, sometext);
