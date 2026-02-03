function add(num1:number, num2:number, printResult:boolean ,sometext:string) {
    //
    if(printResult){
        console.log(`${sometext} ${num1+num2}`);
    }else{
        return num1+num2
    }}

const n1 = 20;
const n2 = 940;
const printResult=true;
const sometext="Sum of two numbers is="
add(n1,n2,printResult,sometext);
