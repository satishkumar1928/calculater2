alert(`
  1.Addition
  2.Subtraction
  3.Mulitiplication
  4.Division
  5.Modulo division
`);


let selectedOption;
selectedOption=prompt("enter the option");

console.log(selectedOption);

switch (Number(selectedOption)){
    case 1:
        alert(" you have selected addition");
        const  inputData = getInputs();
        add(inputData[0], inputData[1]);
        break;
    case 2:
        alert("you have selected subraction");
        const  inputData1 = getInputs();
        subraction(inputData1[0],inputData1[1]);
        break;
    case 3:
        alert("you have selected multiplication");
        const  inputData2 = getInputs();
        multiplication(inputData2[0],inputData2[1]);
        break;
    case 4:
        alert("you have selected division");
        const  inputData3 = getInputs();
         division(inputData3[0],inputData3[1]);
        break;
    case 5:
        alert( "you have selected modulo division"); 
        const  inputData4 = getInputs();
        modulodivision(inputData4[0],inputData4[1]);
        break;
     default:
        alert("you have selected wrong option.please select again"); 
        selectedOption=prompt("Enter the option")   
        break;
}
function getInputs() {
    let num1=prompt("enter number one");
    let num2=prompt("enter number two");
    return [num1, num2];
}

function add(a, b) {
    let  result = Number(a) + Number(b);
    alert(`the addition  of two numbers is ${result}`);
    
}

function subraction(a, b) {
    let  result = Number(a) - Number(b);
    alert(`the subtraction of two numbers is ${result}`);

}

function multiplication(a, b) {
    let  result = Number(a) * Number(b);
    alert(`the multiplication of two numbers is ${result}`);
}

function division(a, b) {
    let  result = Number(a) / Number(b);
    alert(`the division of two numbers is ${result}`);
}

function modulodivision(a, b) {
    let  result = Number(a) % Number(b);
    alert(`the modulodivision of two numbers is ${result}`);
}